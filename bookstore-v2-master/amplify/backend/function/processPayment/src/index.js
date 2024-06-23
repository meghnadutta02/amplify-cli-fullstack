const aws = require("aws-sdk");
const {
  CognitoIdentityProviderClient,
  AdminGetUserCommand,
} = require("@aws-sdk/client-cognito-identity-provider");
exports.handler = async (event) => {
  try {
    const { Parameters } = await new aws.SSM()
      .getParameters({
        Names: ["USER_POOL_ID", "STRIPE_SECRET"].map(
          (secretName) => process.env[secretName]
        ),
        WithDecryption: true,
      })
      .promise();

    const stripe = require("stripe")(Parameters[0].Value);
    const USER_POOL_ID = Parameters[1].Value;
    const cognitoClient = new CognitoIdentityProviderClient({
      region: "us-east-1",
    });

    const getUserEmail = async (event) => {
      const params = {
        UserPoolId: USER_POOL_ID,
        Username: event.identity.claims.username,
      };

      const command = new AdminGetUserCommand(params);
      const user = await cognitoClient.send(command);

      const { Value: email } = user.UserAttributes.find((attr) => {
        if (attr.Name === "email") {
          return attr.Value;
        }
      });
      return email;
    };

    const { id, cart, total, address } = event.arguments.input;
    const { username } = event.identity.claims;
    const email = await getUserEmail(event);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseFloat(total).toFixed(2) * 100,
      currency: "usd",
      payment_method_types: ["card"],
      description: `Order ${new Date()} made by ${username} with ${email}`,
      receipt_email: email,
    });

    return {
      id,
      cart,
      total,
      address,
      username,
      email,
      client_secret: paymentIntent.client_secret,
    };
  } catch (err) {
    throw new Error(err);
  }
};

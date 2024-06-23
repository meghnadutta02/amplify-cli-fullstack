const aws = require("aws-sdk");

exports.handler = async (event) => {
  try {
    const { Parameters } = await new aws.SSM()
      .getParameters({
        Names: ["ORDER_TABLE", "BOOK_ORDER_TABLE"].map(
          (secretName) => process.env[secretName]
        ),
        WithDecryption: true,
      })
      .promise();

    const { v4: uuidv4 } = require("uuid");
    const {
      DynamoDBClient,
      PutItemCommand,
      BatchWriteItemCommand,
    } = require("@aws-sdk/client-dynamodb");
    const { marshall } = require("@aws-sdk/util-dynamodb"); // Converts JSON to DynamoDB format

    const ORDER_TABLE = Parameters[1].Value;
    const ORDER_TYPE = "Order";
    const BOOK_ORDER_TABLE = Parameters[0].Value;
    const BOOK_ORDER_TYPE = "BookOrder";

    const dynamoClient = new DynamoDBClient({ region: "us-east-1" });

    const createOrder = async (payload) => {
      const { order_id, username, email, total } = payload;
      const params = {
        TableName: ORDER_TABLE,
        Item: marshall({
          id: order_id,
          __typename: ORDER_TYPE,
          customer: email,
          user: username,
          total: total,
          updatedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        }),
      };

      const command = new PutItemCommand(params);
      await dynamoClient.send(command);
    };

    // Links books with the order
    const createBookOrderLinks = async (payload) => {
      let bookOrders = [];
      for (let i = 0; i < payload.cart.length; i++) {
        const cartItem = payload.cart[i];
        bookOrders.push({
          PutRequest: {
            Item: marshall({
              id: uuidv4(),
              __typename: BOOK_ORDER_TYPE,
              bookId: cartItem.id,
              orderId: payload.order_id,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }),
          },
        });
      }

      const params = {
        RequestItems: {
          [BOOK_ORDER_TABLE]: bookOrders,
        },
      };

      const command = new BatchWriteItemCommand(params);
      await dynamoClient.send(command);
    };

    let payload = event.prev.result;
    payload.order_id = uuidv4();

    // Create a new order
    await createOrder(payload);

    // Link books with the order
    await createBookOrderLinks(payload);

    // Optionally, you may add another function to email the invoice to the user

    return "SUCCESS";
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

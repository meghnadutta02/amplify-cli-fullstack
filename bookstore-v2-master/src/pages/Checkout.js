import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51NERLdSFxAjVW5eERempDWfaqRaaKgPdpRnstt1USpb2otO24cAePcHgX7IolWJiHF0aeb9l45jf10wx1ywHUGx500a1GKlHXl"
  );

  return (
    <section className="checkout-wrapper">
      <Authenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </Authenticator>
    </section>
  );
};

export default Checkout;

import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CardPayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 500 }),
    }).then((res) => res.json());
    //console.log(response);
    const {
      paymentIntent: { client_secret },
    } = response;
    console.log(client_secret);
    const clientSecret = response.paymentIntent.client_secret;
    //console.log(clientSecret);
    //with clientsecret make the payment
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `Paid for Box 1`,
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment success");
      }
    }
  };

  return (
    <div>
      <form onSubmit={paymentHandler}>
        <h1>Credit card payment</h1>
        <CardElement className="cardElement" />
        <button>Pay Now</button>
      </form>
    </div>
  );
};

export default CardPayment;

import React, { useState } from "react";
import { PaymentContainer } from "../styles/PaymentStyles";
import LogoImage from "../assets/sample-logo.jpg";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Payment = () => {
  const [price, setPrice] = useState(0);
  const [select, setSelect] = useState("");
  const [success, setSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const selectedOption = (e) => {
    const selected = e.target.value;
    setSelect(selected);
  };

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    //else
    const response = await fetch("/.netlify/functions/payment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: price * 100 }),
    }).then((res) => res.json());

    //console.log(response);

    const {
      paymentIntent: { client_secret },
    } = response;
    console.log(client_secret);
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `Paid for ${select}`,
        },
      },
    });
    if (paymentResult.error) {
      alert("Please select box and enter price");
      setSuccess("Error in making transaction");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setSuccess(`Hooray 😊😊😊 !!! Payment successfull with ${price}€`);
      }
    }
  };

  return (
    <>
      <PaymentContainer>
        <div>
          <img src={LogoImage} alt="" className="logo-image" />
        </div>

        <div>
          <h1>Washing Machine Payment</h1>
        </div>

        <div>
          <h1>Select the box you used</h1>
        </div>

        <div>
          <select
            className="selectTag"
            onChange={selectedOption}
            value={select}
          >
            <option id="Select your Box" value="Select your Box">
              Select your Box
            </option>
            <option id="Box 1" value="Box 1">
              Box 1
            </option>
            <option id="Box 2" value="Box 2">
              Box 2
            </option>
            <option id="Box 3" value="Box 3">
              Box 3
            </option>
            <option id="Box 4" value="Box 4">
              Box 4
            </option>
            <option id="Box 5" value="Box 5">
              Box 5
            </option>
          </select>
        </div>

        {select && (
          <div className="selectedOption">
            <h2 className="selectedOptionQuantity">
              <span className="selectedBox">{select}</span> was selected
            </h2>
          </div>
        )}

        <h1>Enter the amount to be paid below in € EUR</h1>
        <div>
          <input
            type="number"
            className="priceInput"
            placeholder="Enter the price in € EUR"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="successBox">
          {success && <span className="successMessage">{success}</span>}
        </div>

        <div className="card-box">
          <form>
            <h1>Credit card payment</h1>
            <CardElement />
            <div className="buttonPosition">
              <button className="paymentButton" onClick={paymentHandler}>
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </PaymentContainer>
    </>
  );
};

export default Payment;

/**
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    //console.log("hello");
    const response = await fetch("/.netlify/functions/create-payment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 90000 }),
    }).then((res) => res.json());

    console.log(response);

    // setCheckSelect(true);
    // const response = await fetch("/.netlify/functions/create-payment-intent", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ amount: price * 100 }),
    // }).then((res) => res.json());
    // const {
    //   paymentIntent: { client_secret },
    // } = response;
    // console.log(client_secret);
    // const clientSecret = response.paymentIntent.client_secret;
    // //console.log(clientSecret);
    // //with clientsecret make the payment
    // const paymentResult = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: elements.getElement(CardElement),
    //     billing_details: {
    //       name: `Paid for ${select}`,
    //     },
    //   },
    // });

    // if (paymentResult.error) {
    //   alert(paymentResult.error);
    // } else {
    //   if (paymentResult.paymentIntent.status === "succeeded") {
    //     alert("Payment success");
    //   }
    // }
  };
 */

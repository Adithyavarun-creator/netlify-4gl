import React, { useState } from "react";
import { PaymentContainer } from "../styles/PaymentStyles";
import LogoImage from "../assets/washingmachine.png";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

const inputStyle = {
  iconColor: "#ff4500",
  color: "white",
  fontWeight: "500",
  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
  fontSize: "22px",
  border: "2px solid black",
  fontSmoothing: "antialiased",
  ":-webkit-autofill": {
    color: "#fce883",
  },
  "::placeholder": {
    color: "#ff4500",
    fontSize: "20px",
  },
};

const Payment = () => {
  const [price, setPrice] = useState(0);
  const [select, setSelect] = useState("");
  const [success, setSuccess] = useState("");
  const [click, setClick] = useState(1);
  const [notSelected, setNotSelected] = useState(false);
  const [close, setClose] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const { t, i18n } = useTranslation();

  const selectedOption = (e) => {
    const selected = e.target.value;
    if (!selected) {
      setNotSelected(false);
    }
    setNotSelected(true);
    setSelect(selected);
  };

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!email || !select || !click || !stripe || !elements) {
      setSuccess(
        "Email/Box selection/Amount field is missing,Provide all details to make the payment"
      );
    }

    // if (!stripe || !elements) {
    //   return;
    // }
    const response = await fetch("/.netlify/functions/payment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: click * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;
    console.log(client_secret);
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `Paid by ${email} for ${select}`,
        },
      },
    });
    if (paymentResult.error) {
      // setSuccess("Error in making transaction");
      setClose(true);
      // setSuccess("Error in making transaction, try after sometime");
      console.log(paymentResult.error);
    } else {
      setClose(true);
      if (paymentResult.paymentIntent.status === "succeeded") {
        window.scrollTo(0, 0);
        setSuccess(`Hooray 😊🥳 🎉 !!! Payment successfull  with ${click}€ for ${select} `);
      }
    }
  };

  return (
    <>
      <PaymentContainer>
        <div>
          <img src={LogoImage} alt="" className="logo-image" />
        </div>

        <div className="workBox">
          <div className="firstStep">
            <div className="numbering">
              <span className="numbers">#1</span>
            </div>
            <div className="stepName">
              <h1 className="stepTitle">{t("email")}</h1>
            </div>
          </div>
          <div className="inputBox">
            <input
              className="emailInput"
              placeholder="johndoe@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="workBox">
          <div className="firstStep">
            <div className="numbering">
              <span className="numbers">#2</span>
            </div>
            <div className="stepName">
              <h1 className="stepTitle">Select the Washing Machine</h1>
            </div>
          </div>

          <div>
            <select
              className="selectTag"
              onChange={selectedOption}
              value={select}
            >
              <option className="option" id="Box 1" value="Box 1">
                Box 1
              </option>
              <option className="option" id="Box 2" value="Box 2">
                Box 2
              </option>
              <option className="option" id="Box 3" value="Box 3">
                Box 3
              </option>
              <option className="option" id="Box 4" value="Box 4">
                Box 4
              </option>
              <option className="option" id="Box 5" value="Box 5">
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
        </div>

        <div className="workBox">
          <div className="firstStep">
            <div className="numbering">
              <span className="numbers">#3</span>
            </div>
            <div className="stepName">
              <h1 className="stepTitle">Click on the amount to pay in € EUR</h1>
            </div>
          </div>

          <div className="priceBox">
            <button className="priceButton" onClick={() => setClick(1)}>
              1
            </button>
            <button className="priceButton" onClick={() => setClick(2)}>
              2
            </button>
            <button className="priceButton" onClick={() => setClick(3)}>
              3
            </button>
            <button className="priceButton" onClick={() => setClick(4)}>
              4
            </button>
            <button className="priceButton" onClick={() => setClick(5)}>
              5
            </button>
          </div>

          <div>
            <input
              type="number"
              className="priceInput"
              placeholder="Enter the price in € EUR"
              onChange={(e) => setPrice(e.target.value)}
              value={click}
            />
          </div>

          <div>
            <h1 className="payableAmount">
              Amount to pay is <span className="selectedAmount">{click}€</span>
            </h1>
          </div>
        </div>

        {close && (
          <Modal
            success={success}
            close={close}
            click={click}
            setClose={setClose}
            error={error}
          />
        )}

        <div className="workBox">
          <div className="firstStep">
            <div className="numbering">
              <span className="numbers">#4</span>
            </div>
            <div className="stepName">
              <h1 className="stepTitle">Pay the amount via credit card</h1>
            </div>
          </div>

          <div className="priceBox">
            <form>
              <h1 style={{ color: "black" }} className="stepTitle">
                Enter Card details below
              </h1>
              <CardElement
                options={{
                  style: {
                    base: inputStyle,
                  },
                }}
              />
              <div className="buttonPosition">
                <button className="paymentButton" onClick={paymentHandler}>
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </PaymentContainer>
    </>
  );
};

export default Payment;

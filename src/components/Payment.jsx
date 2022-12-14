import React, { useState } from "react";
import { PaymentContainer } from "../styles/PaymentStyles";
import LogoImage from "../assets/washingmachine.png";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import db from "../firebase/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Spinner from "./Spinner";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

// const inputStyle = {
//   iconColor: "#ff4500",
//   color: "white",
//   fontWeight: "500",
//   fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//   fontSize: "22px",
//   border: "2px solid black",
//   fontSmoothing: "antialiased",
//   ":-webkit-autofill": {
//     color: "#fce883",
//   },
//   "::placeholder": {
//     color: "#ff4500",
//     fontSize: "16px",
//   },
// };

const inputStyle = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#040404",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#006eff" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ff0000",
    },
  },
};

const Payment = () => {
  const [select, setSelect] = useState("");
  const [success, setSuccess] = useState("");
  const [click, setClick] = useState(1);
  const [notSelected, setNotSelected] = useState(false);
  const [close, setClose] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const { height, width } = useWindowSize();

  const { t } = useTranslation();

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
      setError(`???????????? ${t("errorMessage")}`);
    }
    setLoading(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: click * 100 }),
    }).then((res) => {
      return res.json();
    });

    const {
      paymentIntent: { client_secret },
    } = response;
    //console.log(client_secret);
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: `Paid by ${email} for ${select}`,
        },
      },
    });

    if (paymentResult.error) {
      saveErrorPaymentToBackend();
      setClose(true);
      setLoading(false);
      setError(`???????????? ${t("errorMessage")}`);
      setEmail("");
      setClick("");
      setSelect("");
      window.scrollTo(0, 0);
    } else {
      setClose(true);
      if (paymentResult.paymentIntent.status === "succeeded") {
        savePaymentSuccessToBackend();
        setLoading(false);
        window.scrollTo(0, 0);
        setSuccess(
          `???????? ???? !!! ${t("successMessage1")} ${click}??? ${t(
            "successMessage2"
          )} ${select}`
        );
      }
    }
    setLoading(false);
  };

  const savePaymentSuccessToBackend = async () => {
    try {
      await addDoc(collection(db, "machinePaymentsSuccess"), {
        email: email,
        amountPaid: `${click}???`,
        selectedBox: select,
        paymentStatus: `success in paying ${click}???`,
        createdAt: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const saveErrorPaymentToBackend = async () => {
    try {
      await addDoc(collection(db, "machinePaymentsError"), {
        email: email ? email : "",
        amountPaid: click ? `${click}???` : "",
        selectedBox: select ? select : "",
        paymentStatus: `Payment was incomplete`,
        createdAt: Timestamp.now(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PaymentContainer>
        {success && <Confetti width={width} height={height} />}
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
              <h1 className="stepTitle">{t("machineSelect")}</h1>
            </div>
          </div>

          <div>
            <select
              className="selectTag"
              onChange={selectedOption}
              value={select}
            >
              <option className="option" id="Select Box" value="Select Box">
                {t("selectBox")}
              </option>
              <option className="option" id="Box 1" value="Box 1">
                {t("box")} 1
              </option>
              <option className="option" id="Box 2" value="Box 2">
                {t("box")} 2
              </option>
              <option className="option" id="Box 3" value="Box 3">
                {t("box")} 3
              </option>
              <option className="option" id="Box 4" value="Box 4">
                {t("box")} 4
              </option>
              <option className="option" id="Box 5" value="Box 5">
                {t("box")} 5
              </option>
            </select>
          </div>

          {select && (
            <div className="selectedOption">
              <h2 className="selectedOptionQuantity">
                <span className="selectedBox">{select}</span> {t("wasSelected")}
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
              <h1 className="stepTitle">{t("payAmount")}</h1>
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

          {/* <div>
            <input
              type="number"
              className="priceInput"
              placeholder="Enter the price in ??? EUR"
              onChange={(e) => setClick(e.target.value)}
              // value={0 || click}
            />
          </div> */}

          <div>
            <h1 className="payableAmount">
              {t("amountToPay")}
              {/* <span className="selectedAmount">{click}???</span> */}
              <span className="selectedAmount">
                {click ? `${click}???` : "0???"}
              </span>
            </h1>
          </div>
        </div>
        {close && (
          <Modal
            success={success}
            close={close}
            setClose={setClose}
            error={error}
            select={select}
            email={email}
            click={click}
          />
        )}
        <div className="workBox">
          <div className="firstStep">
            <div className="numbering">
              <span className="numbers">#4</span>
            </div>
            <div className="stepName">
              <h1 className="stepTitle">{t("payByCreditCard")}</h1>
            </div>
          </div>

          <div className="priceBox">
            <form>
              <h1 style={{ color: "black" }} className="stepTitle">
                {t("cardDetails")}
              </h1>
              {/* <CardElement
                options={{
                  style: {
                    base: inputStyle,
                  },
                }}
              /> */}
              <CardElement options={inputStyle} />
              <div className="buttonPosition">
                <button className="paymentButton" onClick={paymentHandler}>
                  {t("payNow")}
                </button>
              </div>
              {loading && (
                <div className="spinnerBox">
                  <Spinner />
                </div>
              )}
            </form>
          </div>
        </div>
      </PaymentContainer>
    </>
  );
};

export default Payment;

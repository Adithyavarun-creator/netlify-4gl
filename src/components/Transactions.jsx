import React, { useEffect } from "react";
import db from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { TransactionContainer } from "../styles/TransactionStyles";
import { GiWashingMachine } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import { FaUserCheck } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { BsCreditCard } from "react-icons/bs";
import { FcPaid } from "react-icons/fc";
import moment from "moment";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";

const Transactions = () => {
  const [payments, setPayments] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const q = query(
      collection(db, "machinePaymentsSuccess"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      setPayments(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <TransactionContainer>
      <div className="headingBox">
        <h1 className="headingTransaction"> {t("transactions")}</h1>
        <span>
          <FcPaid className="paidIcon" />
        </span>
      </div>

      {!payments ? (
        <Spinner />
      ) : (
        payments?.map((payment) => (
          <div className="transactionBox" key={payment.id}>
            <div className="paymentBox">
              <div className="transactionContent">
                <h2 className="transactionHeading">
                  Paid for &nbsp;
                  <span className="boxColor">{payment.data.selectedBox}</span>
                </h2>
                <span>
                  <GiWashingMachine className="machineIcon" />
                </span>
              </div>

              <div className="transactionContent">
                <h2 className="transactionHeading">
                  Amount paid &nbsp;
                  <span className="boxColor">{payment.data.amountPaid}</span>
                </h2>
                <span>
                  <BsCreditCard className="machineIcon" />
                </span>
              </div>
            </div>

            <div className="verifiedBox">
              <GoVerified className="verifyIcon" />
            </div>

            <div className="paymentBox">
              <div className="transactionContent">
                <span>
                  <FaUserCheck className="machineIcon" />
                </span>
                <h2 className="transactionHeading">
                  From &nbsp;
                  <span className="boxColor">{payment.data.email}</span>
                </h2>
              </div>

              <div className="transactionContent">
                <span>
                  <CiCalendarDate className="machineIcon" />
                </span>
                <h2 className="transactionHeading">
                  At &nbsp;
                  <span className="boxColor">
                    {moment(payment.data.createdAt.toDate()).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        ))
      )}
    </TransactionContainer>
  );
};

export default Transactions;

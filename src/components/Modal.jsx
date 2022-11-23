import React from "react";
import { ModalContainer } from "../styles/ModalStyles";

const Modal = ({ success, setClose, click }) => {
  return (
    <ModalContainer>
      <div className="closeBox">
        <span className="closeIcon" onClick={() => setClose(false)}>
          &#x2716;
        </span>
      </div>
      <div className="successMessage">
        <h1 className="success">
          {success} with
          <span className="amount">{click}€</span>, check your mail/ download
          invoice below
        </h1>
      </div>
    </ModalContainer>
  );
};

export default Modal;

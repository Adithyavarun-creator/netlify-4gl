import React from "react";
import { ModalContainer } from "../styles/ModalStyles";

const Modal = ({ success, setClose }) => {
  const closeModal = () => {
    setClose(false);
    window.location.reload();
  };

  return (
    <ModalContainer>
      <div className="closeBox">
        <span className="closeIcon" onClick={closeModal}>
          &#x2716;
        </span>
      </div>
      <div className="successMessage">
        <h1 className="success">{success}</h1>
      </div>

      <div className="closeBtn">
        <button onClick={closeModal} className="closeButton">
          Close
        </button>
      </div>
    </ModalContainer>
  );
};

export default Modal;

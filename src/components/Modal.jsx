import React from "react";
import { useTranslation } from "react-i18next";
import { ModalContainer } from "../styles/ModalStyles";
import Invoice from "./Invoice";
import { MdClose } from "react-icons/md";

const Modal = ({ success, setClose, error, email, select, click }) => {
  const { t, i18n } = useTranslation();

  const closeModal = () => {
    setClose(false);
    window.location.reload();
  };

  return (
    <>
      {success && (
        <ModalContainer>
          <div className="closeBox">
            <MdClose className="closeIcon" onClick={closeModal} />
          </div>
          <div className="successMessage">
            <h1 className="success">{success}</h1>
          </div>

          <div className="closeBtn">
            <Invoice email={email} select={select} click={click} />
          </div>

          <div className="closeBtn">
            <button onClick={closeModal} className="closeButton">
              {t("closeModal")}
            </button>
          </div>
        </ModalContainer>
      )}

      {error && (
        <ModalContainer>
          <div className="closeBox">
            <MdClose className="closeIcon" onClick={closeModal} />
          </div>
          <div className="successMessage">
            <h1 className="error">{error}</h1>
          </div>
          <div className="closeBtn">
            <button onClick={closeModal} className="closeButton">
              Close
            </button>
          </div>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;

/**              &#x2716;
 */

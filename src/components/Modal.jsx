import React from "react";
import { ModalContainer } from "../styles/ModalStyles";
import Invoice from "./Invoice";
// import { PDFDownloadLink } from "@react-18-pdf/renderer";

const Modal = ({ success, setClose, error, email, select, click }) => {
  const closeModal = () => {
    setClose(false);
    window.location.reload();
  };

  return (
    <>
      {success && (
        <ModalContainer>
          <div className="closeBox">
            <span className="closeIcon" onClick={closeModal}>
              &#x2716;
            </span>
          </div>
          <div className="successMessage">
            <h1 className="success">{success}</h1>
          </div>

          {/* <div>
            <PDFDownloadLink
              document={<Invoice select={select} email={email} click={click} />}
              fileName="machine-invoice"
            >
              {({ loading }) =>
                loading ? (
                  <button className="closeButton">Loading invoice pdf</button>
                ) : (
                  <button className="closeButton">Download invoice</button>
                )
              }
            </PDFDownloadLink>
          </div> */}

          <div className="closeBtn">
            <button onClick={closeModal} className="closeButton">
              Close
            </button>
          </div>
        </ModalContainer>
      )}

      {error && (
        <ModalContainer>
          <div className="closeBox">
            <span className="closeIcon" onClick={closeModal}>
              &#x2716;
            </span>
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

import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 15px;
  align-items: center;
  gap: 60px;

  .logo-image {
    object-fit: fill;
    height: 100px;
    width: 100px;
    cursor: pointer;
    border-radius: 50%;
    border: 3px solid white;
  }

  .selectTag {
    height: 50px;
    width: 400px;
    text-align: center;
    font-size: 28px;
    border-radius: 10px;
    /* align-items: center; */
    margin-left: 40px;
  }

  .selectedOption {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .option {
    font-size: 26px;
  }
  .selectedOptionQuantity {
    font-weight: bold;
    font-size: 28px;
  }

  .selectedBox {
    font-size: 28px;
    color: white;
    text-decoration: underline;
    font-weight: bolder;
    padding: 5px 8px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: #ff4500;
  }

  .buttonPosition {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .paymentButton {
    padding: 10px 14px;
    background-color: black;
    color: white;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;

    :hover {
      background-color: white;
      color: black;
    }
  }

  .priceInput {
    height: 50px;
    width: 100%;
    font-size: 28px;
    border: none;
    border-radius: 15px;
    offset: none;
    text-align: center;

    :focus {
      border: 1px solid green;
    }
  }

  .card-box {
    margin-top: 40px;
    border: 2px solid white;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    /* background-color: #08aeea;
    background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%); */
    background-color: white;
    border-radius: 15px;
  }

  .cardElement {
    font-size: 20px;
    font-weight: bolder;

    ::placeholder {
      font-size: 32px;
      font-weight: bolder;
      color: black;
    }
  }
  /* .successBox {
    margin-top: 10px;
  } */

  .successMessage {
    font-size: 28px;
    color: yellow;
    font-weight: bolder;
  }

  .priceBox {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 30px;
    gap: 10px;
    justify-content: center;
  }

  .priceButton {
    padding: 8px 15px;
    font-size: 25px;
    cursor: pointer;
    border-radius: 10px;
    border: none;

    :hover {
      background-color: black;
      color: white;
    }
  }

  .firstStep {
    display: flex;
    flex-direction: row;
    gap: 14px;
    align-items: center;
    margin-bottom: 20px;
  }

  .stepName {
    background-color: black;
    border: 1px solid white;
    padding: 5px 26px;
    border-radius: 15px;
  }

  .stepTitle {
    font-size: 24px;
    color: white;
    align-items: center;
  }

  .workBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid black;
    padding: 40px 40px;
    border-radius: 20px;
    position: relative;
    cursor: pointer;

    :hover {
      -webkit-box-shadow: 2px 6px 32px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 2px 6px 32px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 2px 6px 32px 0px rgba(0, 0, 0, 0.75);
    }
  }

  .numbering {
    background-color: black;
    display: flex;
    justify-content: center;
    border-radius: 25px;
    flex-direction: row;
    gap: 20px;
    cursor: pointer;
    position: absolute;
    top: -30px;
    left: 0;
  }

  .numbers {
    color: white;
    padding: 7px 10px;
    font-size: 30px;
  }

  .payableAmount {
    text-align: center;
  }

  .selectedAmount {
    background-color: #ff4500;
    color: white;
    padding: 6px 8px;
    border-radius: 15px;
    text-decoration: underline;
  }
`;

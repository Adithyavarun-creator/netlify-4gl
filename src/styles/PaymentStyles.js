import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 15px;
  align-items: center;
  gap: 3px;

  .logo-image {
    object-fit: fill;
    height: 100px;
    width: 100px;
    cursor: pointer;
    border-radius: 40%;
  }

  h1 {
    font-size: 35px;
    background: -webkit-linear-gradient(#141e30, #243b55);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .selectTag {
    height: 50px;
    width: 250px;
    text-align: center;
    font-size: 18px;
    border-radius: 10px;
    align-items: center;
  }

  .selectedOption {
    margin-top: 10px;
  }
  .selectedOptionQuantity {
    font-weight: bold;
    font-size: 28px;
  }

  .selectedBox {
    font-size: 28px;
    color: #ff4500;
    text-decoration: underline;
    font-weight: bolder;
    padding: 5px 8px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: black;
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
  }

  .card-box {
    margin-top: 40px;
    border: 2px solid white;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    background-color: #08aeea;
    background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);

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
  .successBox{
    margin-top: 25px;
  }

  .successMessage {
    font-size: 28px;
    color: yellow;
    font-weight: bolder;
  }
`;

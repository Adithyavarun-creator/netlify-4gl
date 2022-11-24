import styled from "styled-components";
import { devices } from "../mediaQueries/breakpoints";

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 15px;
  align-items: center;
  gap: 60px;

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 10px 12px;
    gap: 40px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 10px 12px;
    gap: 50px;
  }

  @media ${devices.smallTabs} {
    padding: 10px 5px;
    gap: 60px;
  }

  @media ${devices.smallMobiles} {
    padding: 10px 20px;
    gap: 80px;
    justify-content: center;
  }

  .logo-image {
    object-fit: fill;
    height: 130px;
    width: 130px;
    cursor: pointer;
    border-radius: 50%;
    border: 3px solid white;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 100px;
      width: 100px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 80px;
      width: 80px;
    }
    @media ${devices.smallTabs} {
      height: 80px;
      width: 80px;
    }

    @media ${devices.smallMobiles} {
      height: 80px;
      width: 80px;
    }
  }

  .selectTag {
    height: 50px;
    width: 400px;
    text-align: center;
    font-size: 30px;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      width: 400px;
      height: 45px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 25px;
    }
    @media ${devices.smallTabs} {
      font-size: 22px;
    }

    @media ${devices.smallMobiles} {
      font-size: 17px;
      width: 250px;
    }
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

    @media ${devices.smallTabs} {
      padding: 30px 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 20px 10px;
      gap: 30px;
      justify-content: center;
    }
  }

  .numbers {
    color: white;
    padding: 7px 10px;
    font-size: 30px;
    @media ${devices.smallMobiles} {
      font-size: 20px;
    }
  }

  .emailInput {
    font-size: 28px;
    text-align: center;
    outline: none;
    border-radius: 20px;
    border: none;

    :focus-visible {
      border: 2px solid #7cfc00;
    }

    :invalid {
      border: 2px solid red;
    }

    ::placeholder {
      font-size: 25px;
    }

    @media ${devices.smallMobiles} {
      font-size: 20px;

      ::placeholder {
        font-size: 18px;
      }
    }
  }

  .firstStep {
    display: flex;
    flex-direction: row;
    gap: 14px;
    align-items: center;
    margin-bottom: 20px;

    @media ${devices.smallMobiles} {
      gap: 10px;
      margin-bottom: 0;
    }
  }

  .stepName {
    background-color: black;
    border: 1px solid white;
    padding: 5px 26px;
    border-radius: 15px;
    @media ${devices.smallMobiles} {
      padding: 5px 10px;
    }
  }

  .stepTitle {
    font-size: 24px;
    color: white;
    align-items: center;

    @media ${devices.smallMobiles} {
      font-size: 18px;
      text-align: center;
    }
  }

  .numbering {
    background-color: #ff4500;
    display: flex;
    justify-content: center;
    border-radius: 25px;
    flex-direction: row;
    gap: 20px;
    cursor: pointer;
    position: absolute;
    top: -30px;
    left: 0;
    border: 1.5px solid white;

    @media ${devices.smallTabs} {
      top: -40px;
    }
  }

  .payableAmount {
    text-align: center;
    font-size: 28px;

    @media ${devices.smallMobiles} {
      font-size: 20px;
    }
  }

  .selectedAmount {
    background-color: #ff4500;
    color: white;
    padding: 6px 8px;
    border-radius: 15px;
    text-decoration: underline;
  }

  .inputBox {
    display: flex;
    justify-content: center;
    height: 50px;
    border-radius: 40px;
    border: none;
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

    @media ${devices.smallMobiles} {
      height: 40px;
      font-size: 22px;
    }
  }

  .card-box {
    margin-top: 40px;
    border: 2px solid white;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 15px;
  }

  .successMessage {
    font-size: 28px;
    color: yellow;
    font-weight: bolder;
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
  .priceBox {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 30px;
    gap: 10px;
    justify-content: center;
    @media ${devices.smallMobiles} {
      gap: 5px;
      margin-bottom: 10px;
    }
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

    @media ${devices.smallMobiles} {
      padding: 6px 10px;
      font-size: 20px;
    }
  }
`;

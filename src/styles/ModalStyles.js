import styled from "styled-components";
import { devices } from "../mediaQueries/breakpoints";

export const ModalContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  position: absolute;
  gap: 60px;
  top: 160px;
  height: 350px;
  flex-direction: column;
  padding: 0 20px;
  border: 1px solid black;
  width: 70%;
  border-radius: 10px;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 50px;
    top: 160px;
    height: 350px;
    flex-direction: column;
    padding: 0 20px;
    border: 2px solid black;
    width: 70%;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 50px;
    top: 160px;
    height: 390px;
    flex-direction: column;
    padding: 0 20px;
    border: 2px solid black;
    width: 70%;
  }
  @media ${devices.smallTabs} {
    gap: 20px;
    top: 100px;
    height: 350px;
    flex-direction: column;
    padding: 0 20px;
    border: 2px solid black;
    width: 70%;
  }

  @media ${devices.smallMobiles} {
    height: 320px;
    top: 220px;
    border: 1px solid lime;
    gap: 20px;
  }

  .closeBox {
    background-color: black;
    padding: 10px 20px;
    display: flex;
    position: absolute;
    right: 0;
    cursor: pointer;
    border-radius: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      padding: 2px 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 2px 6px;
    }
  }

  .closeIcon {
    color: white;
    font-size: 40px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      font-size: 28px;
    }

    @media ${devices.smallMobiles} {
      font-size: 35px;
    }
  }

  .successMessage {
    margin-top: 100px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      margin-top: 80px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 60px;
    }
  }

  .success {
    font-size: 27px;
    color: #ff4500;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      font-size: 22px;
    }

    @media ${devices.smallMobiles} {
      font-size: 18px;
    }
  }

  .amount {
    background-color: #00ff00;
    color: black;
    padding: 6px 8px;
    text-decoration: underline;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .closeBtn {
    display: flex;
    justify-content: center;
  }

  .closeButton {
    padding: 12px 26px;
    align-items: center;
    background-color: white;
    color: black;
    font-size: 18px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;

    @media ${devices.smallMobiles} {
      padding: 10px 22px;
      font-size: 16px;
    }
  }
`;

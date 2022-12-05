import styled from "styled-components";
import { devices } from "../mediaQueries/breakpoints";

export const ModalContainer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  position: absolute;
  gap: 60px;
  top: 160px;
  height: 550px;
  flex-direction: column;
  padding: 0 20px;
  border: 1px solid white;
  width: 40%;
  border-radius: 10px;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 50px;
    top: 160px;
    height: 450px;
    flex-direction: column;
    padding: 0 20px;
    border: 2px solid white;
    width: 70%;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 50px;
    top: 160px;
    height: 480px;
    flex-direction: column;
    padding: 0 20px;
    border: 2px solid white;
    width: 70%;
  }
  @media ${devices.smallTabs} {
    gap: 35px;
    top: 180px;
    height: 440px;
    flex-direction: column;
    padding: 0 20px;
    border: 2px solid white;
    width: 70%;
  }

  @media ${devices.smallMobiles} {
    height: 380px;
    top: 220px;
    border: 5px solid white;
    gap: 40px;
    width: 90%;
  }

  .closeBox {
    background-color: black;
    padding: 5px 5px;
    display: flex;
    position: absolute;
    right: 0;
    cursor: pointer;
    border-radius: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 2px 2px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 2px 2px;
    }
    @media ${devices.smallTabs} {
      padding: 2px 0;
    }

    @media ${devices.smallMobiles} {
      padding: 2px 6px;
    }
  }

  .closeIcon {
    color: ${({ theme }) => theme.colors.numbering};
    /* font-size: 40px;  */
    height: 80px;
    width: 80px;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 65px;
      width: 65px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 60px;
      width: 60px;
    }
    @media ${devices.smallTabs} {
      height: 60px;
      width: 60px;
    }

    @media ${devices.smallMobiles} {
      height: 50px;
      width: 50px;
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
    /* color: #ff4500; */
    text-align: center;
    color: limegreen;

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

  .error {
    font-size: 27px;
    text-align: center;
    color: yellow;

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
    gap: 35px;
  }

  .closeButton {
    padding: 12px 26px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.numbering};
    color: white;
    font-size: 22px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    font-weight: bolder;
    offset: none;
    border: none;

    @media ${devices.smallMobiles} {
      padding: 10px 22px;
      font-size: 16px;
    }
  }
`;

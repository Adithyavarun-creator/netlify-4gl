import styled from "styled-components";
import { devices } from "../mediaQueries/breakpoints";

export const CodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 20px;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 30px;
    padding: 20px 20px;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 20px;
    padding: 10px 15px;
  }
  @media ${devices.smallTabs} {
    gap: 20px;
    padding: 10px 15px;
  }

  @media ${devices.smallMobiles} {
    gap: 20px;
    padding: 10px 15px;
  }

  .qrTitleBox {
    padding: 6px 10px;
    background-color: black;
    border-radius: 20px;
    border: 2px solid white;
  }

  .qrTitle {
    font-size: 27px;
    text-align: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.selectedValue};

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 27px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 27px;
    }
    @media ${devices.smallTabs} {
      font-size: 22px;
    }

    @media ${devices.smallMobiles} {
      font-size: 24px;
    }
  }

  .articeBox {
    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    padding: 15px 20px;
    border-radius: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 15px 20px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 15px 20px;
    }
    @media ${devices.smallTabs} {
      padding: 10px 15px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px 15px;
    }
  }

  .articleContent {
    font-size: 26px;
    text-align: justify;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 26px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 26px;
    }
    @media ${devices.smallTabs} {
      font-size: 24px;
    }

    @media ${devices.smallMobiles} {
      font-size: 18px;
    }
  }

  .qrInputBox {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 10px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 10px;
    }
    @media ${devices.smallTabs} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 6px;
    }
  }

  .qrInput {
    height: 50px;
    border-radius: 15px;
    outline: none;
    width: 60%;
    border: none;
    font-size: 22px;
    text-align: center;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 24px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 22px;
    }
    @media ${devices.smallTabs} {
      font-size: 20px;
    }

    @media ${devices.smallMobiles} {
      font-size: 18px;
    }

    :invalid {
      color: red;
    }

    :valid {
      color: black;
      font-size: 22px;
    }

    ::placeholder {
      text-align: center;
      font-size: 24px;

      @media ${devices.bigLaptopsAndDesktops} {
        font-size: 24px;
      }

      @media ${devices.tabletsAndIpads} {
        font-size: 24px;
      }
      @media ${devices.smallTabs} {
        font-size: 22px;
      }

      @media ${devices.smallMobiles} {
        font-size: 14px;
      }
    }
  }

  .qrButton {
    padding: 12px 14px;
    background-color: black;
    color: white;
    outline: none;
    border-radius: 20px;
    font-size: 24px;
    font-weight: bolder;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 24px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 24px;
    }
    @media ${devices.smallTabs} {
      font-size: 22px;
    }

    @media ${devices.smallMobiles} {
      font-size: 18px;
    }
  }

  .newQrCode {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 30px;
    }
    @media ${devices.smallTabs} {
      gap: 20px;
    }

    @media ${devices.smallMobiles} {
      gap: 30px;
    }
  }

  .qrImage {
    height: 300px;
    width: 300px;
    object-fit: fill;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 300px;
      width: 300px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 300px;
      width: 300px;
    }
    @media ${devices.smallTabs} {
      height: 300px;
      width: 300px;
    }

    @media ${devices.smallMobiles} {
      height: 250px;
      width: 250px;
    }
  }

  .qrDownload {
    padding: 12px 16px;
    background-color: #0099ff;
    color: white;
    outline: none;
    border-radius: 20px;
    font-size: 22px;
    cursor: pointer;
    border: 2px solid black;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 12px 16px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 12px 16px;
    }
    @media ${devices.smallTabs} {
      padding: 10px 14px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px 14px;
    }
  }
`;

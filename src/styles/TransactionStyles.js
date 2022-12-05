import styled from "styled-components";
import { devices } from "../mediaQueries/breakpoints";

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px 20px;

  @media ${devices.tabletsAndIpads} {
    padding: 10px 10px;
  }

  @media ${devices.smallTabs} {
    padding: 5px 5px;
  }

  @media ${devices.smallMobiles} {
    padding: 5px 5px;
  }

  .headingBox {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    align-items: center;
    flex-direction: row;
    gap: 10px;

    @media ${devices.smallMobiles} {
      gap: 4px;
    }
  }

  .headingTransaction {
    color: white;
    font-size: 30px;
    font-weight: bolder;

    @media ${devices.smallMobiles} {
      font-size: 18px;
    }
  }

  .paidIcon {
    height: 50px;
    width: 50px;
    color: #7cfc00;

    @media ${devices.tabletsAndIpads} {
      height: 40px;
      width: 40px;
    }

    @media ${devices.smallTabs} {
      height: 40px;
      width: 40px;
    }

    @media ${devices.smallMobiles} {
      height: 30px;
      width: 30px;
    }
  }

  .transactionBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    padding: 5px 10px;
    border-radius: 20px;
    cursor: pointer;

    @media ${devices.tabletsAndIpads} {
      padding: 5px 5px;
    }

    @media ${devices.smallTabs} {
      padding: 2px 2px;
    }

    @media ${devices.smallMobiles} {
      padding: 5px 5px;
    }
  }

  .paymentBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .transactionHeading {
    font-size: 26px;
    color: black;

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }

  .transactionContent {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;

    @media ${devices.tabletsAndIpads} {
      gap: 5px;
    }

    @media ${devices.smallTabs} {
      gap: 3px;
    }

    @media ${devices.smallMobiles} {
      gap: 4px;
    }
  }

  .boxColor {
    font-size: 26px;
    text-decoration: underline;
    background-color: #330033;
    color: white;
    padding: 4px 8px;
    border-radius: 10px;

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
      padding: 2px 4px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }

  .machineIcon {
    color: #4267b2;
    height: 40px;
    width: 40px;

    @media ${devices.tabletsAndIpads} {
      height: 30px;
      width: 30px;
    }

    @media ${devices.smallTabs} {
      height: 20px;
      width: 20px;
    }

    @media ${devices.smallMobiles} {
      height: 15px;
      width: 15px;
    }
  }

  .verifiedBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .verifyIcon {
    height: 90px;
    width: 90px;
    color: limegreen;

    @media ${devices.tabletsAndIpads} {
      height: 50px;
      width: 50px;
    }

    @media ${devices.smallTabs} {
      height: 47px;
      width: 47px;
    }

    @media ${devices.smallMobiles} {
      height: 25px;
      width: 25px;
    }
  }
`;

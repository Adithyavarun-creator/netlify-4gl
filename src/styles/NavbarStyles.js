import styled from "styled-components";
import { devices } from "../mediaQueries/breakpoints";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  color: white;
  align-items: center;

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 22px 22px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 20px 20px;
  }
  @media ${devices.smallTabs} {
    padding: 15px 15px;
  }

  @media ${devices.smallMobiles} {
    padding: 20px 10px;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    background-color: limegreen;
  }
  .toLink {
    text-decoration: none;
    color: black;
  }

  li {
    list-style: none;
    cursor: pointer;
    font-size: 22px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      font-size: 18px;
      color: black;
    }
  }

  .langSelect {
    height: 50px;
    padding: 10px 8px;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
    background-color: black;
    color: white;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 40px;
      font-size: 18px;
      padding: 5px 2px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 40px;
    }
    @media ${devices.smallTabs} {
      height: 30px;
    }

    @media ${devices.smallMobiles} {
      height: 40px;
    }
  }

  .langOption {
    font-size: 14px;
    font-weight: bold;
    color: white;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 16px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }
`;

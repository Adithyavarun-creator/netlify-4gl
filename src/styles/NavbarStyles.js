import styled from "styled-components";
import { devices } from "../mediaQueries/breakpoints";
import { Link, NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  color: white;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navbarBackground};

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 22px 22px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 20px 20px;
  }
  @media ${devices.smallTabs} {
    /* padding: 15px 15px; */
    padding: 22px 22px;
  }

  @media ${devices.smallMobiles} {
    display: none;
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

  /* .linkTitle {
    font-size: 20px;
    padding: 5px 8px;

    :hover {
      background-color: ${({ theme }) => theme.colors.numbering};
      border-radius: 20px;
      color: white;
    }
  } */

  .langSelect {
    height: 50px;
    padding: 10px 8px;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
    background-color: black;
    color: white;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 40px;
      font-size: 18px;
      padding: 5px 2px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 40px;
    }
    @media ${devices.smallTabs} {
      height: 40px;
    }

    @media ${devices.smallMobiles} {
      height: 40px;
    }
  }

  .langOption {
    font-size: 18px;
    font-weight: bold;
    color: white;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }
`;

export const MobileNavbar = styled.nav`
  display: none;
  @media ${devices.bigLaptopsAndDesktops} {
    display: none;
  }

  @media ${devices.tabletsAndIpads} {
    display: none;
  }
  @media ${devices.smallTabs} {
    display: none;
  }

  @media ${devices.smallMobiles} {
    display: flex;
    justify-content: center;
    padding: 10px 15px;
    flex-direction: column;
  }

  .menuBox {
    @media ${devices.smallMobiles} {
      display: flex;
      justify-content: center;
    }
  }

  .toLink {
    text-decoration: none;
    color: black;
  }

  .menuIcon {
    @media ${devices.smallMobiles} {
      height: 40px;
      width: 40px;
      color: white;
    }
  }

  .mobileNavbox {
    @media ${devices.smallMobiles} {
      background-color: ${({ theme }) => theme.colors.numbering};
      display: flex;
      width: 100%;
      gap: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 12px;
      border-radius: 20px;
    }
  }

  .linkName {
    @media ${devices.smallMobiles} {
      color: white;
      font-size: 20px;
    }
  }

  .langSelect {
    @media ${devices.smallMobiles} {
      height: 40px;
      padding: 10px 8px;
      border-radius: 10px;
      outline: none;
      font-size: 14px;
      background-color: black;
      cursor: pointer;
      color: white;
    }
  }
  .langOption {
    @media ${devices.smallMobiles} {
      font-size: 18px;
      font-weight: bold;
      color: white;
    }
  }
`;

export const NavigationLink = styled(Link)`
  color: black;
  font-size: 24px;
  text-decoration: none;
  padding: 5px 8px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.numbering};
    color: white;
    border-radius: 20px;
  }
  &:active {
    color: white;
  }
`;

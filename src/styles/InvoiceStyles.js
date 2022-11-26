import styled from "styled-components";
import { devices } from "../mediaQueries/breakpoints";

export const InvoiceContainer = styled.div`
  .closeBtn {
    display: flex;
    justify-content: center;
  }

  .generatePdfButton {
    padding: 12px 26px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.websiteBgColor};
    color: white;
    font-size: 22px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    font-weight: bolder;

    @media ${devices.smallMobiles} {
      padding: 10px 22px;
      font-size: 16px;
    }
  }
`;

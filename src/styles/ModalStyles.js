import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  position: absolute;
  gap: 50px;
  top: 160px;
  height: 300px;
  flex-direction: column;
  padding: 0 20px;
  border: 2px solid black;
  width: 70%;

  .closeBox {
    background-color: black;
    padding: 10px 20px;
    display: flex;
    position: absolute;
    right: 0;
    cursor: pointer;
  }

  .closeIcon {
    color: white;
    font-size: 40px;
  }

  .successMessage {
    margin-top: 100px;
  }

  .success {
    font-size: 27px;
    color: #ff4500;
  }

  .amount {
    background-color: #00ff00;
    color: black;
    padding: 6px 8px;
    text-decoration: underline;
  }
`;

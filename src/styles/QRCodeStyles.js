import styled from "styled-components";

export const CodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 20px;

  .qrTitle {
    font-size: 27px;
    text-align: center;
    align-items: center;
    color: black;
  }

  .articeBox {
    background-color: white;
    padding: 15px 20px;
    border-radius: 20px;
  }

  .articleContent {
    font-size: 22px;
    text-align: justify;
  }

  .qrInputBox {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }

  .qrInput {
    height: 50px;
    border-radius: 15px;
    outline: none;
    width: 60%;
    border: none;
    font-size: 22px;
    text-align: center;

    :invalid {
      color: red;
      font-size: 22px;
    }

    :valid {
      color: black;
      font-size: 22px;
    }

    ::placeholder {
      text-align: center;
      font-size: 22px;
    }
  }

  .qrButton {
    padding: 12px 14px;
    background-color: black;
    color: white;
    outline: none;
    border-radius: 20px;
    font-size: 22px;
    cursor: pointer;
  }

  .newQrCode {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .qrImage {
    height: 300px;
    width: 300px;
    object-fit: fill;
  }

  .qrDownload {
    padding: 12px 16px;
    background-color: #0099ff;
    color: white;
    outline: none;
    border-radius: 20px;
    font-size: 22px;
    cursor: pointer;
  }
`;

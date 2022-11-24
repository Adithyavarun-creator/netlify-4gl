import React, { useState } from "react";
import QRCode from "qrcode";
import { CodeWrapper } from "../styles/QRCodeStyles";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };
  return (
    <CodeWrapper>
      <div>
        <h1 className="qrTitle">
          Generate your own QR by entering a link and download it
        </h1>
      </div>

      <div className="qrInputBox">
        <input
          className="qrInput"
          type="text"
          placeholder="Provide a link to generate URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="qrButton" onClick={GenerateQRCode}>
          Generate
        </button>
      </div>

      {qr && (
        <div className="newQrCode">
          <img className="qrImage" src={qr} alt="" />
          <a href={qr} className="qrDownload" download="qrcode.png">
            Download
          </a>
        </div>
      )}

      <div className="articeBox">
        <article className="articleContent">
          I just found this "npm i qrcode" package from npm, I installed it in
          the project and I can generate my own qr code for the provided link,
          so whenever I change the link, the format of code changes and gives a
          new QR code, you also have an option to download it. My idea was
          instead of having separate QR codes for each boxes will definitely
          take time to create a payment gateway and 4 react projects(for each
          box1, box2, box3, box4) for each boxes and I thought that'a an extra
          work. And after making 4 projects for 4 boxes , you need to create QR
          codes for 4 of the projects codes. So for time being I made a common
          QR code, so when you scan , it will redirect you to deployed link,
          after that you can fill and complete the payment. After payment the
          payment details such as box number, amount paid, email,succcess
          message and date/time is saved in firebase backend and in stripe.
          Stripe is just a payment gateway, react can communicate backend with
          firebase, so all entered details are saved over there in a collection
          named "machinePaymentsSuccess"
        </article>
      </div>
    </CodeWrapper>
  );
};

export default QrCode;

/**
 <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="Provide a link to generate URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qr && (
        <>
          <img src={qr} alt="" />
          <a href={qr} download="qrcode.png">
            Download
          </a>
        </>
      )}
 */

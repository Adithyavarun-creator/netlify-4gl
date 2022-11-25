import React, { useState } from "react";
import QRCode from "qrcode";
import { CodeWrapper } from "../styles/QRCodeStyles";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const { t, i18n } = useTranslation();

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

        //console.log(url);
        setQr(url);
      }
    );
  };
  return (
    <CodeWrapper>
      <div className="qrTitleBox">
        <h1 className="qrTitle">{t("qrPageTitle")}</h1>
      </div>

      <div className="qrInputBox">
        <input
          className="qrInput"
          type="text"
          placeholder={t("placeholdergeneratetag")}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="qrButton" onClick={GenerateQRCode}>
          {t("generate")}
        </button>
      </div>

      {qr && (
        <div className="newQrCode">
          <img className="qrImage" src={qr} alt="" />
          <a href={qr} className="qrDownload" download="qrcode.png">
            {t("downloadasImage")}
          </a>
        </div>
      )}

      <div className="articeBox">
        <article className="articleContent">
          {t("qrpageArticle")} "machinePaymentsSuccess".
        </article>
      </div>
    </CodeWrapper>
  );
};

export default QrCode;

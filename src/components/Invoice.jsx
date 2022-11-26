import React from "react";
import { jsPDF } from "jspdf";
import { InvoiceContainer } from "../styles/InvoiceStyles";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Invoice = ({ email, select, click }) => {
  const { t } = useTranslation();
  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(38);
    doc.setTextColor(255, 0, 0);
    doc.text(10, 20, "This is from 4GL");
    doc.setFontSize(20);
    doc.setTextColor(100);
    doc.text(`This is for ${email}`, 10, 40);
    doc.text("This is an invoice copy for your payment", 10, 50);
    doc.text(`Box used : ${select} `, 10, 60);
    doc.text(`Amount paid : ${click}€`, 10, 70);
    doc.text("Thanks for using our service", 10, 80);
    doc.text("This is digitally verified", 10, 90);

    doc.save("invoice.pdf");
  };

  return (
    <InvoiceContainer>
      <button className="generatePdfButton" onClick={generatePdf}>
        {t("downloadPdf")}
      </button>
    </InvoiceContainer>
  );
};

export default Invoice;

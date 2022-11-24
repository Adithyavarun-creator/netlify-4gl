import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: "hello",
        email: "Provide your email address",
      },
    },
    es: {
      translation: {
        hello: "Hola",
        email: "Proporcione su dirección de correo electrónico",
      },
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;

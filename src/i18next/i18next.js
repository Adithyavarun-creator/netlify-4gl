import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../lng/en.json";
import es from "../lng/es.json";
import de from "../lng/de.json";
import fr from "../lng/fr.json";
import it from "../lng/it.json";
import pt from "../lng/pt.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
    de: {
      translation: de,
    },
    fr: {
      translation: fr,
    },
    it: {
      translation: it,
    },
    pt: {
      translation: pt,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;

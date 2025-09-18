import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/en-US";
import esES from "./locales/es-ES";
import frFR from "./locales/fr-FR";
import ptPT from "./locales/pt-PT";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  lng: "es-ES", // Default language
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    "en-US": { translation: enUS },
    "es-ES": { translation: esES },
    "fr-FR": { translation: frFR },
    "pt-PT": { translation: ptPT },
  },
});

export default i18n;

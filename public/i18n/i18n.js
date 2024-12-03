import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // Para cargar los archivos JSON
  .use(LanguageDetector) // Detecta el idioma automáticamente
  .use(initReactI18next) // Integración con React
  .init({
    fallbackLng: "en", // Idioma predeterminado
    debug: true, // Muestra logs útiles en desarrollo
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    backend: {
      loadPath: "/i18n/{{lng}}.json", // Ruta para cargar archivos
    },
  });

export default i18n;

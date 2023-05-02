import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./en.json"
import lv from "./lv.json"

const resources = {
    en,
    lv
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
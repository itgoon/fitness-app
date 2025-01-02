import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { localStorageGetItem } from "src/utils/storageAvailable";

import translationEn from "../locales/langs/en.json";
import translationKr from "../locales/langs/kr.json";
import { defaultLang } from "./configLang";
// ----------------------------------------------------------------------

const lng = localStorageGetItem("i18nextLng", defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      kr: { translations: translationKr },
      en: { translations: translationEn },
    },
    lng,
    fallbackLng: "ko",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import type { Locale } from "./config";
import en from "./en.json";
import fa from "./fa.json";

const translations = {
  en,
  fa,
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}
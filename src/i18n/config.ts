import { arSA, enUS } from "@clerk/localizations";

type locales = ["ar", "en"];
export type Locale = locales[number];

export const defaultLocale: Locale = "ar";

export const getClerkLocalization = (locale: Locale) => {
  const localizations = {
    ar: arSA,
    en: enUS,
  };

  return localizations[locale];
};

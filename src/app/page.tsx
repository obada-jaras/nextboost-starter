"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Sample");

  const switchToArabic = async () => {
    await setUserLocale("ar");
  };

  const switchToEnglish = async () => {
    await setUserLocale("en");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[var(--color-background)] text-[var(--color-foreground)]">
      <h1 className="text-3xl font-bold mb-4">{t("greeting")}</h1>
      <button
        className="px-4 py-2 rounded bg-foreground text-background transition hover:bg-opacity-80 dark:hover:bg-opacity-70"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? t("switchToDark") : t("switchToLight")}
      </button>
      <div className="mt-5 flex gap-4">
        <button
          className="px-4 py-2 rounded bg-foreground text-background transition hover:bg-opacity-80 dark:hover:bg-opacity-70"
          onClick={switchToArabic}
        >
          {t("switchToArabic")}
        </button>
        <button
          className="px-4 py-2 rounded bg-foreground text-background transition hover:bg-opacity-80 dark:hover:bg-opacity-70"
          onClick={switchToEnglish}
        >
          {t("switchToEnglish")}
        </button>
      </div>
    </div>
  );
}

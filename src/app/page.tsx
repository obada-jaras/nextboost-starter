"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

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
      {/* Greeting */}
      <h1 className="text-3xl font-bold mb-4">{t("greeting")}</h1>

      {/* Theme Toggle */}
      <button
        className="px-4 py-2 rounded bg-foreground text-background transition hover:bg-opacity-80 dark:hover:bg-opacity-70"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? t("switchToDark") : t("switchToLight")}
      </button>

      {/* Language Toggle */}
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

      {/* Clerk Integration */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

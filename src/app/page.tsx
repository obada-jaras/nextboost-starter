"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/api";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Sample");

  const tasks = useQuery(api.tasks.get);

  const switchToArabic = async () => {
    await setUserLocale("ar");
  };

  const switchToEnglish = async () => {
    await setUserLocale("en");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background text-foreground transition-colors duration-200">
      {/* Greeting */}
      <h1 className="text-3xl font-bold mb-4">{t("greeting")}</h1>

      {/* Theme Toggle */}
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? t("switchToDark") : t("switchToLight")}
      </Button>

      {/* Language Toggle */}
      <div className="mt-5 flex gap-4">
        <Button onClick={switchToArabic}>{t("switchToArabic")}</Button>
        <Button onClick={switchToEnglish}>{t("switchToEnglish")}</Button>
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

      {/* Tasks/ Convex DB */}
      <div className="mt-10 space-y-2">
        {tasks?.map(({ _id, text }) => (
          <div
            key={_id}
            className="p-2 border rounded-md bg-card text-card-foreground"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

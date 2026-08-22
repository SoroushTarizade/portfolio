"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
};

export default function LanguageSwitcher({
  locale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLanguage(nextLocale: Locale) {
    if (nextLocale === locale) return;

    const segments = pathname.split("/");

    segments[1] = nextLocale;

    const nextPath = segments.join("/") || `/${nextLocale}`;

    const hash =
      typeof window !== "undefined" ? window.location.hash : "";

    const search =
      typeof window !== "undefined"
        ? window.location.search
        : "";

    router.push(`${nextPath}${search}${hash}`);
  }

  return (
    <div
      className="flex items-center rounded-full border border-text-secondary/30 p-1"
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-all duration-300 ${
          locale === "en"
            ? "bg-accent text-background"
            : "text-text-secondary hover:text-foreground"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => switchLanguage("fa")}
        aria-pressed={locale === "fa"}
        className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-all duration-300 ${
          locale === "fa"
            ? "bg-accent text-background"
            : "text-text-secondary hover:text-foreground"
        }`}
      >
        FA
      </button>
    </div>
  );
}
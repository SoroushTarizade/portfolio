import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale} from "@/lib/i18n/config";
import Header from "@/components/header/Header";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  if (locale === "fa") {
    return {
      title: "سروش تاری زاده | توسعه‌دهنده فرانت‌اند",

      description:
        "سروش تاری زاده، توسعه‌دهنده فرانت‌اند، با تمرکز بر ساخت تجربه‌های وب مدرن، ریسپانسیو و کاربرپسند با React، Next.js و فناوری‌های مدرن وب.",

      authors: [
        {
          name: "Soroush Tarizadeh",
        },
      ],

      creator: "Soroush Tarizadeh",

      openGraph: {
        title: "سروش تاری زاده | توسعه‌دهنده فرانت‌اند",
        description:
          "توسعه‌دهنده فرانت‌اند با تمرکز بر ساخت تجربه‌های وب مدرن، ریسپانسیو و کاربرپسند.",
        type: "website",
        locale: "fa_IR",
      },

      twitter: {
        card: "summary_large_image",
        title: "سروش تاری زاده | توسعه‌دهنده فرانت‌اند",
        description:
          "توسعه‌دهنده فرانت‌اند با تمرکز بر ساخت تجربه‌های وب مدرن، ریسپانسیو و کاربرپسند.",
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    title: "Soroush Tarizadeh | Frontend Developer",

    description:
      "Soroush Tarizadeh is a Frontend Developer focused on building modern, responsive, and user-friendly web experiences with React, Next.js, and modern web technologies.",

    authors: [
      {
        name: "Soroush Tarizadeh",
      },
    ],

    creator: "Soroush Tarizadeh",

    openGraph: {
      title: "Soroush Tarizadeh | Frontend Developer",
      description:
        "Frontend Developer focused on building modern, responsive, and user-friendly web experiences.",
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: "Soroush Tarizadeh | Frontend Developer",
      description:
        "Frontend Developer focused on building modern, responsive, and user-friendly web experiences.",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <Header locale={locale} />
      {children}
    </div>
  );
}
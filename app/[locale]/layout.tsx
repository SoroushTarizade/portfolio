import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n/config";
import Header from "@/components/header/Header";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

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
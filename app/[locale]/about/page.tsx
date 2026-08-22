import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n/config";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <main>
      <h1>{locale === "fa" ? "درباره من" : "About Me"}</h1>
    </main>
  );
}
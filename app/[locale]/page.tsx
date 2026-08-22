import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n/config";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <main>
      <h1>{locale === "fa" ? "صفحه اصلی" : "Home Page"}</h1>
    </main>
  );
}
import About from "@/components/about/About";
import Capabilities from "@/components/about/Capabilities";
import Experience from "@/components/about/Experience";
import Contact from "@/components/contact/Contact";
import type { Locale } from "@/lib/i18n/config";

type AboutPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;

  return (
    <>
      <About locale={locale} />
      <Capabilities locale={locale} />
      <Experience locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
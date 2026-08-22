import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import AboutPreview from "@/components/about/AboutPreview";
import Contact from "@/components/contact/Contact";
import type { Locale } from "@/lib/i18n/config";

type HomePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <FeaturedProjects locale={locale}/>
      <AboutPreview locale={locale}/>
      <Contact locale={locale}/>
    </>
  );
}
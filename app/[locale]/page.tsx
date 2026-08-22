import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import AboutPreview from "@/components/about/AboutPreview";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <Contact />
    </>
  );
}
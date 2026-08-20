import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import "./globals.css";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import AboutPreview from "@/components/about/AboutPreview";
import Contact from "@/components/contact/Contact";
export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <FeaturedProjects></FeaturedProjects>
        <AboutPreview></AboutPreview>
        <Contact></Contact>
    </>
  );
}

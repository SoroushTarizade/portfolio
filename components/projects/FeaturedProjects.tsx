import React from "react";
import ProjectCard from "./ProjectCard";
import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/getTranslations";

const projects = [
  {
    id: 1,
    key: "dashstack",
    image: "/images/dashboard-screen.png",
    year: "2026",
    demo: "https://modern-admin-dashboard-g2yl.onrender.com/",
    github: "https://github.com/SoroushTarizade/modern-admin-dashboard",
  },
  {
    id: 2,
    key: "clothesShop",
    image: "/images/clothe-shopscreen.png",
    year: "2025",
    demo: "https://clotheshop.onrender.com/",
    github: "https://github.com/SoroushTarizade/clotheshop",
  },
] as const;

type FeaturedProjectsProps = {
  locale: Locale;
};

export default function FeaturedProjects({
  locale,
}: FeaturedProjectsProps) {
  const t = getTranslations(locale);

  return (
    <section id="work" className="w-full border-t border-text-secondary/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-5 text-4xl font-bold text-foreground sm:text-5xl">
            {t.projects.title}
          </h2>

          <p className="text-base leading-7 text-text-secondary sm:text-lg">
            {t.projects.description}
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-16 min-[720px]:gap-20">
          {projects.map((project) => {
            const translation = t.projects.items[project.key];

            return (
              <ProjectCard
                key={project.id}
                project={{
                  ...project,
                  title: translation.title,
                  description: translation.description,
                  imageAlt: translation.imageAlt,
                  role: translation.role,
                }}
                translations={{
                  info: t.projects.info,
                  year: t.projects.year,
                  role: t.projects.role,
                  liveDemo: t.projects.liveDemo,
                  github: t.projects.github,
                  closeImage: t.projects.closeImage,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
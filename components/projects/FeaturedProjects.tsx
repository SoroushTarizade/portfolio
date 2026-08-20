import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "DashStack",
    description:
      "A modern admin dashboard built with Next.js and Tailwind CSS, focused on creating a clean, responsive, and reusable interface for managing dashboard data.",
    image: "/images/dashboard-screen.png",
    imageAlt: "DashStack admin dashboard",
    year: "2026",
    role: "Frontend Developer",
    demo: "https://modern-admin-dashboard-g2yl.onrender.com/",
    github: "https://github.com/SoroushTarizade/modern-admin-dashboard",
  },
  {
    id: 2,
    title: "Modern Clothes Shop",
    description:
      "A modern and responsive e-commerce web application built with Next.js and React, featuring product browsing, authentication, search, category filtering, and shopping cart management.",
    image: "/images/clothe-shopscreen.png",
    imageAlt: "Modern Clothes Shop",
    year: "2025",
    role: "Frontend Developer",
    demo: "https://clotheshop.onrender.com/",
    github: "https://github.com/SoroushTarizade/clotheshop",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="w-full border-t border-text-secondary/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-5 text-4xl font-bold text-foreground sm:text-5xl">
            FEATURED PROJECTS
          </h2>

          <p className="text-base leading-7 text-text-secondary sm:text-lg">
            Here are some of the selected projects that showcase my passion
            for front-end development.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-16 min-[720px]:gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
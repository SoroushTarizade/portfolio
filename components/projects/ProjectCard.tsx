"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";

type Project = {
  id: number;
  key: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  year: string;
  role: string;
  demo: string;
  github: string;
};

type ProjectTranslations = {
  info: string;
  year: string;
  role: string;
  liveDemo: string;
  github: string;
  closeImage: string;
};

type ProjectCardProps = {
  project: Project;
  translations: ProjectTranslations;
};

export default function ProjectCard({
  project,
  translations,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="grid grid-cols-1 gap-8 min-[720px]:grid-cols-2 min-[720px]:items-center min-[720px]:gap-10 lg:gap-16">
      
      {/* Project Image */}
<div
  onClick={() => setIsOpen(true)}
  className="relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl bg-background-secondary"
>
  <Image
    src={project.image}
    alt={project.imageAlt}
    fill
    sizes="(max-width: 719px) 100vw, (max-width: 1279px) 50vw, 600px"
    className="object-contain p-4 transition-transform duration-500 hover:scale-105"
  />
</div>

      {/* Project Content */}
      <div className="flex flex-col">
        <h3 className="mb-4 text-2xl font-medium text-foreground sm:text-3xl">
          {project.title}
        </h3>

        <p className="text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
          {project.description}
        </p>

        {/* Project Info */}
        <div className="mt-8">
          <h4 className="border-b border-text-secondary/50 pb-3 text-lg font-medium">
            {translations.info}
          </h4>

          <div className="flex items-center justify-between border-b border-text-secondary/50 py-4 text-base">
            <span>{translations.year}</span>
            <span className="text-text-secondary">{project.year}</span>
          </div>

          <div className="flex items-center justify-between border-b border-text-secondary/50 py-4 text-base">
            <span>{translations.role}</span>
            <span className="text-text-secondary">{project.role}</span>
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 border-b-2 border-accent pb-1 font-bold text-accent"
          >
            <span>{translations.liveDemo}</span>

            <GoArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>

          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 border-b-2 border-accent pb-1 font-bold text-accent"
          >
            <span>{translations.github}</span>

            <FaGithub className="text-lg transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </div>
      </div>
      {isOpen && (
  <div
    onClick={() => setIsOpen(false)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative h-[80vh] w-full max-w-6xl"
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="90vw"
        className="object-contain"
      />

      <button
        onClick={() => setIsOpen(false)}
        aria-label={translations.closeImage}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background text-xl text-foreground"
      >
        ×
      </button>
    </div>
  </div>
)}
    </article>
  );
}
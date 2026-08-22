import React from "react";
import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/getTranslations";

type ExperienceProps = {
  locale: Locale;
};

export default function Experience({
  locale,
}: ExperienceProps) {
  const t = getTranslations(locale);

  return (
    <section className="w-full border-t border-text-secondary/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 min-[720px]:grid-cols-[0.8fr_1.2fr] min-[720px]:gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

          {/* Heading */}
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {t.about.experience.title}
            </h2>

            <p className="mt-5 max-w-sm text-base leading-7 text-text-secondary sm:text-lg">
              {t.about.experience.description}
            </p>
          </div>

          {/* Experience List */}
          <div className="space-y-12">
            {t.about.experience.items.map((experience, index) => (
              <article
                key={experience.title}
                className="relative border-l border-text-secondary/40 pl-6 sm:pl-8"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {experience.title}
                  </h3>

                  <span className="shrink-0 text-sm font-medium text-accent">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {experience.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm leading-6 text-text-secondary sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {index !== t.about.experience.items.length - 1 && (
                  <div className="mt-10 h-px w-full bg-text-secondary/20 min-[720px]:hidden" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
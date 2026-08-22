import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/getTranslations";

type AboutPreviewProps = {
  locale: Locale;
};

export default function AboutPreview({
  locale,
}: AboutPreviewProps) {
  const t = getTranslations(locale);

  return (
    <section className="w-full border-t border-text-secondary/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10 lg:py-20">

        {/* Section Title */}
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl min-[720px]:hidden">
          {t.about.preview.link === "MORE ABOUT ME"
            ? t.about.title
            : t.about.title}
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-8 min-[720px]:grid min-[720px]:grid-cols-2 min-[720px]:items-center min-[720px]:gap-12 lg:gap-20">

          {/* Image */}
          <div className="relative order-2 mx-auto aspect-[343/400] w-full max-w-[343px] overflow-hidden rounded-2xl bg-text-secondary min-[720px]:order-1 min-[720px]:max-w-[420px] lg:max-w-[500px]">
            <Image
              src="/images/photo9.png"
              alt="Soroush Tarizadeh"
              fill
              sizes="
                (max-width: 719px) 343px,
                (max-width: 1023px) 420px,
                500px
              "
              className="object-contain object-bottom translate-y-5"
            />
          </div>

          {/* Text */}
          <div className="order-1 min-[720px]:order-2">

            {/* Desktop / Tablet Heading */}
            <h2 className="mb-6 hidden text-3xl font-bold leading-tight min-[720px]:block sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>

            {/* Intro */}
            <p className="text-base font-medium leading-8 text-foreground sm:text-lg lg:text-xl lg:leading-9">
              {t.about.preview.intro}
            </p>

            {/* Additional Description */}
            <p className="mt-5 hidden text-sm leading-7 text-text-secondary min-[720px]:block lg:text-base lg:leading-8">
              {t.about.preview.description}
            </p>

            {/* Link */}
            <Link
              href={`/${locale}/about`}
              className="mt-7 inline-block border-b-2 border-accent pb-1 text-sm font-medium text-accent transition-opacity duration-300 hover:opacity-70"
            >
              {t.about.preview.link}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
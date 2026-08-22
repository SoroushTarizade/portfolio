import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/getTranslations";
export default function Hero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  return (
    <section className="w-full">
      <div
        className="
          mx-auto flex w-full max-w-7xl flex-col items-center justify-center
          gap-10 px-4 py-8
          min-[720px]:flex-row
          min-[720px]:gap-6
          min-[720px]:px-6
          min-[720px]:py-12
          md:gap-8
          md:px-8
          lg:gap-16
          lg:px-10
          lg:py-16
        "
      >
        {/* Content */}
        <div className="w-full max-w-xl min-[720px]:min-w-0 min-[720px]:flex-1">
          <div className="text-text-secondary">
            <h1
              className="
                mb-5 text-4xl font-bold leading-tight text-foreground
                sm:text-5xl
                md:text-6xl
              "
            >
              <span className="block">{t.hero.greeting}</span>
              <span className="block">{t.hero.name}</span>
            </h1>

            <p className="mb-10 max-w-lg text-sm leading-7 md:text-base md:leading-8">
              {t.hero.description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="flex h-12 w-40 items-center justify-around rounded-full bg-accent text-background transition-transform duration-300 hover:scale-105"
            >
              <span className="font-medium">{t.hero.contactButton}</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <GoArrowUpRight className="text-2xl font-extrabold text-accent" />
              </span>
            </Link>

<Link
  href="https://www.linkedin.com/in/soroush-tarizadeh/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="group flex h-12 w-12 items-center justify-center rounded-full bg-background-secondary transition-all duration-300 hover:scale-110 hover:bg-accent"
>
  <FaLinkedinIn className="text-2xl text-accent transition-colors duration-300 group-hover:text-background" />
</Link>

<Link
  href="https://github.com/SoroushTarizade"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="group flex h-12 w-12 items-center justify-center rounded-full bg-background-secondary transition-all duration-300 hover:scale-110 hover:bg-accent"
>
  <FaGithub className="text-2xl text-accent transition-colors duration-300 group-hover:text-background" />
</Link>
          </div>
        </div>

        {/* Image */}
        <div
          className="
            relative flex aspect-[343/400] w-full max-w-[343px]
            items-end justify-center overflow-hidden rounded-2xl
            bg-text-secondary
            min-[720px]:max-w-[320px]
            min-[720px]:flex-1
            md:max-w-[400px]
            lg:max-w-[500px]
          "
        >
          <Image
            src="/images/photo-5.png"
            alt="Soroush Tarizadeh"
            fill
            priority
            sizes="
              (max-width: 719px) 343px,
              (max-width: 1023px) 40vw,
              500px
            "
            className="object-contain object-bottom scale-180 translate-y-25"
          />
        </div>
      </div>
    </section>
  );
}
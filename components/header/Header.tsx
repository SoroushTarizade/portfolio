"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/getTranslations";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
};

function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = getTranslations(locale);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-12 lg:px-12">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          aria-label="Soroush Tarizadeh"
          className="shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          <Image
            src="/images/logo-1.png"
            alt="Soroush Tarizadeh"
            width={58}
            height={58}
            priority
            className="h-15 w-auto object-contain md:h-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <nav>
            <ul className="flex items-center gap-8 text-text-secondary">
              <li>
                <Link
                  href={`/${locale}#work`}
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {t.header.work}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}/about`}
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {t.header.about}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}#contact`}
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {t.header.contact}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Language Switcher */}
          <LanguageSwitcher locale={locale} />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="relative z-50 text-text-secondary transition-colors duration-300 hover:text-accent md:hidden"
        >
          {isMenuOpen ? (
            <RiCloseLine className="h-8 w-8" />
          ) : (
            <RiMenu3Line className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-6">
          <ul className="flex flex-col gap-6 border-t border-text-secondary/20 pt-6 text-lg text-text-secondary">
            <li>
              <Link
                href={`/${locale}#work`}
                onClick={closeMenu}
                className="block transition-colors duration-300 hover:text-accent"
              >
                {t.header.work}
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/about`}
                onClick={closeMenu}
                className="block transition-colors duration-300 hover:text-accent"
              >
                {t.header.about}
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}#contact`}
                onClick={closeMenu}
                className="block transition-colors duration-300 hover:text-accent"
              >
                {t.header.contact}
              </Link>
            </li>
          </ul>

          {/* Mobile Language Switcher */}
          <div className="mt-6 border-t border-text-secondary/20 pt-6">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
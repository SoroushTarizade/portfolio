"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/getTranslations";
function Header( {locale} : { locale:Locale } ) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = getTranslations(locale);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-text-secondary transition-colors duration-300 hover:text-foreground md:text-2xl"
        >
          Soroush Tarizadeh
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
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
            ? "max-h-80 opacity-100"
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Soroush Tarizadeh | Frontend Developer",

  description:
    "Soroush Tarizadeh is a Frontend Developer focused on building modern, responsive, and user-friendly web experiences with React, Next.js, and modern web technologies.",

  keywords: [
    "Soroush Tarizadeh",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Soroush Tarizadeh",
    },
  ],

  creator: "Soroush Tarizadeh",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  openGraph: {
    title: "Soroush Tarizadeh | Frontend Developer",
    description:
      "Frontend Developer focused on building modern, responsive, and user-friendly web experiences.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Soroush Tarizadeh | Frontend Developer",
    description:
      "Frontend Developer focused on building modern, responsive, and user-friendly web experiences.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={plusJakarta.variable}>{children}</body>
    </html>
  );
}
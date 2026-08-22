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
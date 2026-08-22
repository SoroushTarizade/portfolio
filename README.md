# Soroush Tarizadeh — Portfolio

> A modern, bilingual personal portfolio built to showcase my frontend development skills, selected projects, experience, and technical capabilities.

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-soroush--portfolio.onrender.com-D3E97A?style=for-the-badge&logo=googlechrome&logoColor=black)](https://soroush-portfolio.onrender.com/)
[![GitHub](https://img.shields.io/badge/GitHub-SoroushTarizade-181717?style=for-the-badge&logo=github)](https://github.com/SoroushTarizade)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Soroush%20Tarizadeh-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/soroush-tarizadeh/)

---

## Overview

This is my personal portfolio website, designed and developed to present my work and experience as a Frontend Developer.

The project focuses on clean and responsive UI, reusable React components, accessible interactions, bilingual content, and a production-oriented Next.js architecture.

The portfolio includes selected projects, an introduction to my capabilities and experience, a resume, social profiles, and a functional contact form with server-side email delivery.

The application is built with the **Next.js App Router** and **TypeScript**, with **Tailwind CSS** used for styling and responsive design.

---

## Features

- 🌐 **Bilingual interface** with English and Persian
- 🔄 **Language switcher** that preserves the current route
- 📱 Fully responsive layout for desktop, tablet, and mobile
- 👋 Hero section with personal introduction and social links
- 💼 Featured projects with live demos and GitHub repositories
- 🖼️ Project image previews
- 👨‍💻 About section with capabilities and development experience
- 📄 Resume access
- 🧭 Responsive navigation with mobile menu
- 📬 Functional contact form
- ✉️ Server-side email delivery using Resend
- 🔒 Server-side API key handling
- 🛡️ Server-side input validation and HTML escaping
- ❌ Localized 404 pages
- 🔗 Localized fallback routing for unknown paths
- 🔎 Language-specific SEO metadata
- 🌐 Open Graph and Twitter metadata
- 🖼️ Optimized images with Next.js
- ✨ Custom UI system built with Tailwind CSS
- 🔤 Custom typography using Plus Jakarta Sans

---

## Internationalization

The portfolio supports two languages:

| Language | Route |
| --- | --- |
| English | `/en` |
| فارسی | `/fa` |

Localized pages are structured using the Next.js App Router:

```text
/en
/en/about

/fa
/fa/about
```

The language switcher preserves the current page whenever an equivalent route exists.

For example:

```text
/en/about
      ↓
/fa/about
```

The application also automatically sets the correct text direction:

```text
English → LTR
Persian → RTL
```

Translations are managed through JSON files:

```text
lib/i18n/
├── config.ts
├── en.json
├── fa.json
└── getTranslations.ts
```

---

## Tech Stack

### Core

- **Next.js 16.3.1**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

### Supporting Tools

- **React Icons** — UI and social icons
- **Resend** — Contact form email delivery
- **ESLint** — Code quality and linting
- **Next/Image** — Image optimization
- **next/font** — Font optimization

---

## Featured Projects

### DashStack

A modern admin dashboard built with Next.js and Tailwind CSS, focused on creating a clean, responsive, and reusable interface for managing dashboard data.

**Year:** 2026  
**Role:** Frontend Developer

- **Live Demo:** https://modern-admin-dashboard-g2yl.onrender.com/
- **Repository:** https://github.com/SoroushTarizade/modern-admin-dashboard

![DashStack](./public/images/dashboard-screen.png)

---

### Modern Clothes Shop

A modern and responsive e-commerce web application built with Next.js and React, featuring product browsing, authentication, search, category filtering, and shopping cart management.

**Year:** 2025  
**Role:** Frontend Developer

- **Live Demo:** https://clotheshop.onrender.com/
- **Repository:** https://github.com/SoroushTarizade/clotheshop

![Modern Clothes Shop](./public/images/clothe-shopscreen.png)

---

## Contact API

The portfolio includes a functional contact form connected to a Next.js Route Handler.

The request flow is:

```text
Contact Form
     ↓
POST /api/contact
     ↓
Next.js Route Handler
     ↓
Input Validation
     ↓
HTML Escaping
     ↓
Resend API
     ↓
Email Delivery
```

The API:

- Validates required fields
- Validates incoming input types
- Limits input lengths
- Validates email format
- Escapes user-provided HTML before inserting it into the email
- Handles successful and failed requests with appropriate HTTP responses
- Keeps the Resend API key on the server

The API key is stored in an environment variable and is never exposed through client-side code.

---

## Project Structure

```text
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── [...slug]/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── about/
│   │   ├── About.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── Capabilities.tsx
│   │   └── Experience.tsx
│   │
│   ├── contact/
│   │   └── Contact.tsx
│   │
│   ├── header/
│   │   └── Header.tsx
│   │
│   ├── hero/
│   │   └── Hero.tsx
│   │
│   ├── language/
│   │   └── LanguageSwitcher.tsx
│   │
│   └── projects/
│       ├── FeaturedProjects.tsx
│       └── ProjectCard.tsx
│
├── lib/
│   └── i18n/
│       ├── config.ts
│       ├── en.json
│       ├── fa.json
│       └── getTranslations.ts
│
├── public/
│   ├── fonts/
│   │   └── Plus_Jakarta_Sans/
│   └── images/
│
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone <YOUR-PORTFOLIO-REPOSITORY-URL>
cd portfolio
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

Replace `your_resend_api_key` with your actual Resend API key.

> Never commit `.env.local` or expose your API key in client-side code.

Environment files are excluded through `.gitignore`.

---

## Development

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

The root route redirects to the default language:

```text
/
↓
/en
```

---

## Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint |

---

## SEO & Metadata

The portfolio uses the **Next.js Metadata API** to provide language-specific metadata for the English and Persian versions of the website.

The metadata configuration includes:

- Page titles
- Meta descriptions
- Author information
- Robots directives
- Open Graph metadata
- Twitter card metadata
- Site icons

English and Persian routes receive their corresponding metadata.

For example:

```text
/en
→ Soroush Tarizadeh | Frontend Developer

/fa
→ سروش طری‌زاده | توسعه‌دهنده فرانت‌اند
```

The application also uses the appropriate document language and text direction:

```text
English → lang="en" dir="ltr"

Persian → lang="fa" dir="rtl"
```

---

## Design & UI

The portfolio uses a custom visual system built with Tailwind CSS.

Key design characteristics include:

- Dark visual theme
- High-contrast typography
- Lime accent color
- Responsive spacing and typography
- Rounded UI elements
- Interactive hover states
- Smooth transitions
- Responsive navigation
- Mobile menu
- Bilingual interface
- RTL support for Persian content

The primary typeface is **Plus Jakarta Sans**, optimized through Next.js font handling.

---

## Error Handling

The application includes localized error handling for unknown routes.

Examples:

```text
/en/unknown-page
→ English 404

/fa/unknown-page
→ Persian 404
```

A localized catch-all route is also used to provide the correct language-specific fallback experience.

---

## Deployment

The portfolio is publicly deployed at:

**https://soroush-portfolio.onrender.com/**

The production application runs as a Next.js application.

Environment variables such as the Resend API key are configured through the deployment environment rather than committed to the repository.

---

## Development Focus

While building this portfolio, I focused on:

- Building reusable React components
- Creating responsive layouts
- Working with the Next.js App Router
- Using TypeScript for type-safe development
- Implementing bilingual routing
- Supporting RTL interfaces
- Designing clean and maintainable UI
- Handling client-side form interactions
- Building server-side API routes
- Integrating third-party services
- Implementing server-side input validation
- Protecting environment variables
- Optimizing images and typography
- Implementing SEO metadata
- Following production-oriented development workflows

---

## Author

### Soroush Tarizadeh

Frontend Developer focused on building modern, responsive, and user-friendly web experiences.

- **Portfolio:** https://soroush-portfolio.onrender.com/
- **GitHub:** https://github.com/SoroushTarizade
- **LinkedIn:** https://www.linkedin.com/in/soroush-tarizadeh/

---

If you have a project idea, opportunity, or simply want to connect, feel free to reach out through the portfolio.

---

### Built with Next.js, React, TypeScript & Tailwind CSS
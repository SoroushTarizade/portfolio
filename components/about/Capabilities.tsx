import React from "react";

const capabilities = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Git & GitHub",
  "REST APIs",
  "MongoDB",
];

export default function Capabilities() {
  return (
    <section className="w-full border-t border-text-secondary/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 min-[720px]:grid-cols-[0.8fr_1.2fr] min-[720px]:gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          
          {/* Heading */}
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              MY CAPABILITIES
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              I enjoy building modern web experiences that are responsive,
              intuitive, and easy to maintain. My main focus is frontend
              development with JavaScript, React, Next.js, and Tailwind CSS,
              while continuously expanding my knowledge of modern web
              technologies and development practices.
            </p>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="
                    rounded-full
                    border border-text-secondary/50
                    px-5 py-3
                    text-sm font-medium
                    text-foreground
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-accent
                    hover:bg-accent
                    hover:text-background
                    sm:px-6 sm:py-3.5
                    sm:text-base
                  "
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
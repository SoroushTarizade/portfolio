import Image from "next/image";
import Link from "next/link";
import { PiDownload } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function About() {
  return (
    <section className="w-full">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-12 sm:px-6 md:px-8 md:py-16 min-[720px]:grid-cols-2 min-[720px]:items-center min-[720px]:gap-12 lg:gap-20 lg:px-10">
        
        {/* Content */}
        <div className="w-full">
          <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            ABOUT ME
          </h1>

          <h2 className="mt-4 max-w-2xl text-xl font-medium leading-8 text-foreground sm:text-2xl">
            I’m a Frontend Developer who enjoys turning ideas into modern,
            responsive, and user-friendly web experiences.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-text-secondary sm:text-lg">
            <p>
              I’m a Frontend Developer who enjoys turning ideas into
              thoughtful, interactive, and responsive web experiences. My
              journey into development has been driven by curiosity and a
              genuine interest in understanding how things work and how they
              can be made better.
            </p>

            <p>
              I primarily work with JavaScript, React, Next.js, and Tailwind
              CSS, while continuously expanding my knowledge across the modern
              web development ecosystem. I learn best by building,
              experimenting, solving problems, and turning what I learn into
              real projects.
            </p>

            <p>
              My background in Social Sciences has also shaped the way I think
              about people, communication, and how users interact with the
              things we build. I’m currently looking for remote, full-time
              opportunities where I can contribute to meaningful projects
              while continuing to grow as a developer.
            </p>

            <p>
              When I’m away from the screen, you’ll usually find me playing
              volleyball, working out, or listening to a good podcast.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 items-center gap-3 rounded-full bg-accent px-5 font-bold text-background transition-all duration-300 hover:scale-105 hover:bg-foreground"
            >
              <span>DOWNLOAD RESUME</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background transition-transform duration-300 group-hover:rotate-12">
                <PiDownload className="h-4 w-4 text-accent" />
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/soroush-tarizadeh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-background-secondary text-accent transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-background"
            >
              <FaLinkedinIn className="text-xl" />
            </Link>

            <Link
              href="https://github.com/SoroushTarizade"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-background-secondary text-accent transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-background"
            >
              <FaGithub className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mx-auto w-full max-w-[343px] min-[720px]:max-w-[360px] lg:max-w-[500px]">
          <div className="relative flex aspect-[343/400] w-full items-end justify-center overflow-hidden rounded-2xl bg-text-secondary">
            <Image
              src="/images/photo-4.png"
              alt="Soroush Tarizadeh"
              fill
              priority
              sizes="
                (max-width: 719px) 343px,
                (max-width: 1023px) 360px,
                500px
              "
              className="object-contain object-bottom scale-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
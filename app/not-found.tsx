import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-4">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
        
        {/* 404 */}
        <div className="relative">
          <span className="select-none text-[120px] font-bold leading-none tracking-tighter text-background-secondary sm:text-[180px] md:text-[220px]">
            404
          </span>

          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-accent sm:text-3xl">
            OOPS!
          </span>
        </div>

        {/* Content */}
        <div className="mt-8 max-w-xl">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            PAGE NOT FOUND
          </h1>

          <p className="mt-5 text-base leading-7 text-text-secondary sm:text-lg">
            Looks like this page took a wrong turn. The page you’re looking
            for doesn’t exist or may have been moved.
          </p>
        </div>

        {/* Back Home */}
        <Link
          href="/"
          className="group mt-8 flex h-12 items-center gap-4 rounded-full bg-accent px-5 font-bold text-background transition-all duration-300 hover:scale-105"
        >
          <span>BACK TO HOME</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background transition-transform duration-300 group-hover:rotate-45">
            <GoArrowUpRight className="text-xl text-accent" />
          </span>
        </Link>
      </section>
    </main>
  );
}
"use client";

import React, { useState } from "react";
import {
  FaInstagram,
  FaTelegram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="w-full border-t border-text-secondary/50"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:px-8 md:py-20 min-[720px]:grid-cols-2 min-[720px]:gap-16 lg:px-10 lg:gap-24">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            LET’S CONNECT
          </h2>

          <div className="mt-6 text-sm leading-7 text-text-secondary sm:text-base">
            <p>
              Say hello at{" "}
              <a
                href="mailto:Soroushtarizadeh7139@gmail.com"
                className="text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-300 hover:text-accent"
              >
                Soroushtarizadeh7139@gmail.com
              </a>
            </p>

            <p className="mt-3">
              For more info, here’s my{" "}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-300 hover:text-accent"
              >
                resume
              </a>
            </p>
          </div>

          {/* Social Links */}
          <ul className="mt-7 flex items-center gap-5 text-2xl text-accent">
            <li>
              <Link
                href="https://www.linkedin.com/in/soroush-tarizadeh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-foreground"
              >
                <FaLinkedinIn />
              </Link>
            </li>

            <li>
              <Link
                href="https://github.com/SoroushTarizade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-foreground"
              >
                <FaGithub />
              </Link>
            </li>

            <li>
              <Link
                href="https://t.me/soroush_tr9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-foreground"
              >
                <FaTelegram />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/soroush_tr9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-foreground"
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-7"
        >
          {/* Success Message */}
          {status === "success" && (
            <div className="animate-in fade-in slide-in-from-top-2 rounded-lg border border-accent/30 bg-accent/10 px-5 py-4">
              <p className="font-medium text-accent">
                Message sent successfully.
              </p>

              <p className="mt-1 text-sm leading-6 text-text-secondary">
                Thanks for reaching out. I’ll get back to you as soon as
                possible.
              </p>
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="rounded-lg border border-red-400/30 bg-red-400/10 px-5 py-4">
              <p className="font-medium text-red-300">
                Something went wrong.
              </p>

              <p className="mt-1 text-sm leading-6 text-text-secondary">
                Your message could not be sent. Please try again.
              </p>
            </div>
          )}

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-sm text-text-secondary"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Soroush"
              className="mt-2 h-12 w-full rounded-sm bg-background-secondary px-4 text-foreground outline-none transition-all duration-300 placeholder:text-text-secondary/60 focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm text-text-secondary"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Soroushtarizadeh7139@gmail.com"
              className="mt-2 h-12 w-full rounded-sm bg-background-secondary px-4 text-foreground outline-none transition-all duration-300 placeholder:text-text-secondary/60 focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="text-sm text-text-secondary"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Subject"
              className="mt-2 h-12 w-full rounded-sm bg-background-secondary px-4 text-foreground outline-none transition-all duration-300 placeholder:text-text-secondary/60 focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-sm text-text-secondary"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Talk to me..."
              className="mt-2 w-full resize-y rounded-sm bg-background-secondary px-4 py-3 text-foreground outline-none transition-all duration-300 placeholder:text-text-secondary/60 focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="flex h-12 w-36 items-center justify-center rounded-full bg-accent px-5 font-bold text-background transition-all duration-300 hover:scale-105 hover:bg-foreground disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-50"
          >
            {isSending ? "SENDING..." : "SUBMIT"}
          </button>
        </form>
      </div>

      {/* Copyright */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 md:px-8 lg:px-10">
        <p className="text-sm text-text-secondary">
          © 2026 Soroush Tarizadeh
        </p>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { latestStory } from "@/app/content/stories";

const editorialNavItems = [
  {
    label: "Today’s Story",
    href: latestStory
      ? `/stories/${latestStory.slug}`
      : "/stories",
  },
  {
    label: "Stories",
    href: "/stories",
  },
];

export default function EditorialHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-[var(--lp-border)] bg-[var(--lp-white)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/stories"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt="Luxe & Pristine"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-tight text-[var(--lp-navy)]">
              Luxe &amp; Pristine
            </p>

            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--lp-gold)]">
              Miami
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Editorial navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {editorialNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative py-2 text-sm font-semibold text-[var(--lp-blue)] transition-colors duration-300 hover:text-[var(--lp-gold)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden rounded-full border border-[var(--lp-border)] px-5 py-2.5 text-sm font-semibold text-[var(--lp-navy)] transition-all duration-300 hover:border-[var(--lp-navy)] hover:bg-[var(--lp-navy)] hover:text-white sm:inline-flex"
          >
            Visit Luxe &amp; Pristine
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--lp-border)] bg-[var(--lp-white)] text-[var(--lp-navy)] transition-colors duration-300 hover:border-[var(--lp-gold)] hover:text-[var(--lp-gold)] md:hidden"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M5 8h14" />
                <path d="M5 12h14" />
                <path d="M5 16h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-[var(--lp-border)] bg-[var(--lp-white)] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile editorial navigation"
          className="flex flex-col px-5 py-5"
        >
          {editorialNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[var(--lp-border)] py-4 text-base font-semibold text-[var(--lp-navy)] last:border-b-0"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--lp-navy)] px-5 py-3 text-sm font-semibold text-white"
          >
            Visit Luxe &amp; Pristine
          </Link>
        </nav>
      </div>
    </header>
  );
}
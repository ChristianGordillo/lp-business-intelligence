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

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="relative mx-auto max-w-7xl">
        {/* Main floating header */}
        <div className="flex h-[4.25rem] items-center justify-between rounded-[1.5rem] border border-[var(--lp-border)] bg-[var(--lp-white)]/90 px-4 shadow-[0_12px_40px_rgba(8,42,70,0.10)] backdrop-blur-xl sm:px-5">
          <Link
            href="/stories"
            className="flex min-w-0 items-center gap-3"
            onClick={closeMenu}
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/logo.png"
                alt="Luxe & Pristine"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <p className="truncate text-sm font-bold tracking-tight text-[var(--lp-navy)]">
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
            className="hidden items-center gap-8 lg:flex"
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

          {/* Desktop action */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-[var(--lp-border)] px-5 py-2.5 text-sm font-semibold text-[var(--lp-navy)] transition-all duration-300 hover:border-[var(--lp-navy)] hover:bg-[var(--lp-navy)] hover:text-white"
            >
              Visit Luxe &amp; Pristine
            </Link>
          </div>

          {/* Mobile / tablet menu button */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="editorial-mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--lp-border)] bg-white/70 text-[var(--lp-navy)] transition-colors duration-300 hover:border-[var(--lp-gold)] hover:text-[var(--lp-gold)] lg:hidden"
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

        {/* Mobile / tablet floating dropdown */}
        <div
          id="editorial-mobile-navigation"
          className={`absolute left-0 right-0 top-[4.75rem] overflow-hidden rounded-[1.5rem] border bg-[var(--lp-white)]/95 shadow-[0_20px_50px_rgba(8,42,70,0.14)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
            menuOpen
              ? "visible translate-y-0 border-[var(--lp-border)] opacity-100"
              : "invisible -translate-y-2 border-transparent opacity-0"
          }`}
        >
          <div className="p-3">
            <nav
              aria-label="Mobile editorial navigation"
              className="flex flex-col"
            >
              {editorialNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-base font-semibold text-[var(--lp-blue)] transition-colors hover:bg-[var(--lp-gold)]/10 hover:text-[var(--lp-gold)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="my-3 h-px bg-[var(--lp-border)]" />

            <Link
              href="/"
              onClick={closeMenu}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--lp-navy)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--lp-gold)]"
            >
              Visit Luxe &amp; Pristine
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
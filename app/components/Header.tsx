"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { latestStory } from "@/app/content/stories";

const navItems = [
  { label: "Buildings", href: "/#buildings" },
  { label: "People", href: "/#people" },
  { label: "Intelligence", href: "/#intelligence" },
  {
    label: "Today's Story",
    href: latestStory
      ? `/stories/${latestStory.slug}`
      : "/stories",
  },
];

function WhatsAppIcon({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.48 1.33 5L2 22l5.12-1.34A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.51 22 12S17.56 2 12.04 2Zm0 18.18a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.17 8.17 0 1 1 12.04 20.18Zm4.48-6.12c-.24-.12-1.45-.72-1.68-.8-.22-.08-.38-.12-.54.12-.16.24-.62.8-.76.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.24 7.24 0 0 1-1.34-1.66c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.45-.6 1.66-1.17.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function MenuIcon({
  open,
  className = "h-5 w-5",
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M5 8h14" />
          <path d="M5 12h14" />
          <path d="M5 16h14" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="relative mx-auto max-w-7xl">
        {/* Main floating header */}
        <div className="flex h-[4.25rem] items-center justify-between rounded-[1.5rem] border border-[#E8C686]/30 bg-[#FAF8F3]/90 px-4 shadow-[0_12px_40px_rgba(8,42,70,0.10)] backdrop-blur-xl sm:px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 items-center gap-3"
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

            <span className="hidden truncate text-sm font-bold tracking-tight text-[#082A46] sm:block">
              Luxe &amp; Pristine
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-[#33546F] transition-colors duration-300 hover:text-[#B28435]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://app.luxeandpristine.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#082A46]/15 px-4 py-2.5 text-sm font-semibold text-[#082A46] transition-all duration-300 hover:border-[#082A46] hover:bg-[#082A46] hover:text-white"
            >
              Launch App
            </a>

            <a
              href="https://wa.me/17864482284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4A84F] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#082A46] hover:shadow-lg"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile / tablet menu button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setMobileMenuOpen((current) => !current)
            }
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#082A46]/10 bg-white/70 text-[#082A46] transition-colors hover:border-[#B28435]/50 hover:text-[#B28435] lg:hidden"
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>

        {/* Mobile / tablet dropdown */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-[4.75rem] overflow-hidden rounded-[1.5rem] border bg-[#FAF8F3]/98 shadow-[0_20px_50px_rgba(8,42,70,0.14)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
            mobileMenuOpen
              ? "visible translate-y-0 border-[#E8C686]/30 opacity-100"
              : "invisible -translate-y-2 border-transparent opacity-0"
          }`}
        >
          <div className="p-3">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-3.5 text-base font-medium text-[#33546F] transition-colors hover:bg-[#E8C686]/15 hover:text-[#B28435]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="my-3 h-px bg-[#082A46]/10" />

            <div className="grid gap-2 sm:grid-cols-2">
              <a
                href="https://app.luxeandpristine.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#082A46]/15 px-5 text-sm font-semibold text-[#082A46] transition-colors hover:bg-[#082A46] hover:text-white"
              >
                Launch App
              </a>

              <a
                href="https://wa.me/17864482284"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D4A84F] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#082A46]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
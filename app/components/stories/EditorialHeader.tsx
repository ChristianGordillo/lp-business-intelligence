import Image from "next/image";
import Link from "next/link";
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
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--lp-border)] bg-[var(--lp-paper)]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-12">
        <Link
          href="/"
          aria-label="Go to Luxe & Pristine home"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Luxe & Pristine"
            width={60}
            height={60}
            priority
            className="h-12 w-auto md:h-14"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-tight text-[var(--lp-navy)]">
              Luxe &amp; Pristine
            </p>

            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--lp-gold)]">
              Miami
            </p>
          </div>
        </Link>

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

          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--lp-border)] bg-[var(--lp-white)] text-[var(--lp-navy)] transition-colors duration-300 hover:border-[var(--lp-gold)] hover:text-[var(--lp-gold)] md:hidden"
          >
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
          </button>
        </div>
      </div>
    </header>
  );
}
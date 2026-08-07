import type { ReactNode } from "react";

type StoryIntroProps = {
  eyebrow?: string;
  title: string;
  quote?: string;
  description?: string;
  location?: string;
  date?: string;
  children?: ReactNode;
};

export default function StoryIntro({
  eyebrow = "Today at Luxe & Pristine",
  title,
  quote,
  description,
  location,
  date,
  children,
}: StoryIntroProps) {
  return (
    <section className="border-b border-[var(--lp-border)] px-6 pb-16 pt-36 md:px-12 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          {/* Left column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--lp-gold)]">
              {eyebrow}
            </p>

            <h1 className="font-editorial mt-6 max-w-4xl text-6xl font-semibold leading-[0.88] tracking-[-0.03em] text-[var(--lp-navy)] sm:text-7xl lg:text-7xl xl:text-8xl">
              {title}
            </h1>

            {quote && (
              <blockquote className="font-editorial mt-8 max-w-xl border-l border-[var(--lp-gold)] pl-5 text-2xl italic leading-9 text-[var(--lp-navy)]">
                “{quote}”
              </blockquote>
            )}

            {description && (
              <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--lp-blue)]">
                {description}
              </p>
            )}

            {(location || date) && (
              <div className="mt-10 flex flex-col gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--lp-navy)] sm:flex-row sm:items-center sm:gap-8">
                {location && (
                  <div className="flex items-center gap-3">
                    <LocationIcon />
                    <span>{location}</span>
                  </div>
                )}

                {date && (
                  <div className="flex items-center gap-3">
                    <CalendarIcon />
                    <span>{date}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Reserved editorial space */}
            <div className="lg:pt-4">
            {children}
            </div>
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-[var(--lp-gold)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-[var(--lp-gold)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}
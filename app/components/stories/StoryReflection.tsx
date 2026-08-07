import type { ReactNode } from "react";

type StoryReflectionProps = {
  label?: string;
  children: ReactNode;
};

export default function StoryReflection({
  label = "Reflexión",
  children,
}: StoryReflectionProps) {
  return (
    <section className="bg-[var(--lp-paper)] px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--lp-border-gold)] bg-[var(--lp-cream)] px-7 py-9 md:px-12 md:py-12">
          <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[var(--lp-gold-soft)]/25 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--lp-gold)] text-2xl text-[var(--lp-gold)]"
              aria-hidden="true"
            >
              ✦
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--lp-gold)]">
                {label}
              </p>

              <div className="font-editorial mt-4 max-w-4xl text-3xl font-medium leading-tight text-[var(--lp-navy)] md:text-4xl">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import type { ReactNode } from "react";

type EditorialNoteProps = {
  eyebrow?: string;
  title?: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
};

export default function EditorialNote({
  eyebrow = "A note from our team",
  title,
  imageSrc,
  imageAlt,
  children,
}: EditorialNoteProps) {
  return (
    <section className="border-y border-[var(--lp-border)] bg-[var(--lp-white)] px-6 py-10 md:px-12 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden border-y border-[var(--lp-border-gold)] bg-[var(--lp-cream)] lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          {/* Text */}
          <div className="flex flex-col justify-center px-7 py-8 sm:px-10 md:px-10 md:py-10">
            <p className="font-editorial text-2xl italic leading-none text-[var(--lp-gold)] md:text-3xl">
              {eyebrow}
            </p>

            {title && (
              <h2 className="font-editorial mt-7 text-4xl font-semibold leading-tight text-[var(--lp-navy)] md:text-5xl">
                {title}
              </h2>
            )}

            <div className="mt-7 h-px w-16 bg-[var(--lp-gold)]" />

            <div className="mt-7 max-w-xl text-lg leading-8 text-[var(--lp-blue)]">
              {children}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative min-h-[240px] overflow-hidden bg-[var(--lp-paper)] sm:min-h-[280px] lg:min-h-[320px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--lp-cream)] via-[var(--lp-cream)]/15 to-transparent lg:block" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--lp-cream)]/45 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
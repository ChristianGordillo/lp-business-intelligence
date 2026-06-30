import Image from "next/image";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.54 1.75 6.52L3 29l6.64-1.74A12.9 12.9 0 0 0 16.04 29C23.22 29 29 23.18 29 16S23.22 3 16.04 3Zm0 23.72c-2.02 0-4-.54-5.73-1.57l-.41-.24-3.94 1.03 1.05-3.84-.27-.43A10.7 10.7 0 0 1 5.3 16c0-5.92 4.82-10.74 10.74-10.74S26.72 10.08 26.72 16 21.96 26.72 16.04 26.72Zm5.88-8.04c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.52-.16-.74.16-.21.32-.85 1.04-1.04 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.21 2.27 3.46 5.5 4.85.77.33 1.37.53 1.84.68.77.25 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

export default function LetsTalk() {
  return (
    <section className="bg-[#FAF8F3] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B28435]">
            Let&apos;s Talk
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#082A46] md:text-6xl">
            Every operation
            <br />
            is different.
          </h2>

          <p className="mt-5 text-2xl font-medium text-[#33546F]">
            Tell us about yours.
          </p>

          <div className="mt-6 h-px w-16 bg-[#B28435]" />

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#33546F]">
            Whether you manage one building or hundreds of units, we&apos;d love
            to understand your operation and explore where Cleaning Intelligence
            can create the most value.
          </p>

          <a
            href="https://wa.me/17864482284"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A84F] px-7 py-4 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#082A46] hover:shadow-lg"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            Start the conversation
          </a>

          <p className="mt-5 text-sm text-[#33546F]/60">
            Usually replying within a few minutes.
          </p>
        </div>

        <div className="relative h-[360px] overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#E8C686]/40 md:h-[500px]">
          <Image
            src="/people/lets-talk.png"
            alt="Luxe & Pristine operational conversation"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
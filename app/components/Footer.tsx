import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#082A46] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr] md:items-end">
          {/* Left */}
          <div>
            <div className="flex items-center gap-5">
              {/* Premium Brand Seal */}
              <div className="relative">
                {/* Golden glow */}
                <div className="absolute inset-0 rounded-full bg-[#E8C686]/20 blur-xl" />

                {/* Seal */}
                <div
                  className="
                    relative
                    flex h-20 w-20 shrink-0 items-center justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-white
                    via-[#FAF6EF]
                    to-[#F2E8D5]
                    ring-2 ring-[#E8C686]/40
                    shadow-[0_12px_35px_rgba(0,0,0,0.20)]
                    transition-all
                    duration-500
                    hover:scale-105
                    hover:rotate-3
                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]
                  "
                >
                  <Image
                    src="/logo.png"
                    alt="Luxe & Pristine"
                    width={50}
                    height={50}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Brand */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#E8C686]">
                  Luxe & Pristine
                </p>

                <p className="mt-2 text-sm text-white/55">
                  Cleaning Intelligence
                </p>
              </div>
            </div>

            {/* Headline */}
            <h2 className="mt-8 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Cleaning Intelligence for
              <br />
              Short-Term Rentals.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Building better operations through people, standards and
              intelligence.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-5 md:text-right">
            <a
              href="mailto:hello@luxeandpristine.com"
              className="block text-lg text-white/80 transition-colors duration-300 hover:text-[#E8C686]"
            >
              hello@luxeandpristine.com
            </a>

            <a
              href="https://wa.me/17864482284"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-white/80 transition-colors duration-300 hover:text-[#E8C686]"
            >
              +1 (786) 448-2284
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/45 md:flex-row">
            <p>© 2026 Luxe & Pristine. All rights reserved.</p>

            <p>Operated by Tiempo de Chocolatear LLC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";

export default function Title() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

      {/* LEFT CONTENT */}
      <div>
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
          Luxe & Pristine
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
          Cleaning Intelligence
          <br />
          for Hospitality
          <br />
          Operations
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-[#33546F]">
          The AI-powered operating system transforming short-term rental
          turnovers into scalable, data-driven hospitality experiences.
        </p>

        <div className="mt-10 h-px w-full max-w-lg bg-gradient-to-r from-[#B28435] via-[#E8C686] to-transparent" />

        <p className="mt-8 max-w-xl text-lg leading-8 text-[#33546F]">
          Born from real STR operations, built to empower the companies and
          people who make every stay possible.
        </p>
      </div>


      {/* IMAGE */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 rounded-[2rem] bg-[#E8C686]/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-[#E8C686]/35 bg-[#FAF8F3] shadow-[0_20px_60px_rgba(8,42,70,0.12)]">
          <Image
            src="/people/hero-team.png"
            alt="Luxe and Pristine Team"
            width={700}
            height={700}
            priority
            className="h-[430px] w-full object-cover"
          />
        </div>
      </div>


      {/* JOURNEY */}
      <div className="lg:col-span-2">
        <div className="grid gap-5 md:grid-cols-3">

          {[
            "Short-Term Rental Turnover Operations",
            "Cleaning Intelligence Platform",
            "AI + Financial Infrastructure for Hospitality Workers",
          ].map((item, index) => (
            <div
              key={item}
              className="
                rounded-[2rem]
                border
                border-[#E8C686]/40
                bg-[#FAF8F3]
                p-7
                shadow-[0_10px_35px_rgba(8,42,70,0.06)]
              "
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#082A46] text-sm font-bold text-[#E8C686]">
                {index + 1}
              </div>

              <p className="text-xl font-bold leading-snug text-[#082A46]">
                {item}
              </p>
            </div>
          ))}

        </div>


        <div className="mt-6 rounded-[2rem] bg-[#082A46] p-7 shadow-xl">
          <p className="text-2xl font-bold text-white">
            From Cleaners → Operators → Owners
          </p>
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-[#B28435]">
          Empowering the next generation of hospitality entrepreneurs.
        </p>

      </div>

    </div>
  );
}
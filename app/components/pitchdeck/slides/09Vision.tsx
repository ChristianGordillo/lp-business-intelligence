const evolution = [
  "Operational data",
  "Trust & reputation",
  "Professional identity",
  "Economic opportunity",
];

const workerFuture = [
  "Verified experience history",
  "Performance reputation",
  "Guest recognition",
  "Financial access",
  "Business opportunities",
];

const platformFuture = [
  "Smarter hospitality operations",
  "Better guest experiences",
  "Stronger service businesses",
  "More opportunities for workers",
];

export default function Vision() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
      <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
            Vision
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
            Building the infrastructure
            <br />
            behind the future of
            <br />
            hospitality work.
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#33546F]">
            Every stay is powered by people. We are building the technology that
            helps them grow.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#082A46] p-7 text-white shadow-[0_20px_60px_rgba(8,42,70,0.18)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8C686]">
            The industry transformed
          </p>

          <div className="mt-5 grid gap-3">
            {["Bookings became digital", "Payments became digital", "Guest experiences became digital"].map(
              (item) => (
                <div key={item} className="rounded-2xl bg-white/10 px-5 py-4 text-lg font-bold">
                  ✓ {item}
                </div>
              )
            )}
          </div>

          <p className="mt-6 text-2xl font-bold text-[#E8C686]">
            But the physical execution layer was left behind.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 shadow-[0_15px_40px_rgba(8,42,70,0.07)]">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
          Our vision
        </p>

        <h2 className="mt-4 text-4xl font-black leading-tight text-[#082A46]">
          Turn every turnover into an opportunity.
        </h2>

        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {evolution.map((item, index) => (
            <div key={item} className="relative">
              {index < evolution.length - 1 && (
                <div className="absolute right-[-10px] top-1/2 z-10 hidden h-px w-5 bg-[#D4A84F] md:block" />
              )}

              <div className="flex min-h-24 items-center rounded-2xl bg-[#E8C686]/20 p-5">
                <p className="text-lg font-bold leading-snug text-[#082A46]">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[2rem] bg-[#082A46] p-6 text-white">
          <p className="text-3xl font-black">
            From Cleaners → Operators → Owners
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 shadow-[0_15px_40px_rgba(8,42,70,0.07)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
            Tomorrow
          </p>

          <h3 className="mt-4 text-3xl font-black leading-tight text-[#082A46]">
            A service professional builds more than task history.
          </h3>

          <div className="mt-6 grid gap-3">
            {workerFuture.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#E8C686]/20 px-4 py-3 text-sm font-bold text-[#082A46]"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#082A46] p-7 text-white shadow-[0_20px_60px_rgba(8,42,70,0.18)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8C686]">
            Humanizing hospitality
          </p>

          <h3 className="mt-4 text-3xl font-black leading-tight">
            Behind every perfect stay there is a person who made it possible.
          </h3>

          <div className="mt-6 space-y-3 text-xl font-bold">
            <p>Guest appreciation</p>
            <p className="text-[#E8C686]">↓</p>
            <p>Recognition & tips</p>
            <p className="text-[#E8C686]">↓</p>
            <p>Worker growth</p>
            <p className="text-[#E8C686]">↓</p>
            <p>Financial empowerment</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 shadow-[0_15px_40px_rgba(8,42,70,0.07)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
            Future platform
          </p>

          <h3 className="mt-4 text-3xl font-black leading-tight text-[#082A46]">
            AI + Operations + Financial Infrastructure.
          </h3>

          <div className="mt-6 grid gap-3">
            {platformFuture.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#E8C686]/20 px-4 py-3 text-sm font-bold text-[#082A46]"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] bg-[#082A46] p-8 text-center shadow-[0_20px_60px_rgba(8,42,70,0.18)]">
        <p className="text-3xl font-black text-white">
          The next generation of hospitality companies will not only manage
          properties.
        </p>

        <p className="mt-3 text-2xl font-bold text-[#E8C686]">
          They will empower the people who make those properties unforgettable.
        </p>
      </div>
    </div>
  );
}
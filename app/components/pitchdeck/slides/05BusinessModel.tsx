const phases = [
  {
    number: "01",
    label: "TODAY",
    title: "STR Turnover Operations",
    subtitle: "Operational partner for short-term rental operators.",
    revenue: "Revenue: Pay per completed turnover",
    items: [
      "Turnover execution",
      "Cleaner coordination",
      "Guest-readiness standards",
      "Quality verification",
      "Inventory support",
    ],
  },
  {
    number: "02",
    label: "TOMORROW",
    title: "Cleaning Intelligence Platform",
    subtitle:
      "Turning real operational workflows into hospitality infrastructure.",
    revenue: "Revenue: Units + intelligence tools",
    items: [
      "Operational dashboards",
      "Quality intelligence",
      "PMS integrations",
      "Performance insights",
      "Portfolio management",
    ],
  },
  {
    number: "03",
    label: "FUTURE",
    title: "Worker Financial Infrastructure",
    subtitle:
      "Creating identity, reputation and financial access for hospitality workers.",
    revenue: "Revenue: Payments + financial ecosystem",
    items: [
      "Instant payments",
      "Worker profiles",
      "Tips & recognition",
      "Financial history",
      "Growth to ownership",
    ],
  },
];

export default function BusinessModel() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
      
      {/* HEADER */}
      <div className="max-w-5xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
          Business Model Highlight
        </p>

        <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
          From STR Turnovers
          <br />
          to Hospitality Infrastructure.
        </h1>

        <p className="mt-7 max-w-4xl text-xl leading-8 text-[#33546F]">
          Luxe & Pristine started by solving the most critical physical moment
          in short-term rentals — the transition between guests.
        </p>
      </div>


      {/* EVOLUTION */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {phases.map((phase, index) => (
          <div
            key={phase.number}
            className="relative rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 shadow-[0_20px_50px_rgba(8,42,70,0.08)]"
          >
            {index < phases.length - 1 && (
              <div className="absolute -right-5 top-1/2 hidden h-px w-10 bg-[#D4A84F] lg:block" />
            )}

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#082A46] text-sm font-bold text-[#E8C686]">
              {phase.number}
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
              {phase.label}
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-[#082A46]">
              {phase.title}
            </h2>

            <p className="mt-4 min-h-20 text-base leading-7 text-[#33546F]">
              {phase.subtitle}
            </p>


            {/* REVENUE */}
            <div className="mt-6 rounded-2xl bg-[#082A46] p-5">
              <p className="text-lg font-bold text-white">
                {phase.revenue}
              </p>
            </div>


            {/* ITEMS */}
            <div className="mt-6 grid gap-3">
              {phase.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#E8C686]/20 px-4 py-3 text-sm font-bold text-[#082A46]"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* BUSINESS ENGINE */}
      <div className="mt-10 rounded-[2rem] bg-[#082A46] p-8 shadow-[0_20px_60px_rgba(8,42,70,0.2)]">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#E8C686]">
              The business engine
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-white">
              Every turnover creates revenue today —
              and intelligence for tomorrow.
            </h2>
          </div>


          <div className="rounded-[2rem] bg-white/10 p-6">
            <div className="space-y-4 text-xl font-bold text-white">
              <p>More reservations</p>
              <p className="text-[#E8C686]">↓</p>
              <p>More guest rotations</p>
              <p className="text-[#E8C686]">↓</p>
              <p>More turnovers</p>
              <p className="text-[#E8C686]">↓</p>
              <p className="text-[#E8C686]">
                More operational data
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* CLOSE */}
      <div className="mt-7 rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 text-center">
        <p className="text-3xl font-black text-[#082A46]">
          We don't replace cleaning companies.
        </p>

        <p className="mt-3 text-2xl font-bold text-[#B28435]">
          We build the infrastructure that helps them scale.
        </p>
      </div>

    </div>
  );
}
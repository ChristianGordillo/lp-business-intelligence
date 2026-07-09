const capabilities = [
  "Smart scheduling",
  "Workforce coordination",
  "Quality standards",
  "Inspections",
  "Issue detection",
  "Inventory intelligence",
  "Performance tracking",
  "Payments",
];

const fragmented = ["WhatsApp", "Photos", "Spreadsheets", "Human memory"];

const outputs = [
  "Guest-ready properties",
  "Operational visibility",
  "Cleaner performance",
  "Turnover intelligence",
];

export default function UniqueSolution() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
          The Unique Solution
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
          Cleaning Intelligence:
          <br />
          the operating system
          <br />
          behind every stay.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-[#33546F]">
          Luxe & Pristine transforms short-term rental turnovers from manual
          tasks into intelligent hospitality operations.
        </p>

        <div className="mt-8 rounded-[2rem] bg-[#082A46] p-7 text-white">
          <p className="text-2xl font-bold">
            Not another task management tool.
          </p>
          <p className="mt-3 text-base leading-7 text-white/75">
            A system built from real STR operations and the complexity between
            checkout and check-in.
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3]/95 p-7 shadow-[0_20px_60px_rgba(8,42,70,0.10)]">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
          From fragmented execution to one intelligence layer
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-[1fr_auto_1.2fr_auto_1fr] md:items-center">
          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B28435]">
              Today
            </p>

            {fragmented.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#E8C686]/25 px-4 py-3 text-sm font-bold text-[#082A46]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="hidden text-3xl font-bold text-[#B28435] md:block">
            →
          </div>

          <div className="rounded-[2rem] bg-[#082A46] p-7 text-center text-white shadow-[0_15px_45px_rgba(8,42,70,0.18)]">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E8C686]">
              L&P
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Cleaning Intelligence Engine
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Connects properties, operators, cleaning companies and service
              teams into one execution platform.
            </p>
          </div>

          <div className="hidden text-3xl font-bold text-[#B28435] md:block">
            →
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B28435]">
              Output
            </p>

            {outputs.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-bold text-[#082A46] ring-1 ring-[#E8C686]/35"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#E8C686]/35 bg-white/60 px-4 py-3 text-sm font-bold text-[#082A46]"
            >
              ✓ {item}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-[#082A46] p-6 text-white">
          <p className="text-lg font-bold text-[#E8C686]">
            Cleaning Execution → Cleaning Intelligence → AI-Powered Operations
            → Financial Infrastructure
          </p>
          <p className="mt-3 text-xl font-bold">
            We help teams operate hospitality experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
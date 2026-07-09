const productLayers = [
  {
    number: "01",
    title: "Turnover Operations",
    text: "From reservation to ready status.",
    items: ["Schedules", "Cleaner assignment", "Deadlines", "Execution tracking"],
  },
  {
    number: "02",
    title: "Unit Intelligence",
    text: "Every property builds an operational history.",
    items: ["Previous turnovers", "Recurring issues", "Inventory needs", "Insights"],
  },
  {
    number: "03",
    title: "Quality Layer",
    text: "Transform standards into repeatable systems.",
    items: ["Inspections", "Photo validation", "Issue reporting", "Guest-ready verification"],
  },
  {
    number: "04",
    title: "Workforce Intelligence",
    text: "From cleaners to hospitality operators.",
    items: ["Profiles", "Reliability", "Recognition", "Growth opportunities"],
  },
  {
    number: "05",
    title: "Embedded Payments",
    text: "The foundation for financial empowerment.",
    items: ["Payment tracking", "Tips", "Payout readiness", "Future wallet"],
  },
];

const todayItems = ["Units", "Teams", "Turnovers", "Quality", "Payments"];
const tomorrowItems = ["Risks", "Demand", "Issues", "Performance", "Guest experience"];

export default function ProductTeaser() {
  return (
    <div className="mx-auto min-h-[calc(100vh-8rem)] max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
            Product Teaser
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
            Built inside real operations.
            <br />
            Designed to scale them.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#33546F]">
            Luxe & Pristine is turning everyday hospitality execution into a
            data-driven operating system.
          </p>

          <div className="mt-8 rounded-[2rem] bg-[#082A46] p-7 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8C686]">
              The Guest-Readiness Command Center
            </p>
            <p className="mt-4 text-2xl font-bold leading-snug">
              One platform where operators and cleaning companies manage what
              happens between checkout and check-in.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {productLayers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-[2rem] border border-[#E8C686]/35 bg-[#FAF8F3]/95 p-5 shadow-[0_10px_35px_rgba(8,42,70,0.06)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#082A46] text-sm font-bold text-[#E8C686]">
                  {layer.number}
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[#082A46]">
                    {layer.title}
                  </h2>

                  <p className="mt-1 text-sm font-semibold text-[#33546F]">
                    {layer.text}
                  </p>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {layer.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-[#E8C686]/20 px-4 py-2 text-xs font-bold text-[#082A46]"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <div className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3]/95 p-7 shadow-[0_10px_35px_rgba(8,42,70,0.06)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
            Today
          </p>

          <h3 className="mt-3 text-3xl font-bold text-[#082A46]">
            Operational Platform
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {todayItems.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#E8C686]/25 px-4 py-2 text-sm font-bold text-[#082A46]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden items-center text-4xl font-bold text-[#B28435] lg:flex">
          →
        </div>

        <div className="rounded-[2rem] bg-[#082A46] p-7 text-white shadow-[0_15px_45px_rgba(8,42,70,0.18)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8C686]">
            Tomorrow
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            AI Cleaning Intelligence
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {tomorrowItems.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xl font-bold text-[#082A46]">
        We are not building software around an idea. We built the software our
        operation needed to scale.
      </p>
    </div>
  );
}
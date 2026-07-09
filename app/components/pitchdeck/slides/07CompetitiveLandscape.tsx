const stack = [
  {
    title: "PMS Platforms",
    examples: "Guesty • Hostaway • OwnerRez • Hospitable",
    builtFor: ["Reservations", "Calendars", "Guest communication", "Channel management"],
    limitation: "Limited visibility into what actually happens inside the property before arrival.",
  },
  {
    title: "Task Management Tools",
    examples: "Breezeway • Turno • Operations apps",
    builtFor: ["Task creation", "Scheduling", "Checklists", "Completion status"],
    limitation: "The relationship remains: Task → Cleaner → Completed.",
  },
  {
    title: "Luxe & Pristine",
    examples: "Cleaning Intelligence Platform",
    builtFor: ["Physical readiness", "Operational data", "Workforce intelligence", "Payments layer"],
    limitation: "Transforms every turnover into intelligence.",
    featured: true,
  },
];

const differentiation = [
  {
    number: "01",
    title: "Built from execution",
    text: "Real units, real cleaners, real problems, real payments and real guest expectations.",
  },
  {
    number: "02",
    title: "Beyond task management",
    text: "Not only: Was the cleaning completed? But: Is this property ready to create a 5-star experience?",
  },
  {
    number: "03",
    title: "Data becomes intelligence",
    text: "Every turnover improves property insights, quality prediction, workforce performance and automation.",
  },
  {
    number: "04",
    title: "Workforce empowerment",
    text: "Cleaner profile → recognition → performance history → financial access → operator / owner.",
  },
];

export default function CompetitiveLandscape() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
      <div className="grid items-end gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
            Competitive Landscape
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
            The missing layer
            <br />
            between property
            <br />
            management and
            <br />
            physical execution.
          </h1>
        </div>

        <div className="rounded-[2rem] bg-[#082A46] p-7 text-white shadow-[0_20px_60px_rgba(8,42,70,0.18)]">
          <p className="text-2xl font-bold">
            The STR tech ecosystem was built around reservations, pricing and guests.
          </p>
          <p className="mt-3 text-xl font-bold text-[#E8C686]">
            Not around the teams making every stay possible.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {stack.map((item) => (
          <div
            key={item.title}
            className={`rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(8,42,70,0.07)] ${
              item.featured
                ? "bg-[#082A46] text-white"
                : "border border-[#E8C686]/40 bg-[#FAF8F3]"
            }`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-[0.3em] ${
                item.featured ? "text-[#E8C686]" : "text-[#B28435]"
              }`}
            >
              {item.examples}
            </p>

            <h2
              className={`mt-4 text-3xl font-black leading-tight ${
                item.featured ? "text-white" : "text-[#082A46]"
              }`}
            >
              {item.title}
            </h2>

            <div className="mt-5 grid gap-2">
              {item.builtFor.map((feature) => (
                <div
                  key={feature}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold ${
                    item.featured
                      ? "bg-white/10 text-white"
                      : "bg-[#E8C686]/20 text-[#082A46]"
                  }`}
                >
                  ✓ {feature}
                </div>
              ))}
            </div>

            <div
              className={`mt-5 rounded-2xl p-4 ${
                item.featured ? "bg-[#D4A84F] text-[#082A46]" : "bg-white/70 text-[#33546F]"
              }`}
            >
              <p className="text-sm font-bold leading-6">{item.limitation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {differentiation.map((item) => (
          <div
            key={item.number}
            className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-5 shadow-[0_10px_35px_rgba(8,42,70,0.06)]"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#082A46] text-xs font-bold text-[#E8C686]">
              {item.number}
            </div>

            <h3 className="text-xl font-black leading-tight text-[#082A46]">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#33546F]">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] bg-[#082A46] p-7 text-center shadow-[0_20px_60px_rgba(8,42,70,0.18)]">
        <p className="text-3xl font-black text-white">
          PMS platforms manage bookings. Task platforms manage work.
        </p>
        <p className="mt-3 text-2xl font-bold text-[#E8C686]">
          Luxe & Pristine powers the physical hospitality experience.
        </p>
      </div>
    </div>
  );
}
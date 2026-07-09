const tractionMetrics = [
  {
    label: "Active units",
    value: "38",
    text: "Across active STR operations.",
  },
  {
    label: "Operators / clients",
    value: "3",
    text: "Current hospitality partners.",
  },
  {
    label: "Locations",
    value: "5",
    text: "Miami STR buildings and zones.",
  },
  {
    label: "Turnovers completed",
    value: "417+",
    text: "Real physical guest-readiness moments.",
  },
];

const volumeMetrics = [
  "$30K+ turnover revenue processed",
  "$20K+ distributed to hospitality workers",
  "432 operational workflows managed",
  "Thousands of data points captured",
];

const intelligenceItems = [
  "Turnover velocity per property",
  "Building demand patterns",
  "Unit performance ranking",
  "Workforce allocation history",
  "Payment intelligence",
  "Quality & issue tracking",
];

const locations = [
  "501 First",
  "NoMad Residences",
  "The Club Brickell",
  "Westchester",
];

export default function Traction() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
      <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
            Traction & Validation
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
            Built from real
            <br />
            STR operations.
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#33546F]">
            Luxe & Pristine is not a concept. We started by operating the
            physical layer of hospitality and building technology from real
            execution.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#082A46] p-7 text-white shadow-[0_20px_60px_rgba(8,42,70,0.18)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8C686]">
            Miami STR Operations — Active Today
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {locations.map((location) => (
              <div
                key={location}
                className="rounded-2xl bg-white/10 px-5 py-4 text-lg font-bold"
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-9 grid gap-5 lg:grid-cols-4">
        {tractionMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 shadow-[0_15px_40px_rgba(8,42,70,0.07)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
              {metric.label}
            </p>

            <p className="mt-5 text-6xl font-black text-[#082A46]">
              {metric.value}
            </p>

            <p className="mt-4 text-sm font-semibold leading-6 text-[#33546F]">
              {metric.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[#082A46] p-7 text-white shadow-[0_20px_60px_rgba(8,42,70,0.18)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8C686]">
            Real operational volume captured
          </p>

          <div className="mt-6 grid gap-3">
            {volumeMetrics.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 px-5 py-4 text-lg font-bold"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 shadow-[0_15px_40px_rgba(8,42,70,0.07)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
            Cleaning Intelligence already generated
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-[#082A46]">
            Every turnover creates proprietary operational intelligence.
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {intelligenceItems.map((item) => (
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

      <div className="mt-7 rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 text-center shadow-[0_15px_40px_rgba(8,42,70,0.07)]">
        <p className="text-3xl font-black text-[#082A46]">
          We have already captured the invisible moment.
        </p>

        <p className="mt-3 text-2xl font-bold text-[#B28435]">
          Every new turnover makes our Cleaning Intelligence smarter.
        </p>
      </div>
    </div>
  );
}
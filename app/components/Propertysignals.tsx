const cleaningSignals = [
  {
    building: "501 First Residences",
    location: "Downtown Miami",
    note:
      "Cleaning Intelligence since April 27 2026.",

    signals: [
      {
        label: "Active units",
        value: "22",
        description:
          "Properties continuously generating operational data across the building.",
      },
      {
        label: "Turnovers tracked",
        value: "234",
        description:
          "Turnovers transformed into structured operational intelligence.",
      },
      {
        label: "Daily average",
        value: "3.6",
        description:
          "Average operational workload generated every day.",
      },
      {
        label: "Highest demand day",
        value: "14",
        description:
          "Maximum turnover volume recorded in a single operating day.",
      },
    ],
  },

  {
    building: "NoMad Residences",
    location: "Wynwood",
    note:
      "Cleaning Intelligence since May 14 2026.",

    signals: [
      {
        label: "Active units",
        value: "13",
        description:
          "Properties continuously generating operational data across the building.",
      },
      {
        label: "Turnovers tracked",
        value: "49",
        description:
          "Turnovers transformed into structured operational intelligence.",
      },
      {
        label: "Daily average",
        value: "1",
        description:
          "Average operational workload generated every day.",
      },
      {
        label: "Highest demand day",
        value: "4",
        description:
          "Maximum turnover volume recorded in a single operating day.",
      },
    ],
  },
];

export default function Propertysignals() {
  return (
    <section id="intelligence" scroll-mt-24 className="bg-[#082A46] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#E8C686]">
                Cleaning Intelligence
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Every turnover becomes
                <br />
                Cleaning intelligence.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/75 md:text-xl">
                Every turnover generates data. We transform it into Cleaning Intelligence.
            </p>
            </div>

        <div className="mt-14 space-y-14">
          {cleaningSignals.map((property) => (
            <div key={property.building}>
              <div className="mb-6 flex flex-col justify-between gap-3 border-b border-white/15 pb-5 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8C686]">
                    {property.location}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                    {property.building}
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-6 text-white/60">
                  {property.note}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                {property.signals.map((signal) => (
                  <article
                    key={signal.label}
                    className="rounded-[1.5rem] bg-white/7 p-6 ring-1 ring-white/10 backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8C686]">
                      {signal.label}
                    </p>

                    <p className="mt-4 text-4xl font-bold text-white">
                      {signal.value}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-white/70">
                      {signal.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
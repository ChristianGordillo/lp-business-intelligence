import Image from "next/image";

const buildings = [
  {
    name: "501 First Residences",
    location: "Downtown Miami",
    image: "/buildings/501-first.png",
    measuredSince: "Measured since May 01 2026",
    units: 22,
    intensity: "10.5",
    intensityLabel: "turnovers per active unit",
    peakDays: [
      { day: "Sun", value: 31 },
      { day: "Mon", value: 27 },
      { day: "Tue", value: 24 },
    ],
    movement: "High concentration",
    pareto: "Top units drive most activity",
    profile: [
      "High turnover concentration",
      "Higher activity per active unit",
      "Strong recurrence pattern",
    ],
  },
  {
    name: "NoMad Residences",
    location: "Wynwood",
    image: "/buildings/nomad-wynwood.png",
    measuredSince: "New",
    units: 14,
    intensity: "3.5",
    intensityLabel: "turnovers per active unit",
    peakDays: [
      { day: "Mon", value: 8 },
      { day: "Sun", value: 7 },
      { day: "Fri", value: 6 },
    ],
    movement: "More distributed",
    pareto: "Activity spread across units",
    profile: [
      "Different demand rhythm",
      "Lifestyle-driven guest profile",
      "More distributed unit movement",
    ],
  },
];

function MiniBars({
  data,
}: {
  data: {
    day: string;
    value: number;
  }[];
}) {
  const max = Math.max(...data.map((item) => item.value));

  return (
    <div className="mt-3 flex items-end gap-2">
      {data.map((item) => (
        <div key={item.day} className="flex flex-col items-center gap-2">
          <div
            className="w-8 rounded-t-md bg-[#082A46]"
            style={{ height: `${(item.value / max) * 46}px` }}
          />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#33546F]">
            {item.day}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function PropertyIntelligence() {
  return (
    <section
      id="buildings"
      className="scroll-mt-24 bg-[#FAF8F3] px-6 pb-24 pt-10 md:px-12 md:pt-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#082A46] md:text-6xl">
            Every property behaves differently.
          </h2>

          <p className="mt-4 text-lg leading-8 text-[#33546F] md:text-xl">
            Cleaning Intelligence starts by understanding each building, its
            zone, the way units move over time and the real experience behind
            every stay.
          </p>
        </div>

        <div className="mt-9 grid gap-7 md:grid-cols-2">
          {buildings.map((building) => (
            <article
              key={building.name}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#E8C686]/40"
            >
              <div className="relative h-[210px] overflow-hidden bg-[#F7F3EA] md:h-[230px]">
                <Image
                  src={building.image}
                  alt={building.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />

                <div
                    className="
                        absolute left-5 top-5
                        rounded-full
                        border border-[#E8C686]/30
                        bg-[#082A46]/95
                        px-4 py-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#E8C686]
                        backdrop-blur
                    "
                    >
                  {building.measuredSince}
                </div>
              </div>

              <div className="p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B28435]">
                  {building.location}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#082A46] md:text-3xl">
                  {building.name}
                </h3>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-[#F7F3EA] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B28435]">
                      Intensity
                    </p>
                    <p className="mt-2 text-2xl font-bold text-[#082A46]">
                      {building.intensity}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#33546F]">
                      {building.intensityLabel}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F7F3EA] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B28435]">
                      Peak days
                    </p>
                    <MiniBars data={building.peakDays} />
                  </div>

                  <div className="rounded-2xl bg-[#F7F3EA] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B28435]">
                      Movement
                    </p>
                    <p className="mt-2 text-base font-bold text-[#082A46]">
                      {building.movement}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#33546F]">
                      {building.pareto}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {building.profile.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-[#33546F]"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#B28435]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
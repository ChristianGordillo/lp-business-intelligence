import Image from "next/image";

const dianaItems = [
  "Guest readiness standards",
  "Presentation details",
  "Quality expectations",
  "Turnover workflows",
  "Team coordination",
  "5-star arrival experience",
];

const christianItems = [
  "Operational systems",
  "Process optimization",
  "Data intelligence",
  "Workflow automation",
  "Scalable execution models",
];

const lifecycle = [
  "Reservation changes",
  "Guest checkout",
  "Turnover execution",
  "Linen & towel management",
  "Inventory control",
  "Replacement requests",
  "Incident reporting",
  "Quality validation",
  "Guest arrival",
];

export default function Team() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">

      {/* HEADER */}
      <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">

        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
            Team
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
            The team behind
            <br />
            hospitality execution
            <br />
            intelligence.
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#33546F]">
            Built by operators who understand the complexity behind every
            guest-ready experience.
          </p>
        </div>


        {/* IMAGE */}
        <div className="overflow-hidden rounded-[2rem] border border-[#E8C686]/35 bg-[#FAF8F3] shadow-[0_20px_60px_rgba(8,42,70,0.12)]">
          <Image
            src="/people/final-people.png"
            alt="Luxe and Pristine team"
            width={900}
            height={560}
            priority
            className="h-[360px] w-full object-cover object-center"
          />
        </div>

      </div>


      {/* FOUNDERS */}
      <div className="mt-8 grid gap-5 lg:grid-cols-2">

        {/* DIANA */}
        <div className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 shadow-[0_15px_40px_rgba(8,42,70,0.07)]">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
            Co-Founder | Guest Experience & Turnover Operations
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#082A46]">
            Diana Annichiarico
          </h2>

          <p className="mt-4 text-xl font-bold text-[#B28435]">
            Turning STR turnovers into hospitality experiences.
          </p>

          <p className="mt-4 leading-7 text-[#33546F]">
            Diana leads the operational standards behind Luxe & Pristine.
            Her belief: a turnover is not a cleaning task — it is the first
            impression of every stay.
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {dianaItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#E8C686]/20 px-4 py-3 text-sm font-bold text-[#082A46]"
              >
                ✓ {item}
              </div>
            ))}
          </div>

        </div>


        {/* CHRISTIAN */}
        <div className="rounded-[2rem] bg-[#082A46] p-7 text-white shadow-[0_20px_60px_rgba(8,42,70,0.18)]">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8C686]">
            Co-Founder | Operations Systems & Technology
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Christian Gordillo
          </h2>

          <p className="mt-4 text-xl font-bold text-[#E8C686]">
            Turning physical operations into scalable intelligence.
          </p>

          <p className="mt-4 leading-7 text-white/75">
            Industrial Engineer building the technology layer behind
            hospitality execution — transforming workflows into systems,
            automation and intelligence.
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {christianItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold"
              >
                ✓ {item}
              </div>
            ))}
          </div>

        </div>

      </div>


      {/* WHY US */}
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

        <div className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 shadow-[0_15px_40px_rgba(8,42,70,0.07)]">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
            Why us
          </p>

          <h3 className="mt-4 text-3xl font-black leading-tight text-[#082A46]">
            We operate the entire physical journey between checkout and check-in.
          </h3>


          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {lifecycle.map((item) => (
              <div
                key={item}
                className="flex min-h-20 items-center rounded-2xl bg-[#E8C686]/20 p-4"
              >
                <p className="text-sm font-bold leading-snug text-[#082A46]">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>


        {/* ADVANTAGE */}
        <div className="rounded-[2rem] bg-[#082A46] p-7 text-white shadow-[0_20px_60px_rgba(8,42,70,0.18)]">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8C686]">
            Our advantage
          </p>

          <h3 className="mt-4 text-3xl font-black leading-tight">
            We are not building software from assumptions.
          </h3>

          <p className="mt-5 text-2xl font-bold text-[#E8C686]">
            We are transforming real hospitality execution into infrastructure.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Operations + Hospitality standards + Technology.
          </p>

          <p className="mt-5 text-xl font-bold">
            Creating the next generation of Turnover Operators.
          </p>

        </div>

      </div>

    </div>
  );
}
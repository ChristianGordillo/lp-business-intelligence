const missingLayerQuestions = [
  "Is the unit truly guest-ready?",
  "Who prepared it?",
  "What failed?",
  "What keeps repeating?",
];

const problemCards = [
  {
    number: "01",
    eyebrow: "Mission-critical",
    title: "Turnovers are managed like simple tasks.",
    body: "Cleaning, inspection, inventory, maintenance and guest preparation still run through WhatsApp, photos and memory.",
  },
  {
    number: "02",
    eyebrow: "Cannot scale",
    title: "Cleaning companies stay trapped as vendors.",
    body: "5 units works. 50 units becomes chaos. 100+ units breaks without systems, quality control, payments and data.",
  },
  {
    number: "03",
    eyebrow: "Knowledge disappears",
    title: "Standards live inside people's heads.",
    body: "How to prepare a 5-star arrival is rarely systematized. When the person leaves, the system leaves.",
  },
  {
    number: "04",
    eyebrow: "Invisible workforce",
    title: "The people creating the experience have no operating identity.",
    body: "No reputation, no recognition, no professional history and limited financial tools.",
  },
];

const marketFlow = [
  "More STR buildings",
  "More owners",
  "More operators",
  "More service teams",
  "More turnovers",
];

export default function BigProblemMarket() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
            The Big Problem + Market Opportunity
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
            Hospitality became digital.
            <br />
            Physical operations did not.
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#33546F]">
            STR platforms optimized bookings, pricing and reservations. But
            every guest experience still depends on a manual, invisible
            operation between checkout and check-in.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3]/95 p-6 shadow-[0_20px_60px_rgba(8,42,70,0.10)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
            The missing layer
          </p>

          <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="rounded-2xl bg-[#E8C686]/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B28435]">
                PMS platforms
              </p>
              <p className="mt-2 text-lg font-bold text-[#082A46]">
                Guest checks in at 4 PM
              </p>
            </div>

            <div className="text-3xl font-bold text-[#B28435]">→</div>

            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-[#E8C686]/35">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B28435]">
                Guest experience
              </p>
              <p className="mt-2 text-lg font-bold text-[#082A46]">
                Was it 5-star ready?
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-[2rem] bg-[#082A46] p-5 text-center text-white">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8C686]">
              Missing
            </p>
            <p className="mt-2 text-2xl font-black">
              Physical Readiness Intelligence
            </p>
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {missingLayerQuestions.map((item) => (
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

      <div className="mt-7 rounded-[2rem] bg-[#082A46] p-6 text-white shadow-[0_15px_45px_rgba(8,42,70,0.18)]">
        <p className="text-2xl font-bold">
          Every checkout creates a new operational race.
        </p>
        <p className="mt-2 text-xl font-bold text-[#E8C686]">
          But the system managing it is still fragmented, invisible and manual.
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-4">
        {problemCards.map((problem) => (
          <div
            key={problem.number}
            className="rounded-[2rem] border border-[#E8C686]/35 bg-[#FAF8F3]/95 p-5 shadow-[0_10px_35px_rgba(8,42,70,0.06)]"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#082A46] text-xs font-bold text-[#E8C686]">
              {problem.number}
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B28435]">
              {problem.eyebrow}
            </p>

            <h2 className="mt-3 text-xl font-bold leading-tight text-[#082A46]">
              {problem.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#33546F]">
              {problem.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3]/95 p-6 shadow-[0_10px_35px_rgba(8,42,70,0.06)]">
        <div className="grid items-center gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
              Market Opportunity
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#082A46]">
              STR growth makes the physical operations gap bigger.
            </h2>
          </div>

          <div>
            <div className="grid gap-3 md:grid-cols-5">
              {marketFlow.map((item, index) => (
                <div key={item} className="relative">
                  {index < marketFlow.length - 1 && (
                    <div className="absolute right-[-10px] top-1/2 z-10 hidden h-px w-5 bg-[#D4A84F] md:block" />
                  )}

                  <div className="flex min-h-20 items-center rounded-2xl bg-[#E8C686]/20 p-4">
                    <p className="text-sm font-bold leading-snug text-[#082A46]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xl font-bold text-[#082A46]">
              Every turnover creates operational data. Today, that intelligence
              is lost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
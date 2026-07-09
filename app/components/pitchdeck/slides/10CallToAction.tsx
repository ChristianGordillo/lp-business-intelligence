import Image from "next/image";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.54 1.75 6.52L3 29l6.64-1.74A12.9 12.9 0 0 0 16.04 29C23.22 29 29 23.18 29 16S23.22 3 16.04 3Zm0 23.72c-2.02 0-4-.54-5.73-1.57l-.41-.24-3.94 1.03 1.05-3.84-.27-.43A10.7 10.7 0 0 1 5.3 16c0-5.92 4.82-10.74 10.74-10.74S26.72 10.08 26.72 16 21.96 26.72 16.04 26.72Zm5.88-8.04c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.52-.16-.74.16-.21.32-.85 1.04-1.04 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.21 2.27 3.46 5.5 4.85.77.33 1.37.53 1.84.68.77.25 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

const todayItems = [
  "Active STR operations",
  "Real hospitality customers",
  "Real turnover execution",
  "Workforce coordination",
  "Payment flows",
  "Operational data",
];

const roadmap = [
  {
    number: "01",
    title: "Scale Operations",
    text: "Expand STR turnover partnerships across hospitality markets.",
  },
  {
    number: "02",
    title: "Cleaning Intelligence Platform",
    text: "Transform operational knowledge into automation, AI insights and predictive operations.",
  },
  {
    number: "03",
    title: "Worker Economy Layer",
    text: "Recognition, faster payments, financial tools and paths to business ownership.",
  },
];

export default function CallToAction() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center">

      {/* HERO */}
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">

        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#B28435]">
            The Opportunity Ahead
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
            From turnover operations
            <br />
            to infrastructure
            <br />
            powering hospitality.
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#33546F]">
            Luxe & Pristine is building the intelligence layer behind the
            physical world of hospitality.
          </p>


          {/* CTA */}
          <a
            href="https://wa.me/17864482284"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-10
              inline-flex
              items-center
              gap-2.5
              rounded-full
              bg-[#D4A84F]
              px-8
              py-4
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#082A46]
              hover:shadow-lg
            "
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            Let's Talk
          </a>

        </div>


        {/* IMAGE */}
        <div className="overflow-hidden rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] shadow-[0_20px_60px_rgba(8,42,70,0.14)]">

          <Image
            src="/people/lets-talk.png"
            alt="Luxe & Pristine future"
            width={900}
            height={650}
            priority
            className="h-[430px] w-full object-cover object-center"
          />

          <div className="p-7">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
              Where we are going
            </p>

            <p className="mt-4 text-3xl font-black leading-tight text-[#082A46]">
              Building the operating layer behind hospitality experiences.
            </p>
          </div>

        </div>

      </div>


      {/* TODAY */}
      <div className="mt-8 rounded-[2rem] border border-[#E8C686]/40 bg-[#FAF8F3] p-7 shadow-[0_15px_40px_rgba(8,42,70,0.07)]">

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
          Where we are today
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-6">
          {todayItems.map((item) => (
            <div
              key={item}
              className="flex min-h-20 items-center rounded-2xl bg-[#E8C686]/20 p-4"
            >
              <p className="text-sm font-bold text-[#082A46]">
                ✓ {item}
              </p>
            </div>
          ))}
        </div>

      </div>


      {/* ROADMAP */}
      <div className="mt-8 grid gap-5 lg:grid-cols-3">

        {roadmap.map((item) => (
          <div
            key={item.number}
            className="rounded-[2rem] bg-[#082A46] p-7 text-white shadow-[0_20px_60px_rgba(8,42,70,0.18)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A84F] text-sm font-bold text-[#082A46]">
              {item.number}
            </div>

            <h3 className="mt-5 text-2xl font-black">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              {item.text}
            </p>

          </div>
        ))}

      </div>


      {/* CLOSE */}
      <div className="mt-8 rounded-[2rem] bg-[#082A46] p-8 text-center">

        <p className="text-4xl font-black text-white">
          Luxe & Pristine
        </p>

        <p className="mt-3 text-2xl font-bold text-[#E8C686]">
          Powering the people and operations behind every unforgettable stay.
        </p>

      </div>

    </div>
  );
}
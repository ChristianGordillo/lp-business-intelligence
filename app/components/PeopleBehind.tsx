import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Clear work",
    text: "Each person knows the unit, the expectations, the timing and the payment.",
    image: "/people/clear-work.png",
  },
  {
    number: "02",
    title: "Fair opportunity",
    text: "We organize work by unit, not by vague hours. More transparency, more respect, more opportunity.",
    image: "/people/fair-opportunity.png",
  },
    {
    number: "03",
    title: "Pristine products",
    text: "Our own cleaning products, laundry, supplies and restocking standards support every guest-ready unit.",
    image: "/people/pristine-readiness.png",
    },
  {
    number: "04",
    title: "Luxe standards",
    text: "Every person is trained to care for the details that create pristine, exceptional experiences.",
    image: "/people/luxe-standards.png",
  },
];

export default function PeopleBehind() {
  return (
    <section id="people" scroll-mt-24 className="bg-[#FAF8F3] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B28435]">
              From cleaners to operators
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight text-[#082A46] md:text-7xl">
              The people behind
              <br />
              every turnover.
            </h2>

            <p className="mt-6 text-2xl font-medium text-[#33546F]">
              Real people. Real work. Real impact.
            </p>

            <div className="mt-6 h-px w-16 bg-[#B28435]" />

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#33546F]">
              Cleaning Intelligence begins with people. We make the work
              clearer, more organized and more dignified for the teams who
              prepare every property.
            </p>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-[2rem] md:h-[430px]">
            <Image
              src="/people/hero-team.png"
              alt="L&P team behind every turnover"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="border-r border-[#E8C686]/50 pr-8 last:border-r-0">
              <div className="relative h-[180px] overflow-hidden rounded-[1.5rem] bg-white">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover object-center"
                />
                
              </div>
                
              <div className="mt-7 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B28435] text-sm font-bold text-white">
                  {pillar.number}
                </span>

                <h3 className="text-2xl font-bold text-[#082A46]">
                  {pillar.title}
                </h3>
              </div>

              <p className="mt-4 text-base leading-7 text-[#33546F]">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#082A46]">
            <div className="grid min-h-[300px] md:grid-cols-[0.95fr_1.05fr]">
                <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#B28435] text-3xl text-[#E8C686]">
                    ♥
                </div>

                <h3 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                    Better work for cleaners.
                    <br />
                    Better operations for everyone.
                    </h3>

                    <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
                    We believe exceptional guest experiences begin with exceptional people.
                    </p>

                <a
                    href="https://wa.me/17864426105?text=Hola%2C%20quiero%20postularme%20para%20trabajar%20con%20Luxe%20%26%20Pristine.%0A%0A%F0%9F%91%A4%20Nombre%3A%0A%F0%9F%93%8D%20Zona%20donde%20vivo%3A%0A%F0%9F%9A%97%20%C2%BFTengo%20veh%C3%ADculo%3F%20(S%C3%AD%20%2F%20No)%0A%F0%9F%A7%B9%20Experiencia%20en%20limpieza%20(Airbnb%2C%20hoteles%20o%20residencial)%3A%0A%F0%9F%93%85%20Disponibilidad%3A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#D4A84F] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#082A46]"
                    >
                    Join the L&amp;P Team →
                    </a>

                    <p className="mt-4 text-sm text-white/55">
                    Always hiring people who care about quality.
                    </p>
                </div>

                <div className="relative min-h-[300px]">
                <Image
                    src="/people/final-people.png"
                    alt="Better work for cleaners and better visibility for operators"
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#082A46] via-[#082A46]/20 to-transparent md:hidden" />
                </div>
            </div>
            </div>
      </div>
    </section>
  );
}
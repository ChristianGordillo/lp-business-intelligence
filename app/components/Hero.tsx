import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F3EA]">
      <div className="absolute left-[-140px] top-[-140px] h-[380px] w-[380px] rounded-full bg-[#E8C686]/25 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-140px] h-[460px] w-[460px] rounded-full bg-[#33546F]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-4 px-6 pb-20 pt-24 md:grid-cols-[1fr_1fr] md:px-12">
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8C686]/12 blur-3xl" />

            <Image
              src="/logo.png"
              alt="Luxe & Pristine"
              width={620}
              height={620}
              priority
              className="relative h-auto w-[340px] md:w-[520px]"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#082A46] md:text-7xl">
            Cleaning Intelligence
            <br />
            for Short-Term Rentals
          </h1>

          <p className="mt-7 max-w-xl text-2xl font-semibold leading-snug text-[#B28435] md:text-3xl">
            It&apos;s not just cleaning.
            <br />
            It&apos;s an experience.
          </p>

          <p className="mt-6 text-xl font-medium text-[#33546F] md:text-2xl">
            From cleaners{" "}
            <span className="text-[#B28435]">to operators.</span>
          </p>

          <p className="mt-4 max-w-xl text-lg leading-8 text-[#33546F] md:text-xl">
            Understand properties, people and patterns behind your business.
          </p>

          <div className="mt-8 h-px w-full max-w-md bg-gradient-to-r from-[#B28435] via-[#E8C686] to-transparent" />
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import EditorialHeader from "@/app/components/stories/EditorialHeader";
import Footer from "@/app/components/Footer";
import { latestStory, stories } from "@/app/content/stories";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Illustrated stories inspired by the people, homes and invisible details behind every turnover.",
  alternates: {
    canonical: "/stories",
  },
  openGraph: {
    title: "Stories | Luxe & Pristine",
    description:
      "Illustrated stories inspired by the people, homes and invisible details behind every turnover.",
    url: "/stories",
    type: "website",
  },
};

export default function StoriesPage() {
  const featuredStory = latestStory;

  const archiveStories = stories.filter(
    (story) => story.slug !== featuredStory?.slug,
  );

  return (
    <>
      <EditorialHeader />

      <main className="min-h-screen bg-[var(--lp-paper)]">
        {/* Library introduction */}
        <section className="px-6 pb-14 pt-36 md:px-12 md:pb-20 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--lp-gold)]">
              The Luxe &amp; Pristine Library
            </p>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <h1 className="font-editorial max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.03em] text-[var(--lp-navy)] sm:text-7xl lg:text-8xl">
                Stories from
                <br />
                behind the door.
              </h1>

              <div className="max-w-xl lg:pb-2">
                <p className="text-xl leading-9 text-[var(--lp-blue)]">
                  We do not write about cleaning.
                </p>

                <p className="mt-2 text-xl leading-9 text-[var(--lp-blue)]">
                  We write about the people, memories and quiet details that
                  remain after every checkout.
                </p>

                <div className="mt-7 h-px w-20 bg-[var(--lp-gold)]" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured story */}
        {featuredStory && (
          <section className="px-6 pb-20 md:px-12 md:pb-28">
            <div className="mx-auto max-w-7xl">
              <div className="mb-6 flex items-center gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--lp-gold)]">
                  Today&apos;s Story
                </p>

                <div className="h-px flex-1 bg-[var(--lp-border-gold)]" />
              </div>

              <Link
                href={`/stories/${featuredStory.slug}`}
                className="group grid overflow-hidden rounded-[2rem] border border-[var(--lp-border-gold)] bg-[var(--lp-cream)] lg:grid-cols-[1.08fr_0.92fr]"
              >
                <div className="relative min-h-[360px] overflow-hidden sm:min-h-[480px] lg:min-h-[620px]">
                  <Image
                    src={featuredStory.coverImage}
                    alt={featuredStory.coverImageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--lp-navy)]/15 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-center px-7 py-10 sm:px-10 md:px-12 lg:px-14">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--lp-gold)]">
                    {featuredStory.date}
                  </p>

                  <h2 className="font-editorial mt-5 text-5xl font-semibold leading-[0.92] text-[var(--lp-navy)] sm:text-6xl">
                    {featuredStory.title}
                  </h2>

                  <blockquote className="font-editorial mt-7 border-l border-[var(--lp-gold)] pl-5 text-2xl italic leading-9 text-[var(--lp-navy)]">
                    “{featuredStory.quote}”
                  </blockquote>

                  <p className="mt-7 text-lg leading-8 text-[var(--lp-blue)]">
                    {featuredStory.description}
                  </p>

                  <div className="mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--lp-navy)]">
                    Read the story

                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Story archive */}
        <section className="bg-[var(--lp-white)] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--lp-gold)]">
                  The archive
                </p>

                <h2 className="font-editorial mt-4 text-5xl font-semibold text-[var(--lp-navy)] md:text-6xl">
                  More stories are coming.
                </h2>
              </div>

              <p className="hidden max-w-sm text-right text-base leading-7 text-[var(--lp-blue)] md:block">
                The library will grow one story at a time.
              </p>
            </div>

            {archiveStories.length > 0 ? (
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {archiveStories.map((story) => (
                  <Link
                    key={story.slug}
                    href={`/stories/${story.slug}`}
                    className="group"
                  >
                    <div className="relative h-[340px] overflow-hidden rounded-[1.75rem] border border-[var(--lp-border)] bg-[var(--lp-cream)]">
                      <Image
                        src={story.coverImage}
                        alt={story.coverImageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lp-gold)]">
                      {story.date}
                    </p>

                    <h3 className="font-editorial mt-2 text-4xl font-semibold text-[var(--lp-navy)]">
                      {story.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[var(--lp-blue)]">
                      {story.description}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-14 border-y border-[var(--lp-border-gold)] py-14">
                <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
                  <span
                    aria-hidden="true"
                    className="font-editorial text-5xl text-[var(--lp-gold)]"
                  >
                    ✦
                  </span>

                  <div>
                    <p className="font-editorial text-3xl leading-tight text-[var(--lp-navy)] md:text-4xl">
                      Some stories have not happened yet.
                    </p>

                    <p className="mt-3 max-w-2xl text-lg leading-8 text-[var(--lp-blue)]">
                      Others are already waiting quietly inside an apartment,
                      hoping someone will notice them.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
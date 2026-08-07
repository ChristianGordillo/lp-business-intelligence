import Image from "next/image";

import Footer from "@/app/components/Footer";
import EditorialHeader from "@/app/components/stories/EditorialHeader";
import EditorialNote from "@/app/components/stories/EditorialNote";
import StoryIntro from "@/app/components/stories/StoryIntro";
import StoryReflection from "@/app/components/stories/StoryReflection";
import StoryScene from "@/app/components/stories/StoryScene";
import StoryScenesGrid from "@/app/components/stories/StoryScenesGrid";

import type { StoryContent } from "@/app/content/stories";

type StoryPageProps = {
  story: StoryContent;
};

export default function StoryPage({ story }: StoryPageProps) {
  return (
    <>
      <EditorialHeader />

      <main className="min-h-screen bg-[var(--lp-paper)]">
        <StoryIntro
          eyebrow={story.eyebrow}
          title={story.title}
          quote={story.quote}
          description={story.description}
          location={story.location}
          date={story.date}
        >
          <div className="space-y-7">
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[var(--lp-border-gold)] bg-[var(--lp-cream)] sm:min-h-[460px]">
              <Image
                src={story.coverImage}
                alt={story.coverImageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-5 text-lg leading-8 text-[var(--lp-blue)]">
              {story.openingParagraphs.map((paragraph, index) => (
                <p key={`${story.slug}-opening-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </StoryIntro>

        <StoryScenesGrid>
          {story.scenes.map((scene, sceneIndex) => (
            <StoryScene
              key={`${story.slug}-${scene.number}-${sceneIndex}`}
              number={scene.number}
              src={scene.image}
              alt={scene.imageAlt}
              size="strip"
            >
              {scene.title && (
                <h2 className="font-editorial text-2xl font-semibold text-[var(--lp-navy)]">
                  {scene.title}
                </h2>
              )}

              {scene.text.map((paragraph, paragraphIndex) => (
                <p
                  key={`${story.slug}-${scene.number}-${paragraphIndex}`}
                >
                  {paragraph}
                </p>
              ))}
            </StoryScene>
          ))}
        </StoryScenesGrid>

        <StoryReflection>
          {story.reflection.map((line, index) => (
            <span
              key={`${story.slug}-reflection-${index}`}
              className="block"
            >
              {line}
            </span>
          ))}
        </StoryReflection>

        <EditorialNote
          eyebrow={story.editorialNote.eyebrow}
          title={story.editorialNote.title}
          imageSrc={story.editorialNote.image}
          imageAlt={story.editorialNote.imageAlt}
        >
          {story.editorialNote.paragraphs.map((paragraph, index) => (
            <p
              key={`${story.slug}-editorial-${index}`}
              className={index > 0 ? "mt-3" : undefined}
            >
              {paragraph}
            </p>
          ))}
        </EditorialNote>

        <Footer />
      </main>
    </>
  );
}
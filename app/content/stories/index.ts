import { lasHuellasInvisibles } from "./las-huellas-invisibles";
import { loQueLaHabitacionDecidioOlvidar } from "./lo-que-la-habitacion-decidio-olvidar";
import { lasCosasQueSeQuedaron } from "./las-cosas-que-se-quedaron";
import type { StoryContent } from "./types";

export const stories: StoryContent[] = [
  lasHuellasInvisibles,
  loQueLaHabitacionDecidioOlvidar,
  lasCosasQueSeQuedaron,
].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() -
    new Date(a.publishedAt).getTime(),
);

export const latestStory: StoryContent | undefined = stories[0];

export function getStoryBySlug(
  slug: string,
): StoryContent | undefined {
  return stories.find((story) => story.slug === slug);
}

export type { StoryContent, StoryScene } from "./types";
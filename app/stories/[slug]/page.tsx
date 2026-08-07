import type { Metadata } from "next";
import { notFound } from "next/navigation";

import StoryPage from "@/app/components/stories/StoryPage";
import {
  getStoryBySlug,
  stories,
} from "@/app/content/stories";

type StoryRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({
  params,
}: StoryRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return {
      title: "Story not found | Luxe & Pristine",
    };
  }

  return {
    title: `${story.title} | Luxe & Pristine`,
    description: story.description,

    alternates: {
      canonical: `/stories/${story.slug}`,
    },

    openGraph: {
      title: `${story.title} | Luxe & Pristine`,
      description: story.description,
      url: `/stories/${story.slug}`,
      type: "article",
      publishedTime: story.publishedAt,
      images: [
        {
          url: story.coverImage,
          alt: story.coverImageAlt,
        },
      ],
    },
  };
}

export default async function StoryRoute({
  params,
}: StoryRouteProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return <StoryPage story={story} />;
}
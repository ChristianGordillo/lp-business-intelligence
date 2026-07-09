import { notFound } from "next/navigation";
import PitchDeckLayout from "@/app/components/pitchdeck/PitchDeckLayout";
import { getSlideBySlug } from "@/app/components/pitchdeck/slides";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PitchDeckSlidePage({ params }: PageProps) {
  const { slug } = await params;

  const slide = getSlideBySlug(slug);

  if (!slide) {
    notFound();
  }

  return <PitchDeckLayout currentSlug={slug} />;
}
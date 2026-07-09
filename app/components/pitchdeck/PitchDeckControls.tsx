"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { getSlideIndex, pitchDeckSlides } from "./slides";

type Props = {
  currentSlug: string;
};

export default function PitchDeckControls({ currentSlug }: Props) {
  const currentIndex = getSlideIndex(currentSlug);

  const previousSlide = pitchDeckSlides[currentIndex - 1];
  const nextSlide = pitchDeckSlides[currentIndex + 1];

  const firstSlide = pitchDeckSlides[0];

  const isLastSlide =
    currentIndex === pitchDeckSlides.length - 1;

  return (
    <div className="fixed right-6 top-6 z-50 flex items-center gap-3 rounded-full border border-[#E8C686]/30 bg-[#FAF8F3]/95 p-2 shadow-[0_10px_35px_rgba(8,42,70,0.12)] backdrop-blur-xl md:right-8 md:top-8">
      
      {/* PREVIOUS */}
      {previousSlide ? (
        <Link
          href={`/investors/pitchdeck/${previousSlide.slug}`}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#082A46]
            text-white
            transition
            hover:scale-105
            hover:bg-[#D4A84F]
          "
          aria-label="Previous slide"
        >
          <ArrowLeft size={17} />
        </Link>
      ) : (
        <div className="h-10 w-10 rounded-full bg-[#E8C686]/20" />
      )}


      {/* COUNTER */}
      <span className="min-w-14 text-center text-sm font-semibold text-[#33546F]">
        {currentIndex + 1} / {pitchDeckSlides.length}
      </span>


      {/* NEXT / RESTART */}
      {nextSlide ? (
        <Link
          href={`/investors/pitchdeck/${nextSlide.slug}`}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#082A46]
            text-white
            transition
            hover:scale-105
            hover:bg-[#D4A84F]
          "
          aria-label="Next slide"
        >
          <ArrowRight size={17} />
        </Link>
      ) : (
        <Link
          href={`/investors/pitchdeck/${firstSlide.slug}`}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#D4A84F]
            text-white
            transition
            hover:scale-105
            hover:bg-[#082A46]
          "
          aria-label="Restart presentation"
        >
          <RotateCcw size={17} />
        </Link>
      )}

    </div>
  );
}
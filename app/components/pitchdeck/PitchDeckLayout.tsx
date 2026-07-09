"use client";

import Image from "next/image";
import { useState } from "react";

import PitchDeckSidebar from "./PitchDeckSidebar";
import PitchDeckControls from "./PitchDeckControls";

import Title from "./slides/01Title";
import BigProblemMarket from "./slides/02BigProblemMarket";
import UniqueSolution from "./slides/03UniqueSolution";
import ProductTeaser from "./slides/04ProductTeaser";
import BusinessModel from "./slides/05BusinessModel";
import Traction from "./slides/06Traction";
import CompetitiveLandscape from "./slides/07CompetitiveLandscape";
import Team from "./slides/08Team";
import Vision from "./slides/09Vision";
import CallToAction from "./slides/10CallToAction";

const slideComponents = {
  title: Title,
  problem: BigProblemMarket,
  solution: UniqueSolution,
  product: ProductTeaser,
  "business-model": BusinessModel,
  traction: Traction,
  competition: CompetitiveLandscape,
  team: Team,
  vision: Vision,
  "call-to-action": CallToAction,
};

type Props = {
  currentSlug: string;
};

export default function PitchDeckLayout({ currentSlug }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const CurrentSlide =
    slideComponents[currentSlug as keyof typeof slideComponents];

  if (!CurrentSlide) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F3EA] text-[#082A46]">
      {/* Background */}
      <div className="absolute left-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#E8C686]/25 blur-3xl" />

      <div className="absolute bottom-[-180px] right-[-160px] h-[460px] w-[460px] rounded-full bg-[#33546F]/10 blur-3xl" />


      {/* Fixed Logo */}
      <div
        className="
          fixed 
          left-20 
          top-5 
          z-50 
          flex 
          items-center 
          gap-3 
          rounded-full 
          border 
          border-[#E8C686]/30 
          bg-[#FAF8F3]/95 
          px-4 
          py-2 
          shadow-[0_10px_35px_rgba(8,42,70,0.10)]
          backdrop-blur-xl
        "
      >
        <Image
          src="/logo.png"
          alt="Luxe & Pristine"
          width={36}
          height={36}
          priority
          className="h-8 w-auto"
        />

        <span className="hidden text-sm font-bold tracking-tight text-[#082A46] sm:block">
          Luxe & Pristine
        </span>
      </div>


      {/* Sidebar */}
      <PitchDeckSidebar
        currentSlug={currentSlug}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((value) => !value)}
      />


      {/* Slide container */}
      <section
        className={`
          relative 
          min-h-screen 
          px-6 
          pb-16 
          pt-28 
          transition-all 
          duration-300
          ${
            sidebarOpen
              ? "md:pl-80"
              : "md:pl-24"
          }
        `}
      >
        <CurrentSlide />
      </section>


      {/* Navigation */}
      <PitchDeckControls currentSlug={currentSlug} />

    </main>
  );
}
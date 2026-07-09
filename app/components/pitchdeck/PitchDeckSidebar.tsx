"use client";

import Link from "next/link";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { pitchDeckSlides } from "./slides";

type Props = {
  currentSlug: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function PitchDeckSidebar({
  currentSlug,
  isOpen,
  onToggle,
}: Props) {
  return (
    <>
      <button
        onClick={onToggle}
        className="fixed left-5 top-5 z-50 rounded-full border border-[#E8C686]/30 bg-[#FAF8F3] p-3 text-[#082A46] shadow-[0_10px_35px_rgba(8,42,70,0.10)] transition hover:bg-[#D4A84F] hover:text-white"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
      </button>

      <aside
        className={`fixed left-0 top-0 z-40 h-screen border-r border-[#E8C686]/25 bg-[#FAF8F3]/95 backdrop-blur-xl transition-all duration-300 ${
          isOpen
            ? "w-72 translate-x-0"
            : "w-0 -translate-x-full md:w-16 md:translate-x-0"
        }`}
      >
        <div className={`${isOpen ? "block" : "hidden"} px-5 pt-24`}>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#B28435]">
            Investor Deck
          </p>

          <nav className="space-y-2">
            {pitchDeckSlides.map((slide, index) => {
              const active = slide.slug === currentSlug;

              return (
                <Link
                  key={slide.slug}
                  href={`/investors/pitchdeck/${slide.slug}`}
                  className={`block rounded-2xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-[#082A46] text-white shadow-[0_10px_25px_rgba(8,42,70,0.18)]"
                      : "text-[#33546F] hover:bg-[#E8C686]/20 hover:text-[#082A46]"
                  }`}
                >
                  <span
                    className={`mr-3 text-xs font-bold ${
                      active ? "text-[#E8C686]" : "text-[#B28435]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {slide.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextTicker from "@/app/_components/TextTicker";
import ScalingOverlay from "@/app/_components/ScalingOverlay";
import Image from "next/image";

import StaggeredGrid from "@/app/_components/StaggeredGrid";
import ProjectPreviewCarousel from "@/app/_components/ProjectPreviewCarousel";
import TeamView from "@/app/_components/TeamView";
import LargeQuote from "@/app/_components/LargeQuote";
import QuoteColumn from "@/app/_components/QuoteColumn";
import LayeredTitle from "@/components/ui/LayeredTitle";

import { LARGE_QUOTES, QUOTE_COLUMNS } from "@/data/quotes";

const KEYWORDS_TICKER_TEXTS = {
  0: [
    "BEWEGUNG",
    "IDEE",
    "DESIGN",
    "STRATEGIE",
    "KAMPAGNE",
    "MARKENKRAFT",
    "BEWEGUNG",
    "IDEE",
    "DESIGN",
    "STRATEGIE",
    "KAMPAGNE",
    "MARKENKRAFT",
  ],
  1: [
    "IDEEN MIT WUMMS",
    "MARKEN MIT HALTUNG",
    "DESIGN MIT DREHZAHL",
    "STRATEGIE MIT KANTE",
    "KRACHT PASSIERT NICHT",
    "WIR MACHEN SIE",
  ],
};

export default function HomePage() {
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    /* Everything the user interacts with belongs in <main> */
    <main style={{ backgroundColor: "var(--color-primary)" }}>
      {/* 1. SCROLL ANIMATION SECTION - Green background */}
      <section ref={targetRef} className="relative h-[200vh]" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <ScalingOverlay scale={scale} />

            <div className="z-0 w-full flex flex-col gap-4">
              <TextTicker keywords={KEYWORDS_TICKER_TEXTS[0]} color="#FF6B35" />
              <TextTicker keywords={KEYWORDS_TICKER_TEXTS[1]} color="#FFC107" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VIDEOS & PROJECTS SECTION - Green background */}
      <section className="min-h-screen py-24 px-8" style={{ backgroundColor: "var(--color-primary)" }}>
        <StaggeredGrid />
        <ProjectPreviewCarousel />
      </section>

      <section className="py-32 px-8 flex flex-col items-center justify-center text-center" style={{ backgroundColor: "var(--color-background)" }}>
        <LayeredTitle
          main="Unser Team"
          overlay="Lernen Sie uns kennen"
          subtitles={["Das kreative Kraftpaket hinter Ihren Projekten"]}
          align="center"
          className="mb-16"
        />
        <TeamView />
      </section>
    </main>
  );
}

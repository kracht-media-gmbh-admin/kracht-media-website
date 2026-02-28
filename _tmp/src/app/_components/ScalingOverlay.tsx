"use client";

import { motion, MotionValue } from "framer-motion";
import PageHero from "@/components/layout/PageHero";

interface ScalingOverlayProps {
  scale: MotionValue<number>;
}

export default function ScalingOverlay({ scale }: ScalingOverlayProps) {
  return (
    <PageHero
      as={motion.div}
      className="absolute z-10 pointer-events-none w-screen h-screen"
      style={{ scale }}
      main="ZUHAUSE"
      overlay="hier bist du"
      subtitles={["Willkommen bei Kracht", "Ihre kreative Agentur"]}
    />
  );
}
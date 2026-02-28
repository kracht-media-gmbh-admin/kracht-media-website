"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LayeredTitle from "@/components/ui/LayeredTitle";
import PageHero from "@/components/layout/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import { allProjects } from "@/data/projects";

// Component for Scale-on-Scroll effect
function ScalingLine({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectsPage() {
  const containerRef = useRef<HTMLElement>(null);

  // Convert projects object to array
  const projectsList = Object.values(allProjects);

  return (
    <main className="relative min-h-screen bg-[var(--color-background)] overflow-x-hidden" ref={containerRef}>

      {/* 
        SECTION 1: HEADER
      */}
      <PageHero
        main="ZEITVERTREIB"
        overlay="das ist unser"
        subtitles={["Kein Projekt ist zu groß.", "Größenwahnsinnig? Vielleicht."]}
      />

      {/* 
        SECTION 2: MANIFESTO
        Green background. Large Text.
      */}
      <section className="relative w-full z-20 min-h-[120vh] bg-[var(--color-primary)] overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center py-40 overflow-hidden text-center text-[var(--color-surface)]">
          <div className="font-[var(--font-heading)] font-bold text-[10vw] leading-[0.9] flex flex-col gap-10 md:gap-16">
            <ScalingLine>
              WILLKOMMEN
            </ScalingLine>
            <ScalingLine>
              IN EINEM
            </ScalingLine>
            <ScalingLine>
              NEUEN
            </ScalingLine>
            <ScalingLine>
              ZEITALTER
            </ScalingLine>
          </div>
        </div>
      </section>

      {/* 
        SECTION 3: PROJECTS INTRO & GRID
        Light background.
      */}
      <section className="relative z-20 w-full py-32 px-6 md:px-12 bg-[var(--color-background)] text-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          {/* Intro Text */}
          <div className="text-center max-w-4xl mb-24 space-y-8">
            <h3 className="text-2xl md:text-4xl font-[var(--font-heading)] font-medium leading-tight">
              Willkommen in einem Zeitalter, in dem junge Menschen verstehen, wie ältere Menschen ticken.
              <span className="opacity-70 block mt-2">Was sie anspricht oder eben nicht.</span>
            </h3>

            <div className="text-lg md:text-xl font-[var(--font-body)]">
              <p className="mb-4">Bei uns gibt&apos;s kein Blabla, sondern:</p>
              <div className="text-2xl md:text-3xl font-bold text-[var(--color-accent)] uppercase tracking-wide">
                Problem &rarr; Lösung &rarr; Ergebnis
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projectsList.map((project, index) => (
              <div
                key={project.slug}
                className={`${index % 2 !== 0 ? "md:mt-24" : ""} w-full`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Empty state if no projects */}
          {projectsList.length === 0 && (
            <div className="text-center py-20 opacity-50">
              Noch keine Projekte geladen.
            </div>
          )}

        </div>
      </section>

      {/* Footer / Contact CTA Placeholder */}
      <div className="relative z-20 bg-[var(--color-surface)] py-20 flex items-center justify-center">
        <h3 className="text-4xl text-[var(--color-primary)] font-[var(--font-pretty)] text-center">
          Lust auf ein gemeinsames Projekt?
        </h3>
      </div>

    </main>
  );
}

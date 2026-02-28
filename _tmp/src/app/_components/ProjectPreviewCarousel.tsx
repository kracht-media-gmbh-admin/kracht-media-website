"use client";
import ProjectPreview from "@/app/_components/ProjectPreview";
import { PROJECTS } from "@/data/projects";

export default function ProjectPreviewCarousel() {
  const projects = Object.values(PROJECTS).slice(0, 6);

  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-primary)" }}>
      <div className="max-w-[1400px] mx-auto px-[5vw]">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
            style={{
              color: "var(--color-background)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Ausgewählte Arbeiten
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[var(--color-accent)] mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div key={project.slug}>
              <ProjectPreview project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
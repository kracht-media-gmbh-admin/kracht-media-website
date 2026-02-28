import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Ausgewählte Projekte von Kracht Media: Film, Design und digitale Erlebnisse.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1
          className="text-3xl font-bold leading-[1.1] tracking-tight text-kracht-gruen sm:text-4xl"
          style={{ marginBottom: "1.5rem" }}
        >
          Projekte
        </h1>
        <p
          className="max-w-2xl text-base leading-[1.45] text-kracht-gruen/85"
          style={{ marginBottom: "2rem" }}
        >
          Ein Überblick über unsere Arbeiten: von Markenkampagnen über
          Dokumentationen bis zu digitalen Erlebnissen.
        </p>
        <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

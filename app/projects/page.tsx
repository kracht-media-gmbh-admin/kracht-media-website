import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Projekte",
  description:
    "Ausgewählte Projekte von Kracht Media: Filmproduktion, Design und digitale Erlebnisse. Von Markenkampagnen über Dokumentationen bis zu IT-Lösungen.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h1
          className="text-3xl font-bold leading-[1.1] tracking-tight text-kracht-gruen break-words sm:text-4xl sm:text-5xl"
          style={{ marginBottom: "1rem" }}
        >
          Projekte
        </h1>
        <p
          className="max-w-2xl text-lg leading-[1.5] text-kracht-gruen/85"
          style={{ marginBottom: "2.5rem" }}
        >
          Ein Überblick über unsere Arbeiten: von Markenkampagnen über
          Dokumentationen bis zu digitalen Erlebnissen.
        </p>
        <h2 id="projektliste-heading" className="sr-only">
          Projektübersicht
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3" aria-labelledby="projektliste-heading">
          {projects.map((project) => (
            <li key={project.id} className="h-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

import { allProjects } from "@/data/projects";
import { ProjectData } from "@/types";

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  const project = allProjects[slug];

  if (!project) return null;

  return project;
}

export async function getAllProjectSlugs(): Promise<string[]> {
  return Object.keys(allProjects);
}

export async function getProjectNeighbors(slug: string): Promise<{ prev: ProjectData | null; next: ProjectData | null }> {
  const slugs = Object.keys(allProjects);
  const index = slugs.indexOf(slug);

  if (index === -1) return { prev: null, next: null };

  const prevSlug = index > 0 ? slugs[index - 1] : null;
  const nextSlug = index < slugs.length - 1 ? slugs[index + 1] : null;

  return {
    prev: prevSlug ? allProjects[prevSlug] : null,
    next: nextSlug ? allProjects[nextSlug] : null
  };
}
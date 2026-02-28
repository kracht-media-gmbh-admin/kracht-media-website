import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krachtmedia.com";

/** Statische Haupt- und Rechteseiten (gleiche Struktur wie _tmp sitemap) */
const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
  { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: `${siteUrl}/projects`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: `${siteUrl}/impressum`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  { url: `${siteUrl}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  { url: `${siteUrl}/cookies`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  { url: `${siteUrl}/accessibility`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...STATIC_ROUTES, ...projectEntries];
}

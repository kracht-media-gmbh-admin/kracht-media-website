export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  videoUrl: string;
  gallery: string[];
  category: string;
}

const PLACEHOLDER = "https://picsum.photos";

export const projects: Project[] = [
  {
    id: "1",
    slug: "brand-campaign-alpha",
    title: "Brand Campaign Alpha",
    description:
      "Eine durchdachte Markenkampagne mit klarer Erzählung und starkem visuellen Auftritt. Von der Idee bis zum Schnitt: präzise und kraftvoll.",
    coverImage: `${PLACEHOLDER}/seed/alpha/1200/630`,
    videoUrl: "/videos/alpha-showreel.mp4",
    gallery: [
      `${PLACEHOLDER}/seed/alpha1/800/600`,
      `${PLACEHOLDER}/seed/alpha2/800/600`,
      `${PLACEHOLDER}/seed/alpha3/800/600`,
    ],
    category: "Commercial",
  },
  {
    id: "2",
    slug: "documentary-horizon",
    title: "Dokumentation: Horizon",
    description:
      "Dokumentarische Reihe über unberührte Landschaften und die Menschen, die dort leben. Authentisch, reduziert, mit starkem Sound.",
    coverImage: `${PLACEHOLDER}/seed/horizon/1200/630`,
    videoUrl: "/videos/horizon-teaser.mp4",
    gallery: [
      `${PLACEHOLDER}/seed/horizon1/800/600`,
      `${PLACEHOLDER}/seed/horizon2/800/600`,
      `${PLACEHOLDER}/seed/horizon3/800/600`,
      `${PLACEHOLDER}/seed/horizon4/800/600`,
    ],
    category: "Dokumentation",
  },
  {
    id: "3",
    slug: "digital-experience-nova",
    title: "Digital Experience: Nova",
    description:
      "Interaktives Erlebnis aus Film, 3D und nutzergeführtem Erzählen. Schnell, klar, auf allen Geräten einsatzbereit.",
    coverImage: `${PLACEHOLDER}/seed/nova/1200/630`,
    videoUrl: "/videos/nova-demo.mp4",
    gallery: [
      `${PLACEHOLDER}/seed/nova1/800/600`,
      `${PLACEHOLDER}/seed/nova2/800/600`,
    ],
    category: "Digital",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

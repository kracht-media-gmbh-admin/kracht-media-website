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

// Placeholder images (picsum.photos). Replace with your own paths or uploads.
const PLACEHOLDER = "https://picsum.photos";

export const projects: Project[] = [
  {
    id: "1",
    slug: "brand-campaign-alpha",
    title: "Brand Campaign Alpha",
    description:
      "A full-scale brand campaign blending cinematic storytelling with bold visual identity. From concept to final cut, we delivered a narrative that resonated across digital and broadcast.",
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
    title: "Documentary: Horizon",
    description:
      "Documentary series exploring uncharted landscapes and the people who call them home. Shot on location with a focus on authenticity and immersive sound design.",
    coverImage: `${PLACEHOLDER}/seed/horizon/1200/630`,
    videoUrl: "/videos/horizon-teaser.mp4",
    gallery: [
      `${PLACEHOLDER}/seed/horizon1/800/600`,
      `${PLACEHOLDER}/seed/horizon2/800/600`,
      `${PLACEHOLDER}/seed/horizon3/800/600`,
      `${PLACEHOLDER}/seed/horizon4/800/600`,
    ],
    category: "Documentary",
  },
  {
    id: "3",
    slug: "digital-experience-nova",
    title: "Digital Experience: Nova",
    description:
      "An interactive digital experience merging video, 3D elements, and user-driven narrative. Built for performance and engagement on all devices.",
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

/**
 * Kracht Media – zentrale Mock-Daten für Projekte und Team.
 * Projekte: slug, title, previewImg, detailText + Felder für Detailseite.
 */

const PLACEHOLDER = "https://picsum.photos";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** Ausführlicher Text für die Projekt-Detailseite */
  detailText: string;
  /** Bild für Karten/Preview (gleich wie coverImage) */
  previewImg: string;
  coverImage: string;
  videoUrl: string;
  gallery: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "brand-campaign-alpha",
    title: "Brand Campaign Alpha",
    description:
      "Eine durchdachte Markenkampagne mit klarer Erzählung und starkem visuellen Auftritt.",
    detailText:
      "Von der Idee bis zum Schnitt: präzise und kraftvoll. Diese Kampagne verbindet cineastische Erzählung mit einer unverwechselbaren Markensprache. Wir haben jeden Frame auf Klarheit und Wirkung getrimmt – reduziert, aber laut.",
    previewImg: `${PLACEHOLDER}/seed/alpha/1200/630`,
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
      "Dokumentarische Reihe über unberührte Landschaften und die Menschen, die dort leben.",
    detailText:
      "Authentisch, reduziert, mit starkem Sound. Horizon zeigt Orte und Menschen ohne Filter – Stabilität durch ehrliche Bilder und eine klare Erzählstruktur. Gedreht vor Ort, mit Fokus auf Tiefe statt Effekte.",
    previewImg: `${PLACEHOLDER}/seed/horizon/1200/630`,
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
      "Interaktives Erlebnis aus Film, 3D und nutzergeführtem Erzählen.",
    detailText:
      "Schnell, klar, auf allen Geräten einsatzbereit. Nova verbindet Bewegtbild mit interaktiven Elementen – ohne Schnickschnack, mit maximaler Wirkung. Reduzierte Kraft: jede Interaktion hat einen Zweck.",
    previewImg: `${PLACEHOLDER}/seed/nova/1200/630`,
    coverImage: `${PLACEHOLDER}/seed/nova/1200/630`,
    videoUrl: "/videos/nova-demo.mp4",
    gallery: [
      `${PLACEHOLDER}/seed/nova1/800/600`,
      `${PLACEHOLDER}/seed/nova2/800/600`,
    ],
    category: "Digital",
  },
];

export interface Team {
  name: string;
  description: string;
  /** Platzhalter-URL für Teamfoto */
  image: string;
}

export const team: Team = {
  name: "Kracht Media",
  description:
    "Wir sind ein Team aus Machern, die an klare Botschaften und reduzierten Ausdruck glauben. Lauter als jeder Presslufthammer – nicht durch Lärm, sondern durch Präzision. Stabilität im Konzept, Kraft in der Umsetzung. Ob Film, Design oder digitale Erlebnisse: Wir setzen auf das Wesentliche.",
  image: `${PLACEHOLDER}/seed/team/800/600`,
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Top N Projekte für Homepage-Preview */
export function getTopProjects(n: number): Project[] {
  return projects.slice(0, n);
}

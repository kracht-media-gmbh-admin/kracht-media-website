/**
 * Kracht Media – zentrale Mock-Daten für Projekte und Team.
 * Projekte: slug, title, previewImg, detailText + Felder für Detailseite.
 */

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
    id: "borgall_wiener_neustadt_2024",
    slug: "borgall_wiener_neustadt_2024",
    title: "Borgball",
    description:
      "Eleganter Schulball mit spektakulärer Eröffnung und unvergesslicher Atmosphäre.",
    detailText:
      "Ein unvergesslicher Abend voller Eleganz und Musik. Der Borgball 2024 setzte neue Maßstäbe in Sachen Unterhaltung.\n\nDas jährliche Highlight der Schulszene in Wiener Neustadt fand auch dieses Jahr wieder statt. Mit aufwendiger Dekoration, einer spektakulären Eröffnung und zahlreichen Einlagen wurde bis in die frühen Morgenstunden gefeiert. Unser Team war vor Ort, um die besten Momente festzuhalten.",
    previewImg: "/images/P01_Borgball_2024.webp",
    coverImage: "/images/P01_Borgball_2024.webp",
    videoUrl: "",
    gallery: [],
    category: "Wiener Neustadt",
  },
  {
    id: "firmen_branding_2025",
    slug: "firmen_branding_2025",
    title: "Firmen Branding",
    description:
      "Innovatives Corporate Design, das Professionalität und moderne Ästhetik vereint.",
    detailText:
      "Modernes Design trifft auf klare Linien. Das neue Branding für Hoffeld verkörpert Innovation.\n\nFür Hoffeld Design haben wir ein komplett neues visuelles Konzept entwickelt. Vom Logo über die Geschäftspapiere bis hin zur digitalen Präsenz wurde alles aus einem Guss gestaltet. Ziel war es, die Professionalität und Kreativität des Unternehmens widerzuspiegeln.",
    previewImg: "/images/P03_Design_2025.webp",
    coverImage: "/images/P03_Design_2025.webp",
    videoUrl: "",
    gallery: [],
    category: "Hoffeld Design",
  },
  {
    id: "werbespot_wiener_neustadt_2025",
    slug: "werbespot_wiener_neustadt_2025",
    title: "Werbespot",
    description:
      "Dynamischer Werbespot, der die urbanen Facetten Wiener Neustadts emotional einfängt.",
    detailText:
      "Wiener Neustadt in neuem Licht. Ein Werbespot, der die Vielfalt der Stadt zeigt.\n\nDieser Werbespot wurde konzipiert, um Besucher und Bewohner gleichermaßen anzusprechen. Durch dynamische Schnitte und emotionale Bilder wird die Stadt als lebendiger Ort der Begegnung präsentiert.",
    previewImg: "/images/P04_Werbung_WN_2025.webp",
    coverImage: "/images/P04_Werbung_WN_2025.webp",
    videoUrl: "",
    gallery: [],
    category: "Stadt Wiener Neustadt",
  },
  {
    id: "gemeindezeitung_bad_erlach_2025",
    slug: "gemeindezeitung_bad_erlach_2025",
    title: "Gemeindezeitung",
    description:
      "Modernes Redaktionsdesign für eine bürgernahe und visuell ansprechende Kommunikation.",
    detailText:
      "Information nah am Bürger. Die Neugestaltung der Gemeindezeitung Bad Erlach.\n\nEine Zeitung, die man gerne liest. Mit dem neuen Layout wurde die Lesbarkeit verbessert und mehr Raum für Bilder geschaffen. Das Feedback der Bürger war überwältigend positiv.",
    previewImg: "/images/P05_Zeitung_2025.webp",
    coverImage: "/images/P05_Zeitung_2025.webp",
    videoUrl: "",
    gallery: [],
    category: "Bad Erlach",
  },
];

export interface Team {
  name: string;
  description: string;
  /** Teamfoto für Über-uns-Seite */
  image: string;
}

export const team: Team = {
  name: "Kracht Media",
  description:
    "Wir sind ein Team aus Machern, die an klare Botschaften und reduzierten Ausdruck glauben. Lauter als jeder Presslufthammer – nicht durch Lärm, sondern durch Präzision. Stabilität im Konzept, Kraft in der Umsetzung. Ob Film, Design oder digitale Erlebnisse: Wir setzen auf das Wesentliche.",
  image: "/images/team/kracht-team.webp",
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

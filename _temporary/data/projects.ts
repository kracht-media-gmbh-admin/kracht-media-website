import type { ProjectData } from "@/types";
import { IMAGE_ASSETS } from "@/data/images";

const borgball2024: ProjectData = {
  slug: "borgall_wiener_neustadt_2024",
  title: "Borgball",
  year: 2024,
  group: "Wiener Neustadt",
  preamble: "Ein unvergesslicher Abend voller Eleganz und Musik. Der Borgball 2024 setzte neue Maßstäbe in Sachen Unterhaltung.",
  shortDescription: "Eleganter Schulball mit spektakulärer Eröffnung und unvergesslicher Atmosphäre.",
  tileDescription: "Ein unvergesslicher Abend voller Eleganz und Musik in Wiener Neustadt.",
  description: [
    "Das jährliche Highlight der Schulszene in Wiener Neustadt fand auch dieses Jahr wieder statt.",
    "Mit aufwendiger Dekoration, einer spektakulären Eröffnung und zahlreichen Einlagen wurde bis in die frühen Morgenstunden gefeiert. Unser Team war vor Ort, um die besten Momente festzuhalten."
  ],
  image: IMAGE_ASSETS.borgball_2024,
}

const hoffeld2025: ProjectData = {
  slug: "firmen_branding_2025",
  title: "Firmen Branding",
  year: 2025,
  group: "Hoffeld Design",
  preamble: "Modernes Design trifft auf klare Linien. Das neue Branding für Hoffeld verkörpert Innovation.",
  shortDescription: "Innovatives Corporate Design, das Professionalität und moderne Ästhetik vereint.",
  tileDescription: "Modernes Brand-Design für Hoffeld, das Innovation und Professionalität verkörpert.",
  description: [
    "Für Hoffeld Design haben wir ein komplett neues visuelles Konzept entwickelt.",
    "Vom Logo über die Geschäftspapiere bis hin zur digitalen Präsenz wurde alles aus einem Guss gestaltet. Ziel war es, die Professionalität und Kreativität des Unternehmens widerzuspiegeln."
  ],
  image: IMAGE_ASSETS.hoffeldDesign_2025,
}

const werbungWN2025: ProjectData = {
  slug: "werbespot_wiener_neustadt_2025",
  title: "Werbespot",
  year: 2025,
  group: "Stadt Wiener Neustadt",
  preamble: "Wiener Neustadt in neuem Licht. Ein Werbespot, der die Vielfalt der Stadt zeigt.",
  shortDescription: "Dynamischer Werbespot, der die urbanen Facetten Wiener Neustadts emotional einfängt.",
  tileDescription: "Ein emotionaler Werbespot, der die vielfältigen Seiten der Stadt zeigt.",
  description: [
    "Dieser Werbespot wurde konzipiert, um Besucher und Bewohner gleichermaßen anzusprechen.",
    "Durch dynamische Schnitte und emotionale Bilder wird die Stadt als lebendiger Ort der Begegnung präsentiert."
  ],
  image: IMAGE_ASSETS.wnWerbung_2025,
}

const zeitungBE2025: ProjectData = {
  slug: "gemeindezeitung_bad_erlach_2025",
  title: "Gemeindezeitung",
  year: 2025,
  group: "Bad Erlach",
  preamble: "Information nah am Bürger. Die Neugestaltung der Gemeindezeitung Bad Erlach.",
  shortDescription: "Modernes Redaktionsdesign für eine bürgernahe und visuell ansprechende Kommunikation.",
  tileDescription: "Informativ und bürgernah: Das neue Redaktionsdesign für Bad Erlach.",
  description: [
    "Eine Zeitung, die man gerne liest. Mit dem neuen Layout wurde die Lesbarkeit verbessert und mehr Raum für Bilder geschaffen.",
    "Das Feedback der Bürger war überwältigend positiv."
  ],
  image: IMAGE_ASSETS.badErlachZeitung_2025,
}



export const PROJECTS: Record<string, ProjectData> = {
  "borgall_wiener_neustadt_2024": borgball2024,
  "firmen_branding_2025": hoffeld2025,
  "werbespot_wiener_neustadt_2025": werbungWN2025,
  "gemeindezeitung_bad_erlach_2025": zeitungBE2025,
};

// Re-export as allProjects for compatibility if needed, or update lib/projects.ts
export const allProjects = PROJECTS;
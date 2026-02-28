/**
 * Kracht Media – Leistungen (Services) nach Kategorien.
 * Struktur: Events, Design, IT-Service.
 */

export interface ServiceItem {
  label: string;
  /** Kurze Beschreibung (optional, für Tooltip oder Ausklapptext) */
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  /** Kurzer Teaser für die Kategorie */
  teaser: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "events",
    title: "Events",
    teaser:
      "Von der Dokumentation bis zur Inszenierung: wir fangen Momente ein – in Bild und Ton, live und nachhaltig.",
    items: [
      { label: "Fotografie" },
      { label: "Videografie" },
      { label: "Foto-Shootings" },
      { label: "Event-Dokumentation" },
      { label: "Live-Streaming" },
      { label: "After-Movie & Highlights" },
    ],
  },
  {
    id: "design",
    title: "Design",
    teaser:
      "Klare Markensprache, starke Kampagnen. Von der Corporate Identity bis zu Social und klassischem Marketing.",
    items: [
      { label: "Corporate Branding" },
      { label: "Ad Creation & Werbung" },
      { label: "Social Marketing" },
      { label: "Marketing allgemein" },
      { label: "Print & digitale Medien" },
    ],
  },
  {
    id: "it-service",
    title: "IT-Service",
    teaser:
      "Websites, Automatisierung, KI: digitale Infrastruktur, die trägt und skaliert.",
    items: [
      { label: "Websites & Web-Apps" },
      { label: "KI-Lösungen" },
      { label: "Workflow-Automatisierung" },
      { label: "Digitale Prozesse" },
    ],
  },
];

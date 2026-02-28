/**
 * Kracht Media – Leistungen (Services) nach Kategorien.
 * Struktur: Events, Design, IT-Service.
 *
 * ServiceItem: Alle Felder außer label sind optional. Beim Klick auf eine Karte
 * werden expandDescription, image und subCategories (falls gesetzt) angezeigt.
 */

export interface ServiceItem {
  label: string;
  /** Kurzer Tooltip (z. B. beim Hover), optional */
  description?: string;
  /** Text im ausgeklappten Zustand – leicht später änderbar */
  expandDescription?: string;
  /** Bild-URL im ausgeklappten Zustand (optional) */
  image?: string;
  /** Unterpunkte / Sub-Kategorien, die unter dem Text aufgelistet werden (optional) */
  subCategories?: string[];
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
      {
        label: "Fotografie",
        expandDescription:
          "Ob Produkt, Portrait oder Event: wir setzen Licht und Perspektive gezielt ein und liefern Bilder, die ankommen.",
        image: "https://picsum.photos/seed/kracht-foto/800/500",
        subCategories: ["Produktfotografie", "Portrait", "Event-Reportage"],
      },
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
      {
        label: "Corporate Branding",
        expandDescription:
          "Von Logo und CI bis zu Guidelines und Anwendungen: eine stimmige Markenwelt, die Vertrauen schafft und wiedererkannt wird.",
        subCategories: ["Logo & CI", "Styleguides", "Brand Applications"],
      },
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
      {
        label: "Websites & Web-Apps",
        expandDescription:
          "Moderne, schnelle Websites und Web-Apps – von der Landing Page bis zur plattformunabhängigen Anwendung. Responsive, barrierefrei und suchmaschinenfreundlich.",
        image: "https://picsum.photos/seed/kracht-web/800/500",
        subCategories: ["Landing Pages", "Corporate Websites", "Web-Apps", "E-Commerce"],
      },
      {
        label: "KI-Lösungen",
        expandDescription:
          "KI sinnvoll integriert: von Chatbots über Prozessoptimierung bis zu maßgeschneiderten Modellen für Ihre Use-Cases.",
        subCategories: ["Integration", "Automatisierung", "Custom Models"],
      },
      { label: "Workflow-Automatisierung" },
      { label: "Digitale Prozesse" },
    ],
  },
];

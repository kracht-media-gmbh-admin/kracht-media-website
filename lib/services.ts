/**
 * Kracht Media – Leistungen (Services) nach Kategorien.
 * Struktur: Events, Design & Marketing, IT-Services, Consulting.
 * Keine Bilder; jeder Punkt hat einen kurzen Aufklapp-Text (expandDescription).
 */

export interface ServiceItem {
  label: string;
  /** Kurzer Tooltip (z. B. beim Hover), optional */
  description?: string;
  /** Text im ausgeklappten Zustand */
  expandDescription?: string;
  /** Bild-URL (auf Leistungsseite nicht genutzt) */
  image?: string;
  /** Unterpunkte (auf Leistungsseite nicht genutzt) */
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
          "Professionelle Event-Fotografie, die Stimmung und Momente festhält – scharf, authentisch und sofort einsatzbereit für Ihre Kanäle.",
      },
      {
        label: "Portraitfotografie",
        expandDescription:
          "Individuelle Porträts für Personal, Führung oder Kampagnen. Kontrolliertes Setting, starke Ausstrahlung – für Website, Social und Print.",
      },
      {
        label: "Videografie",
        expandDescription:
          "Bewegtbild von der Dokumentation bis zur Inszenierung. Klare Bildsprache, durchdachter Schnitt, fertig für alle Formate und Plattformen.",
      },
      {
        label: "Highlight Reels / Aftermovie",
        expandDescription:
          "Verdichtete Erlebnisse: die besten Momente Ihres Events, emotional und shareable – für Social, Website und Archiv.",
      },
    ],
  },
  {
    id: "design-marketing",
    title: "Design & Marketing",
    teaser:
      "Klare Markensprache, starke Kampagnen. Von Corporate Design bis Online Marketing.",
    items: [
      {
        label: "Corporate Design",
        expandDescription:
          "Eine stimmige visuelle Identität – von Logo und CI bis zu Anwendungen. Wiedererkennung und Vertrauen durch klare, konsistente Gestaltung.",
      },
      {
        label: "Design (allgemein)",
        expandDescription:
          "Print, Digital, Kampagnen: reduziert und kraftvoll, abgestimmt auf Ihre Marke und Ziele. Von Key Visuals bis zu vollständigen Kampagnen.",
      },
      {
        label: "Online Marketing",
        expandDescription:
          "Sichtbarkeit und Reichweite im Netz. Von Social Media über Kampagnen bis zu zielgerichteter Ansprache – messbar und wirksam.",
      },
    ],
  },
  {
    id: "it-services",
    title: "IT-Services",
    teaser:
      "Websites, Automatisierung, KI: digitale Infrastruktur, die trägt und skaliert.",
    items: [
      {
        label: "Websites (Kreation und Verwaltung)",
        expandDescription:
          "Moderne Websites von der Idee bis zum Launch – und optional Betreuung, Updates und Erweiterungen aus einer Hand. Responsive, schnell und suchmaschinenfreundlich.",
      },
      {
        label: "Prozessautomatisierung",
        expandDescription:
          "Weniger manuelle Arbeit, mehr Fokus aufs Wesentliche. E-Mail-Automatisierung, KI-Einbindung, Workflows – maßgeschneidert, wartbar und erweiterbar.",
      },
    ],
  },
  {
    id: "consulting",
    title: "Consulting",
    teaser:
      "Strategie, Mediaplanung, KI: klare Entscheidungsgrundlagen und nächste Schritte.",
    items: [
      {
        label: "Marketing-Strategie",
        expandDescription:
          "Klarheit in Zielen, Zielgruppen und Botschaften. Wir entwickeln mit Ihnen eine schlüssige Strategie und priorisieren die nächsten Schritte – ohne Ballast.",
      },
      {
        label: "Mediaplanung",
        expandDescription:
          "Wo und wie Sie am besten investieren. Von Kanälen über Formate bis zum Budget – durchdacht, nachvollziehbar und auf Ihre Ziele ausgerichtet.",
      },
      {
        label: "KI-Beratung",
        expandDescription:
          "Wo KI wirklich Nutzen bringt, welche Use-Cases passen und wie Sie sie sicher und zielgerichtet einführen. Praxisnah und ohne Hype.",
      },
    ],
  },
];

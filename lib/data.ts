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
    id: "borgball_wiener_neustadt_2024",
    slug: "borgball_wiener_neustadt_2024",
    title: "BORG Ball Wiener Neustadt",
    description:
      "Eventfotografie, die funktioniert. Seit 3 Jahren – Reportage, Portraits und Tanzflächen-Dynamik.",
    detailText:
      "Eventfotografie, die funktioniert. Seit 3 Jahren.\n\nAuftraggeber: BORG Wiener Neustadt\nLocation: Sparkassensaal Wiener Neustadt\n\nFolgeauftrag. Seit 3 Jahren.\nManche Projekte sind keine Experimente. Sie sind gesetzt. Der BORG Ball Wiener Neustadt ist der größte Schulball der Stadt Wiener Neustadt: über 1.000 Gäste, volles Haus, volle Tanzfläche, volle Emotion. Und seit mittlerweile drei Jahren dürfen wir dieses Event fotografisch begleiten. Warum? Seitens der Veranstalter hört man nur: „Funktioniert einfach. Wir müssen uns keine Gedanken machen.“ Genau so soll es sein.\n\nUnser Anspruch: Mehr als nur Fotos\nEin Schulball ist kein Pressetermin. Er ist Nervosität vor der Polonaise. Freudentränen bei der Eröffnung. Freundschaften, die sich in Blitzlicht festhalten lassen. Wir liefern:\n• Reportagefotografie mit Gefühl\n• Portraits mit Stil\n• Tanzflächen-Dynamik\n• Detailshots, die Atmosphäre transportieren\n\nSkalierbar. Verlässlich. Schnell.\nEgal, ob ein Fotograf, oder zwei, oder drei im Team – wir sind flexibel aufgestellt und decken Veranstaltungen mit über 1.000 Personen strukturiert und professionell ab. Und das Entscheidende: Über 400 fertig entwickelte Fotos sind am nächsten Tag verfügbar. Keine Rohdaten. Keine Wartezeiten. Kein Chaos. Sauber sortiert. Entwickelt. Einsatzbereit für Social Media, Website & Erinnerungen.\n\nWarum das mit uns funktioniert\n• Junges Team mit Energie\n• Klare Abläufe\n• Eingespielte Struktur\n• Null Drama am Veranstaltungstag\n\nDer BORG Ball ist ein Fixpunkt im Kalender, für die Schule. Und für uns. Gutes bewährt sich. Und wir liefern jedes Jahr aufs Neue.",
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
      "Corporate Design aus einem Guss – Logo, Print, Digital. Klar. Wiedererkennbar. Einsatzbereit.",
    detailText:
      "Branding, das ankommt. Kein Flickenteppich, sondern ein klares System.\n\nAuftraggeber: Hoffeld Design\nBereich: Corporate Design, Print, digitale Präsenz\n\nEin Unternehmen wie Hoffeld braucht mehr als ein schönes Logo. Es braucht eine visuelle Sprache, die überall funktioniert: auf dem Briefbogen, auf der Website, in den Sozialen Medien, auf der Messe. Wir haben das komplette Erscheinungsbild neu gedacht und aus einem Guss umgesetzt.\n\nUnser Anspruch: Ein System, kein Einzelstück\nEin starkes Branding lebt von Wiedererkennung und Konsistenz. Jedes Touchpoint soll die gleiche Haltung transportieren – professionell, kreativ, zeitgemäß. Dafür liefern wir:\n• Logo und Markenwelt mit klaren Einsatzregeln\n• Geschäftspapiere und Printmedien in einheitlicher Sprache\n• Digitale Anwendungen: Website, Social Media, E-Mail-Signatur\n• Redaktionelle Leitfäden für Texte und Bildsprache\n\nVon der Strategie bis zur Umsetzung\nZuerst die Frage: Wo steht das Unternehmen? Wen spricht es an? Daraus entsteht die Positionierung. Dann folgen Konzept, Entwürfe und Feinschliff. Kein Overdesign, keine Spielerei – jedes Element hat eine Funktion. Das Ergebnis ist einsatzbereit: für das Team, für Partner, für die Öffentlichkeit.\n\nWarum das mit uns funktioniert\n• Klare Kommunikation, keine leeren Floskeln\n• Schnelle Iterationen, zielgerichtetes Feedback\n• Alles aus einer Hand: Konzept, Gestaltung, technische Umsetzung\n• Dokumentation, die bleibt – damit die Marke konsistent weiterlebt\n\nHoffeld hat jetzt ein Erscheinungsbild, das zu seiner Arbeit passt. Sichtbar. Einprägsam. Fertig.",
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
      "Wiener Neustadt in bewegten Bildern – emotional, dynamisch, für Bewohner und Besucher.",
    detailText:
      "Eine Stadt, die man sehen will. Ein Spot, der bleibt.\n\nAuftraggeber: Stadt Wiener Neustadt\nEinsatz: Imagefilm, Tourismus, Stadtmarketing\n\nWiener Neustadt ist mehr als eine Kulisse. Es ist Lebensraum, Wirtschaftsstandort, Ziel für Besucher. Der Werbespot soll genau das transportieren: die Vielfalt der Stadt, ihre Energie, ihre Menschen. Ohne Klischees, ohne leere Floskeln – mit Bildern und Rhythmus, die im Kopf bleiben.\n\nUnser Anspruch: Emotion trifft Botschaft\nEin guter Werbespot erzählt in Sekunden eine Geschichte. Er weckt Neugier, schafft Identifikation, bleibt abspielbar – auf der Website, auf Social Media, auf Großbildschirmen. Wir liefern:\n• Konzept und Storyline aus einem klaren Briefing\n• Dreharbeiten vor Ort: Menschen, Orte, Stimmungen\n• Dynamische Schnittführung und Sounddesign\n• Formate für alle Kanäle – von 15 Sekunden bis zur Langversion\n\nProduktion mit Fokus\nVon der ersten Location-Scouting bis zum finalen Export: Wir arbeiten strukturiert und termingerecht. Die Stadt gibt die Ziele vor, wir setzen sie visuell um. Keine Endlosschleifen, keine unnötigen Abstimmungsrunden. Das Ergebnis spricht für sich.\n\nWarum das mit uns funktioniert\n• Lokale Kenntnis, professionelle Umsetzung\n• Klare Absprachen, transparenter Prozess\n• Moderne Ästhetik ohne sterile Werbesprache\n• Einsetzbar überall – von Social bis Großformat\n\nWiener Neustadt verdient einen Spot, der zur Stadt passt. Wir haben ihn gemacht.",
    previewImg: "/images/P04_Werbung_WN_2025.webp",
    coverImage: "/images/P04_Werbung_WN_2025.webp",
    videoUrl: "",
    gallery: [],
    category: "Stadt Wiener Neustadt",
  },
  // Vienna Vikings × win2day: Platzhalter-Bild unter public/images/placeholder-vienna-vikings-win2day.webp ablegen.
  {
    id: "vienna_vikings_win2day_2025",
    slug: "vienna_vikings_win2day_2025",
    title: "Vienna Vikings Ladies × win2day",
    description:
      "Equal Pay Day Kampagne & Rookie School Spot – Haltung zeigen, Performance liefern. Social-First, messbar.",
    detailText:
      "Vienna Vikings Ladies × win2day. Equal Pay Day Kampagne & Rookie School Spot (2025).\n\nProjektüberblick\nFür die Vienna Vikings Ladies durften wir eine Kampagne umsetzen, die Haltung zeigt und Performance liefert. In enger Abstimmung mit win2day entstand eine aufmerksamkeitsstarke Inszenierung rund um den Equal Pay Day, ergänzt durch einen Werbespot zur Bewerbung der Rookie School im Umfeld des Super Bowl 2025.\nProjektzeitraum: Ende Februar bis Ende März 2025\nUmsetzung: 1 Drehtag (Spot) + ½ Tag Image-Shooting\n\nZielsetzung\n• Positionierung der Vienna Vikings Ladies als starke, sichtbare Marke im Frauensport\n• Inszenierung der EPD-Shirts als klares Statement-Piece\n• Social-First Kampagne in Anlehnung an die EPD-Gesamtstrategie von win2day\n• Performance-getriebene Aktivierung für die Rookie School rund um den Super Bowl Peak\nKurz gesagt: Mehr Sichtbarkeit. Mehr Nachwuchs. Mehr Relevanz.\n\nImagefotografie: Equal Pay Day\nWir haben die EPD-Shirts nicht einfach fotografiert – wir haben sie inszeniert.\nUnser Zugang:\n• Kraftvolle, selbstbewusste Bildsprache\n• Klarer Fokus auf Athletinnen & Teamspirit\n• High-Contrast-Look mit sportlicher Dynamik\n• Social-ready Assets (Feed, Story, Ads)\nDie Bildwelt wurde grafisch aufbereitet und in enger Abstimmung mit der EPD-Kampagne von win2day weiterentwickelt. So entstand eine visuelle Linie, die nicht nur sportlich wirkt, sondern politisch Haltung zeigt, ohne plakativ zu sein.\n\nWerbespot: Rookie School goes Super Bowl\nDer Super Bowl ist kein normaler Tag. Er ist Aufmerksamkeit im Ausnahmezustand.\nGenau dort haben wir angesetzt. Produktion einer Werbeeinschaltung zur Rookie School mit einer klaren Botschaft: Jetzt einsteigen. Jetzt Teil des Teams werden.\nKonzept-DNA:\n• Dynamischer Schnitt\n• Authentische Spielerinnen statt Schauspiel\n• Klare Call-to-Action\n• Performance-orientierte Ausspielung im Super-Bowl-Umfeld\n\nSocial Media & Grafik\nWir denken Kampagnen nie isoliert.\nDeshalb:\n• Grafische Aufbereitung aller Sujets\n• Ad-Optimierung für Social\n• Anpassung an Kampagnen-CI von win2day\n• Konsistente Visual Identity über alle Touchpoints\nVom Shooting bis zum finalen Post kam alles aus einer Hand. Strategie, Produktion, Grafik, Ausspielung.\n\nUnser Fazit\nFrauenfootball verdient Bühne. Equal Pay Day braucht Reichweite. Nachwuchsarbeit braucht Momentum.\nWir haben beides zusammengebracht: ein kompaktes, effizientes Projekt mit klarer Haltung und messbarem Impact. Sichtbarkeit war das Ziel – wir haben geliefert.",
    previewImg: "/images/placeholder-vienna-vikings-win2day.webp",
    coverImage: "/images/placeholder-vienna-vikings-win2day.webp",
    videoUrl: "",
    gallery: [],
    category: "win2day × Vienna Vikings",
  },
  // ASV Nedufeld: Platzhalter-Bild unter public/images/placeholder-asv-nedufeld.webp ablegen.
  {
    id: "asv_nedufeld",
    slug: "asv_nedufeld",
    title: "ASV Nedufeld",
    description:
      "Vereinsfotografie mit Tiefe – Mannschaften, Einzelportraits und die Momente dazwischen. Training. Team. Gesichter.",
    detailText:
      "Ein Verein ist mehr als ein Logo. Es sind die Gesichter, die Mannschaften, die Sekunden, in denen alles passiert.\n\nAuftraggeber: ASV Nedufeld\nFokus: Vereinsfotografie, Mannschafts- & Einzelportraits, Trainingsreportage\n\nDer ASV Nedufeld lebt von seinen Teams und den Menschen dahinter. Für den Verein haben wir eine umfassende Fotodokumentation umgesetzt: nicht nur die offiziellen Teamfotos, sondern die Stimmung auf dem Platz, die Konzentration vor dem Sprint, die Lacher in der Pause. So entsteht ein Bild des Vereins, das für Website, Social Media und Nachwuchsarbeit gleichermaßen funktioniert.\n\nMannschaften: Alle an einem Tisch\nJede Mannschaft verdient Sichtbarkeit. Wir haben die verschiedenen Teams in klaren, wiedererkennbaren Setups fotografiert – gruppiert, mit Energie, ohne steif zu wirken. Das Ergebnis: Fotos, die der Verein sofort einsetzen kann. Für Saisoneröffnung, für Social, für die Halle.\n• Einheitliche Bildsprache über alle Teams\n• Schnelle Abwicklung, wenig Aufwand für den Verein\n• Sofort einsetzbar für Print und Digital\n\nEinzelportraits: Die Menschen hinter dem Trikot\nNeben den Mannschaftsbildern standen die Spielerinnen und Spieler im Fokus. Einzelportraits, die Persönlichkeit und Sport verbinden – nicht steril, nicht übertrieben gestellt. Entspannt, aber mit Haltung. So erkennen sich die Mitglieder wieder, und Außenstehende bekommen ein Gefühl dafür, wer den Verein trägt.\n• Individuelle Portraits mit Wiedererkennung\n• Varianten für unterschiedliche Formate\n• Authentisch, nicht gekünstelt\n\nTraining: Wo es passiert\nDie besten Momente entstehen oft neben dem geplanten Shot. Beim Training haben wir die Dynamik eingefangen – Bewegung, Konzentration, Teamgeist. Reportagefotografie, die Atmosphäre transportiert und dem Verein zeigt: So sieht es aus, wenn bei uns trainiert wird.\n• Dynamische Trainingsmomente\n• Detail- und Übersichtsaufnahmen\n• Einsetzbar für Recruiting, Social und Vereinsgeschichte\n\nUnser Fazit\nEin Verein braucht Bilder, die ihn repräsentieren. Nicht nur ein Mal pro Saison, sondern eine Bildwelt, die passt. Beim ASV Nedufeld haben wir Mannschaften, Gesichter und Training in einer Hand vereint. Sichtbar. Nah dran. Einsatzbereit.",
    previewImg: "/images/placeholder-asv-nedufeld.webp",
    coverImage: "/images/placeholder-asv-nedufeld.webp",
    videoUrl: "",
    gallery: [],
    category: "ASV Nedufeld",
  },
  {
    id: "gemeindezeitung_bad_erlach_2025",
    slug: "gemeindezeitung_bad_erlach_2025",
    title: "Gemeindezeitung",
    description:
      "Gemeindezeitung neu gedacht – lesbar, bildstark, bürgernah. Redesign für Bad Erlach.",
    detailText:
      "Eine Zeitung, die man gerne in die Hand nimmt. Kein Amtston, sondern echte Lesbarkeit.\n\nAuftraggeber: Gemeinde Bad Erlach\nMedien: Gemeindezeitung, redaktionelles Layout\n\nEine Gemeindezeitung ist oft das erste, was Bürgerinnen und Bürger von ihrer Gemeinde lesen. Sie muss informieren, einladen, Vertrauen schaffen – und dabei gut aussehen. Bad Erlach wollte genau das: ein zeitgemäßes, klares Erscheinungsbild, das Inhalte in den Vordergrund stellt und nicht im Layout untergehen lässt.\n\nUnser Anspruch: Inhalt zuerst, Design im Dienst\nDas Design dient der Botschaft. Keine Spielereien, keine überladenen Seiten. Stattdessen:\n• Klare Typografie und Lesefluss von der ersten bis zur letzten Seite\n• Mehr Raum für Bilder – Menschen, Orte, Ereignisse aus der Gemeinde\n• Logische Struktur: Rubriken, Überschriften, Hierarchie auf einen Blick\n• Ein einheitliches System für Sonderbeilagen und Sonderthemen\n\nRedaktionell durchdacht\nWir haben nicht nur „schöner“ gemacht. Wir haben das Layout so aufgebaut, dass die Redaktion damit arbeiten kann: Platz für Texte unterschiedlicher Länge, flexible Bildformate, wiedererkennbare Elemente. Die Zeitung bleibt in der Hand der Gemeinde – wir liefern das System.\n\nWarum das mit uns funktioniert\n• Verständnis für kommunale Abläufe und Zielgruppen\n• Redaktionelles Design, das Alltagstexte und Fotos optimal präsentiert\n• Klare Abnahme und Anpassungen ohne Grafik-Chaos\n• Ergebnis, das ankommt: positives Feedback aus der Bürgerschaft\n\nBad Erlach hat jetzt eine Zeitung, die informiert und einlädt. Nah dran. Gut lesbar. Fertig.",
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

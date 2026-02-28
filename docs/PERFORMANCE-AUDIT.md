# Performance-Audit (Next.js)

Stand: Nach Code-Review. Kurzfassung und Empfehlungen.

---

## 1. Next.js `<Image>` und next/font

### Image
- **Alle Bildausgaben** nutzen `next/image`: `app/page.tsx`, `app/about/page.tsx`, `components/ui/ProjectCard.tsx`, `app/projects/[slug]/page.tsx` (Cover + Galerie).
- **Keine** raw `<img>`-Tags gefunden.
- Effekt: automatische WebP/AVIF (je nach Browser), Lazy Loading, `sizes` gesetzt wo sinnvoll, `priority` nur auf Hero (Startseite) und Projekt-Cover.

### Fonts
- **next/font** wird genutzt: `Montserrat` aus `next/font/google` in `app/layout.tsx`.
- Konfiguration: `display: "swap"` (verhindert unsichtbaren Text), `preload: true`, `subsets: ["latin"]`.
- Fonts werden von Next selbst gehostet, kein zusätzlicher Request zu Google Fonts.

**Fazit:** Keine Änderung nötig; Setup ist optimiert.

---

## 2. Client vs. Server Components

### Vor dem Audit
- **Footer:** `"use client"` – nur wegen `new Date().getFullYear()`.
- **ContactForm:** `"use client"` – wegen `useActionState`, `isPending`, Formular-State.

### Durchgeführt
- **Footer** wurde in einen **Server Component** umgebaut. Das Jahr wird serverseitig berechnet (bei statischen Seiten zum Build-Zeitpunkt). `"use client"` wurde entfernt → weniger Client-JS.

### Unverändert (richtig so)
- **ContactForm** bleibt Client Component (Hooks: `useActionState`, `isPending`).
- **Navbar** war und bleibt Server Component (nur Links, kein State).

**Fazit:** Nur der Footer konnte eingespart werden; aktuell nur ein bewusst clientseitiger Baustein (ContactForm).

---

## 3. Imports und Bibliotheken

### Ungenutzte Imports
- Keine ungenutzten Imports gefunden (u. a. `Link` in `app/projects/[slug]/page.tsx` wird für „← Alle Projekte“ genutzt).

### Dependencies (`package.json`)
- **next, react, react-dom** – Standard.
- **clsx + tailwind-merge** – sehr leicht, für `cn()`.
- **resend** – nur in Server Action `app/actions/send.ts`, nicht im Client-Bundle.
- Keine großen UI-/Chart-Bibliotheken.

**Fazit:** Keine unnötigen oder schweren Pakete; kein Handlungsbedarf.

---

## 4. Fonts und externe Skripte (Analytics)

### Fonts (bereits umgesetzt)
- Font-Loading läuft über **next/font** im Root-Layout.
- Kein manuelles `@font-face` nötig; Next übernimmt Self-Hosting und Optimierung.

### Externe Skripte (Analytics)
- **Neue Komponente:** `components/analytics/ExternalScripts.tsx`
  - Nutzt **next/script** mit `strategy="afterInteractive"`.
  - Lädt nur, wenn `NEXT_PUBLIC_ANALYTICS_SCRIPT_URL` gesetzt ist (z. B. Plausible, Google Analytics Script-URL).
- **Einbindung:** `app/layout.tsx` rendert `<ExternalScripts />` am Ende von `<body>`.

**Strategien in Kürze:**
- **afterInteractive** (Standard für Analytics): Nach Hydration, blockiert nicht das erste Rendering.
- **lazyOnload**: Wenn der Browser idle ist – optional für weniger kritische Skripte (kann in `ExternalScripts.tsx` per Kommentar auf `strategy="lazyOnload"` umgestellt werden).
- **worker** (experimentell): Skript in einem Web Worker – für spezielle Fälle, hier nicht nötig.

**Beispiel .env.local:**
```env
# Optional: Analytics (Script-URL deines Anbieters)
NEXT_PUBLIC_ANALYTICS_SCRIPT_URL=https://example.com/analytics.js
```

---

## 5. Kurz-Checkliste

| Thema                    | Status |
|--------------------------|--------|
| Alle Bilder über next/image | ✅ |
| next/font mit display: swap | ✅ |
| Footer als Server Component | ✅ (umgesetzt) |
| ContactForm nur wo nötig Client | ✅ |
| Keine ungenutzten Imports | ✅ |
| Leichte Dependencies       | ✅ |
| next/script für Analytics  | ✅ (ExternalScripts) |

---

## 6. Optionale nächste Schritte

- **Bilder:** Wenn du von Picsum auf echte Assets umstellst: `next.config.ts` `images.domains`/`remotePatterns` anpassen; weiter `next/image` + sinnvolle `sizes` nutzen.
- **Video:** `ProjectVideo` nutzt natives `<video>` mit `preload="metadata"` – gut. Bei Bedarf z. B. next-video oder Mux für Hosting erwägen.
- **Analytics:** `NEXT_PUBLIC_ANALYTICS_SCRIPT_URL` setzen und ggf. in `ExternalScripts.tsx` zwischen `afterInteractive` und `lazyOnload` wählen.

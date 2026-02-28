# Barrierefreiheit (Accessibility) – Audit

Kurzüberblick über den Stand und die durchgeführten Anpassungen.

---

## 1. Buttons und Links ohne Text (z. B. Icons)

**Ergebnis: Keine Anpassung nötig.**

- **Layout:** Link „Zum Inhalt springen“ hat sichtbaren Text.
- **Startseite:** Link „Alle Projekte ansehen“ – Pfeil in `<span aria-hidden>` → nur der Text wird vorgelesen.
- **Projekt-Detail:** Link „← Alle Projekte“ – Pfeil in `<span aria-hidden>` → nur „Alle Projekte“ wird vorgelesen.
- **Services:** Link „Zum Kontakt“ + Pfeil mit `aria-hidden`.
- **Navbar / Footer:** Alle Links haben klaren Text („Kracht Media“, „Home“, „Projekte“, …).
- **ContactForm:** Button hat Text („Nachricht senden“ / „Wird gesendet …“).
- **ProjectCard:** Der gesamte Karten-Inhalt (Kategorie, Titel, Beschreibung) ist im Link – kein reines Icon-Link.

Es gibt keine reinen Icon-Buttons oder -Links; wo nur dekorative Zeichen (z. B. Pfeile) vorkommen, sind sie mit `aria-hidden` ausgezeichnet.

---

## 2. Semantische HTML-Struktur (ein h1, logische Hierarchie)

**Anpassungen vorgenommen:**

- **Startseite (`app/page.tsx`):**
  - Bisher: Statement-Bereich war nur per `aria-labelledby` an ein `blockquote` mit `id="message-heading"` gebunden – kein echtes Überschriften-Element.
  - **Änderung:** Eigenes `<h2 id="message-heading" className="sr-only">Unser Anspruch</h2>` ergänzt, `id` vom `blockquote` entfernt. Struktur: **h1** (Hero) → **h2** (Ausgewählte Projekte) → **h3** (Karten-Titel) → **h2** (Unser Anspruch).

- **Projekte-Übersicht (`app/projects/page.tsx`):**
  - Bisher: Ein **h1** „Projekte“, danach direkt **h2** in jeder ProjectCard → mehrere **h2** ohne übergeordnetes **h2**.
  - **Änderung:** Ein unsichtbares **h2** „Projektübersicht“ (`sr-only`) ergänzt, die **ul** mit `aria-labelledby="projektliste-heading"` verknüpft.

- **ProjectCard (`components/ui/ProjectCard.tsx`):**
  - Kartentitel von **h2** auf **h3** umgestellt, damit unter der jeweiligen Seiten-Überschrift (h2) eine klare Hierarchie entsteht: **h1** → **h2** (Sektion) → **h3** (Karten).

**Überprüfte Seiten (unverändert, Struktur in Ordnung):**

- **About:** ein h1 „Über uns“, ein h2 (Team-Name).
- **Kontakt:** ein h1 „Kontakt“, kein weiterer Heading nötig.
- **Projekt-Detail:** ein h1 (Projekttitel), h2 „Projektvideo“ (sr-only), h2 „Galerie“.
- **Impressum, Datenschutz, Cookies, Barrierefreiheit, Leistungen:** je ein h1, danach h2/h3 ohne Level-Sprung.

---

## 3. Formularfelder und Label-Verknüpfung

**Ergebnis: Korrekt umgesetzt.**

- **ContactForm** (`components/ui/ContactForm.tsx`):
  - Jedes Feld hat ein zugehöriges `<label>` mit `htmlFor` und ein Eingabeelement mit passendem `id`:
    - `htmlFor="name"` / `id="name"`
    - `htmlFor="email"` / `id="email"`
    - `htmlFor="message"` / `id="message"`
  - Statusmeldung: `id="form-status"`, Formular mit `aria-describedby={state?.message ? "form-status" : undefined}`, `role="status"`, `aria-live="polite"`.

Es sind keine unverknüpften oder unbenannten Formularfelder vorhanden.

---

## Kurz-Checkliste

| Prüfpunkt | Status |
|-----------|--------|
| Links/Buttons ohne Text haben aria-label oder versteckte Texte | ✅ (keine solchen; Dekoration mit aria-hidden) |
| Nur ein h1 pro Seite | ✅ |
| Logische Überschriften-Hierarchie (kein Sprung h1→h3) | ✅ (angepasst: h2 für Sektionen, h3 für Karten) |
| Formularfelder mit korrektem label + id/htmlFor | ✅ |

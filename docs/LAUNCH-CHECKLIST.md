# Kracht Media Website – Launch-Checkliste

Diese Liste beschreibt Schritt für Schritt, was du tun musst, damit die Website voll funktionsfähig, suchmaschinenoptimiert und rechtlich abgesichert ist.

---

## 1. Umgebungsvariablen (Environment Variables)

### 1.1 Lokal (`.env.local`)

Erstelle im Projektroot eine Datei `.env.local` (wird von Git ignoriert) und trage ein:

```env
# Öffentliche URL der Live-Website (für Sitemap, Robots, OG-URLs)
NEXT_PUBLIC_SITE_URL=https://kracht.at

# Resend: API-Key für das Kontaktformular (sendet an office@kracht.at; siehe Abschnitt 3)
RESEND_API_KEY=re_xxxxxxxxxxxx
# Optional: Absender nach Domain-Verifizierung, z. B. Kracht Media <kontakt@kracht.at>
# RESEND_FROM=
```

- **NEXT_PUBLIC_SITE_URL**: Exakt die URL, unter der die Seite erreichbar ist (ohne trailing slash). Wird für `metadataBase`, Sitemap, `robots.txt` und Open-Graph-URLs genutzt. Ohne Setzen wird `https://kracht.at` als Fallback verwendet.
- **RESEND_API_KEY**: Erforderlich, damit das Kontaktformular E-Mails an office@kracht.at sendet (Abschnitt 3).
- **RESEND_FROM** (optional): Eigene Absender-Adresse nach Domain-Verifizierung bei Resend; sonst wird der Test-Absender genutzt.

### 1.2 Vercel (Produktion)

Unter **Vercel → Projekt → Settings → Environment Variables** dieselben Variablen anlegen:

- `NEXT_PUBLIC_SITE_URL` = deine finale Domain (z. B. `https://kracht.at`)
- `RESEND_API_KEY` = dein Resend API Key (Kontaktformular sendet an office@kracht.at); optional `RESEND_FROM`

Nach Änderungen ggf. Redeploy auslösen.

---

## 2. SEO (Suchmaschinenoptimierung)

### 2.1 Basis (bereits im Code)

- **Metadata**: `lib/metadata.ts` – Titel, Beschreibung, Keywords, Open Graph, Twitter Cards, `metadataBase`, Canonical.
- **Sitemap**: `app/sitemap.ts` – alle Haupt- und Rechteseiten plus Projekt-URLs; unter `NEXT_PUBLIC_SITE_URL/sitemap.xml` erreichbar.
- **Robots**: `app/robots.ts` – erlaubt Crawler, verweist auf Sitemap, sperrt `/api/`.

### 2.2 Was du tun musst

| Aufgabe | Details |
|--------|--------|
| **NEXT_PUBLIC_SITE_URL setzen** | In Vercel und lokal auf die echte Domain setzen (z. B. `https://kracht.at`), damit Sitemap, Canonical und OG-URLs stimmen. |
| **OG-Bild bereitstellen** | Die App erwartet ein Bild unter **`/og-default.png`** (Root: `public/og-default.png`). Format: 1200×630 px, für Social-Sharing. Fehlt es, können Soziale Netzwerke ein Standard-Vorschaubild anzeigen oder keins. |
| **Google Search Console** | Domain bei [Google Search Console](https://search.google.com/search-console) hinzufügen und Sitemap-URL eintragen: `https://deine-domain.com/sitemap.xml`. |
| **Bing Webmaster** | Optional: [Bing Webmaster Tools](https://www.bing.com/webmasters), gleiche Sitemap-URL angeben. |

### 2.3 Optional (nur wenn gewünscht)

- **Structured Data (JSON-LD)**: Organisation/LocalBusiness-Schema in `app/layout.tsx` oder einer eigenen Komponente einbinden.
- **Google Analytics / GTM**: Tracking-Script nur nach Einwilligung (Cookie-Banner/Datenschutz) einbinden; in der Datenschutzerklärung erwähnen.

---

## 3. Kontaktformular (Resend → office@kracht.at)

Es gibt **kein Newsletter** – nur das Kontaktformular auf der Seite **/contact**. Das Formular (Name, E-Mail, Nachricht) wird per **Resend** an **office@kracht.at** gesendet. Die Absender-E-Mail aus dem Formular wird als **Reply-To** gesetzt, damit du direkt antworten kannst.

### 3.1 Resend einrichten

1. **Account**: Auf [resend.com](https://resend.com) registrieren.
2. **Domain verifizieren**: Deine Absender-Domain (z. B. `kracht.at`) bei Resend verifizieren, damit E-Mails nicht als Spam landen.
3. **API-Key**: Unter Resend Dashboard → API Keys einen neuen Key erstellen und kopieren.
4. **Umgebungsvariablen** in `.env.local` und in Vercel:
   - `RESEND_API_KEY=re_...` (erforderlich)
   - `RESEND_FROM` (optional): Absender-Adresse, z. B. `Kracht Media <kontakt@kracht.at>`. Ohne Setzen wird `Kracht Media <onboarding@resend.dev>` genutzt (nur zum Testen; für Produktion eigene Domain nutzen).

### 3.2 Code (bereits umgesetzt)

- **`app/actions/send.ts`** nutzt Resend, sendet an **office@kracht.at**, setzt Reply-To auf die E-Mail des Nutzers und gibt bei Fehlern eine verständliche Meldung zurück (inkl. Hinweis auf office@kracht.at).

### 3.3 Datenschutz

- In der **Datenschutzerklärung** (Abschnitt „Kontaktformular“) erwähnen, dass Daten an Resend (USA) übermittelt werden können, und auf Standardvertragsklauseln / Datenschutzinformation von Resend verweisen.
- Optional: Einwilligungshinweis direkt am Formular („Ich habe die Datenschutzerklärung gelesen …“).

---

## 4. GEO (Standorterkennung)

Die **`middleware.ts`** nutzt den Header **`x-vercel-ip-country`**, den Vercel automatisch setzt.

### 4.1 Was du tun musst

| Aufgabe | Details |
|--------|--------|
| **Auf Vercel deployen** | Der Header wird nur von Vercel gesetzt. Bei anderem Hosting (z. B. eigenem Server) gibt es diesen Header nicht; dann müsstest du eine andere Geo-Lösung (z. B. Cloudflare, MaxMind) einbauen. |
| **Nichts weiter nötig** | Middleware schreibt den Wert in einen Cookie `x-vercel-ip-country` (24h). Du kannst ihn in Server Components oder API-Routes aus `cookies().get('x-vercel-ip-country')` auslesen, wenn du z. B. regionale Inhalte oder A/B-Tests umsetzen willst. |

Wenn du GEO vorerst nicht nutzt, kannst du die Middleware so lassen – sie schadet nicht.

---

## 5. Rechtliche Seiten (Impressum, Datenschutz, Cookies, Barrierefreiheit)

### 5.1 Impressum (`/impressum`)

- **Bereits ausgefüllt**: Firmenname, Adresse (Wiesboden 14, 2820 Walpersbach), Telefon, E-Mail (aus `lib/site.ts`).
- **Du musst ergänzen**:
  - **Vertretungsberechtigte Person(en)**: Name(n) der Geschäftsführer:in(nen) eintragen (aktuell: „Angaben folgen.“).
  - **Registereintrag**: Firmenbuchnummer (bzw. Registergericht) und UID-Nummer eintragen (aktuell: „Angaben folgen.“).
- Optional: Haftungsausschluss und Urheberrecht mit einem Anwalt prüfen oder anpassen.

### 5.2 Datenschutzerklärung (`/datenschutz`)

- Struktur (Verantwortlicher, Erhebung, Zweck, Rechtsgrundlage, Weitergabe, Cookies, Kontaktformular, Hosting, Betroffenenrechte, Beschwerde, Aktualität) ist vorhanden.
- **Du solltest**:
  - Konkrete Angaben zu Hosting (z. B. „Vercel Inc.“, Sitz USA) und ggf. Resend einfügen.
  - Wenn du Analytics/Cookie-Banner nutzt: entsprechende Absätze ergänzen und in „Cookies“ verlinken.
  - „Stand“-Datum am Ende bei inhaltlichen Änderungen anpassen (wird aktuell per `toLocaleDateString` dynamisch gesetzt).

### 5.3 Cookies (`/cookies`)

- Text zu „Was sind Cookies“, „Welche verwenden wir“, „Einstellungen verwalten“ ist vorhanden.
- **Wenn du später** ein Cookie-Banner oder Tracking einbaust: hier die konkreten Cookie-Namen und Zwecke auflisten und ggf. auf den Datenschutz verweisen.

### 5.4 Barrierefreiheit (`/accessibility`)

- Kurzer Hinweis und Kontakt-E-Mail sind vorhanden. Bei Maßnahmen (z. B. WCAG-Test) kannst du die Seite erweitern.

---

## 6. Inhalte & Medien

### 6.1 Projekt-Daten (`lib/data.ts`)

- Aktuell: **Platzhalter-Bilder** von picsum.photos und **Beispiel-Texte**.
- **Du musst**:
  - Echte **Projekt-Titel, -Beschreibungen und -detailTexte** eintragen.
  - **Eigene Bilder** verwenden: entweder in `public/` ablegen (z. B. `public/projects/…`) und in `lib/data.ts` als `/projects/…` referenzieren **oder** eine Bild-CDNs-URL nutzen und in `next.config.ts` unter `images.remotePatterns` die erlaubte Domain eintragen.
  - **Videos**: `videoUrl` zeigt aktuell auf lokale Pfade (z. B. `/videos/alpha-showreel.mp4`). Entweder echte Dateien unter `public/videos/` legen oder eine Video-URL (z. B. Vimeo/YouTube oder next-video/Mux) eintragen und ggf. Player anpassen.

### 6.2 Team & Über-uns (`lib/data.ts` → `team`)

- **team.image**: Aktuell Platzhalter-URL. Durch echten Pfad (z. B. `public/images/team.jpg`) oder CDN-URL ersetzen.
- **team.description**: Text zur Kracht-Philosophie anpassen.

### 6.3 Hero-Bild (Startseite)

- In **`app/page.tsx`** wird `HERO_IMAGE` (picsum.photos) genutzt. Durch ein eigenes Bild ersetzen (z. B. in `public/` und `import` oder Pfad `/hero.jpg`).

### 6.4 Favicon & App-Icons

- **Favicon**: `app/favicon.ico` (oder über `app/icon.png` / `app/icon.svg`) bereitstellen, damit Tabs und Lesezeichen ein Marken-Icon zeigen.
- Optional: `app/apple-icon.png` für iOS.

---

## 7. Deployment (Vercel)

| Schritt | Aktion |
|--------|--------|
| **Projekt verbinden** | Repo mit Vercel verbinden (GitHub/GitLab/Bitbucket). Build Command: `next build --webpack` (wie in `package.json`). |
| **Env-Variablen** | `NEXT_PUBLIC_SITE_URL` und `RESEND_API_KEY` (optional `RESEND_FROM`) in Vercel setzen (siehe Abschnitt 1.2). |
| **Domain** | Eigene Domain (z. B. kracht.at) in Vercel unter Domains hinzufügen und DNS wie angegeben konfigurieren (A/CNAME). |
| **HTTPS** | Von Vercel automatisch; nach Domain-Einrichtung prüfen, dass nur HTTPS verwendet wird (Redirect einstellbar). |

---

## 8. Kurz-Check vor Go-Live

- [ ] `.env.local` / Vercel: `NEXT_PUBLIC_SITE_URL` = finale Domain
- [ ] Resend: Account, Domain verifiziert, `RESEND_API_KEY` gesetzt; optional `RESEND_FROM` für eigenen Absender
- [ ] `public/og-default.png` (1200×630) vorhanden
- [ ] Impressum: Vertretungsberechtigte und Register/UID ausgefüllt
- [ ] Datenschutz: Hosting und Resend genannt, Stand/Inhalt geprüft
- [ ] `lib/data.ts`: echte Projekte, Team-Bild und -Text, ggf. eigene Bilder/Video-URLs
- [ ] Hero-Bild und Favicon/App-Icon ersetzt
- [ ] Google Search Console: Sitemap eingetragen
- [ ] Einmal komplett durchklicken (Kontaktformular auf /contact, alle Links, Mobilansicht)

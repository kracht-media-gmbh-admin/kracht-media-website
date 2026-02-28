import { Metadata } from "next";
import CookieList from "@/components/legal/CookieList";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Informationen über die Verwendung von Cookies auf unserer Website – Kracht Media",
};

export default function CookiesPage() {
  return (
    <main className="section" style={{ paddingTop: "var(--spacing-32)" }}>
      <div className="container-content">
        <h1 className="text-heading-1" style={{ marginBottom: "var(--spacing-12)" }}>
          Cookies
        </h1>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Was sind Cookies?
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Allgemeine Erklärung zu Cookies hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Welche Cookies verwenden wir?
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)", marginBottom: "var(--spacing-4)" }}>
            {/* Text zu den verschiedenen Cookie-Typen hier einfügen */}
          </p>

          <h3 className="text-heading-6" style={{ marginBottom: "var(--spacing-3)" }}>
            Technisch notwendige Cookies
          </h3>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)", marginBottom: "var(--spacing-6)" }}>
            {/* Beschreibung technisch notwendiger Cookies */}
          </p>

          <h3 className="text-heading-6" style={{ marginBottom: "var(--spacing-3)" }}>
            Funktionale Cookies
          </h3>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)", marginBottom: "var(--spacing-6)" }}>
            {/* Beschreibung funktionaler Cookies */}
          </p>

          <h3 className="text-heading-6" style={{ marginBottom: "var(--spacing-3)" }}>
            Analyse- und Marketing-Cookies
          </h3>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Beschreibung Analyse-/Marketing-Cookies */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Cookie-Einstellungen verwalten
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zur Verwaltung von Cookie-Einstellungen hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Cookie-Liste
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)", marginBottom: "var(--spacing-6)" }}>
            Nachfolgend finden Sie eine detaillierte Auflistung aller Cookies, die auf unserer
            Website verwendet werden:
          </p>
          <CookieList />
        </section>

        <section>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Weitere Informationen
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Weiterer Text / Verweis auf Datenschutzerklärung */}
          </p>
        </section>
      </div>
    </main>
  );
}

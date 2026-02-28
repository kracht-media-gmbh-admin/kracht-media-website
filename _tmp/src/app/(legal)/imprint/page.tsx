import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Angaben gemäß § 5 ECG – Kracht Media",
};

export default function ImprintPage() {
  return (
    <main className="section" style={{ paddingTop: "var(--spacing-32)" }}>
      <div className="container-content">
        <h1 className="text-heading-1" style={{ marginBottom: "var(--spacing-12)" }}>
          Impressum
        </h1>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Angaben gemäß § 5 ECG
          </h2>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            {/* Firmenname */}
          </p>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            {/* Straße und Hausnummer */}
          </p>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            {/* PLZ und Ort */}
          </p>
          <p className="text-body">
            {/* Land */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Kontakt
          </h2>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            Telefon: {/* Telefonnummer */}
          </p>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            E-Mail: {/* E-Mail-Adresse */}
          </p>
          <p className="text-body">
            Website: {/* Website-URL */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Vertretungsberechtigte Person(en)
          </h2>
          <p className="text-body">
            {/* Name der vertretungsberechtigten Person */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Registereintrag
          </h2>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            {/* Firmenbuchnummer / Registergericht */}
          </p>
          <p className="text-body">
            {/* UID-Nummer */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Berufsbezeichnung und Kammer
          </h2>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            {/* Berufsbezeichnung */}
          </p>
          <p className="text-body">
            {/* Zuständige Kammer / Aufsichtsbehörde */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Haftungsausschluss
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Haftungsausschluss-Text hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Urheberrecht
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Urheberrechts-Text hier einfügen */}
          </p>
        </section>

        <section>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            Streitschlichtung
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Streitschlichtungs-Text hier einfügen */}
          </p>
        </section>
      </div>
    </main>
  );
}

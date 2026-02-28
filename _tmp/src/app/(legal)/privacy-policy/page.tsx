import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung gemäß DSGVO – Kracht Media",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section" style={{ paddingTop: "var(--spacing-32)" }}>
      <div className="container-content">
        <h1 className="text-heading-1" style={{ marginBottom: "var(--spacing-12)" }}>
          Datenschutzerklärung
        </h1>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            1. Verantwortlicher
          </h2>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            {/* Firmenname */}
          </p>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            {/* Adresse */}
          </p>
          <p className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
            E-Mail: {/* E-Mail-Adresse */}
          </p>
          <p className="text-body">
            Telefon: {/* Telefonnummer */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zur Datenerhebung hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            3. Zweck der Datenverarbeitung
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zum Zweck der Datenverarbeitung hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            4. Rechtsgrundlage der Verarbeitung
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zur Rechtsgrundlage hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            5. Weitergabe von Daten an Dritte
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zur Datenweitergabe hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            6. Cookies
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zu Cookies hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            7. Kontaktformular
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zum Kontaktformular hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            8. Hosting
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zum Hosting-Anbieter hier einfügen */}
          </p>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            9. Ihre Rechte als betroffene Person
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)", marginBottom: "var(--spacing-4)" }}>
            {/* Einleitungstext zu Betroffenenrechten */}
          </p>
          <ul style={{ paddingLeft: "var(--spacing-6)", marginBottom: "var(--spacing-4)" }}>
            <li className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
              <strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)
            </li>
            <li className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
              <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)
            </li>
            <li className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
              <strong>Recht auf Löschung</strong> (Art. 17 DSGVO)
            </li>
            <li className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
              <strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
            </li>
            <li className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
              <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)
            </li>
            <li className="text-body" style={{ marginBottom: "var(--spacing-2)" }}>
              <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "var(--spacing-10)" }}>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            10. Beschwerderecht bei der Aufsichtsbehörde
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zum Beschwerderecht hier einfügen */}
          </p>
        </section>

        <section>
          <h2 className="text-heading-4" style={{ marginBottom: "var(--spacing-4)" }}>
            11. Aktualität und Änderung dieser Datenschutzerklärung
          </h2>
          <p className="text-body" style={{ lineHeight: "var(--leading-relaxed)" }}>
            {/* Text zur Aktualität hier einfügen */}
          </p>
          <p className="text-body-sm text-muted" style={{ marginTop: "var(--spacing-6)" }}>
            Stand: {/* Datum einfügen */}
          </p>
        </section>
      </div>
    </main>
  );
}

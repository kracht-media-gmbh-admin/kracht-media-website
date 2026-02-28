import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung gemäß DSGVO – Kracht Media GmbH. Informationen zur Verarbeitung Ihrer Daten.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  const { name, address, phone, email } = COMPANY_INFO;

  return (
    <main className="min-h-screen bg-baby-powder">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h1
          className="text-4xl font-bold leading-[1.1] tracking-tight text-kracht-gruen"
          style={{ marginBottom: "2rem" }}
        >
          Datenschutzerklärung
        </h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">1. Verantwortlicher</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-2">{name}</p>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-2">{address.street}, {address.zip} {address.city}</p>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-2">E-Mail: {email.display}</p>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">Telefon: {phone.display}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Beim Besuch dieser Website werden automatisch Zugriffsdaten (z. B. IP-Adresse, Datum, aufgerufene Seiten) erhoben. Diese dienen der Bereitstellung und Sicherheit der Seite.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">3. Zweck der Datenverarbeitung</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Die Verarbeitung erfolgt zur Bereitstellung der Website, zur Kontaktaufnahme und zur Erfüllung vertraglicher oder gesetzlicher Pflichten.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">4. Rechtsgrundlage der Verarbeitung</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Die Verarbeitung stützt sich auf Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie auf berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">5. Weitergabe von Daten an Dritte</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Eine Weitergabe erfolgt nur, soweit gesetzlich vorgesehen oder Sie eingewilligt haben (z. B. Hosting-Anbieter).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">6. Cookies</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Informationen zur Verwendung von Cookies finden Sie auf unserer Seite <a href="/cookies" className="link-accent text-orange-web hover:text-orange-web/90">Cookies</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">7. Kontaktformular</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Daten aus dem Kontaktformular werden ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet und nicht an Dritte weitergegeben.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">8. Hosting</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Diese Website wird bei einem Anbieter gehostet. Mit diesem bestehen Auftragsverarbeitungsverträge.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">9. Ihre Rechte als betroffene Person</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-4">
            Sie haben u. a. folgende Rechte:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base leading-[1.45] text-kracht-gruen/90">
            <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
            <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
            <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
            <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">10. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">11. Aktualität und Änderung</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Diese Datenschutzerklärung wird bei Bedarf angepasst. Der aktuelle Stand ist auf dieser Seite ersichtlich.
          </p>
          <p className="text-sm text-kracht-gruen/70 mt-6">Stand: {new Date().toLocaleDateString("de-AT")}</p>
        </section>
      </div>
    </main>
  );
}

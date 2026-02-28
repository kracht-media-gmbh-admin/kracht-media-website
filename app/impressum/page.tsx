import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Impressum",
  description: "Impressum und Angaben gemäß § 5 ECG – Kracht Media GmbH, Walpersbach.",
  path: "/impressum",
});

const p = "text-base leading-[1.45] text-kracht-gruen/90";
const h2 = "text-lg font-semibold text-kracht-gruen mb-4";
const section = "mb-10";

export default function ImpressumPage() {
  const { name, address, phone, email } = COMPANY_INFO;

  return (
    <main className="min-h-screen bg-baby-powder">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-kracht-gruen mb-8">
          Impressum
        </h1>

        {/* § 5 ECG */}
        <section className={section}>
          <h2 className={h2}>Angaben gemäß § 5 ECG (E-Commerce-Gesetz)</h2>
          <p className={`${p} mb-1`}>{name}</p>
          <p className={`${p} mb-1`}>{address.street}</p>
          <p className={`${p} mb-1`}>{address.zip} {address.city}</p>
          <p className={`${p} mb-1`}>Österreich</p>
          <p className={`${p} mb-1 mt-4`}>
            Telefon:{" "}
            <a href={phone.href} className="link-accent text-orange-web hover:text-orange-web/90">
              {phone.display}
            </a>
          </p>
          <p className={p}>
            E-Mail:{" "}
            <a href={email.href} className="link-accent text-orange-web hover:text-orange-web/90">
              {email.display}
            </a>
          </p>
        </section>

        {/* Geschäftsführung */}
        <section className={section}>
          <h2 className={h2}>Geschäftsführung</h2>
          <p className={`${p} mb-1`}>Tobias Hübl</p>
          <p className={p}>Leon Köllnhofer</p>
        </section>

        {/* Registereintrag */}
        <section className={section}>
          <h2 className={h2}>Registereintrag</h2>
          <p className={`${p} mb-1`}>Rechtsform: Gesellschaft mit beschränkter Haftung (GmbH)</p>
          <p className={`${p} mb-1`}>Firmenbuchnummer: FN 667233 a</p>
          <p className={`${p} mb-1`}>Firmenbuchgericht: Landesgericht Wiener Neustadt</p>
          <p className={p}>UID-Nummer: ATU82908908</p>
        </section>

        {/* Unternehmensgegenstand */}
        <section className={section}>
          <h2 className={h2}>Unternehmensgegenstand</h2>
          <p className={p}>Werbung, Marketing und Fotografie</p>
        </section>

        {/* Aufsichtsbehörde & Kammer */}
        <section className={section}>
          <h2 className={h2}>Gewerbebehörde und Kammerzugehörigkeit</h2>
          <p className={`${p} mb-1`}>
            Zuständige Gewerbebehörde: Bezirkshauptmannschaft Wiener Neustadt
          </p>
          <p className={p}>Kammerzugehörigkeit: Wirtschaftskammer Niederösterreich (WKO NÖ)</p>
        </section>

        {/* § 25 Mediengesetz – Offenlegung */}
        <section className={section}>
          <h2 className={h2}>Offenlegung gemäß § 25 Mediengesetz (MedienG)</h2>
          <p className={`${p} mb-3`}>
            <strong>Medieninhaber:</strong> {name}, {address.street}, {address.zip} {address.city}
          </p>
          <p className={`${p} mb-3`}>
            <strong>Unternehmensgegenstand des Medieninhabers:</strong> Werbung, Marketing und Fotografie
          </p>
          <p className={`${p} mb-3`}>
            <strong>Beteiligungsverhältnisse (§ 25 Abs. 2 MedienG):</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li className={p}>Tobias Hübl – 55 %</li>
            <li className={p}>Leon Köllnhofer – 45 %</li>
          </ul>
          <p className={p}>
            <strong>Grundlegende Richtung:</strong> Unternehmensdarstellung und Präsentation der
            Dienstleistungen der {name} im Bereich Werbung, Marketing und Fotografie.
          </p>
        </section>

        {/* Haftungsausschluss – eigene Inhalte */}
        <section className={section}>
          <h2 className={h2}>Haftung für Inhalte</h2>
          <p className={p}>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Als
            Diensteanbieter sind wir gemäß § 17 ECG für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich. Für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
            von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        {/* Haftungsausschluss – externe Links */}
        <section className={section}>
          <h2 className={h2}>Haftung für Links</h2>
          <p className={p}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        {/* Urheberrecht */}
        <section className={section}>
          <h2 className={h2}>Urheberrecht</h2>
          <p className={p}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem österreichischen Urheberrecht (UrhG). Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen
            Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
            privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
            werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

        {/* OS-Plattform — ODR-VO Art. 14 Abs. 1 */}
        <section className={section}>
          <h2 className={h2}>Online-Streitbeilegung (OS-Plattform)</h2>
          <p className={`${p} mb-2`}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit, die Sie unter{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-orange-web hover:text-orange-web/90"
            >
              https://ec.europa.eu/consumers/odr
            </a>{" "}
            finden. Unsere E-Mail-Adresse lautet: {email.display}
          </p>
        </section>

        {/* Außergerichtliche Streitbeilegung */}
        <section>
          <h2 className={h2}>Außergerichtliche Streitbeilegung</h2>
          <p className={p}>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen. Im Streitfall wenden Sie sich
            bitte direkt an uns unter{" "}
            <a href={email.href} className="link-accent text-orange-web hover:text-orange-web/90">
              {email.display}
            </a>
            .
          </p>
        </section>

      </div>
    </main>
  );
}

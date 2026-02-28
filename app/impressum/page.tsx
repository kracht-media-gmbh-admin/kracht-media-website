import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Angaben gemäß § 5 ECG – Kracht Media",
};

export default function ImpressumPage() {
  const { name, address, phone, email } = COMPANY_INFO;

  return (
    <main className="min-h-screen bg-baby-powder">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1
          className="text-3xl font-bold leading-[1.1] text-kracht-gruen"
          style={{ marginBottom: "1.5rem" }}
        >
          Impressum
        </h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">
            Angaben gemäß § 5 ECG
          </h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-2">{name}</p>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-2">{address.street}</p>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            {address.zip} {address.city}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">Kontakt</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-2">
            Telefon: <a href={phone.href} className="text-orange-web hover:underline">{phone.display}</a>
          </p>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-2">
            E-Mail: <a href={email.href} className="text-orange-web hover:underline">{email.display}</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">
            Vertretungsberechtigte Person(en)
          </h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Angaben folgen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">Registereintrag</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Firmenbuchnummer / UID-Nummer: Angaben folgen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">
            Haftungsausschluss
          </h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr übernommen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">Urheberrecht</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Alle Inhalte dieser Website sind urheberrechtlich geschützt. Eine Vervielfältigung oder Nutzung bedarf der vorherigen schriftlichen Zustimmung.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">Streitschlichtung</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit. Weitere Informationen finden Sie unter der jeweiligen Aufsichtsbehörde.
          </p>
        </section>
      </div>
    </main>
  );
}

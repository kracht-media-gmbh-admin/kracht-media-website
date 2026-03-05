import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung gemäß DSGVO – Kracht Media GmbH. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
  path: "/datenschutz",
});

const LAST_UPDATED = "Februar 2026";

const p = "text-base leading-[1.45] text-kracht-gruen/90";
const li = "text-base leading-[1.45] text-kracht-gruen/90";
const h2 = "text-lg font-semibold text-kracht-gruen mb-4";
const h3 = "text-base font-semibold text-kracht-gruen mb-2 mt-6";
const section = "mb-10";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-baby-powder">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-kracht-gruen mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-sm text-kracht-gruen/50 mb-10">Stand: {LAST_UPDATED}</p>

        {/* 1. Verantwortlicher */}
        <section className={section}>
          <h2 className={h2}>1. Verantwortlicher</h2>
          <p className={`${p} mb-1`}>Kracht Media GmbH</p>
          <p className={`${p} mb-1`}>Wiesboden 14</p>
          <p className={`${p} mb-1`}>2820 Walpersbach, Österreich</p>
          <p className={`${p} mb-1`}>
            E-Mail:{" "}
            <a href="mailto:office@kracht.at" className="link-accent text-orange-web hover:text-orange-web/90">
              office@kracht.at
            </a>
          </p>
          <p className={`${p} mb-1`}>
            Telefon:{" "}
            <a href="tel:06607123377" className="link-accent text-orange-web hover:text-orange-web/90">
              0660 7123377
            </a>
          </p>
          <p className={`${p} mt-3`}>
            Geschäftsführer: Tobias Hübl und Leon Köllnhofer
          </p>
        </section>

        {/* 2. Allgemeine Grundsätze */}
        <section className={section}>
          <h2 className={h2}>2. Allgemeine Grundsätze</h2>
          <p className={p}>
            Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir
            verarbeiten personenbezogene Daten ausschließlich auf Grundlage der geltenden
            datenschutzrechtlichen Vorschriften, insbesondere der Datenschutz-Grundverordnung
            (EU) 2016/679 (DSGVO) und des österreichischen Datenschutzgesetzes (DSG 2018).
            Diese Datenschutzerklärung informiert Sie gemäß Art. 13 DSGVO darüber, welche
            Daten wir erheben, zu welchem Zweck und auf welcher Rechtsgrundlage dies erfolgt.
          </p>
        </section>

        {/* 3. Hosting – Vercel */}
        <section className={section}>
          <h2 className={h2}>3. Hosting und Server-Infrastruktur</h2>
          <p className={`${p} mb-3`}>
            Diese Website wird auf der Infrastruktur von{" "}
            <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA)
            betrieben. Beim Aufruf unserer Website werden von Vercel automatisch sogenannte
            Server-Logdateien erfasst, die Ihr Browser übermittelt. Diese enthalten:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li className={li}>IP-Adresse des anfragenden Geräts</li>
            <li className={li}>Datum und Uhrzeit des Zugriffs</li>
            <li className={li}>Aufgerufene URL sowie HTTP-Statuscode</li>
            <li className={li}>Übertragene Datenmenge</li>
            <li className={li}>Browser-Typ und Betriebssystem (User-Agent)</li>
            <li className={li}>Referrer-URL (zuletzt besuchte Seite)</li>
          </ul>
          <p className={`${p} mb-3`}>
            Diese Daten werden von Vercel zum Betrieb, zur Sicherheit und zur Fehlerdiagnose
            der Infrastruktur verarbeitet. Eine Zuordnung zu Ihrer Person nehmen wir nicht
            vor. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse am sicheren und stabilen Betrieb der Website).
          </p>
          <p className={`${p} mb-3`}>
            Da Vercel ein US-amerikanisches Unternehmen ist, werden dabei personenbezogene
            Daten in die USA übermittelt. Diese Übermittlung ist durch die Zertifizierung
            von Vercel unter dem <strong>EU-US Data Privacy Framework</strong> (Art. 45
            DSGVO) sowie durch den Abschluss von{" "}
            <strong>EU-Standardvertragsklauseln</strong> (SCCs gemäß Art. 46 Abs. 2 lit. c
            DSGVO) abgesichert. Mit Vercel besteht ein Auftragsverarbeitungsvertrag (AVV)
            gemäß Art. 28 DSGVO. Weitere Informationen finden Sie in der{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-orange-web hover:text-orange-web/90"
            >
              Datenschutzerklärung von Vercel
            </a>
            .
          </p>
        </section>

        {/* 4. Lokaler Speicher */}
        <section className={section}>
          <h2 className={h2}>4. Lokaler Speicher des Browsers (Local Storage)</h2>
          <p className={`${p} mb-4`}>
            Zur Verbesserung Ihrer Nutzungserfahrung speichern wir im lokalen Speicher Ihres
            Browsers (Local Storage) einen einzigen Eintrag. Local Storage ist kein Cookie –
            die dort gespeicherten Daten werden niemals automatisch an einen Server übertragen
            und verbleiben ausschließlich in Ihrem Browser.
          </p>
          <div className="overflow-x-auto rounded-xl border border-kracht-gruen/10 mb-4">
            <table className="w-full text-sm text-kracht-gruen/80">
              <thead className="bg-kracht-gruen/5">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Schlüssel</th>
                  <th className="text-left px-4 py-3 font-semibold">Mögliche Werte</th>
                  <th className="text-left px-4 py-3 font-semibold">Zweck</th>
                  <th className="text-left px-4 py-3 font-semibold">Ablauf</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-kracht-gruen/10">
                  <td className="px-4 py-3 font-mono text-xs align-top">kracht-media-theme</td>
                  <td className="px-4 py-3 align-top">„light" oder „dark"</td>
                  <td className="px-4 py-3 align-top">
                    Speichert die gewählte Farbdarstellung (Hell-/Dunkelmodus), damit die Seite
                    beim nächsten Besuch sofort korrekt dargestellt wird.
                  </td>
                  <td className="px-4 py-3 align-top">
                    Kein automatischer Ablauf; bleibt bis zur manuellen Löschung erhalten.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={p}>
            Dieser Eintrag enthält keinerlei personenbezogene Daten, wird nicht an uns oder
            Dritte übertragen und dient keinem Tracking-Zweck. Für technisch notwendige
            Speicherzugriffe, die ausschließlich der vom Nutzer gewünschten Darstellung dienen,
            ist nach Art. 5 Abs. 3 ePrivacy-Richtlinie (umgesetzt in § 165 TKG 2021) keine
            Einwilligung erforderlich. Sie können diesen Eintrag jederzeit löschen, indem
            Sie in Ihrem Browser die Website-Daten für kracht.at entfernen.
          </p>
        </section>

        {/* 5. Kontaktformular */}
        <section className={section}>
          <h2 className={h2}>5. Kontaktformular und E-Mail-Versand</h2>
          <p className={`${p} mb-4`}>
            Wenn Sie uns über das Kontaktformular eine Anfrage senden, erheben und
            verarbeiten wir folgende personenbezogene Daten:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li className={li}>Name</li>
            <li className={li}>E-Mail-Adresse</li>
            <li className={li}>Inhalt Ihrer Nachricht</li>
          </ul>

          <h3 className={h3}>Rechtsgrundlage</h3>
          <p className={`${p} mb-4`}>
            Die Verarbeitung erfolgt auf Grundlage von{" "}
            <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Durchführung vorvertraglicher
            Maßnahmen auf Anfrage der betroffenen Person) sowie{" "}
            <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an der
            Beantwortung eingehender Anfragen). Unser berechtigtes Interesse besteht darin,
            Ihnen eine qualifizierte Antwort auf Ihr Anliegen geben zu können.
          </p>

          <h3 className={h3}>Auftragsverarbeiter: Resend (E-Mail-Versanddienst)</h3>
          <p className={`${p} mb-3`}>
            Die Übermittlung der Formulardaten erfolgt verschlüsselt (TLS/HTTPS) über den
            E-Mail-Versanddienst <strong>Resend</strong> (Resend Inc., 2261 Market Street
            #4723, San Francisco, CA 94114, USA). Resend verarbeitet Ihre Daten
            ausschließlich zur technischen Zustellung der Nachricht an unser E-Mail-Postfach.
            Mit Resend besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO.
          </p>
          <p className={`${p} mb-3`}>
            Da Resend ein US-amerikanisches Unternehmen ist, werden Daten in die USA
            übermittelt. Diese Übermittlung ist durch den Abschluss von{" "}
            <strong>EU-Standardvertragsklauseln</strong> (SCCs gemäß Art. 46 Abs. 2 lit. c
            DSGVO) abgesichert. Weitere Informationen finden Sie in der{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-orange-web hover:text-orange-web/90"
            >
              Datenschutzerklärung von Resend
            </a>
            .
          </p>

          <h3 className={h3}>Speicherdauer</h3>
          <p className={p}>
            Ihre Anfragedaten werden nicht in einer Datenbank gespeichert. Die Nachricht
            verbleibt in unserem E-Mail-Postfach und wird nach abgeschlossener Bearbeitung
            gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen
            (z. B. § 132 BAO: 7 Jahre für steuerlich relevante Unterlagen).
          </p>
        </section>

        {/* 6. Keine Analyse, kein Tracking */}
        <section className={section}>
          <h2 className={h2}>6. Analyse und Tracking</h2>
          <p className={p}>
            Diese Website verwendet keine Analyse- oder Tracking-Tools (z. B. Google Analytics,
            Meta Pixel, Hotjar o. Ä.). Es werden keine Nutzerprofile erstellt und keine
            Verhaltensdaten zu Werbe- oder Analysezwecken erhoben.
          </p>
        </section>

        {/* 7. Cookies */}
        <section className={section}>
          <h2 className={h2}>7. Cookies</h2>
          <p className={p}>
            Diese Website setzt keine Tracking- oder Marketing-Cookies. Detaillierte
            Informationen zur Verwendung von lokalem Browserspeicher finden Sie auf
            unserer{" "}
            <a href="/cookies" className="link-accent text-orange-web hover:text-orange-web/90">
              Cookie-Informationsseite
            </a>
            .
          </p>
        </section>

        {/* 8. Betroffenenrechte */}
        <section className={section}>
          <h2 className={h2}>8. Ihre Rechte als betroffene Person</h2>
          <p className={`${p} mb-4`}>
            Ihnen stehen gegenüber dem Verantwortlichen folgende Rechte zu:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li className={li}>
              <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft
              über die von uns verarbeiteten personenbezogenen Daten zu verlangen.
            </li>
            <li className={li}>
              <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die
              Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten verlangen.
            </li>
            <li className={li}>
              <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung
              Ihrer personenbezogenen Daten verlangen, soweit keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </li>
            <li className={li}>
              <strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie
              können unter bestimmten Voraussetzungen die Einschränkung der Verarbeitung
              Ihrer Daten verlangen.
            </li>
            <li className={li}>
              <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Soweit die
              Verarbeitung auf Grundlage einer Einwilligung oder eines Vertrags erfolgt und
              automatisiert durchgeführt wird, können Sie die Herausgabe Ihrer Daten in einem
              strukturierten, gängigen und maschinenlesbaren Format verlangen.
            </li>
            <li className={li}>
              <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht,
              der Verarbeitung Ihrer Daten auf Basis von Art. 6 Abs. 1 lit. f DSGVO jederzeit
              zu widersprechen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, es
              liegen zwingende schutzwürdige Gründe vor, die Ihre Interessen überwiegen.
            </li>
            <li className={li}>
              <strong>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong>{" "}
              Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen
              werden, ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
              berührt wird.
            </li>
          </ul>
          <p className={p}>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an{" "}
            <a
              href="mailto:office@kracht.at"
              className="link-accent text-orange-web hover:text-orange-web/90"
            >
              office@kracht.at
            </a>
            .
          </p>
        </section>

        {/* 9. Beschwerderecht */}
        <section className={section}>
          <h2 className={h2}>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p className={`${p} mb-4`}>
            Unbeschadet anderweitiger Rechtsbehelfe haben Sie das Recht, sich bei der
            zuständigen Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht
            sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
            die DSGVO verstößt (Art. 77 DSGVO). Die zuständige Aufsichtsbehörde für
            Österreich ist:
          </p>
          <address className="not-italic space-y-1">
            <p className={p}><strong>Datenschutzbehörde (DSB)</strong></p>
            <p className={p}>Wickenburggasse 8, 1080 Wien</p>
            <p className={p}>Telefon: +43 1 52 152-0</p>
            <p className={p}>
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent text-orange-web hover:text-orange-web/90"
              >
                www.dsb.gv.at
              </a>
            </p>
          </address>
        </section>

        {/* 10. Aktualität */}
        <section>
          <h2 className={h2}>10. Aktualität und Änderungen dieser Datenschutzerklärung</h2>
          <p className={p}>
            Diese Datenschutzerklärung wird bei Bedarf aktualisiert, insbesondere wenn sich
            technische oder rechtliche Gegebenheiten ändern. Maßgeblich ist stets die auf
            dieser Seite veröffentlichte aktuelle Fassung. Der Stand ist oben angegeben.
          </p>
        </section>

      </div>
    </main>
  );
}

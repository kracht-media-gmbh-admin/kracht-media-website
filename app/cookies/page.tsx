import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie-Informationen",
  description:
    "Informationen zur Verwendung von Cookies und lokalem Speicher auf kracht.at – Kracht Media GmbH.",
  path: "/cookies",
});

const p = "text-base leading-[1.45] text-kracht-gruen/90";
const h2 = "text-lg font-semibold text-kracht-gruen mb-4";
const section = "mb-10";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-baby-powder">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-kracht-gruen mb-8">
          Cookie-Informationen
        </h1>

        {/* Keine Tracking-Cookies */}
        <section className={section}>
          <h2 className={h2}>Unsere Haltung zum Datenschutz</h2>
          <p className={p}>
            Diese Website wurde von Grund auf datenschutzfreundlich konzipiert. Wir setzen{" "}
            <strong>keine Tracking-Cookies</strong>, keine Marketing-Cookies und keine
            Analyse-Tools ein. Es gibt kein Cookie-Banner, weil keines notwendig ist.
          </p>
        </section>

        {/* Was sind Cookies */}
        <section className={section}>
          <h2 className={h2}>Cookies vs. lokaler Speicher</h2>
          <p className={`${p} mb-3`}>
            <strong>Cookies</strong> sind kleine Textdateien, die von einer Website in Ihrem
            Browser gespeichert und bei jedem Request an den Server übermittelt werden können.
            Sie können ablaufen, gelöscht oder durch Browsereinstellungen blockiert werden.
          </p>
          <p className={p}>
            <strong>Local Storage</strong> ist ein moderneres Speicherverfahren im Browser,
            das Daten ausschließlich lokal hält – diese Daten werden niemals automatisch an
            einen Server übertragen. Wir nutzen ausschließlich Local Storage, keinen
            Cookie-basierten Speicher.
          </p>
        </section>

        {/* Was wir speichern */}
        <section className={section}>
          <h2 className={h2}>Was wir tatsächlich speichern</h2>
          <p className={`${p} mb-4`}>
            Wir verwenden genau <strong>einen</strong> Local Storage-Eintrag:
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
                  <td className="px-4 py-3 align-top">„light", „dark"</td>
                  <td className="px-4 py-3 align-top">
                    Speichert Ihre Präferenz für den Hell- oder Dunkelmodus, damit die
                    Seite bei Ihrem nächsten Besuch sofort in der richtigen Darstellung
                    erscheint.
                  </td>
                  <td className="px-4 py-3 align-top">
                    Kein automatischer Ablauf. Bleibt erhalten, bis Sie ihn löschen oder
                    auf Systemstandard zurücksetzen.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={p}>
            Dieser Eintrag verlässt Ihren Browser niemals. Er wird nicht an uns oder
            Dritte übertragen, enthält keinerlei persönliche Daten und wird nicht für
            Tracking-Zwecke genutzt.
          </p>
        </section>

        {/* Drittanbieter */}
        <section className={section}>
          <h2 className={h2}>Drittanbieter und externe Dienste</h2>
          <p className={`${p} mb-3`}>
            Diese Website bindet keine externen Dienste ein, die Cookies in Ihrem Browser
            setzen würden (kein Google Analytics, kein Facebook Pixel, keine
            eingebetteten YouTube- oder Vimeo-Videos, keine Google Maps).
          </p>
          <p className={p}>
            Die Website wird auf der Infrastruktur von Vercel gehostet. Beim Seitenaufruf
            werden von Vercel serverseitig Zugriffsdaten (z. B. IP-Adresse, Browsertyp)
            in Server-Logdateien erfasst. Dies ist kein Cookie-Vorgang und erfolgt ohne
            Ihr aktives Zutun. Weitere Details dazu finden Sie in unserer{" "}
            <a href="/datenschutz" className="link-accent text-orange-web hover:text-orange-web/90">
              Datenschutzerklärung
            </a>
            .
          </p>
        </section>

        {/* Einstellungen verwalten */}
        <section className={section}>
          <h2 className={h2}>Local Storage löschen</h2>
          <p className={`${p} mb-3`}>
            Sie können den gespeicherten Eintrag jederzeit selbst entfernen:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className={p}>
              <strong>Chrome / Edge:</strong> Einstellungen → Datenschutz und Sicherheit →
              Website-Daten löschen → kracht.at auswählen
            </li>
            <li className={p}>
              <strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit →
              Cookies und Website-Daten verwalten → kracht.at entfernen
            </li>
            <li className={p}>
              <strong>Safari:</strong> Einstellungen → Datenschutz → Website-Daten verwalten →
              kracht.at entfernen
            </li>
          </ul>
        </section>

        {/* Link zur DSE */}
        <section>
          <h2 className={h2}>Weiterführende Informationen</h2>
          <p className={p}>
            Vollständige Informationen zur Datenverarbeitung auf dieser Website finden Sie
            in unserer{" "}
            <a href="/datenschutz" className="link-accent text-orange-web hover:text-orange-web/90">
              Datenschutzerklärung
            </a>
            .
          </p>
        </section>

      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Informationen über die Verwendung von Cookies auf unserer Website – Kracht Media",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-baby-powder">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1
          className="text-3xl font-bold leading-[1.1] text-kracht-gruen"
          style={{ marginBottom: "1.5rem" }}
        >
          Cookies
        </h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">Was sind Cookies?</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Sie dienen unter anderem der Funktionsfähigkeit der Seite und der Nutzererfahrung.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">Welche Cookies verwenden wir?</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-6">
            Wir setzen nur solche Cookies ein, die für den Betrieb der Website erforderlich sind oder zu denen Sie eingewilligt haben.
          </p>
          <h3 className="text-base font-semibold text-kracht-gruen mb-3">Technisch notwendige Cookies</h3>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-6">
            Diese Cookies sind für die Grundfunktionen der Website nötig (z. B. Session, Sicherheit) und können nicht deaktiviert werden.
          </p>
          <h3 className="text-base font-semibold text-kracht-gruen mb-3">Funktionale Cookies</h3>
          <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-6">
            Optionale Cookies für erweiterte Funktionen (z. B. Einstellungen, Formulare) werden nur mit Ihrer Einwilligung gesetzt.
          </p>
          <h3 className="text-base font-semibold text-kracht-gruen mb-3">Analyse- und Marketing-Cookies</h3>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Falls wir Analyse- oder Marketing-Tools einsetzen, erfolgt dies nur mit Ihrer ausdrücklichen Zustimmung.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">Cookie-Einstellungen verwalten</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden oder diese ablehnen. Details entnehmen Sie der Hilfe Ihres Browsers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-kracht-gruen mb-4">Weitere Informationen</h2>
          <p className="text-base leading-[1.45] text-kracht-gruen/90">
            Weitere Details zur Datenverarbeitung finden Sie in unserer <a href="/datenschutz" className="text-orange-web hover:underline">Datenschutzerklärung</a>.
          </p>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barrierefreiheit",
  description: "Barrierefreiheit und Zugänglichkeit dieser Website – Kracht Media",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-baby-powder">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1
          className="text-3xl font-bold leading-[1.1] text-kracht-gruen"
          style={{ marginBottom: "1.5rem" }}
        >
          Barrierefreiheit
        </h1>
        <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-6">
          Wir bemühen uns, diese Website für alle Nutzer zugänglich zu gestalten. Dazu zählen klare Strukturen, ausreichende Kontraste und die Möglichkeit, mit Tastatur und Screenreadern zu navigieren.
        </p>
        <p className="text-base leading-[1.45] text-kracht-gruen/90">
          Wenn Sie auf Barrieren stoßen oder Verbesserungsvorschläge haben, melden Sie sich gern unter <a href="mailto:office@kracht.at" className="text-orange-web hover:underline">office@kracht.at</a>.
        </p>
      </div>
    </main>
  );
}

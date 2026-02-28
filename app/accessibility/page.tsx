import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Barrierefreiheit",
  description: "Barrierefreiheit und Zugänglichkeit dieser Website – Kracht Media. Unser Einsatz für zugängliche Inhalte.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-baby-powder">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h1
          className="text-4xl font-bold leading-[1.1] tracking-tight text-kracht-gruen"
          style={{ marginBottom: "2rem" }}
        >
          Barrierefreiheit
        </h1>
        <p className="text-base leading-[1.45] text-kracht-gruen/90 mb-6">
          Wir bemühen uns, diese Website für alle Nutzer zugänglich zu gestalten. Dazu zählen klare Strukturen, ausreichende Kontraste und die Möglichkeit, mit Tastatur und Screenreadern zu navigieren.
        </p>
        <p className="text-base leading-[1.45] text-kracht-gruen/90">
          Wenn Sie auf Barrieren stoßen oder Verbesserungsvorschläge haben, melden Sie sich gern unter <a href="mailto:office@kracht.at" className="link-accent text-orange-web hover:text-orange-web/90">office@kracht.at</a>.
        </p>
      </div>
    </main>
  );
}

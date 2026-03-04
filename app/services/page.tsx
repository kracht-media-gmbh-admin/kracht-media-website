import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories } from "@/lib/services";
import { buildPageMetadata } from "@/lib/metadata";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = buildPageMetadata({
  title: "Leistungen",
  description:
    "Kracht Media Leistungen: Events (Fotografie, Videografie, Aftermovie), Design & Marketing (Corporate Design, Online Marketing), IT-Services (Websites, Prozessautomatisierung), Consulting (Marketing-Strategie, Mediaplanung, KI-Beratung).",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen" id="main-services">
      {/* Hero */}
      <section
        className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-24"
        aria-labelledby="leistungen-heading"
      >
        <h1
          id="leistungen-heading"
          className="animate-in animate-in-1 text-3xl font-bold leading-[1.08] tracking-tight text-kracht-gruen break-words sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ marginBottom: "0.4em" }}
        >
          Leistungen
        </h1>
        <p
          className="animate-in animate-in-2 max-w-2xl text-lg leading-[1.5] text-kracht-gruen/85 sm:text-xl"
          style={{ marginBottom: "0" }}
        >
          Von Events über Design & Marketing und IT bis Consulting: klare, kraftvolle
          Lösungen – ohne Kompromisse an Qualität und Präzision.
        </p>
      </section>

      {/* Vier Bereiche: Events, Design & Marketing, IT-Services, Consulting */}
      <ScrollReveal>
        <section
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
          aria-label="Leistungsbereiche"
        >
          <ServicesGrid categories={serviceCategories} />
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section
          className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-28 lg:px-8 lg:pt-32 lg:pb-32"
          aria-labelledby="cta-heading"
        >
          <div className="rounded-card border border-[#E5E5E5] bg-kracht-gruen/5 py-12 px-8 text-center sm:py-16 sm:px-12 max-sm:shadow-none shadow-[var(--shadow-card)]">
          <h2
            id="cta-heading"
            className="text-2xl font-bold leading-[1.1] text-kracht-gruen sm:text-3xl"
            style={{ marginBottom: "0.5em" }}
          >
            Projekt anfragen
          </h2>
          <p
            className="mx-auto max-w-xl text-base leading-[1.5] text-kracht-gruen/85"
            style={{ marginBottom: "1.5rem" }}
          >
            Sie haben eine konkrete Idee oder wollen erst unverbindlich sprechen?
            Wir hören zu und liefern klare Antworten.
          </p>
          <Link
            href="/contact"
            className="group btn-hover btn-hover-invert inline-flex items-center gap-2 rounded-lg bg-orange-web px-6 py-3.5 text-base font-semibold text-kracht-gruen focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder"
          >
            Zum Kontakt
            <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
        </section>
      </ScrollReveal>
    </main>
  );
}

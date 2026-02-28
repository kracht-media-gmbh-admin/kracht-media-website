import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories } from "@/lib/services";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Leistungen",
  description:
    "Kracht Media Leistungen: Events (Fotografie, Videografie, Foto-Shootings), Design (Corporate Branding, Social Marketing), IT-Service (Websites, KI, Workflow-Automatisierung).",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen" id="main-services">
      {/* Hero */}
      <section
        className="mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8 lg:pt-24 lg:pb-20"
        aria-labelledby="leistungen-heading"
      >
        <h1
          id="leistungen-heading"
          className="animate-in animate-in-1 text-4xl font-bold leading-[1.08] tracking-tight text-kracht-gruen sm:text-5xl md:text-6xl"
          style={{ marginBottom: "0.4em" }}
        >
          Leistungen
        </h1>
        <p
          className="animate-in animate-in-2 max-w-2xl text-lg leading-[1.5] text-kracht-gruen/85 sm:text-xl"
          style={{ marginBottom: "2rem" }}
        >
          Von Events über Design bis IT: wir liefern klare, kraftvolle Lösungen –
          ohne Kompromisse an Qualität und Präzision.
        </p>

        {/* Anchor-Navigation */}
        <nav
          className="animate-in animate-in-3 flex flex-wrap gap-3"
          aria-label="Leistungsbereiche"
        >
          {serviceCategories.map((cat, i) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="inline-flex items-center rounded-lg border-2 border-kracht-gruen/20 bg-baby-powder px-4 py-2.5 text-sm font-semibold text-kracht-gruen transition-colors hover:border-orange-web hover:bg-orange-web/10 hover:text-kracht-gruen focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder"
            >
              {cat.title}
            </a>
          ))}
        </nav>
      </section>

      {/* Kategorien */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {serviceCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-24 border-t border-kracht-gruen/10 py-16 sm:py-20 lg:py-24 first:border-t-0"
            aria-labelledby={`${category.id}-heading`}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-start">
              {/* Kategorie-Header mit dezentem Akzent */}
              <div className="lg:border-l-4 lg:border-orange-web lg:pl-8">
                <span
                  className="mb-3 block text-sm font-semibold uppercase tracking-wider text-orange-web"
                  aria-hidden
                >
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                <h2
                  id={`${category.id}-heading`}
                  className="text-2xl font-bold leading-[1.1] tracking-tight text-kracht-gruen sm:text-3xl"
                  style={{ marginBottom: "0.5em" }}
                >
                  {category.title}
                </h2>
                <p className="text-base leading-[1.5] text-kracht-gruen/80">
                  {category.teaser}
                </p>
              </div>

              {/* Service-Liste als visuelle Karten/Tags */}
              <ul className="flex flex-wrap gap-3 sm:gap-4" role="list">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <span
                      className="inline-flex rounded-xl border border-kracht-gruen/15 bg-kracht-gruen/5 px-4 py-3 text-sm font-medium text-kracht-gruen shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]"
                      title={item.description}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
        aria-labelledby="cta-heading"
      >
        <div className="rounded-2xl border-2 border-orange-web/30 bg-kracht-gruen/5 py-12 px-8 text-center sm:py-16 sm:px-12">
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
            className="inline-flex items-center gap-2 rounded-lg bg-orange-web px-6 py-3.5 text-base font-semibold text-kracht-gruen transition-colors hover:bg-orange-web/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder"
          >
            Zum Kontakt
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

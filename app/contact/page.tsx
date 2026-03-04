import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontakt",
  description:
    "Kontaktieren Sie Kracht Media für Film, Design und IT-Services. Wir melden uns zeitnah – für Projekte und Anfragen aus Österreich und darüber hinaus.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h1
          className="text-3xl font-bold leading-[1.1] tracking-tight text-[var(--text-page)] break-words sm:text-4xl sm:text-5xl"
          style={{ marginBottom: "0.5em" }}
        >
          Kontakt
        </h1>
        <p
          className="max-w-xl text-lg leading-[1.5] text-[var(--text-page-muted)]"
          style={{ marginBottom: "2.5rem" }}
        >
          Schreiben Sie uns – wir antworten schnell und unkompliziert.
        </p>
        <div className="max-w-lg">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

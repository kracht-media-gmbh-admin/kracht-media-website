import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Kracht Media – wir melden uns zeitnah.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1
          className="text-3xl font-bold leading-[1.1] tracking-tight text-kracht-gruen sm:text-4xl"
          style={{ marginBottom: "0.5em" }}
        >
          Kontakt
        </h1>
        <p
          className="max-w-xl text-base leading-[1.45] text-kracht-gruen/85"
          style={{ marginTop: "0.5rem", marginBottom: "2rem" }}
        >
          Schreiben Sie uns – wir antworten schnell und unkompliziert.
        </p>
        <div className="max-w-md">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

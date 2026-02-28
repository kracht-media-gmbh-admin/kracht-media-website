import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum – Kracht Media GmbH",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1
          className="text-3xl font-bold leading-[1.1] text-kracht-gruen"
          style={{ marginBottom: "1.5rem" }}
        >
          Impressum
        </h1>
        <p className="text-base leading-[1.45] text-kracht-gruen/90">
          Angaben gemäß § 5 TMG. Platzhalter – bitte mit rechtlichen Angaben zu
          Kracht Media GmbH ersetzen.
        </p>
      </div>
    </main>
  );
}

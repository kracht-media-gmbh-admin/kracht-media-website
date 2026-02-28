import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung – Kracht Media GmbH",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1
          className="text-3xl font-bold leading-[1.1] text-kracht-gruen"
          style={{ marginBottom: "1.5rem" }}
        >
          Datenschutz
        </h1>
        <p className="text-base leading-[1.45] text-kracht-gruen/90">
          Datenschutzerklärung gemäß DSGVO. Platzhalter – bitte mit
          datenschutzrechtlichen Inhalten ersetzen.
        </p>
      </div>
    </main>
  );
}

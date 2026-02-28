import { Metadata } from "next";
import { Suspense } from "react";
import ContactPageContent from "./_components/ContactPageContent";

export const metadata: Metadata = {
  title: "Kontakt | Kracht Media",
  description: "Lassen Sie uns gemeinsam Krach machen. Kontaktieren Sie uns für Design, Strategie und mehr.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Laden...</div>}>
        <ContactPageContent />
      </Suspense>
    </main>
  );
}

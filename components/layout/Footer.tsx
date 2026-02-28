"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

const KRACHT_ADDRESS = {
  name: "Kracht Media GmbH",
  street: "Musterstraße 1",
  city: "12345 Stadt",
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Platzhalter: später mit Server Action oder API anbinden
    setEmail("");
  };

  return (
    <footer
      className="border-t border-kracht-gruen/10 bg-baby-powder"
      role="contentinfo"
    >
      {/* Mini Kontakt / Newsletter oben */}
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-kracht-gruen/10 bg-kracht-gruen/5 p-6 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-kracht-gruen/80">
            Bleiben Sie auf dem Laufenden
          </h3>
          <p className="mt-2 max-w-md text-sm leading-[1.45] text-kracht-gruen/80">
            Kurze Nachricht oder E-Mail – wir melden uns.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Mail"
              className="min-w-0 flex-1 rounded-md border border-kracht-gruen/20 bg-baby-powder px-3 py-2.5 text-sm text-kracht-gruen placeholder-kracht-gruen/50 focus:border-orange-web focus:outline-none focus:ring-1 focus:ring-orange-web"
            />
            <button
              type="submit"
              className="rounded-md bg-orange-web px-4 py-2.5 text-sm font-semibold text-kracht-gruen transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder"
            >
              Senden
            </button>
          </form>
        </div>
      </div>

      {/* Links + Adresse */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <address className="not-italic text-sm text-kracht-gruen/80">
            <strong className="text-kracht-gruen">{KRACHT_ADDRESS.name}</strong>
            <br />
            {KRACHT_ADDRESS.street}
            <br />
            {KRACHT_ADDRESS.city}
          </address>
          <ul className="flex flex-wrap gap-6 sm:gap-8">
            <li>
              <Link
                href="/impressum"
                className={cn(
                  "text-sm text-kracht-gruen/80 hover:text-kracht-gruen transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
                )}
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className={cn(
                  "text-sm text-kracht-gruen/80 hover:text-kracht-gruen transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
                )}
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-8 text-sm text-kracht-gruen/70">
          © {currentYear} Kracht Media GmbH. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

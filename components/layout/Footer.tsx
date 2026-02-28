"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { COMPANY_INFO, LEGAL_ROUTES } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const { name, address, phone, email: emailInfo } = COMPANY_INFO;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer
      className="border-t border-kracht-gruen/10 bg-baby-powder"
      role="contentinfo"
    >
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

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <address className="not-italic text-sm text-kracht-gruen/80">
            <strong className="text-kracht-gruen">{name}</strong>
            <br />
            {address.street}
            <br />
            {address.zip} {address.city}
            <br />
            <a href={phone.href} className="text-kracht-gruen/80 hover:text-kracht-gruen">
              {phone.display}
            </a>
            {" · "}
            <a href={emailInfo.href} className="text-kracht-gruen/80 hover:text-kracht-gruen">
              {emailInfo.display}
            </a>
          </address>
          <ul className="flex flex-wrap gap-6 sm:gap-8">
            {LEGAL_ROUTES.map(({ name: routeName, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-sm text-kracht-gruen/80 hover:text-kracht-gruen transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
                  )}
                >
                  {routeName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm text-kracht-gruen/70">
          © {currentYear} Kracht Media GmbH. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

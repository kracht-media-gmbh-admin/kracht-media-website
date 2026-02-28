"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { COMPANY_INFO, LEGAL_ROUTES } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, address, phone, email: emailInfo } = COMPANY_INFO;

  return (
    <footer
      className="border-t border-kracht-gruen/10 bg-baby-powder"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <address className="not-italic text-sm leading-relaxed text-kracht-gruen/80">
            <strong className="block font-semibold text-kracht-gruen">{name}</strong>
            <span className="mt-1 block">
              {address.street}, {address.zip} {address.city}
            </span>
            <span className="mt-1 block">
              <a
                href={phone.href}
                className="hover:text-kracht-gruen transition-colors"
              >
                {phone.display}
              </a>
              {" · "}
              <a
                href={emailInfo.href}
                className="hover:text-kracht-gruen transition-colors"
              >
                {emailInfo.display}
              </a>
            </span>
          </address>
          <ul className="flex flex-wrap gap-8">
            {LEGAL_ROUTES.map(({ name: routeName, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-sm text-kracht-gruen/75 hover:text-orange-web transition-colors duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
                  )}
                >
                  {routeName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 pt-8 border-t border-kracht-gruen/10 text-sm text-kracht-gruen/60">
          © {currentYear} Kracht Media GmbH. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

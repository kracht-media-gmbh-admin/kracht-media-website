import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-kracht-gruen/10 bg-baby-powder"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-kracht-gruen/80">
            © {currentYear} Kracht Media GmbH. Alle Rechte vorbehalten.
          </p>
          <ul className="flex gap-6 sm:gap-8">
            <li>
              <Link
                href="/#projekte"
                className={cn(
                  "text-sm text-kracht-gruen/80 hover:text-kracht-gruen transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
                )}
              >
                Projekte
              </Link>
            </li>
            <li>
              <Link
                href="/#kontakt"
                className={cn(
                  "text-sm text-kracht-gruen/80 hover:text-kracht-gruen transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
                )}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

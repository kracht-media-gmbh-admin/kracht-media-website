import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-kracht-gruen/10 bg-baby-powder/95 backdrop-blur-sm"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <Link
          href="/"
          className={cn(
            "text-base font-semibold tracking-tight text-kracht-gruen sm:text-lg",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
          )}
        >
          Kracht Media
        </Link>
        <ul className="flex items-center gap-6 sm:gap-8">
          <li>
            <Link
              href="/#projekte"
              className={cn(
                "text-sm font-medium text-kracht-gruen/80 hover:text-kracht-gruen transition-colors",
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
                "text-sm font-medium text-kracht-gruen/80 hover:text-kracht-gruen transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
              )}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

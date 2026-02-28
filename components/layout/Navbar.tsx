"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projekte" },
  { href: "/services", label: "Leistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
] as const;

const linkBase =
  "text-sm font-medium text-kracht-gruen/75 hover:text-kracht-gruen transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  // Close menu on route change (e.g. after clicking a link)
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-kracht-gruen/8 bg-baby-powder/98 backdrop-blur-md"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <Link
          href="/"
          className={cn(
            "text-base font-bold tracking-tight text-kracht-gruen sm:text-lg",
            "transition hover:text-orange-web",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
          )}
        >
          Kracht Media
        </Link>

        {/* Desktop: horizontal nav */}
        <ul className="hidden items-center gap-6 md:flex sm:gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkBase}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile: hamburger button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className={cn(
            "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md text-kracht-gruen",
            "hover:bg-kracht-gruen/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder md:hidden"
          )}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span
            className={cn(
              "h-0.5 w-5 bg-current transition-all duration-200",
              mobileOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-current transition-all duration-200",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-current transition-all duration-200",
              mobileOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile: dropdown menu */}
      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-t border-kracht-gruen/8 bg-baby-powder/98 transition-[grid-template-rows] duration-200 ease-out md:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-0 py-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  className={cn(
                    "block px-4 py-3 text-base font-medium text-kracht-gruen/90 hover:bg-kracht-gruen/5 hover:text-kracht-gruen",
                    linkBase
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projekte" },
  { href: "/services", label: "Leistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
] as const;

export function Navbar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  const linkBase = cn(
    "nav-link-hover text-sm font-medium transition-colors duration-200 rounded",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2",
    isDark
      ? "text-baby-powder/75 hover:text-baby-powder focus-visible:ring-offset-[var(--bg-page)]"
      : "text-kracht-gruen/75 hover:text-kracht-gruen focus-visible:ring-offset-baby-powder"
  );

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
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md",
        isDark
          ? "border-white/10 bg-[var(--bg-page)]/98 shadow-[0_1px_0_0_rgba(255,254,250,0.06)]"
          : "border-kracht-gruen/12 bg-baby-powder shadow-[0_1px_0_0_rgba(28,54,40,0.06)]"
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <Link
          href="/"
          className={cn(
            "text-base font-bold tracking-tight sm:text-lg transition-colors duration-200 hover:text-orange-web rounded",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2",
            isDark ? "text-baby-powder focus-visible:ring-offset-[var(--bg-page)]" : "text-kracht-gruen focus-visible:ring-offset-baby-powder"
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
            "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md",
            "transition-colors duration-200 hover:text-orange-web active:scale-95",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 md:hidden",
            isDark
              ? "text-baby-powder hover:bg-white/10 focus-visible:ring-offset-[var(--bg-page)]"
              : "text-kracht-gruen hover:bg-kracht-gruen/10 focus-visible:ring-offset-baby-powder"
          )}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span
            className={cn(
              "h-0.5 w-5 bg-current transition-all duration-150",
              mobileOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-current transition-all duration-150",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-current transition-all duration-150",
              mobileOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile: dropdown menu – when hidden, links are non-focusable (a11y) */}
      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-t transition-[grid-template-rows] duration-150 ease-out md:hidden",
          isDark ? "border-white/10 bg-[var(--bg-page)]/98" : "border-kracht-gruen/12 bg-baby-powder",
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
                  tabIndex={mobileOpen ? undefined : -1}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-colors duration-200",
                    isDark
                      ? "text-baby-powder/90 hover:bg-white/10 hover:text-baby-powder"
                      : "text-kracht-gruen/90 hover:bg-kracht-gruen/8 hover:text-kracht-gruen",
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

import Link from "next/link";
import { cn } from "@/lib/utils";
import { COMPANY_INFO, LEGAL_ROUTES } from "@/lib/site";
import { FooterCtaToggle } from "./FooterCtaToggle";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, address, phone, email: emailInfo } = COMPANY_INFO;

  return (
    <footer
      className="text-baby-powder w-full min-w-0"
      role="contentinfo"
    >
      {/* Accent line */}
      <div className="h-1 w-full bg-orange-web" aria-hidden />

      {/* Top band: CTA */}
      <div className="bg-[#243d32]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl md:text-3xl">
              <span className="text-white/90">gemeinsam richtig </span>
              <span className="text-white font-bold">KRACH machen</span>
            </h2>
            <p className="max-w-md text-sm text-white/80 sm:text-base">
              Projektidee? Anfrage? Schreiben Sie uns – wir melden uns zeitnah.
            </p>
            <FooterCtaToggle />
          </div>
        </div>
      </div>

      {/* Bottom band: legal, address, copyright */}
      <div className="bg-kracht-gruen">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
            <address className="not-italic text-sm leading-relaxed text-white/90 order-2 sm:order-1">
              <strong className="block font-semibold text-baby-powder text-base">{name}</strong>
              <span className="mt-1 block">
                {address.street}, {address.zip} {address.city}
              </span>
              <span className="mt-1 block">
                <a
                  href={phone.href}
                  className="link-accent text-white/90 hover:text-orange-web transition-colors duration-200"
                >
                  {phone.display}
                </a>
                {" · "}
                <a
                  href={emailInfo.href}
                  className="link-accent text-white/90 hover:text-orange-web transition-colors duration-200"
                >
                  {emailInfo.display}
                </a>
              </span>
            </address>
            {/* Legal: vertical stack on mobile, horizontal on sm+ */}
            <nav aria-label="Rechtliches">
              <ul className="flex flex-col gap-2 text-sm order-1 sm:order-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-0">
                {LEGAL_ROUTES.map(({ name: routeName, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "link-accent text-white/90 hover:text-orange-web transition-colors duration-200 inline-block py-0.5",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-kracht-gruen rounded"
                      )}
                    >
                      {routeName}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-8 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0 border-t border-white/10">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold tracking-[0.15em] text-baby-powder uppercase">
                KRACHT MEDIA
              </span>
              <ThemeToggle />
            </div>
            <p className="text-sm text-white/80">
              © {currentYear} Kracht Media GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

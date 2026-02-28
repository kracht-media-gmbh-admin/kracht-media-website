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
      className="text-baby-powder"
      role="contentinfo"
    >
      {/* Top band: CTA – off-white / lighter green */}
      <div className="bg-[#243d32]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-center text-xl sm:text-2xl font-semibold leading-headline">
              <span className="text-white/80">gemeinsam richtig </span>
              <span className="text-white font-bold">KRACH machen</span>
            </h2>
            <FooterCtaToggle />
          </div>
        </div>
      </div>

      {/* Bottom band: narrow, dark green – legal, address, copyright */}
      <div className="bg-kracht-gruen">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <address className="not-italic text-sm leading-relaxed text-white/80 order-2 sm:order-1">
              <strong className="block font-semibold text-baby-powder">{name}</strong>
              <span className="mt-0.5 block">
                {address.street}, {address.zip} {address.city}
              </span>
              <span className="mt-0.5 block">
                <a
                  href={phone.href}
                  className="link-accent text-white/80 hover:text-orange-web transition-colors duration-200"
                >
                  {phone.display}
                </a>
                {" · "}
                <a
                  href={emailInfo.href}
                  className="link-accent text-white/80 hover:text-orange-web transition-colors duration-200"
                >
                  {emailInfo.display}
                </a>
              </span>
            </address>
            {/* Legal: single line with bullets on mobile */}
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm order-1 sm:order-2 sm:gap-x-6">
              {LEGAL_ROUTES.map(({ name: routeName, href }, i) => (
                <li key={href} className="inline-flex items-center gap-x-2">
                  {i > 0 && <span className="text-white/40 max-sm:inline" aria-hidden>•</span>}
                  <Link
                    href={href}
                    className={cn(
                      "link-accent text-white/75 hover:text-orange-web transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-kracht-gruen rounded"
                    )}
                  >
                    {routeName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/10">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold tracking-wide text-baby-powder uppercase">
                KRACHT MEDIA
              </span>
              <ThemeToggle />
            </div>
            <p className="text-sm text-white/60">
              © {currentYear} Kracht Media GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
      className="bg-kracht-gruen text-baby-powder"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* CTA: gemeinsam richtig KRACH machen + YES toggle */}
        <div className="flex flex-col items-center gap-6 pb-12 border-b border-white/10">
          <h2 className="text-center text-xl sm:text-2xl font-semibold leading-headline">
            <span className="text-white/80">gemeinsam richtig </span>
            <span className="text-white font-bold">KRACH machen</span>
          </h2>
          <FooterCtaToggle />
        </div>

        {/* Columns: address, legal links */}
        <div className="flex flex-col gap-10 pt-10 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <address className="not-italic text-sm leading-relaxed text-white/80">
            <strong className="block font-semibold text-baby-powder">{name}</strong>
            <span className="mt-1 block">
              {address.street}, {address.zip} {address.city}
            </span>
            <span className="mt-1 block">
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
          <ul className="flex flex-wrap gap-8">
            {LEGAL_ROUTES.map(({ name: routeName, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "link-accent text-sm text-white/75 hover:text-orange-web transition-colors duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-kracht-gruen rounded"
                  )}
                >
                  {routeName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom: KRACHT MEDIA (left) + copyright + dark mode toggle */}
        <div className="mt-10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10">
          <div className="flex items-center gap-4 order-2 sm:order-1">
            <span className="text-lg font-bold tracking-wide text-baby-powder uppercase">
              KRACHT MEDIA
            </span>
            <ThemeToggle />
          </div>
          <p className="text-sm text-white/60 order-1 sm:order-2">
            © {currentYear} Kracht Media GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

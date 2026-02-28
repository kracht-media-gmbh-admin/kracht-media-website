import SocialLink from "@/components/layout/footer/SocialLink";
import Link from "next/link";

import { ROUTES_MAIN, ROUTES_LEGAL, SOCIAL_LINKS_MAP } from "@/config/site";

import FooterContactToggle from "@/components/layout/footer/FooterContactToggle";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 px-10 md:px-20" style={{ backgroundColor: "var(--color-dark)", color: "var(--color-background)" }}>

      <FooterContactToggle />

      {/* Top Section: Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

        {/* Column 1: Address */}
        <div id="footer-address" className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-2xl font-medium opacity-80">Komm Vorbei!</h2>
          <div className="space-y-1 text-lg">
            <p>Kracht Media GmbH</p>
            <p>Wiesboden 14</p>
            <p>2820 Walpersbach</p>
          </div>
        </div>

        {/* Column 2: Socials */}
        <div id="footer-socials" className="flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-2xl font-medium opacity-80">Sag Hallo!</h2>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <SocialLink {...SOCIAL_LINKS_MAP.instagram} />
              <SocialLink {...SOCIAL_LINKS_MAP.youtube} />
              <SocialLink {...SOCIAL_LINKS_MAP.tiktok} />
              <SocialLink {...SOCIAL_LINKS_MAP.facebook} />
            </div>
          </div>
        </div>

        {/* Column 3: Navigation */}
        <div id="footer-pages" className="flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-2xl font-medium opacity-80 text-center md:text-left">Schau Weiter!</h2>
          <ul className="flex flex-col items-center md:items-start gap-3 text-lg">
            {ROUTES_MAIN.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:opacity-60 transition-opacity"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Big Brand Name (The "ASSEMBLY MOVEMENT" look) */}
      <div className="border-t border-white/10 pt-10">
        <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-none select-none opacity-10 italic">
          KRACHT MEDIA
        </h1>
      </div>

      {/* Bottom Legal Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm opacity-60 gap-4">
        <p className="text-center md:text-left">© 2025 Kracht Media GmbH. All rights reserved.</p>
        <div className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-sm md:text-base">
            {ROUTES_LEGAL.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
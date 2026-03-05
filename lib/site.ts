/**
 * Kracht Media – Unternehmensangaben (Impressum, Footer).
 * Entspricht der Struktur aus _tmp/config/site.ts.
 */

/** Canonische Website-URL (Sitemap, robots, Metadata, OG). Domain: kracht.at */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kracht.at";

export const COMPANY_INFO = {
  name: "Kracht Media GmbH",
  address: {
    street: "Wiesboden 14",
    zip: "2820",
    city: "Walpersbach",
  },
  phone: {
    display: "0660 7123377",
    href: "tel:06607123377",
  },
  email: {
    display: "office@kracht.at",
    href: "mailto:office@kracht.at",
  },
} as const;

/** Soziale Netzwerke – offizielle Kracht Media Profile */
export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/kracht.at", label: "Kracht Media auf Facebook" },
  { name: "Instagram", href: "https://www.instagram.com/kracht.at/", label: "Kracht Media auf Instagram" },
] as const;

export const LEGAL_ROUTES = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
  { name: "Cookies", href: "/cookies" },
  { name: "Barrierefreiheit", href: "/accessibility" },
] as const;

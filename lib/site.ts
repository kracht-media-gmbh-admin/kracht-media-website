/**
 * Kracht Media – Unternehmensangaben (Impressum, Footer).
 * Entspricht der Struktur aus _tmp/config/site.ts.
 */

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

export const LEGAL_ROUTES = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
  { name: "Cookies", href: "/cookies" },
  { name: "Barrierefreiheit", href: "/accessibility" },
] as const;

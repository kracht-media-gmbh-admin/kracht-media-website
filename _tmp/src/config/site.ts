import { NavLink, SocialNavLink } from "@/types";
import { siInstagram, siYoutube, siTiktok, siFacebook } from "simple-icons";

export const ROUTES: Record<string, NavLink> = {
  home: { name: "Home", href: "/" },
  about: { name: "Über uns", href: "/about" },
  projects: { name: "Projekte", href: "/projects" },
  contact: { name: "Kontakt", href: "/contact" },
  imprint: { name: "Impressum", href: "/imprint" },
  privacyPolicy: { name: "Datenschutzerklärung", href: "/privacy-policy" },
  cookies: { name: "Cookies", href: "/cookies" },
  accessibility: { name: "Barrierefreiheit", href: "/accessibility" },
} as const;

export const ROUTES_MAIN: NavLink[] = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.projects,
  ROUTES.contact,
] as const;

export const ROUTES_LEGAL: NavLink[] = [
  ROUTES.imprint,
  ROUTES.privacyPolicy,
  ROUTES.cookies,
  ROUTES.accessibility,
] as const;

export const SOCIAL_LINKS_MAP: Record<string, SocialNavLink> = {
  instagram: { name: "Instagram", href: "https://instagram.com/kracht_webdev", icon: siInstagram },
  youtube: { name: "YouTube", href: "https://youtube.com/kracht_webdev", icon: siYoutube },
  tiktok: { name: "TikTok", href: "https://tiktok.com/@kracht_webdev", icon: siTiktok },
  facebook: { name: "Facebook", href: "https://facebook.com/kracht_webdev", icon: siFacebook },
} as const;

export const SOCIAL_LINKS: SocialNavLink[] = [
  SOCIAL_LINKS_MAP.instagram,
  SOCIAL_LINKS_MAP.tiktok,
] as const;

export const COMPANY_INFO = {
  name: "Kracht Media GmbH",
  address: {
    street: "Wiesboden 14",
    zip: "2820",
    city: "Walpersbach",
  },
  phone: {
    display: "0660 7213377",
    href: "tel:06607213377",
  },
  email: {
    display: "office@kracht.at",
    href: "mailto:office@kracht.at",
  },
} as const;
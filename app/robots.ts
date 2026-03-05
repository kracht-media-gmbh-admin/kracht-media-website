import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const siteUrl = SITE_URL;

/**
 * robots.txt – Crawling-Verhalten für Suchmaschinen.
 * Erlaubt: alle öffentlichen Seiten. Blockiert: API und Next.js-Internals.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

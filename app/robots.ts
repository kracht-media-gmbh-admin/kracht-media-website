import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krachtmedia.com";

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

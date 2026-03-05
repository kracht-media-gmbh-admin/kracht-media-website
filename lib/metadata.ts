import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const siteUrl = SITE_URL;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kracht Media GmbH | Lauter als jeder Presslufthammer",
    template: "%s | Kracht Media",
  },
  description:
    "Kraftvoll, präzise, reduziert. Kracht Media steht für Stabilität und klare Botschaften in Film, Design und digitalen Erlebnissen. Fotografie, Videografie und IT-Services aus Österreich.",
  keywords: [
    "Kracht Media",
    "Filmproduktion",
    "Design",
    "Projekte",
    "Kreativ",
    "GmbH",
  ],
  authors: [{ name: "Kracht Media GmbH", url: siteUrl }],
  creator: "Kracht Media GmbH",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Kracht Media GmbH",
    title: "Kracht Media GmbH | Lauter als jeder Presslufthammer",
    description:
      "Kraftvoll, präzise, reduziert. Kracht Media – Stabilität und klare Botschaften in Film, Design und digitalen Erlebnissen. Fotografie, Videografie, IT-Services.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Kracht Media GmbH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kracht Media GmbH | Lauter als jeder Presslufthammer",
    description:
      "Kraftvoll, präzise, reduziert. Kracht Media – Stabilität und klare Botschaften in Film, Design und IT-Services.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
};

const OG_IMAGE = { url: "/og-default.png", width: 1200, height: 630, alt: "Kracht Media GmbH" };

/**
 * Einheitliche Seiten-Metadaten inkl. Open Graph und Twitter Card
 * (Title ~60 Zeichen, Description ~150 Zeichen für SEO)
 */
export function buildPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  const fullTitle = `${title} | Kracht Media`;
  const ogTitle = fullTitle.length > 60 ? fullTitle.slice(0, 57) + "…" : fullTitle;
  const ogDescription = description.length > 160 ? description.slice(0, 157) + "…" : description;
  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: "Kracht Media GmbH",
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE.url],
    },
    alternates: path ? { canonical: url } : undefined,
  };
}

export function buildProjectMetadata({
  title,
  description,
  coverImage,
  slug,
}: {
  title: string;
  description: string;
  coverImage: string;
  slug: string;
}): Metadata {
  const url = `${siteUrl}/projects/${slug}`;
  const imageUrl = coverImage.startsWith("http")
    ? coverImage
    : `${siteUrl}${coverImage}`;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: { canonical: url },
  };
}

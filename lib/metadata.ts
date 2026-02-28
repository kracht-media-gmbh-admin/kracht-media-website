import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krachtmedia.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kracht Media GmbH | Lauter als jeder Presslufthammer",
    template: "%s | Kracht Media",
  },
  description:
    "Kraftvoll, präzise, reduziert. Kracht Media steht für Stabilität und klare Botschaften in Film, Design und digitalen Erlebnissen.",
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
      "Kraftvoll, präzise, reduziert. Kracht Media – Stabilität und klare Botschaften.",
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
    description: "Kraftvoll, präzise, reduziert. Kracht Media.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
};

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

import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krachtmedia.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kracht Media | Creative Production & Project Showcase",
    template: "%s | Kracht Media",
  },
  description:
    "High-impact creative production and project showcase. Discover our latest work in film, design, and digital experiences.",
  keywords: ["creative production", "film", "design", "showcase", "Kracht Media"],
  authors: [{ name: "Kracht Media", url: siteUrl }],
  creator: "Kracht Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kracht Media",
    title: "Kracht Media | Creative Production & Project Showcase",
    description:
      "High-impact creative production and project showcase. Discover our latest work.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Kracht Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kracht Media | Creative Production & Project Showcase",
    description: "High-impact creative production and project showcase.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
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
  const imageUrl = coverImage.startsWith("http") ? coverImage : `${siteUrl}${coverImage}`;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

import { COMPANY_INFO } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krachtmedia.com";

/**
 * Schema.org JSON-LD für LocalBusiness (Fotografie, Videografie, IT-Services).
 * Wird auf der Startseite eingebunden für bessere Suchmaschinen- und Assistenten-Erkennung.
 */
export function LocalBusinessJsonLd() {
  const { name, address, phone, email } = COMPANY_INFO;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name,
    description:
      "Kracht Media steht für Filmproduktion, Fotografie, Videografie und IT-Services. Kraftvoll, präzise, reduziert – Stabilität und klare Botschaften in Film, Design und digitalen Erlebnissen.",
    url: siteUrl,
    image: `${siteUrl}/og-default.png`,
    telephone: phone.href.replace("tel:", ""),
    email: email.href.replace("mailto:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.zip,
      addressCountry: "AT",
    },
    areaServed: {
      "@type": "Country",
      name: "Österreich",
    },
    serviceType: [
      "Filmproduktion",
      "Videografie",
      "Fotografie",
      "Design",
      "IT-Services",
      "Digitale Erlebnisse",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

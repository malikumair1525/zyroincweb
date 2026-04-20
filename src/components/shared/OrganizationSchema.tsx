import { SITE_CONFIG } from "@/constants/site";

export default function OrganizationSchema() {
  const baseUrl = `https://${SITE_CONFIG.domain}`;

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${baseUrl}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 400,
      height: 120,
    },
    image: `${baseUrl}/opengraph-image`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.contact.email,
    // telephone: SITE_CONFIG.contact.phone,
    sameAs: [
        SITE_CONFIG.social.twitter,
        SITE_CONFIG.social.linkedin,
        SITE_CONFIG.social.facebook,
        SITE_CONFIG.social.instagram,
        SITE_CONFIG.social.youtube,
        SITE_CONFIG.social.telegram,
      ].filter(Boolean),
    areaServed: {
      "@type": "Place",
      name: "Global — 120+ countries",
    },
    knowsAbout: [
      "Forex Trading",
      "CFD Trading",
      "Contract for Difference",
      "Currency Trading",
      "Commodities Trading",
      "Indices Trading",
      "Cryptocurrency CFDs",
      "TM9 Trading Platform",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Standard Account",
        description: "Retail trading account with spreads from 1.0 pips and no commissions.",
      },
      {
        "@type": "Offer",
        name: "Pro Account",
        description: "Professional trading account with raw spreads from 0.3 pips.",
      },
      {
        "@type": "Offer",
        name: "VIP Account",
        description: "Institutional-grade account with spreads from 0.0 pips and reduced commissions.",
      },
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}
import { SITE_CONFIG } from "@/constants/site";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function BreadcrumbSchema({ items }: Props) {
  const baseUrl = `https://${SITE_CONFIG.domain}`;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: item.name,
        item: `${baseUrl}${item.path}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  );
}
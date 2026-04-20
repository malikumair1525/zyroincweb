import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site";

const BASE_URL = `https://${SITE_CONFIG.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    // Highest priority
    { path: "/", priority: 1.0, changeFrequency: "daily" as const },

    // Main conversion pages
    { path: "/trading", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/account-types", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/platforms", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/deposits-withdrawals", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/affiliates", priority: 0.85, changeFrequency: "weekly" as const },

    // Informational
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faqs", priority: 0.75, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.65, changeFrequency: "yearly" as const },

    // Legal (lower priority but still indexed)
    { path: "/legal/terms", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/legal/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/legal/risk-disclosure", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/legal/aml-kyc", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
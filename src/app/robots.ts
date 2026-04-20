import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site";

const BASE_URL = `https://${SITE_CONFIG.domain}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // if you add any API routes later
          "/_next/", // Next.js internals (auto-excluded but being explicit)
          "/admin/", // if you add an admin area later
        ],
      },
      // Block aggressive AI scrapers that don't respect robots
      {
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "Google-Extended"],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
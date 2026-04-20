import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode (catches bugs in development)
  reactStrictMode: true,

  // Produce standalone output for optimized deployment
  // (Works perfectly with Vercel, Docker, and other platforms)
  output: "standalone",

  // Enable server-side gzip compression
  compress: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.tradingview.com",
      },
      {
        protocol: "https",
        hostname: "www.tradingview.com",
      },
    ],
  },

  // Cache headers — tells browsers to cache static assets aggressively
  async headers() {
    return [
      {
        // Cache static images, fonts, etc.
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff2|woff|ttf)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Security + SEO headers for all pages
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
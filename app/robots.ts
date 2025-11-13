// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://sara-hoshikawa.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/", // 全ページクロール許可
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

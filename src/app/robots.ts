import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://brandscollectionbv.com/sitemap.xml",
    host: "https://brandscollectionbv.com",
  };
}

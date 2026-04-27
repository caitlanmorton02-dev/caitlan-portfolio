import type { MetadataRoute } from "next";

const BASE_URL = "https://www.caitlanmorton.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add case study pages here as they're built:
    // { url: `${BASE_URL}/work/project-slug`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
  ];
}

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.caitlanmorton.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

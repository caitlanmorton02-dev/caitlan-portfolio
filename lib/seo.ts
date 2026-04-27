import type { Metadata } from "next";

const BASE_URL = "https://www.caitlanmorton.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_TITLE = "Caitlan Morton: Senior Product Designer";
const DEFAULT_DESCRIPTION =
  "Senior Product Designer specialising in systems, experimentation, and end-to-end product design.";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateSEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "",
  image = DEFAULT_IMAGE,
}: SEOProps = {}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title,
      description,
      url,
      siteName: "Caitlan Morton",
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

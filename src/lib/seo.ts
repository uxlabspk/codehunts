/**
 * SEO utilities for metadata management
 */

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image";
}

const DEFAULT_SEO: SEOProps = {
  title: "CodeHunts - Building Digital Excellence",
  description:
    "Professional software development company specializing in web development, mobile apps, AI/ML, cloud solutions, and custom software.",
  keywords:
    "software development, web development, mobile apps, AI development, cloud solutions, custom software",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
};

/**
 * Update page metadata for SEO
 */
export function updatePageMeta(seo: SEOProps = {}) {
  const meta: SEOProps = { ...DEFAULT_SEO, ...seo };

  // Update title
  if (meta.title) {
    document.title = meta.title;
  }

  // Update or create meta tags
  updateMetaTag("description", meta.description || "");
  updateMetaTag("keywords", meta.keywords || "");
  updateMetaTag("og:title", meta.title || "");
  updateMetaTag("og:description", meta.description || "");
  updateMetaTag("og:image", meta.ogImage || "");
  updateMetaTag("og:url", meta.ogUrl || window.location.href);
  updateMetaTag("twitter:card", meta.twitterCard || "summary_large_image");
  updateMetaTag("twitter:title", meta.title || "");
  updateMetaTag("twitter:description", meta.description || "");
  updateMetaTag("twitter:image", meta.ogImage || "");
}

function updateMetaTag(property: string, content: string) {
  const isOgOrTwitter = property.startsWith("og:") || property.startsWith("twitter:");
  const attribute = isOgOrTwitter ? "property" : "name";

  let element = document.querySelector(`meta[${attribute}="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

/**
 * Generate structured data for rich snippets
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CodeHunts",
    url: "https://codehunts.com",
    logo: "https://codehunts.com/logo.png",
    description:
      "Professional software development company specializing in web development, mobile apps, AI/ML, and cloud solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "I-10/2",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-XXX-XXXXXXX",
      contactType: "customer service",
      email: "contact@codehuntspk.com",
    },
    sameAs: [
      "https://twitter.com/codehunts",
      "https://linkedin.com/company/codehunts",
      "https://github.com/codehunts",
    ],
  };
}

import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
}

function setMetaTag(property: string, content: string, isOg = false) {
  const attr = isOg ? "property" : "name";
  const selector = `meta[${attr}="${property}"]`;
  let el = document.querySelector(selector);
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}

export function Seo({
  title,
  description,
  ogImage,
  ogUrl,
  ogType = "website",
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    setMetaTag("description", description);

    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", ogType, true);

    if (ogUrl) {
      setMetaTag("og:url", ogUrl, true);
    } else if (typeof window !== "undefined") {
      setMetaTag("og:url", window.location.href, true);
    }

    if (ogImage) {
      setMetaTag("og:image", ogImage, true);
    }

    setMetaTag("og:locale", "en_GB", true);
    setMetaTag("og:site_name", "A.I.R.O - Intelligent Revenue Operations", true);
  }, [title, description, ogImage, ogUrl, ogType]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "A.I.R.O - Intelligent Revenue Operations",
    description:
      "Integrating AI-Driven Demand Gen with High-Touch Human Strategy.",
    areaServed: "United Kingdom",
    knowsAbout: [
      "Revenue Operations",
      "Bilateral Trade",
      "AI Sales Agents",
      "B2B Sales",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

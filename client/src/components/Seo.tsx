import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
}

function setMetaTag(attribute: string, key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let el = document.querySelector(selector);
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
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

    setMetaTag("name", "description", description);

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:locale", "en_GB");
    setMetaTag("property", "og:site_name", "A.I.R.O - Intelligent Revenue Operations");

    const resolvedUrl = ogUrl || (typeof window !== "undefined" ? window.location.href : "");
    if (resolvedUrl) {
      setMetaTag("property", "og:url", resolvedUrl);
    }

    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
    }

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    if (ogImage) {
      setMetaTag("name", "twitter:image", ogImage);
    }
  }, [title, description, ogImage, ogUrl, ogType]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "A.I.R.O - Intelligent Revenue Operations",
    description:
      "Seamless Revenue Engines: Capitalise on UK market share and bilateral global trade frameworks with AI-driven demand generation and high-touch human strategy.",
    url: typeof window !== "undefined" ? window.location.origin : "",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: "Revenue Operations Consultancy",
    knowsAbout: [
      "Revenue Operations",
      "Bilateral Trade",
      "AI Market Intelligence Agents",
      "B2B Sales",
      "Demand Generation",
      "UK Market Share Growth",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Revenue Operations Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Driven Demand Generation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Revenue Audit & Strategy Session",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Strategic Partnership Architecture",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

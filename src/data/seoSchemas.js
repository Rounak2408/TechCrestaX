/**
 * Schema.org Structured Data Helpers for TechCrestaX
 * Official Source of Truth: https://www.techcrestax.com/
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://www.techcrestax.com/#organization",
  "name": "TechCrestaX",
  "url": "https://www.techcrestax.com",
  "logo": "https://www.techcrestax.com/logo.png",
  "image": "https://www.techcrestax.com/logo.png",
  "description": "TechCrestaX is a digital solutions and web development company based in Rajkot, Gujarat, India, specializing in custom website development, scalable applications, AI automation, and cloud solutions.",
  "email": "techcrestax@gmail.com",
  "telephone": "+91 83404 26550",
  "foundingDate": "2026",
  "founder": {
    "@type": "Person",
    "name": "Rishu Thakur",
    "jobTitle": "Founder & CEO"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rajkot",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.3039",
    "longitude": "70.8022"
  },
  "sameAs": [
    "https://wa.me/918340426550"
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.techcrestax.com/#website",
  "url": "https://www.techcrestax.com/",
  "name": "TechCrestaX",
  "publisher": {
    "@id": "https://www.techcrestax.com/#organization"
  }
};

export const createServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.longDesc || service.description,
  "provider": {
    "@id": "https://www.techcrestax.com/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${service.title} Deliverables`,
    "itemListElement": service.keyCapabilities?.map((cap, idx) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": cap
      }
    })) || []
  }
});

export const createFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const createBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    "item": item.to ? `https://www.techcrestax.com${item.to}` : undefined
  }))
});

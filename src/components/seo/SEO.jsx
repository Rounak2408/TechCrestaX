import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.techcrestax.com';
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema = null,
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Page Title
    if (title) {
      document.title = title;
    }

    // Helper to safely set or create a <meta> tag
    const setMetaTag = (attribute, name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Meta Description & Keywords
    if (description) {
      setMetaTag('name', 'description', description);
    }
    if (keywords) {
      const keywordStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      setMetaTag('name', 'keywords', keywordStr);
    }

    // 3. Canonical URL
    const canonicalUrl = canonical || `${BASE_URL}${location.pathname === '/' ? '' : location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'TechCrestaX');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data Schema
    if (schema) {
      let scriptTag = document.getElementById('techcrestax-jsonld');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'techcrestax-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonical, ogType, ogImage, schema, location.pathname]);

  return null;
}

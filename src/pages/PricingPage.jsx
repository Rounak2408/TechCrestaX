import React, { useEffect } from 'react';
import { ShieldCheck, Check, Clock, HelpCircle, ArrowRight, Zap, Layers } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import PricingSection from '../components/sections/PricingSection';
import FAQSection from '../components/sections/FAQSection';
import ClosingCTA from '../components/sections/ClosingCTA';
import SEO from '../components/seo/SEO';
import { pricingData } from '../data/pricingData';
import { companyData } from '../data/companyData';
import { faqsData } from '../data/faqsData';
import { createBreadcrumbSchema } from '../data/seoSchemas';

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Pricing' }
      ]),
      {
        "@type": "Product",
        "name": "TechCrestaX Website Development & Maintenance",
        "description": "Professional website development starting at ₹7,000+ with 1 year free maintenance included.",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "7000",
          "priceValidUntil": "2027-12-31",
          "offerCount": "3"
        }
      }
    ]
  };

  const pricingFaqs = faqsData.filter((f) => f.category === "Pricing & Terms" || f.category === "Maintenance & Warranty");

  return (
    <div className="py-8 sm:py-12 bg-transparent min-h-screen">
      <SEO
        title="Transparent Pricing & 1-Year Free Maintenance — TechCrestaX"
        description="Clear, honest website development pricing starting at ₹7,000+. Includes free website maintenance for the first full year. No surprise agency markups."
        keywords={[
          "website development cost Rajkot",
          "web design starting 7000",
          "website maintenance charges Gujarat",
          "e-commerce development price",
          "React website quote India",
          "TechCrestaX pricing"
        ]}
        canonical="https://www.techcrestax.com/pricing"
        schema={pricingSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Pricing & Maintenance Terms' }]} />

        {/* Pricing Component */}
        <PricingSection />

        {/* FAQ Section specifically for Pricing & Maintenance */}
        <div className="mt-16">
          <FAQSection faqs={pricingFaqs.length > 0 ? pricingFaqs : faqsData.slice(0, 4)} limit={4} />
        </div>

        {/* Closing CTA */}
        <div className="mt-12">
          <ClosingCTA />
        </div>
      </div>
    </div>
  );
}

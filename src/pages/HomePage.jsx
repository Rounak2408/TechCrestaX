import React from 'react';
import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import TrustedBrandsMarquee from '../components/ui/TrustedBrandsMarquee';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import PricingSection from '../components/sections/PricingSection';
import ProcessSection from '../components/sections/ProcessSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import LocationMapSection from '../components/sections/LocationMapSection';
import ClosingCTA from '../components/sections/ClosingCTA';
import { organizationSchema, websiteSchema, createFAQSchema } from '../data/seoSchemas';
import { faqsData } from '../data/faqsData';

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      createFAQSchema(faqsData.slice(0, 5))
    ]
  };

  return (
    <div>
      <SEO
        title="TechCrestaX — Website Development, E-commerce & Web Platforms | Rajkot, Gujarat"
        description="TechCrestaX builds websites that move businesses forward. Starting at ₹7,000+ with 1 year free maintenance. Specializing in modern websites, e-commerce, web applications, and SEO."
        keywords={[
          "website development Rajkot",
          "web development company Gujarat",
          "website design starts at 7000",
          "custom web applications",
          "e-commerce website development India",
          "UI UX design studio Rajkot",
          "local SEO services Gujarat",
          "TechCrestaX digital agency"
        ]}
        canonical="https://www.techcrestax.com/"
        schema={homeSchema}
      />

      {/* 1. Hero Section with Live Project Showcase */}
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>

      {/* Authentic Verified Client Deliveries Marquee */}
      <TrustedBrandsMarquee />

      {/* 2. Portfolio / Selected Work Section */}
      <section id="portfolio" className="scroll-mt-24">
        <PortfolioPreview />
      </section>

      {/* 3. Services / Capabilities Section */}
      <section id="services" className="scroll-mt-24">
        <CapabilitiesSection />
      </section>

      {/* 4. Transparent Pricing Section */}
      <section id="pricing" className="scroll-mt-24">
        <PricingSection />
      </section>

      {/* 5. Process & Methodology */}
      <section id="about" className="scroll-mt-24">
        <ProcessSection />
        <WhyUsSection />
        <TestimonialsSection />
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="scroll-mt-24">
        <FAQSection limit={5} />
      </section>

      {/* Verified Studio Location & Google Maps */}
      <LocationMapSection />

      {/* 7. Contact / Project Discussion Section */}
      <section id="contact" className="scroll-mt-24">
        <ClosingCTA />
      </section>
    </div>
  );
}

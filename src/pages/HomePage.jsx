import React from 'react';
import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import TrustedBrandsMarquee from '../components/ui/TrustedBrandsMarquee';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import ProcessSection from '../components/sections/ProcessSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import PostLaunchSupportSection from '../components/sections/PostLaunchSupportSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
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
        title="TechCrestaX — Website Development, App Development & AI Solutions | Rajkot, Gujarat"
        description="TechCrestaX builds websites that move businesses forward. Premier web development and digital solutions company in Rajkot, Gujarat specializing in modern websites, web apps, and AI automation."
        keywords={[
          "website development Rajkot",
          "web development company Gujarat",
          "custom web applications",
          "AI automation services",
          "UI UX design studio India",
          "React website development",
          "TechCrestaX digital solutions",
          "hire web developer Rajkot"
        ]}
        canonical="https://www.techcrestax.com/"
        schema={homeSchema}
      />

      {/* 1. Hero Section */}
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>

      {/* Marquee */}
      <TrustedBrandsMarquee />

      {/* 2. Services / Capabilities Section */}
      <section id="services" className="scroll-mt-24">
        <CapabilitiesSection />
      </section>

      {/* 3. Portfolio / Selected Work Section */}
      <section id="portfolio" className="scroll-mt-24">
        <PortfolioPreview />
      </section>

      {/* 4. About / Methodology & Why Us Section */}
      <section id="about" className="scroll-mt-24">
        <ProcessSection />
        <WhyUsSection />
        <PostLaunchSupportSection />
        <TestimonialsSection />
      </section>

      {/* 5. FAQ Section */}
      <section id="faq" className="scroll-mt-24">
        <FAQSection limit={5} />
      </section>

      {/* 6. Contact / Project Discussion Section */}
      <section id="contact" className="scroll-mt-24">
        <ClosingCTA />
      </section>
    </div>
  );
}

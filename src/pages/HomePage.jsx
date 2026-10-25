import React from 'react';
import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import TrustedBrandsMarquee from '../components/ui/TrustedBrandsMarquee';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import ProcessSection from '../components/sections/ProcessSection';
import PricingSection from '../components/sections/PricingSection';
import HomeEnquirySection from '../components/sections/HomeEnquirySection';
import FAQSection from '../components/sections/FAQSection';
import ClosingCTA from '../components/sections/ClosingCTA';
import { organizationSchema, websiteSchema, createFAQSchema } from '../data/seoSchemas';
import { faqsData } from '../data/faqsData';

function SectionBoundaryDivider() {
  return (
    <div className="relative w-full flex items-center justify-center pointer-events-none select-none z-10 overflow-hidden" aria-hidden="true">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF6248]/30 to-transparent" />
      <div className="absolute w-2/5 h-3 bg-[#FF6248]/10 blur-sm rounded-full" />
    </div>
  );
}

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      createFAQSchema(faqsData.slice(0, 4))
    ]
  };

  return (
    <div>
      <SEO
        title="TechCrestaX — Website Development, E-commerce & Web Platforms | Rajkot, Gujarat"
        description="TechCrestaX builds high-performance websites and digital solutions. Starting at ₹7,000+ with 1 year free maintenance. Specializing in custom websites, e-commerce, web applications, and SEO."
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

      {/* 1. Hero Section with Live 3D Project Showcase */}
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      {/* Verified Client Deliveries Marquee */}
      <TrustedBrandsMarquee />
      <SectionBoundaryDivider />

      {/* 2. Selected Work / Portfolio Section (Prominent) */}
      <section id="portfolio" className="scroll-mt-20">
        <PortfolioPreview />
      </section>
      <SectionBoundaryDivider />

      {/* 3. Services / Capabilities Section */}
      <section id="services" className="scroll-mt-20">
        <CapabilitiesSection />
      </section>
      <SectionBoundaryDivider />

      {/* 4. Why Choose TechCrestaX / Value Pillars */}
      <section id="about" className="scroll-mt-20">
        <WhyUsSection />
      </section>
      <SectionBoundaryDivider />

      {/* 5. Delivery Methodology / Process */}
      <section id="process" className="scroll-mt-20">
        <ProcessSection />
      </section>
      <SectionBoundaryDivider />

      {/* 6. Transparent Pricing Section */}
      <section id="pricing" className="scroll-mt-20">
        <PricingSection />
      </section>
      <SectionBoundaryDivider />

      {/* 7. Project Enquiry Section (Frictionless Conversion) */}
      <section id="enquiry" className="scroll-mt-20">
        <HomeEnquirySection />
      </section>
      <SectionBoundaryDivider />

      {/* 8. FAQs */}
      <section id="faq" className="scroll-mt-20">
        <FAQSection limit={4} />
      </section>
      <SectionBoundaryDivider />

      {/* 9. Cinematic Closing CTA */}
      <ClosingCTA />
    </div>
  );
}

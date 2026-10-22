import React, { useEffect } from 'react';
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

export default function HomePage() {
  useEffect(() => {
    document.title = "TechCrestaX | Website Development & Digital Solutions";
  }, []);

  return (
    <div>
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

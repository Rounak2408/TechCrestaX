import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import TrustedBrandsMarquee from '../components/ui/TrustedBrandsMarquee';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import ProcessSection from '../components/sections/ProcessSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ClosingCTA from '../components/sections/ClosingCTA';

export default function HomePage() {
  useEffect(() => {
    document.title = "TechCrestaX — Modern Web Engineering & Digital Transformation Studio";
  }, []);

  return (
    <div>
      <Hero />
      <TrustedBrandsMarquee />
      <CapabilitiesSection />
      <PortfolioPreview />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection limit={5} />
      <ClosingCTA />
    </div>
  );
}

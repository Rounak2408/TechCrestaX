export const pricingData = {
  headline: "Transparent, Milestone-Based Pricing",
  subheadline: "Clear terms with zero hidden agency markups. Free maintenance for the first full year.",
  startingPrice: "₹7,000+",
  maintenanceTerms: {
    firstYear: "Free for 1 Year (12 Months Included)",
    renewal: "₹5,000 / Year after the first year",
    domainHosting: "Domain & Hosting Quoted Separately",
    scopeDisclaimer: "Final pricing depends on page count, design complexity, third-party integrations, content preparation, and custom functionality."
  },
  tiers: [
    {
      id: "starter-website",
      name: "Starter Business Website",
      category: "Single & Multi-Page",
      price: "₹7,000+",
      period: "starting base",
      badge: "Popular for Small Businesses",
      description: "Ideal for startups, individual practitioners, and local businesses establishing a professional web presence.",
      timeline: "1–2 Weeks",
      features: [
        "100% Mobile & Tablet Responsive Design",
        "Modern React / Tailwind Architecture",
        "Fast Sub-Second Page Loading",
        "Technical On-Page SEO & Schema Markup",
        "Direct WhatsApp & Email Contact Integration",
        "1st Year Maintenance Included Free (12 Months)",
        "Annual Maintenance after Year 1: ₹5,000/yr",
        "Domain & hosting quoted separately"
      ],
      popular: false,
      ctaText: "Request Starter Estimate"
    },
    {
      id: "growth-commercial",
      name: "Commercial & Business Platform",
      category: "Full Business Presence",
      price: "₹15,000+",
      period: "custom scope",
      badge: "Most Selected",
      description: "For expanding companies, clinics, hospitality brands, and corporate services requiring bespoke art direction and lead funnels.",
      timeline: "2–3 Weeks",
      features: [
        "Multi-Section Bespoke Editorial Art Direction",
        "Custom Lead & Appointment Booking Workflows",
        "Local SEO & Google Business Profile Integration",
        "High-Converting Landing Funnel Optimization",
        "Interactive Components & Micro-Interactions",
        "1st Year Maintenance Included Free (12 Months)",
        "Annual Maintenance after Year 1: ₹5,000/yr",
        "Domain & hosting quoted separately"
      ],
      popular: true,
      ctaText: "Request Project Estimate"
    },
    {
      id: "custom-platform-ecommerce",
      name: "E-commerce & Web Applications",
      category: "Commerce & Portals",
      price: "₹25,000+",
      period: "custom quote",
      badge: "Scale & Platforms",
      description: "For e-commerce brands, catalog storefronts, doctor portals, and custom web applications requiring databases and API integrations.",
      timeline: "2–4 Weeks",
      features: [
        "Product Catalog or Custom Booking Database",
        "Secure Payment Gateway / 1-Click WhatsApp Ordering",
        "Role-Based Access & Customer Portal Flows",
        "API Integrations & Custom Business Logic",
        "Advanced Analytics & Conversion Tracking",
        "1st Year Maintenance Included Free (12 Months)",
        "Annual Maintenance after Year 1: ₹5,000/yr",
        "Domain & hosting quoted separately"
      ],
      popular: false,
      ctaText: "Discuss Platform Scope"
    }
  ],
  pricingFactors: [
    {
      title: "Page Count & Information Architecture",
      desc: "Single-page landing flagships require different scoping than 10+ page multi-service portals."
    },
    {
      title: "Design Complexity & Custom Art Direction",
      desc: "Tailored visual assets, custom illustrations, and interactive 3D components require dedicated craft."
    },
    {
      title: "Third-Party Integrations & APIs",
      desc: "Payment gateways, custom CRM webhooks, and doctor scheduling systems involve backend configuration."
    },
    {
      title: "Content & Copywriting Preparation",
      desc: "Clients supplying finalized copy launch faster than projects requiring copy drafting and media sourcing."
    }
  ],
  includedInEveryProject: [
    "12 Months Free Website Maintenance & Bug Fix Warranty",
    "100% Full Source Code & IP Ownership Handover",
    "Sub-Second Core Web Vitals Optimization",
    "Mobile & Cross-Browser Quality Assurance (320px to 4K)",
    "Direct WhatsApp & Email Support Channel",
    "Milestone Sprint Approvals Before Release"
  ]
};

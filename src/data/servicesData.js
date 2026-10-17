export const servicesData = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    badge: "Core Service",
    tagline: "High-performance digital flagships engineered for modern brands",
    shortDesc: "Custom business websites and high-converting marketing experiences built with modern React, semantic markup, and lightning-fast loading speeds.",
    longDesc: "Your website is your company's primary digital asset. At TechCrestaX, we move beyond generic off-the-shelf templates to engineer bespoke websites tailored to your exact brand positioning and conversion goals. Every build is developed mobile-first, ensuring fluid layouts from 320px smartphones to 4K displays.",
    icon: "Layout",
    problemsSolved: [
      "Outdated, slow-loading templates hurting search visibility and brand perception",
      "Cluttered interfaces causing high bounce rates and low inquiry conversions",
      "Broken layouts across mobile devices and modern browser engines",
      "Difficulty scaling content or integrating custom third-party business tools"
    ],
    keyCapabilities: [
      "Custom React & Vite Component Architecture",
      "Fluid Multi-Breakpoint Responsive Engineering (320px to 1920px+)",
      "Technical On-Page SEO & Structured Semantic Metadata",
      "Sub-second TTFB & Core Web Vitals Optimization",
      "Headless CMS Integration (Sanity, Strapi, Contentful)",
      "Accessible Navigation & Micro-Interactions (WCAG 2.2 AA)"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript / TypeScript", "HTML5 Semantics", "Vercel / Netlify"],
    workflow: [
      { step: "01", name: "Architecture & Wireframes", desc: "Formulating site hierarchy, responsive layouts, and conversion journey paths." },
      { step: "02", name: "Custom Art Direction", desc: "Tailoring color systems, typography scale, and branded visual assets." },
      { step: "03", name: "Modular Component Build", desc: "Crafting lightweight, clean, and reusable frontend components." },
      { step: "04", name: "QA & Deployment", desc: "Cross-browser testing, Core Web Vitals auditing, and live domain configuration." }
    ],
    deliverables: [
      "Production-ready, version-controlled source code repository",
      "Automated deployment pipeline on modern edge hosts",
      "Full mobile-tested and cross-browser verified build",
      "Interactive enquiry and contact forms with spam protection"
    ],
    relatedProjects: ["apex-fitness-platform", "culinary-artisan-showcase"],
    faqs: [
      {
        q: "What is the typical turnaround time for a website build?",
        a: "Standard business websites with 5–8 bespoke pages typically deliver within 1 to 3 weeks through our focused, milestone-driven sprints."
      },
      {
        q: "Will the website work seamlessly on mobile phones?",
        a: "Yes, 100%. Every single project undergoes rigorous testing across 320px, 360px, 390px mobile viewports through desktop displays."
      },
      {
        q: "Can you build with or integrate a CMS for content updates?",
        a: "Absolutely. We support headless CMS integrations (such as Strapi, Sanity, or markdown-based workflows) so non-technical team members can update content effortlessly."
      }
    ]
  },
  {
    id: "web-applications",
    slug: "web-applications",
    title: "Web Applications & SaaS",
    badge: "Full-Stack",
    tagline: "Scalable, resilient web apps designed around real human workflows",
    shortDesc: "Custom web applications, SaaS dashboards, and internal business tools built with robust state management, clean APIs, and rapid responsiveness.",
    longDesc: "Complex business operations require software that performs reliably under real-world demands. We build purpose-driven web applications and client dashboards featuring intuitive user interfaces, real-time data visualizations, secure session flows, and modular API integrations.",
    icon: "Cpu",
    problemsSolved: [
      "Clunky, confusing operational tools that slow down internal teams",
      "Unresponsive dashboards unable to handle dynamic datasets smoothly",
      "Fragmented data workflows lacking unified API integration",
      "Scalability bottlenecks in legacy monolithic web applications"
    ],
    keyCapabilities: [
      "Single Page Applications (SPA) with Client-Side Routing",
      "Interactive Dashboards & Data Visualization Components",
      "RESTful API & GraphQL Service Integration",
      "Role-Based Access Control (RBAC) UI Architecture",
      "Optimistic UI Updates & Fluid Loading States",
      "State Management with Redux Toolkit or React Query"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Tailwind CSS", "Chart.js / Recharts"],
    workflow: [
      { step: "01", name: "Domain & Schema Modeling", desc: "Defining user roles, entity models, and API contract specifications." },
      { step: "02", name: "Interactive Prototyping", desc: "Validating operational workflows with interactive clickable UI mockups." },
      { step: "03", name: "Full-Stack Implementation", desc: "Developing client state, API controllers, and resilient validation logic." },
      { step: "04", name: "Integration Testing & Stress QA", desc: "Benchmarking API latency, error handling, and browser performance." }
    ],
    deliverables: [
      "Fully functional web application codebase",
      "API documentation & endpoint schemas",
      "Responsive operational dashboard views",
      "Deployment documentation & container-ready configurations"
    ],
    relatedProjects: ["logistics-saas-dashboard", "career-elevation-funnel"],
    faqs: [
      {
        q: "Can you integrate our existing backend or database?",
        a: "Yes. We regularly connect custom React frontends to existing REST APIs, Supabase, PostgreSQL, Firebase, or GraphQL microservices."
      },
      {
        q: "How do you ensure data security in the application interface?",
        a: "We implement secure session handling, sanitize all inputs to prevent XSS, use HTTPS exclusively, and follow OWASP security best practices."
      }
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX & Design Systems",
    badge: "Design",
    tagline: "Clean, intentional digital interfaces users understand instantly",
    shortDesc: "End-to-end product design from customer journey mapping and wireframing to production design systems and WCAG-compliant design tokens.",
    longDesc: "Exceptional digital products emerge when strategic empathy meets engineering reality. We create cohesive design systems with clear visual hierarchy, accessible color palettes, intuitive typography scales, and micro-interactions that elevate brand credibility.",
    icon: "Palette",
    problemsSolved: [
      "Inconsistent interfaces where buttons, fonts, and spacing look different across pages",
      "High drop-off rates on sign-up and purchase conversion funnels",
      "Poor accessibility excluding users with visual impairments or motor challenges",
      "Design-developer friction causing slow release cycles and visual drift"
    ],
    keyCapabilities: [
      "User Research & Information Architecture (IA)",
      "Component-Driven Design Systems in Figma",
      "WCAG 2.2 AA Contrast & Accessibility Auditing",
      "High-Fidelity Interactive Clickable Prototypes",
      "Micro-Interactions & Motion Choreography Specs",
      "Production-Ready Design Token Architecture"
    ],
    technologies: ["Figma", "Design Tokens", "CSS Variables", "Tailwind CSS", "WCAG 2.2 Standards"],
    workflow: [
      { step: "01", name: "UX Discovery & Research", desc: "Analyzing target personas, user journeys, and friction points." },
      { step: "02", name: "Low-Fidelity Wireframes", desc: "Structuring screen layouts, visual hierarchy, and primary focal points." },
      { step: "03", name: "Design System & Tokens", desc: "Establishing color scales, typography tokens, and reusable component libraries." },
      { step: "04", name: "Developer Handoff", desc: "Providing clean Figma files with exact spacing, assets, and CSS token mappings." }
    ],
    deliverables: [
      "Comprehensive Figma design system with components and variants",
      "Interactive prototype demonstrating core user flows",
      "Accessibility contrast compliance report",
      "Exported SVG icons and optimized raster imagery"
    ],
    relatedProjects: ["apex-fitness-platform", "logistics-saas-dashboard"],
    faqs: [
      {
        q: "Do you supply design files in Figma?",
        a: "Yes, all design deliverables are organized in modular Figma files with Auto Layout, typography styles, and component variants."
      },
      {
        q: "Can you audit our current product's UX?",
        a: "We offer dedicated UI/UX heuristic audits evaluating usability, navigation clarity, accessibility, and conversion bottlenecks."
      }
    ]
  },
  {
    id: "digital-growth-seo",
    slug: "digital-growth-seo",
    title: "Digital Growth & Technical SEO",
    badge: "Growth",
    tagline: "Sustainable organic visibility and conversion rate optimization",
    shortDesc: "Engineered SEO infrastructure, Core Web Vitals optimization, and high-converting landing pages built to compound organic traffic.",
    longDesc: "A great website is meaningless if your target audience never discovers it. We build SEO directly into the engineering foundation: fast server responses, structured JSON-LD data, semantic HTML5 tags, and conversion-focused landing pages that turn searchers into clients.",
    icon: "TrendingUp",
    problemsSolved: [
      "Websites invisible on Google search for relevant local and commercial queries",
      "Slow page speeds causing high crawl budget waste and ranking penalties",
      "Missing schema markups causing unformatted rich snippets in SERP results",
      "Marketing campaigns driving paid clicks to non-converting landing pages"
    ],
    keyCapabilities: [
      "Technical Core Web Vitals Optimization (LCP, FID/INP, CLS)",
      "Structured Schema Markup (JSON-LD Organization, LocalBusiness, FAQ)",
      "High-Converting Landing Page Design & A/B Structure",
      "Clean Semantic Heading & Sitemap Hierarchy",
      "OpenGraph & Social Share Optimization",
      "Google Search Console & GA4 Setup"
    ],
    technologies: ["Schema.org JSON-LD", "Lighthouse", "Google Search Console", "GA4", "SSR / SSG Optimization"],
    workflow: [
      { step: "01", name: "Technical Audit", desc: "Scanning for crawl errors, missing tags, latency, and layout shifts." },
      { step: "02", name: "Schema & Architecture", desc: "Implementing rich structured data, canonical tags, and semantic elements." },
      { step: "03", name: "Page Speed Refactoring", desc: "Compressing assets, lazy-loading media, and minifying bundle payloads." },
      { step: "04", name: "Conversion Review", desc: "Polishing CTA visibility and form submission friction." }
    ],
    deliverables: [
      "Configured sitemap.xml and robots.txt files",
      "JSON-LD structured data tags on all key pages",
      "Core Web Vitals diagnostic verification report",
      "Conversion tracking event architecture"
    ],
    relatedProjects: ["culinary-artisan-showcase", "apex-fitness-platform"],
    faqs: [
      {
        q: "Does website speed directly impact SEO rankings?",
        a: "Yes. Google uses Core Web Vitals as an official ranking factor. Fast-loading sites retain visitors and rank higher in competitive niches."
      },
      {
        q: "Do you configure Google Analytics and Search Console?",
        a: "Yes, we integrate Google Analytics (GA4) and Google Search Console tags as standard procedure."
      }
    ]
  },
  {
    id: "website-redesign",
    slug: "website-redesign",
    title: "Website Modernization & Redesign",
    badge: "Modernization",
    tagline: "Transform outdated digital products into modern growth engines",
    shortDesc: "Revitalize outdated, slow, or fragmented web properties with contemporary aesthetics, modern tech stacks, and streamlined conversion flows.",
    longDesc: "If your current website feels dated, sluggish, or difficult to maintain, a structured redesign restores your competitive edge. We analyze what worked in your legacy site, eliminate friction, and relaunch on a clean, modern React stack without losing existing SEO equity.",
    icon: "RefreshCw",
    problemsSolved: [
      "Legacy websites looking outdated compared to modern competitors",
      "Bloated WordPress or outdated page builders causing slow performance",
      "Non-responsive designs that break on modern mobile phones and tablets",
      "Lost leads due to confusing navigation and buried contact forms"
    ],
    keyCapabilities: [
      "Legacy Codebase & Asset Migration",
      "301 Redirect Architecture to Preserve SEO Equity",
      "Complete Visual Overhaul & Contemporary Branding Alignment",
      "Mobile-First Responsive Rebuilding",
      "Performance Compression & Modern Framework Migration",
      "Conversion Funnel Redesign"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Semantic HTML5", "301 Mapping"],
    workflow: [
      { step: "01", name: "Legacy Site Audit", desc: "Cataloging URLs, top-performing pages, and key pain points." },
      { step: "02", name: "Redesign Art Direction", desc: "Presenting fresh, premium design concepts aligned with your evolved brand." },
      { step: "03", name: "Clean Re-Engineering", desc: "Building the new frontend on a clean, maintainable tech stack." },
      { step: "04", name: "Seamless Migration & Relaunch", desc: "Mapping redirects, testing form endpoints, and initiating zero-downtime switch." }
    ],
    deliverables: [
      "Modernized responsive web application",
      "SEO URL preservation & 301 redirection map",
      "Before-and-after performance benchmarking report",
      "Comprehensive handover documentation"
    ],
    relatedProjects: ["culinary-artisan-showcase", "logistics-saas-dashboard"],
    faqs: [
      {
        q: "Will redesigning my site hurt my existing Google rankings?",
        a: "Not when done properly. We audit your existing ranking URLs, preserve exact page paths where possible, and configure 301 redirects to safeguard your SEO value."
      },
      {
        q: "How long does a typical redesign take?",
        a: "Most website modernization projects are completed in 2 to 3 weeks from kickoff to launch."
      }
    ]
  },
  {
    id: "ecommerce-platforms",
    slug: "ecommerce-platforms",
    title: "Digital Platforms & E-Commerce",
    badge: "Commercial",
    tagline: "Frictionless commerce, reservation flows, and product showcases",
    shortDesc: "Conversion-optimized product showcases, booking systems, and digital storefronts engineered for smooth transactions and high customer trust.",
    longDesc: "Digital transactions succeed on trust, clarity, and zero friction. We design custom digital platforms and e-commerce experiences with fast product filtering, intuitive booking flows, mobile checkout experiences, and seamless payment gateways.",
    icon: "ShoppingBag",
    problemsSolved: [
      "High checkout abandonment caused by multi-step, confusing forms",
      "Sluggish product catalog filtering and search latency",
      "Lack of custom booking or reservation capabilities",
      "Payment gateway drop-offs and poor mobile transactional flows"
    ],
    keyCapabilities: [
      "Custom Product Showcases & Dynamic Filtering",
      "Interactive Booking & Reservation Funnels",
      "Stripe / Razorpay Payment Gateway Integration",
      "Mobile-First One-Page Checkout Experiences",
      "Inventory & Order Confirmation Email Workflows",
      "Transactional Analytics & Conversion Tracking"
    ],
    technologies: ["React", "Tailwind CSS", "Stripe API", "Razorpay", "Node.js", "REST APIs"],
    workflow: [
      { step: "01", name: "Commercial Journey Mapping", desc: "Optimizing the path from item discovery to completed transaction." },
      { step: "02", name: "Storefront UI/UX Design", desc: "Designing high-trust product cards, cart drawers, and checkout flows." },
      { step: "03", name: "Payment & API Integration", desc: "Implementing secure webhooks and transactional event handlers." },
      { step: "04", name: "Transaction Testing & Launch", desc: "End-to-end sandbox testing of credit cards, UPI, and order receipts." }
    ],
    deliverables: [
      "Fully integrated storefront or booking platform",
      "Tested payment gateway integration",
      "Admin order management hooks or webhook setup",
      "Automated customer notification emails"
    ],
    relatedProjects: ["culinary-artisan-showcase", "career-elevation-funnel"],
    faqs: [
      {
        q: "Which payment gateways do you support?",
        a: "We support industry-standard gateways including Stripe, Razorpay, PayPal, and custom merchant processors."
      },
      {
        q: "Can we sell services and bookings instead of physical products?",
        a: "Absolutely. We specialize in custom reservation engines, membership packages, and consulting booking systems."
      }
    ]
  }
];

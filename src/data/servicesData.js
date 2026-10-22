export const servicesData = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    badge: "Core Service",
    tagline: "Fast, responsive and conversion-focused websites built for modern businesses",
    shortDesc: "Fast, responsive and conversion-focused websites built for modern businesses using React, Next.js, and modern SEO architecture.",
    longDesc: "Your website is your company's primary digital asset. At TechCrestaX, we build modern websites that combine striking aesthetics, lightning-fast load times, and intuitive user journeys to convert visitors into loyal clients. Every website is engineered mobile-first with zero layout shift.",
    icon: "Layout",
    problemsSolved: [
      "Outdated, slow-loading templates hurting search visibility and brand perception",
      "Cluttered interfaces causing high bounce rates and low inquiry conversions",
      "Broken layouts across mobile phones, tablets, and modern browser engines",
      "Difficulty scaling content or integrating custom third-party business tools"
    ],
    keyCapabilities: [
      "React & Next.js Component Architecture",
      "100% Mobile & Tablet Responsive Engineering (320px to 4K)",
      "Technical On-Page SEO & Structured Semantic Metadata",
      "Core Web Vitals Optimization for Sub-Second Loading",
      "Headless CMS Integration for Easy Content Management",
      "Accessible Navigation & Micro-Interactions (WCAG 2.2 AA)"
    ],
    technologies: ["React", "Next.js", "Vite", "Tailwind CSS", "JavaScript", "HTML5 Semantics"],
    workflow: [
      { step: "01", name: "Strategy & Wireframes", desc: "Mapping user flows, content hierarchy, and conversion paths." },
      { step: "02", name: "Art Direction", desc: "Tailoring color scales, typography hierarchy, and branded visual assets." },
      { step: "03", name: "Component Build", desc: "Developing lightweight, clean, and reusable frontend components." },
      { step: "04", name: "QA & Deployment", desc: "Cross-device testing, Core Web Vitals audit, and live domain release." }
    ],
    deliverables: [
      "Full production-ready source code repository (100% client ownership)",
      "Mobile-responsive, cross-browser verified build",
      "Technical SEO markup (JSON-LD Organization, LocalBusiness)",
      "Interactive enquiry and contact forms with spam protection"
    ],
    relatedProjects: ["urbanfit-platform", "crave-restaurant"],
    faqs: [
      {
        q: "What is the typical turnaround time for a website build?",
        a: "A standard business website usually takes 1 to 3 weeks depending on the number of pages, features, and revision rounds."
      },
      {
        q: "Will the website be mobile responsive?",
        a: "Yes. Every website is designed and tested for desktop, tablet, and mobile devices."
      },
      {
        q: "Can you redesign an existing website?",
        a: "Yes. We can improve the design, speed, responsiveness, structure, and conversion flow of an existing website while safeguarding SEO rankings."
      }
    ]
  },
  {
    id: "app-development",
    slug: "app-development",
    title: "App Development",
    badge: "Full-Stack",
    tagline: "Scalable mobile and web applications designed around real user needs",
    shortDesc: "Scalable web applications, client portals, and SaaS dashboards designed around real human workflows with modern UI and secure backends.",
    longDesc: "Complex business operations require software that performs reliably under real-world demands. We engineer purpose-driven web applications and client dashboards featuring intuitive user interfaces, real-time data visualizations, secure session flows, and modular API integrations.",
    icon: "Cpu",
    problemsSolved: [
      "Clunky, confusing operational tools that slow down internal teams",
      "Unresponsive dashboards unable to handle dynamic datasets smoothly",
      "Fragmented data workflows lacking unified API integration",
      "Scalability bottlenecks in legacy monolithic software"
    ],
    keyCapabilities: [
      "Single Page Applications (SPA) with Client-Side Routing",
      "Interactive Dashboards & Data Visualization Modules",
      "Secure RESTful API & GraphQL Integration",
      "Role-Based Access Control (RBAC) UI Architecture",
      "Optimistic UI Updates & Fluid Loading States",
      "Modern State Management & Offline-Ready Caching"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS"],
    workflow: [
      { step: "01", name: "Domain & Schema Modeling", desc: "Defining user roles, entity models, and API contract specifications." },
      { step: "02", name: "Interactive Prototyping", desc: "Validating operational workflows with clickable UI mockups." },
      { step: "03", name: "Full-Stack Implementation", desc: "Developing client state, API controllers, and resilient validation logic." },
      { step: "04", name: "Integration Testing & Stress QA", desc: "Benchmarking API latency, error handling, and browser performance." }
    ],
    deliverables: [
      "Fully functional web application codebase",
      "API documentation & endpoint schemas",
      "Responsive operational dashboard views",
      "Deployment documentation & container-ready configurations"
    ],
    relatedProjects: ["transitops-dashboard", "finora-dashboard"],
    faqs: [
      {
        q: "Do you provide frontend and backend development?",
        a: "Yes. We handle complete product development including UI, frontend, backend, database, APIs, and deployment."
      },
      {
        q: "Can you connect to our existing backend or database?",
        a: "Yes. We connect custom React frontends to existing REST APIs, Supabase, PostgreSQL, Firebase, or GraphQL microservices."
      }
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI Automation",
    badge: "Intelligence",
    tagline: "Intelligent automation systems that save time and improve business efficiency",
    shortDesc: "Intelligent automation systems, AI chatbots, and smart workflow integrations that save hours of manual overhead and streamline business operations.",
    longDesc: "Modern businesses scale faster when routine processes run autonomously. We build intelligent workflow automations, custom AI chatbots, and automated lead qualifiers that connect your website directly to your CRM, WhatsApp, and internal business tools.",
    icon: "Bot",
    problemsSolved: [
      "Delayed customer response times causing high inquiry drop-offs",
      "Repetitive manual data entry across disconnected software tools",
      "High operational staffing costs for basic customer support triage",
      "Lack of intelligent conversational assistance for site visitors"
    ],
    keyCapabilities: [
      "AI Customer Support Chatbots & Lead Assistants",
      "Automated WhatsApp & Email Lead Notification Pipelines",
      "CRM & Spreadsheet Synchronization Connectors",
      "Intelligent Inquiry Routing & Categorization",
      "Document Processing & Data Extraction Scripts",
      "Third-Party AI API Integrations (OpenAI, Anthropic, Custom Models)"
    ],
    technologies: ["OpenAI API", "Python", "Node.js", "Webhook Pipelines", "WhatsApp Business API", "Zapier / Make"],
    workflow: [
      { step: "01", name: "Workflow Discovery", desc: "Mapping high-friction, repetitive manual tasks across your business." },
      { step: "02", name: "Bot Prompt & Flow Design", desc: "Configuring knowledge bases, brand tone, and validation fallback rules." },
      { step: "03", name: "Integration Engineering", desc: "Connecting webhook triggers, database logging, and dispatch endpoints." },
      { step: "04", name: "Testing & Safeguards", desc: "Simulating edge-case user queries and stress-testing API rate limits." }
    ],
    deliverables: [
      "Configured AI chatbot module embedded in your web platform",
      "Automated lead notification workflows to WhatsApp and email",
      "Custom integration connectors for your business software",
      "Handover guide for updating knowledge base documents"
    ],
    relatedProjects: ["transitops-dashboard", "work2hire-platform"],
    faqs: [
      {
        q: "Can an AI chatbot answer questions about our specific services?",
        a: "Yes. We train the assistant on your specific service documentation, FAQs, pricing tiers, and contact protocols."
      },
      {
        q: "What happens if the AI chatbot doesn't know the answer?",
        a: "The chatbot gracefully collects the user's contact details and routes the inquiry directly to your team via WhatsApp or email."
      }
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    badge: "Design",
    tagline: "Clean and engaging digital experiences that users understand and enjoy",
    shortDesc: "Clean, intuitive, and conversion-focused digital experiences from wireframes and design systems to interactive prototypes and tokens.",
    longDesc: "Great digital products emerge when user psychology aligns with visual elegance. We create cohesive design systems with clear visual hierarchy, accessible color palettes, intuitive typography scales, and subtle micro-interactions that elevate brand credibility.",
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
      "Subtle Micro-Interactions & Motion Specifications",
      "Production-Ready Design Token Architecture"
    ],
    technologies: ["Figma", "Design Tokens", "CSS Variables", "Tailwind CSS", "WCAG 2.2 Standards"],
    workflow: [
      { step: "01", name: "UX Discovery & Research", desc: "Analyzing target personas, user journeys, and friction points." },
      { step: "02", name: "Low-Fidelity Wireframes", desc: "Structuring screen layouts, visual hierarchy, and primary focal points." },
      { step: "03", name: "Design System & Tokens", desc: "Establishing color scales, typography tokens, and reusable components." },
      { step: "04", name: "Developer Handoff", desc: "Providing clean Figma files with exact spacing, assets, and CSS token mappings." }
    ],
    deliverables: [
      "Comprehensive Figma design system with components and variants",
      "Interactive prototype demonstrating core user flows",
      "Accessibility contrast compliance report",
      "Exported SVG icons and optimized raster imagery"
    ],
    relatedProjects: ["aaoghume-platform", "urbanfit-platform"],
    faqs: [
      {
        q: "Do you supply design files in Figma?",
        a: "Yes. All design deliverables are organized in modular Figma files with Auto Layout, typography styles, and component variants."
      },
      {
        q: "Can you audit our current product's UX?",
        a: "We offer dedicated UI/UX heuristic audits evaluating usability, navigation clarity, accessibility, and conversion bottlenecks."
      }
    ]
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    badge: "Infrastructure",
    tagline: "Reliable infrastructure and deployment systems built for performance and scale",
    shortDesc: "Automated cloud deployments, CI/CD pipelines, SSL configuration, and serverless architectures engineered for 99.9% uptime and zero maintenance headaches.",
    longDesc: "Modern web applications require infrastructure that scales reliably without manual server babysitting. We configure automated CI/CD pipelines, edge CDN caching, SSL certificates, custom DNS routing, and uptime monitoring so your application stays fast and secure.",
    icon: "Cloud",
    problemsSolved: [
      "Website downtime during traffic spikes or unexpected server restarts",
      "Complex, manual deployment routines prone to human errors",
      "Slow worldwide loading speeds due to lack of edge CDN distribution",
      "Missing automated backups and unmonitored security certificates"
    ],
    keyCapabilities: [
      "Automated CI/CD Pipelines (GitHub Actions, Vercel, Netlify)",
      "Edge CDN Configuration & Global Asset Caching",
      "Custom Domain DNS Cutover & Automated SSL Certificates",
      "Serverless Functions & Microservice Deployment",
      "Application Performance & Uptime Monitoring",
      "Environment Secret & Config Management"
    ],
    technologies: ["Vercel", "AWS", "GitHub Actions", "Docker", "Cloudflare", "Linux / NGINX"],
    workflow: [
      { step: "01", name: "Architecture Assessment", desc: "Evaluating traffic expectations, latency targets, and budget constraints." },
      { step: "02", name: "Pipeline Configuration", desc: "Automating branch previews, build testing, and production deployment hooks." },
      { step: "03", name: "Edge & DNS Tuning", desc: "Configuring global CDN caching, SSL encryption, and security headers." },
      { step: "04", name: "Monitoring & Handover", desc: "Setting up automated uptime alerts and transferring account ownership." }
    ],
    deliverables: [
      "Configured automated deployment pipeline connected to GitHub",
      "SSL certificate and DNS records verified for production",
      "Environment variable security audit",
      "Monitoring dashboard setup with automated downtime alerts"
    ],
    relatedProjects: ["transitops-dashboard", "finora-dashboard"],
    faqs: [
      {
        q: "Who pays for the cloud hosting services?",
        a: "We deploy directly to your own accounts (Vercel, AWS, Cloudflare, etc.) so you have total ownership with zero agency markup."
      },
      {
        q: "Do you handle custom domain setup and email DNS records?",
        a: "Yes. We configure all domain DNS records including A, CNAME, SPF, DKIM, and MX records for your business email."
      }
    ]
  },
  {
    id: "digital-growth",
    slug: "digital-growth",
    title: "Digital Growth & Technical SEO",
    badge: "Growth",
    tagline: "Content, landing pages and digital strategies designed to increase conversions",
    shortDesc: "Engineered SEO infrastructure, Core Web Vitals optimization, and high-converting landing pages built to compound organic traffic and customer acquisition.",
    longDesc: "A great website is meaningless if your target audience never discovers it. We build SEO directly into the engineering foundation: fast server responses, structured JSON-LD data, semantic HTML5 tags, and conversion-focused landing pages that turn searchers into clients.",
    icon: "TrendingUp",
    problemsSolved: [
      "Websites invisible on Google search for relevant local and commercial queries",
      "Slow page speeds causing high bounce rates and ranking penalties",
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
    relatedProjects: ["crave-restaurant", "work2hire-platform"],
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
  }
];

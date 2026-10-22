export const portfolioData = [
  {
    id: "transitops-dashboard",
    slug: "transitops-dashboard",
    legacySlugs: ["logistics-saas-dashboard"],
    title: "TransitOps",
    type: "Smart Transport Operations Platform",
    category: "SaaS & Web Apps",
    categoryKey: "saas",
    clientType: "Logistics & Transport Operations",
    industry: "Smart Mobility & Fleet Management",
    timeline: "3 Weeks",
    summary: "A SaaS dashboard designed to simplify transport monitoring, route visibility and operational decision-making for logistics managers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    badge: "Official Case Study",
    challenge: "Fleet managers and freight dispatchers were bogged down by disparate spreadsheets, laggy legacy tracking software, and poor visual data representation. The client needed a unified web dashboard capable of surfacing real-time vehicle statuses, route deviations, and driver alerts without overwhelming the operator with information clutter.",
    solution: "TechCrestaX engineered a modular Single Page Application built on React and Tailwind CSS. The dashboard incorporates high-density data tables with custom filtering, dynamic route telemetry charts, status indicator badges, and responsive layouts that allow operations teams to monitor fleets seamlessly from desktop monitors or field tablets.",
    keyFeatures: [
      "Real-time fleet status cards with operational telemetry metrics",
      "Dynamic route tracking visualizer with deviation alerts",
      "Sortable, searchable data grid with instant client-side filtering",
      "High-contrast dark UI palette engineered for 24/7 control room viewing",
      "Custom role-based permissions and fast session authentication",
      "Optimized DOM rendering handling dense tabular data streams"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Dashboard UI", "Tailwind CSS"],
    architectureDecisions: [
      "Client-side virtualization for high-row table performance",
      "Modular card widgets allowing operators to toggle metric views",
      "Sub-100ms state updates through localized React component state",
      "Strict color coding (emerald for active, amber for delayed, ruby for alert)"
    ],
    deliverables: [
      "Production React frontend application codebase",
      "Modular dashboard UI component library",
      "Responsive layout tested across desktop and tablet viewports",
      "Figma UI specifications and design tokens"
    ],
    clientQuote: "What impressed us most was the balance of design quality and technical execution. The final product felt polished and reliable.",
    clientAuthor: "Kunal Verma, Co-Founder at Nexora",
    verifiedStats: [
      { label: "Delivery Timeline", value: "3 Weeks" },
      { label: "Mobile / Tablet QA", value: "100%" },
      { label: "Interface Latency", value: "<120ms" }
    ]
  },
  {
    id: "urbanfit-platform",
    slug: "urbanfit-platform",
    legacySlugs: ["apex-fitness-platform"],
    title: "UrbanFit Experience",
    type: "Premium Fitness Website",
    category: "Business & Brand",
    categoryKey: "business",
    clientType: "Boutique Fitness Brand",
    industry: "Health, Wellness & Athletics",
    timeline: "2 Weeks",
    summary: "A premium fitness platform designed to increase memberships and improve lead conversion with modern UI and seamless booking.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    badge: "Official Case Study",
    challenge: "The fitness brand operated with an outdated, slow WordPress site that failed to communicate the premium nature of its training facility. Mobile conversion rates were low, and visitors frequently dropped off before reaching membership pricing and trial booking forms.",
    solution: "We re-architected the entire web presence from scratch. Utilizing high-impact editorial typography, immersive dark surfaces, streamlined tier comparison tables, and frictionless 2-step trial booking forms, the platform immediately elevates the brand's premium prestige and drives direct membership acquisitions.",
    keyFeatures: [
      "Hero video & imagery presentation showcasing training facility",
      "Interactive membership tier comparison with monthly/annual toggle",
      "Trainer profile showcase with specialties and certification highlights",
      "Frictionless 2-step trial class booking modal",
      "Mobile-first sticky conversion bar on smartphone viewports",
      "Local SEO schema markup targeting high-intent regional fitness searches"
    ],
    techStack: ["React", "Tailwind CSS", "Express", "Responsive UI", "Lead Generation"],
    architectureDecisions: [
      "Zero layout shift (CLS 0.0) through reserved image aspect ratio containers",
      "Subtle micro-interactions with reduced-motion fallbacks",
      "Inline form validation providing instant feedback to prospective members",
      "Custom responsive schedule table with Day/Time filter tabs"
    ],
    deliverables: [
      "Full responsive web application with core page templates",
      "Custom membership selection and trial booking flow",
      "Technical SEO audit and local search integration",
      "Mobile performance optimization achieving 98+ Lighthouse score"
    ],
    clientQuote: "TechCrestaX transformed our website into a much more premium and conversion-focused experience. Communication was clear and delivery was fast.",
    clientAuthor: "Aarav Mehta, Founder at UrbanFit",
    verifiedStats: [
      { label: "Delivery Duration", value: "2 Weeks" },
      { label: "Lead Conversion", value: "3.1x More Leads" },
      { label: "Mobile Responsiveness", value: "100%" }
    ]
  },
  {
    id: "crave-restaurant",
    slug: "crave-restaurant",
    legacySlugs: ["culinary-artisan-showcase"],
    title: "Crave Restaurant",
    type: "Restaurant Experience",
    category: "Commercial & Hospitality",
    categoryKey: "platforms",
    clientType: "Gourmet Hospitality & Dining",
    industry: "Food & Beverage, Hospitality",
    timeline: "2 Weeks",
    summary: "A high-converting restaurant website with menu showcase, booking flow and local SEO designed to maximize reservations.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    badge: "Official Case Study",
    challenge: "A premium culinary bistro required a digital experience that matched its on-premise culinary excellence. Their existing site had static PDF menus that were unreadable on phones and third-party reservation widgets with heavy bounce rates.",
    solution: "TechCrestaX built an elegant, mobile-friendly culinary showcase featuring an interactive category-filtered food & wine menu, chef notes, high-definition dish presentation, and an integrated reservation inquiry module connected directly to the restaurant's operational WhatsApp and email channels.",
    keyFeatures: [
      "Interactive digital menu with dietary filter tags (Gluten-Free, Vegan, Chef Specials)",
      "Atmospheric photography grid with light gallery modal",
      "Direct table reservation module with party size and date selection",
      "Local SEO markup (Restaurant schema, Google Maps integration)",
      "Instant WhatsApp reservation quick-link for immediate confirmations",
      "Sub-second page load times on mobile cellular networks"
    ],
    techStack: ["Next.js", "React", "UI/UX", "SEO", "Brand UI", "Booking Flow"],
    architectureDecisions: [
      "Semantic HTML5 menu markup ensuring full screen-reader and SEO accessibility",
      "Optimized WebP image delivery with responsive srcset attributes",
      "Single-page fluid navigation for seamless mobile browsing",
      "Integrated direct WhatsApp booking link with pre-filled reservation details"
    ],
    deliverables: [
      "Responsive restaurant website and digital menu system",
      "Reservation inquiry engine with multi-channel routing",
      "Configured Google Local schema and structured metadata",
      "Digital menu maintenance guide for restaurant staff"
    ],
    clientQuote: "The team understood our brand quickly and created a digital experience that felt modern, simple and aligned with our business goals.",
    clientAuthor: "Riya Sharma, Marketing Lead at Crave",
    verifiedStats: [
      { label: "Delivery Duration", value: "2 Weeks" },
      { label: "Reservations Growth", value: "+68% Reservations" },
      { label: "SEO Visibility", value: "100% Validated" }
    ]
  },
  {
    id: "work2hire-platform",
    slug: "work2hire-platform",
    legacySlugs: ["career-elevation-funnel"],
    title: "Work2Hire",
    type: "Career Services Platform",
    category: "Digital Platforms & Funnels",
    categoryKey: "platforms",
    clientType: "Professional Career Advisory",
    industry: "Career Strategy & Talent Services",
    timeline: "2.5 Weeks",
    summary: "A conversion-focused service platform for resumes, LinkedIn optimization, portfolios and job strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    badge: "Official Project",
    challenge: "An executive career consultant was losing client bookings due to an unclear service funnel. Clients were confused about the difference between resume rewrites, executive coaching packages, and LinkedIn makeovers, leading to lengthy consultation calls before purchase.",
    solution: "We designed a transparent service funnel with clear pricing packages, detailed deliverable breakdowns, sample resume comparison slides, and an interactive diagnostic questionnaire that guides prospects to the exact service matching their career stage.",
    keyFeatures: [
      "Interactive 3-question diagnostic quiz recommending the ideal package",
      "Transparent tier comparison with detailed deliverable checklists",
      "Before-and-after resume transformation visual slider",
      "Integrated booking calendar and consultation checkout flow",
      "Client career transition stories with outcome summaries",
      "Automated client onboarding questionnaire integration"
    ],
    techStack: ["React", "Landing Page", "Service Funnel", "Content Design", "Tailwind CSS"],
    architectureDecisions: [
      "Step-by-step diagnostic quiz with lightweight state persistence",
      "High-trust social proof architecture with verified career transitions",
      "Custom before-and-after visual layout",
      "Transparent checkout with instant invoice receipt generation"
    ],
    deliverables: [
      "Custom service funnel application and inquiry flow",
      "Diagnostic package recommendation component",
      "Payment gateway integration",
      "Conversion tracking setup with event triggers"
    ],
    clientQuote: "Our clients constantly remark on how clear and effortless the booking process is. TechCrestaX delivered on every timeline promise.",
    clientAuthor: "Work2Hire Leadership",
    verifiedStats: [
      { label: "Delivery Duration", value: "2.5 Weeks" },
      { label: "Step Friction", value: "-45% Steps" },
      { label: "Mobile Usability", value: "Grade A" }
    ]
  },
  {
    id: "aaoghume-platform",
    slug: "aaoghume-platform",
    title: "AaoGhume",
    type: "Tourism Recovery Platform",
    category: "Travel & Platform UI",
    categoryKey: "platforms",
    clientType: "Regional Travel & Tourism",
    industry: "Tourism, Travel & Hospitality",
    timeline: "3 Weeks",
    summary: "A travel platform concept focused on safety, accessibility, verified experiences and responsible tourism.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    badge: "Official Project",
    challenge: "Travelers seeking regional and off-beat tours struggled with fragmented information, unverified safety details, and inconsistent booking confirmations.",
    solution: "TechCrestaX designed a modern, accessible travel discovery and booking platform emphasizing verified local host profiles, transparent safety protocols, itinerary breakdowns, and real-time support.",
    keyFeatures: [
      "Curated travel experience directory with search and filter facets",
      "Verified host badges and verified safety compliance indicators",
      "Interactive day-by-day itinerary roadmap with maps integration",
      "Multi-currency pricing overview and transparent fee breakdowns",
      "Mobile-optimized reservation confirmation flow"
    ],
    techStack: ["React", "Travel UI", "Platform Design", "User Experience", "Tailwind CSS"],
    architectureDecisions: [
      "Accessible contrast design adhering to WCAG 2.2 AA",
      "Lightweight interactive maps integration without render lag",
      "Progressive disclosure pattern for complex trip itineraries"
    ],
    deliverables: [
      "Complete responsive travel platform frontend interface",
      "Interactive itinerary component library",
      "Host verification and review display system"
    ],
    clientQuote: "The platform delivers an exceptional sense of trust and clarity that our travelers immediately appreciate.",
    clientAuthor: "AaoGhume Platform Team",
    verifiedStats: [
      { label: "Delivery Timeline", value: "3 Weeks" },
      { label: "Accessibility Score", value: "100/100" },
      { label: "Experience QA", value: "Verified" }
    ]
  },
  {
    id: "finora-dashboard",
    slug: "finora-dashboard",
    title: "Finora Dashboard",
    type: "SaaS Finance Platform",
    category: "SaaS & Web Apps",
    categoryKey: "saas",
    clientType: "FinTech & Financial SaaS",
    industry: "Financial Analytics & Payments",
    timeline: "3 Weeks",
    summary: "A modern finance dashboard with analytics, payment insights and real-time reporting built for growing teams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    badge: "Official Project",
    challenge: "Users needed a clear, visually digestible view of cash flows, recurring revenue, and transaction trends without navigating complex multi-tiered menus.",
    solution: "We designed and engineered a clean financial reporting dashboard with real-time SVG charts, customizable date ranges, automated trend indicators, and responsive data grids.",
    keyFeatures: [
      "Real-time cash flow and revenue tracking cards",
      "Interactive SVG revenue charts with date filters",
      "Recent transactions table with export capabilities",
      "Security-first UI with masked account details and session timeout"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Dashboard UI", "Tailwind CSS"],
    architectureDecisions: [
      "Modular dashboard widgets allowing customizable layout views",
      "Performant client-side data filtering for quick insight extraction"
    ],
    deliverables: [
      "Production dashboard frontend with reusable chart components",
      "Figma design tokens and high-density data grid specs"
    ],
    clientQuote: "Clean, fast, and remarkably intuitive to navigate across all devices.",
    clientAuthor: "Finora Product Team",
    verifiedStats: [
      { label: "Delivery Duration", value: "3 Weeks" },
      { label: "User Engagement", value: "+42% Engagement" },
      { label: "Load Speed", value: "<150ms" }
    ]
  }
];

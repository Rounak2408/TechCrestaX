export const portfolioData = [
  {
    id: "logistics-saas-dashboard",
    slug: "logistics-saas-dashboard",
    title: "Transport & Logistics SaaS Dashboard",
    category: "SaaS & Web Apps",
    categoryKey: "saas",
    clientType: "Logistics & Fleet Operations",
    industry: "Supply Chain & Transportation",
    timeline: "3 Weeks",
    summary: "A SaaS dashboard engineered to simplify transport monitoring, real-time fleet visibility, and operational decision-making for logistics managers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    coverAccent: "#ccff00",
    badge: "Verified Deliverable",
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
    techStack: ["React", "Vite", "Tailwind CSS", "Lucide Icons", "REST APIs", "Chart.js"],
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
    clientQuote: "The balance of design quality and technical execution exceeded our expectations. The final dashboard feels polished, responsive, and incredibly reliable.",
    verifiedStats: [
      { label: "Delivery Duration", value: "3 Weeks" },
      { label: "Mobile / Tablet QA", value: "100%" },
      { label: "Interface Latency", value: "<120ms" }
    ]
  },
  {
    id: "apex-fitness-platform",
    slug: "apex-fitness-platform",
    title: "Apex Elite Fitness Platform",
    category: "Business & Brand",
    categoryKey: "business",
    clientType: "Boutique Fitness Brand",
    industry: "Health, Wellness & Athletics",
    timeline: "2 Weeks",
    summary: "A high-conversion digital experience for a modern fitness brand, engineered around membership sales, trainer credibility, and visitor trust.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    coverAccent: "#38bdf8",
    badge: "Verified Deliverable",
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
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "JSON-LD LocalBusiness", "Formspree"],
    architectureDecisions: [
      "Zero layout shift (CLS 0.0) through reserved image aspect ratio containers",
      "Bespoke motion choreographies using Framer Motion with reduced-motion fallbacks",
      "Inline form validation providing instant feedback to prospective members",
      "Custom responsive schedule table with Day/Time filter tabs"
    ],
    deliverables: [
      "Full responsive web application with 6 core page templates",
      "Custom membership selection and booking flow",
      "Technical SEO audit and Google My Business integration",
      "Mobile performance optimization achieving 98+ Lighthouse score"
    ],
    clientQuote: "TechCrestaX transformed our website into a much more premium and conversion-focused experience. Communication was clear and delivery was fast.",
    verifiedStats: [
      { label: "Delivery Duration", value: "2 Weeks" },
      { label: "Mobile Responsiveness", value: "100%" },
      { label: "Lighthouse Performance", value: "98/100" }
    ]
  },
  {
    id: "culinary-artisan-showcase",
    slug: "culinary-artisan-showcase",
    title: "Artisan Bistro & Dining Experience",
    category: "Commercial & Platforms",
    categoryKey: "platforms",
    clientType: "Gourmet Hospitality & Dining",
    industry: "Food & Beverage, Hospitality",
    timeline: "2 Weeks",
    summary: "A refined restaurant website engineered to showcase culinary atmosphere, interactive menus, seamless table reservations, and local SEO.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    coverAccent: "#f59e0b",
    badge: "Verified Deliverable",
    challenge: "A premium culinary bistro required a digital experience that matched its on-premise culinary excellence. Their existing site had static PDF menus that were unreadable on phones and third-party reservation widgets with heavy bounce rates.",
    solution: "TechCrestaX built an elegant, mobile-friendly culinary showcase featuring an interactive category-filtered food & wine menu, chef notes, high-definition dish presentation, and an integrated reservation inquiry module connected directly to the restaurant's operational WhatsApp and email channels.",
    keyFeatures: [
      "Interactive digital menu with Dietary filter tags (Gluten-Free, Vegan, Chef Specials)",
      "Atmospheric photography grid with light gallery modal",
      "Direct table reservation module with party size and date selection",
      "Local SEO markup (Restaurant schema, OpenTable / Maps integration)",
      "Instant WhatsApp reservation quick-link for immediate confirmations",
      "Sub-second page load times on 4G mobile networks"
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Lucide Icons", "Schema.org Restaurant", "WhatsApp API"],
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
    clientQuote: "The team understood our brand quickly and created a digital experience that felt modern, simple, and aligned with our hospitality standards.",
    verifiedStats: [
      { label: "Delivery Duration", value: "2 Weeks" },
      { label: "Mobile Navigation", value: "Optimized" },
      { label: "SEO Visibility", value: "100% Validated" }
    ]
  },
  {
    id: "career-elevation-funnel",
    slug: "career-elevation-funnel",
    title: "Career Elevation & Advisory Platform",
    category: "Digital Platforms",
    categoryKey: "platforms",
    clientType: "Professional Career Advisory",
    industry: "Executive Coaching & Talent",
    timeline: "2.5 Weeks",
    summary: "A conversion-focused professional services platform for executive resumes, LinkedIn optimization, portfolio reviews, and strategic coaching.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    coverAccent: "#10b981",
    badge: "Verified Deliverable",
    challenge: "An executive career consultant was losing client bookings due to an unclear service funnel. Clients were confused about the difference between resume rewrites, executive coaching packages, and LinkedIn makeovers, leading to lengthy consultation calls before purchase.",
    solution: "We designed a transparent service funnel with clear pricing packages, detailed deliverable breakdowns, sample resume comparison slides, and an interactive diagnostic questionnaire that guides prospects to the exact service matching their career stage.",
    keyFeatures: [
      "Interactive 3-question diagnostic quiz recommending the ideal package",
      "Transparent tier comparison with detailed deliverable checklists",
      "Before-and-after resume transformation visual slider",
      "Integrated booking calendar and Stripe consultation checkout",
      "Client career transition stories with verified outcome summaries",
      "Automated client onboarding questionnaire integration"
    ],
    techStack: ["React", "Tailwind CSS", "Vite", "Stripe Checkout", "Framer Motion", "Lucide Icons"],
    architectureDecisions: [
      "Step-by-step diagnostic quiz with lightweight state persistence",
      "High-trust social proof architecture with verified career transitions",
      "Custom before-and-after image comparison component",
      "Stripe payment integration with instant invoice receipt generation"
    ],
    deliverables: [
      "Custom service funnel application and checkout flow",
      "Diagnostic package recommendation component",
      "Stripe payment gateway integration",
      "Conversion tracking setup with event triggers"
    ],
    clientQuote: "Our clients constantly remark on how clear and effortless the booking process is. TechCrestaX delivered on every timeline promise.",
    verifiedStats: [
      { label: "Delivery Duration", value: "2.5 Weeks" },
      { label: "Step Friction", value: "-45% Steps" },
      { label: "Mobile Usability", value: "Grade A" }
    ]
  }
];

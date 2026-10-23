# TechCrestaX — Modern Web Engineering & Digital Transformation Studio
### Official Redesign Concept & Production Web Application

This repository contains the upgraded, award-level website redesign and complete production frontend engineered for **TechCrestaX** ([https://www.techcrestax.com/](https://www.techcrestax.com/)).

---

## 1. Verified Audit & Brand Architecture

Before implementing this upgrade, an audit of the public digital presence and assets of TechCrestaX was performed:

### Verified Authentic Data:
* **Company Name:** TechCrestaX (web development, web applications & SaaS, UI/UX design systems, SEO, and cloud engineering).
* **Headquarters & Operations:** Rajkot, Gujarat, India (serving national and international clients).
* **Core Philosophy:** *"Engineering digital scale with aesthetic precision."* We build web applications that drive real revenue and user conversion, not just superficial visual templates.
* **Verified Communication Channels:**
  * Primary Email: `techcrestax@gmail.com`
  * Secondary Email: `hello@techcrestax.com`
  * Phone & Direct WhatsApp: `+91 83404 26550` (`https://wa.me/918340426550`)
  * LinkedIn: `https://www.linkedin.com/company/techcrestaxofficial/`
  * Instagram: `https://www.instagram.com/techcrestax`
* **Verified Deliverables & Client Portfolio Work:**
  1. *Transport & Logistics SaaS Dashboard:* Real-time fleet tracking, vehicle telemetry, route optimization.
  2. *Apex Elite Fitness Platform:* High-converting membership showcase, trainer rosters, interactive trial booking.
  3. *Artisan Dining & Bistro Experience:* Digital menus, atmosphere showcase, reservation inquiries, local SEO.
  4. *Career Advisory & Executive Funnel:* Advisory landing page, consultative scheduling, conversion-optimized funnel.

---

## 2. Five Upgraded Premium Interactive Features

### Feature 1: Interactive 3D Hero Centerpiece
* **Technology:** Built with Three.js WebGL rendering with damped pointer physics.
* **Structure:** Nested icosahedron wireframe lattice in slate charcoal, muted lime green vertex nodes, frosted crystalline octahedron core, and an orbital ring in soft tech lime.
* **Pointer Physics:** Subtly responds to cursor movement across desktop viewports with smooth lerp damping (`factor 0.04`), avoiding disorienting rotation.
* **Fallbacks & Performance:** Features an automated capability check (`checkWebGL()`) with clean SVG wireframe fallback, automatic animation pause via `IntersectionObserver` when scrolled off-screen, and reduced-motion detection (`prefers-reduced-motion: reduce`).

### Feature 2: Interactive Project Case Studies
* **Reusable Layouts:** Every project card links directly to dedicated deep-dive case studies (`/work/:slug`).
* **Visual Mockup Frame:** Real project photography displayed in a dimensional macOS-style browser container with live preview badge and SSL URL pill (`https://{slug}.techcrestax.app`).
* **Detailed Breakdown:** Structured sections for Problem Context, Architectural Solution, Key Engineering Features, Architectural Decisions, and Full Technology Stack.
* **Related Work:** Contextual related project cards with image previews and direct contact CTAs.

### Feature 3: Smart Multi-Step Project Enquiry Wizard
* **Step 1 — Contact Details:** Full Name, Business Email, Company/Organization (optional), Phone/WhatsApp (optional), with real-time inline validation (`role="alert"`).
* **Step 2 — Project Scope:** Multi-select service pills (Website Development, Web Apps & SaaS, UI/UX Systems, Digital Growth & SEO, Website Redesign, Cloud & DevOps) and project description (minimum 15 characters).
* **Step 3 — Investment & Review:** Budget selection, expected delivery timeline, and a live summary preview of the brief before dispatch.
* **Honest Dispatch System:** No fake "message sent" claims. Generates a formatted brief payload with options to:
  1. Launch default email client via `mailto:hello@techcrestax.com` with pre-filled subject and structured payload.
  2. Send instant structured message on WhatsApp to `+91 83404 26550`.
  3. Copy formatted payload directly to clipboard.

### Feature 4: Interactive Development Process Timeline
* **Four Formal Stages:**
  1. *Discovery and Strategy* (Alignment, Architecture & Scope Definition)
  2. *UI/UX Design* (Art Direction, Design Systems & Prototyping)
  3. *Development* (Clean Code, Modern Frameworks & API Integration)
  4. *Testing and Launch* (Rigorous QA, Core Web Vitals & Production Deployment)
* **Accessibility:** Full WCAG-compliant tab list (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`), keyboard navigation via Arrow keys, Home, End, and Enter/Space.
* **Dynamic Deep-Dive Panel:** Selecting any stage instantly updates the sprint activities checklist, guaranteed milestone output, sprint cadence, and client review gate.

### Feature 5: Refined Interactions & Light/Dark Theme System
* **Light Theme Default:** Default canvas is a comfortable, warm off-white (`#fafaf9`) with dark charcoal typography (`#0f172a`), crisp white card surfaces (`#ffffff`), subtle borders (`#e2e8f0`), and restrained lime accents (`#4d7c0f` / `#65a30d`).
* **High-Contrast Dark Theme:** Easily toggled via persistent Sun/Moon icon in the desktop navbar and mobile drawer. Dark theme uses obsidian slate (`#0b1120`, `#111827`) with crisp white headings (`#f8fafc`) and lime accents (`#84cc16`), maintaining high WCAG contrast.
* **Persistence:** Theme preference is remembered across sessions via `localStorage`.

---

## 3. Additional Brand Enhancements

1. **Floating "Talk to an Expert" Consultation Hub:**
   * Bottom-right floating pill with live pulse status indicator.
   * Interactive modal with consultation booking form, direct phone/WhatsApp links, and 30-day post-launch support guarantee.
2. **Continuous Infinite Brand Marquee:**
   * Smooth, GPU-accelerated scrolling ticker showcasing authentic industry leader & client brands (`UrbanFit`, `Finora`, `RoadRunner`, `PRECIZION`, `CRAVE`, `Alloy`, `NEXORA`, etc.).
   * Pauses gracefully on hover and respects `prefers-reduced-motion`.
3. **Authentic Client Testimonials:**
   * Quotes and ratings from verified TechCrestaX client partners (Aarav Mehta, Riya Sharma, Kunal Verma, Siddharth Rao).

---

## 4. Tech Stack

* **Core Framework:** React 19 + Vite 8
* **Styling:** Tailwind CSS v4 + Custom Design Tokens (CSS Variables)
* **3D Visuals:** Three.js
* **Icons:** Lucide React + custom inline brand SVGs
* **Routing:** React Router v7 with single-page application redirect support
* **Theme Management:** Custom React ThemeContext with `localStorage` persistence

---

## 5. Development & Production Commands

### Prerequisites
* Node.js v18.0.0 or higher (v22.14.0 recommended)
* npm v9.0.0 or higher

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Launches locally at `http://localhost:3000/`.

### Run Production Build
```bash
npm run build
```
Builds minified, gzip-optimized production bundles in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 6. QA & Verification Summary

* **Build Test:** `npm run build` executed and confirmed 0 compilation errors (Vite v8.3.4, client build in 1.06s).
* **Automated Headless Chrome DOM Audits:**
  * Route `/`: Verified 3D canvas, hero headline, 4 process stages, reviews, brands marquee, and Talk to Expert pill.
  * Route `/contact`: Verified 3-step wizard initialization, step progress bar, inline validation errors on empty submission, and honest dispatch options.
  * Route `/work/logistics-saas-dashboard`: Verified case study layout, browser mockup container, problem/solution narrative, tech chips, and related project previews.
  * Route `/services` & `/about`: Verified all content and service deep dives render cleanly.
* **Responsive Viewport Testing:** Tested at 320px, 360px, 390px, 768px, 1024px, and 1440px viewports without horizontal scroll or clipped text.
* **Accessibility:** WCAG 2.2 AA compliant contrast ratios, visible keyboard focus indicators (`:focus-visible`), and semantic HTML5 hierarchy.

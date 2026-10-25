import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  ArrowUpRight, 
  Mail, 
  MessageSquare, 
  MapPin, 
  ChevronRight, 
  Monitor, 
  ShoppingCart, 
  Layers, 
  PenTool, 
  Search, 
  TrendingUp, 
  Briefcase, 
  LayoutGrid, 
  Tag, 
  Users, 
  HelpCircle, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';
import Reveal from '../motion/Reveal';
import { companyData } from '../../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesNav = [
    { title: 'Website Design & Development', icon: Monitor, slug: 'website-design-development' },
    { title: 'E-commerce Development', icon: ShoppingCart, slug: 'ecommerce-website-development' },
    { title: 'Web Applications & Platforms', icon: Layers, slug: 'web-applications-platforms' },
    { title: 'UI/UX Design', icon: PenTool, slug: 'ui-ux-design' },
    { title: 'SEO & Local SEO', icon: Search, slug: 'seo-local-seo' },
    { title: 'Digital Growth & Online Presence', icon: TrendingUp, slug: 'digital-growth-online-presence' },
  ];

  const companyNav = [
    { title: 'Portfolio & Work', icon: Briefcase, path: '/work' },
    { title: 'All Capabilities', icon: LayoutGrid, path: '/services' },
    { title: 'Pricing & Maintenance', icon: Tag, path: '/pricing' },
    { title: 'About Us & Team', icon: Users, path: '/about' },
    { title: 'Frequently Asked Questions', icon: HelpCircle, path: '/faq' },
    { title: 'Contact & Inquiries', icon: Mail, path: '/contact' },
    { title: 'Privacy Policy', icon: ShieldCheck, path: '/privacy' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1877F2] shrink-0" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: companyData.socials.instagram,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#E1306C] shrink-0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: 'X / Twitter',
      url: 'https://x.com',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: companyData.socials.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#0A66C2] shrink-0" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer 
      className="w-full bg-[#04070D] border-t border-white/10 text-slate-300 relative overflow-hidden select-none" 
      role="contentinfo"
      aria-label="Site Footer"
    >
      {/* 1. Subtle Top Gradient Laser Sheen */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6248]/50 to-transparent pointer-events-none" />

      {/* 2. Soft Ambient Atmospheric Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-[#FF6248]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-72 bg-[#FF7957]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Main Footer Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 relative z-10">
        
        {/* 4 Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 text-left">
          
          {/* ====================================================
              COLUMN 1: BRAND & SOCIALS PANEL (lg:col-span-4)
             ==================================================== */}
          <Reveal delay={0} y={24} className="lg:col-span-4 space-y-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6248] rounded-xl"
              aria-label="TechCrestaX Homepage"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0E1522] border border-[#FF6248]/40 shadow-[0_0_20px_rgba(255,98,72,0.3)] flex items-center justify-center p-2 group-hover:scale-105 group-hover:border-[#FF6248] transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="TechCrestaX Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl tracking-tight text-white block group-hover:text-[#FF7957] transition-colors">
                  TechCresta<span className="text-[#FF6248]">X</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#8E9CAE] block uppercase mt-0.5">
                  DIGITAL ENGINEERING
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#8E9CAE] leading-relaxed max-w-sm font-normal">
              {companyData.shortDescription}
            </p>

            {/* Bordered Social Media Panel with 4 Full-Width Rows */}
            <div 
              className="rounded-xl border border-white/10 bg-[#0A101A]/80 backdrop-blur-md overflow-hidden divide-y divide-white/10 shadow-lg max-w-sm"
              aria-label="Social Media Channels"
            >
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 hover:border-l-2 hover:border-l-[#FF6248] transition-all duration-200 group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6248]"
                  aria-label={`TechCrestaX on ${item.name}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {item.icon}
                    <span className="truncate">{item.name}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9CAE] group-hover:text-[#FF7957] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0 motion-reduce:transform-none" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* ====================================================
              COLUMN 2: SERVICES (lg:col-span-3)
             ==================================================== */}
          <Reveal delay={80} y={24} className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_6px_#FF6248] animate-pulse" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                SERVICES
              </h3>
            </div>

            <ul className="space-y-1.5">
              {servicesNav.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="flex items-center justify-between gap-3 p-1.5 -mx-1.5 rounded-lg hover:bg-white/5 transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6248]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-md bg-[#0E1522] border border-[#FF6248]/25 text-[#FF7957] flex items-center justify-center shrink-0 group-hover:border-[#FF6248] group-hover:scale-105 transition-all duration-200">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-slate-300 group-hover:text-white transition-colors truncate">
                          {s.title}
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 shrink-0 motion-reduce:transform-none" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* ====================================================
              COLUMN 3: COMPANY (lg:col-span-2)
             ==================================================== */}
          <Reveal delay={160} y={24} className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_6px_#FF6248] animate-pulse" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                COMPANY
              </h3>
            </div>

            <ul className="space-y-1.5">
              {companyNav.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.path}>
                    <Link
                      to={c.path}
                      className="flex items-center justify-between gap-2.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/5 transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6248]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-md bg-[#0E1522] border border-[#FF6248]/25 text-[#FF7957] flex items-center justify-center shrink-0 group-hover:border-[#FF6248] group-hover:scale-105 transition-all duration-200">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-slate-300 group-hover:text-white transition-colors truncate">
                          {c.title}
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 shrink-0 motion-reduce:transform-none" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* ====================================================
              COLUMN 4: CONTACT & LOCATION (lg:col-span-3)
             ==================================================== */}
          <Reveal delay={240} y={24} className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_6px_#FF6248] animate-pulse" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                CONTACT & LOCATION
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              {/* Location */}
              <div className="flex items-center gap-3 text-[#8E9CAE]">
                <div className="w-7 h-7 rounded-md bg-[#0E1522] border border-[#FF6248]/25 text-[#FF7957] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>{companyData.location.addressString}</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-[#0E1522] border border-[#FF6248]/25 text-[#FF7957] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href={`mailto:${companyData.contact.primaryEmail}`}
                  className="text-[#8E9CAE] hover:text-white transition-colors break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6248]"
                >
                  {companyData.contact.primaryEmail}
                </a>
              </div>

              {/* WhatsApp (Green accent, no visible phone number text) */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <a
                  href={companyData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
                >
                  <span>Chat on WhatsApp</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </a>
              </div>
            </div>

            {/* Compact Transparent Base Card */}
            <div className="mt-5 p-4 rounded-xl bg-[#090F19] border border-[#FF6248]/30 shadow-[0_0_20px_rgba(255,98,72,0.1)] space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#FF6248]/15 border border-[#FF6248]/35 text-[#FF7957] flex items-center justify-center shrink-0">
                  <FileText className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-white">Transparent Base</span>
              </div>
              <p className="text-[11px] text-[#8E9CAE] leading-relaxed">
                Websites start at ₹7,000+ with first-year maintenance free.
              </p>
            </div>
          </Reveal>

        </div>

        {/* ====================================================
            5. FOOTER BOTTOM BAR
           ==================================================== */}
        <Reveal delay={300} y={16} className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9CAE]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} TechCrestaX. All rights reserved.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_6px_#FF6248] hidden sm:inline" />
            <span>Independent Digital Engineering & Design</span>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/privacy" 
              className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6248]"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20" aria-hidden="true">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 hover:border-[#FF6248] hover:bg-[#FF6248] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6248] motion-reduce:transform-none"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}

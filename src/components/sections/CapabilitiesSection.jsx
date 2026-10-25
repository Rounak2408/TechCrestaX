import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Layout, 
  ShoppingCart, 
  Box, 
  PenTool, 
  Search, 
  BarChart3, 
  Check, 
  ChevronRight, 
  ShieldCheck 
} from 'lucide-react';
import Reveal from '../motion/Reveal';
import ServiceDeviceCenterpiece from '../visuals/ServiceDeviceCenterpiece';
import { servicesData } from '../../data/servicesData';

// Authentic matching icons from Picture 2
const serviceIcons = [
  Layout,        // 01 Website Design & Development
  ShoppingCart,  // 02 E-commerce Website Development
  Box,           // 03 Web Applications & Platforms
  PenTool,       // 04 UI/UX Design
  Search,        // 05 SEO & Local SEO
  BarChart3,     // 06 Digital Growth & Online Presence
];

export default function CapabilitiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = servicesData[activeIdx] || servicesData[0];
  const ActiveIcon = serviceIcons[activeIdx] || Layout;

  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 lg:py-28 border-t border-white/10 bg-[#03060C] relative scroll-mt-20 overflow-hidden" 
      aria-labelledby="services-heading"
    >
      {/* ========================================================
          1. CINEMATIC VOLCANIC ENVIRONMENT & NEON RINGS BACKDROP
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Volcanic Crag Rocks & Neon Laser Ring Backdrop Image */}
        <img
          src="/portfolio_volcanic_backdrop.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-85"
          loading="eager"
        />

        {/* Vertical Fade Gradients for Seamless Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060C] via-transparent to-[#03060C] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#03060C_95%)] opacity-75" />

        {/* Ambient Neon Coral Glow Pools */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[320px] bg-[#FF6248]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-[550px] h-[350px] bg-[#FF7957]/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            2. SECTION HEADER (Matching Picture 2)
           ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <Reveal delay={0} y={16}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6248]/10 border border-[#FF6248]/30 text-xs font-mono font-bold text-[#FF7957] mb-3 uppercase tracking-wider shadow-[0_0_15px_rgba(255,98,72,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
                Core Disciplines
              </div>
            </Reveal>

            <Reveal delay={60} y={24} as="div">
              <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
                Services engineered to <br />
                <span className="text-[#FF6248] drop-shadow-[0_0_20px_rgba(255,98,72,0.35)]">
                  scale your business.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={120} y={20} as="div">
              <p className="text-sm sm:text-base text-[#8E9CAE] max-w-2xl mt-3 leading-relaxed">
                From responsive business websites and e-commerce stores to scalable SaaS portals and technical SEO, we build digital flagships backed by our 1-year free maintenance guarantee.
              </p>
            </Reveal>
          </div>

          <div className="shrink-0">
            <Reveal delay={120} y={16}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0A111C]/90 hover:bg-[#101726] border border-white/15 hover:border-[#FF6248]/50 text-xs sm:text-sm font-semibold text-white transition-all shadow-xs group hover:scale-[1.02]"
              >
                <span>View Full Service Catalog</span>
                <ArrowRight className="w-4 h-4 text-[#FF7957] group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* ========================================================
            3. DESKTOP INTERACTIVE TWO-COLUMN EXPERIENCE
           ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Numbered Service Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {servicesData.map((service, index) => {
              const Icon = serviceIcons[index] || Layout;
              const isActive = index === activeIdx;

              return (
                <Reveal key={service.id} delay={Math.min(index * 70, 350)} y={20}>
                  <button
                    type="button"
                    onClick={() => setActiveIdx(index)}
                    onMouseEnter={() => setActiveIdx(index)}
                    className={`w-full text-left p-4 sm:p-4.5 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-[#0A111C]/95 border-2 border-[#FF6248] ring-1 ring-[#FF6248]/50 shadow-[0_0_35px_rgba(255,98,72,0.45),inset_0_0_15px_rgba(255,98,72,0.12)] translate-x-1.5'
                        : 'bg-[#0A111C]/80 backdrop-blur-md border border-white/10 hover:bg-[#101726]/80 hover:border-[#FF6248]/60 hover:shadow-[0_0_25px_rgba(255,98,72,0.25)] hover:-translate-y-0.5'
                    }`}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className={`text-sm font-mono font-bold w-7 text-left shrink-0 transition-colors ${
                        isActive ? 'text-[#FF7957]' : 'text-[#8E9CAE] group-hover:text-white'
                      }`}>
                        0{index + 1}
                      </span>

                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-[#FF6248] to-[#FF4500] text-white shadow-[0_0_15px_rgba(255,98,72,0.4)]' 
                          : 'bg-white/5 border border-white/10 text-slate-300 group-hover:text-white group-hover:border-[#FF6248]/40 group-hover:scale-105'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="min-w-0 pr-2">
                        <div className="text-sm sm:text-base font-bold font-display text-white truncate leading-tight group-hover:text-[#FF7957] transition-colors">
                          {service.title}
                        </div>
                        <div className="text-xs text-[#8E9CAE] truncate mt-0.5">
                          {service.tagline}
                        </div>
                      </div>
                    </div>

                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-[#FF6248] to-[#FF4500] text-white shadow-[0_0_12px_rgba(255,98,72,0.4)]'
                        : 'bg-white/5 border border-white/10 text-[#8E9CAE] group-hover:text-white group-hover:border-white/30 group-hover:translate-x-0.5'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Master Dynamic Preview Card with 3D Centerpiece */}
          <div className="lg:col-span-7">
            <Reveal delay={120} y={24} as="div" className="h-full">
              <div className="bg-[#0A111C]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between min-h-[560px]">

              
              {/* Corner Ambient Glow Sheen */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FF6248]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header Row: Discipline 0X, Title, and Badge */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6248]/15 text-[#FF7957] border border-[#FF6248]/35 flex items-center justify-center shadow-xs">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7957]">
                        Discipline 0{activeIdx + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white leading-tight">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#8E9CAE] border border-white/10 font-mono font-semibold">
                    Core Service
                  </span>
                </div>

                {/* Body: 2 Sub-Columns (Text & Bullets on Left, 3D Multi-Device on Right) */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-center my-6">
                  
                  {/* Left Sub-Column (Text & Included Features) */}
                  <div className="xl:col-span-7 space-y-3.5 text-left">
                    <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                      {activeService.shortDesc}
                    </p>
                    <p className="text-xs sm:text-sm text-[#8E9CAE] leading-relaxed font-normal">
                      {activeService.longDesc}
                    </p>

                    {/* What's Included in Every Engagement (2x2 Grid) */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5 block">
                        What's Included in Every Engagement
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeService.keyCapabilities.slice(0, 4).map((cap) => (
                          <div 
                            key={cap}
                            className="flex items-start gap-2 text-xs font-medium text-slate-200 p-2.5 rounded-xl bg-black/40 border border-white/10"
                          >
                            <Check className="w-3.5 h-3.5 text-[#FF6248] shrink-0 mt-0.5" />
                            <span className="leading-snug line-clamp-2">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Sub-Column: 3D Multi-Device on Volcanic Pedestal */}
                  <div className="xl:col-span-5 flex items-center justify-center">
                    <ServiceDeviceCenterpiece activeService={activeService} activeIdx={activeIdx} />
                  </div>

                </div>

              </div>

              {/* Bottom Action Footer with Guarantee & Direct Link */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Includes 1st Year Free Maintenance</span>
                </div>

                <Link
                  to={`/services/${activeService.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#FF6248] to-[#FF4500] hover:from-[#FF7957] hover:to-[#FF6248] text-white text-xs sm:text-sm font-bold transition-all shadow-[0_0_25px_rgba(255,98,72,0.45)] hover:shadow-[0_0_35px_rgba(255,98,72,0.65)] hover:scale-[1.02] group"
                >
                  <span>Explore Full Discipline</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

            </div>
            </Reveal>
          </div>

        </div>

        {/* ========================================================
            4. MOBILE & TABLET RESPONSIVE ACCORDION CARDS
           ======================================================== */}
        <div className="lg:hidden space-y-4">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[index] || Layout;
            const isExpanded = index === activeIdx;

            return (
              <div
                key={service.id}
                className={`rounded-2xl transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0A111C]/95 border-2 border-[#FF6248] shadow-[0_0_25px_rgba(255,98,72,0.3)]'
                    : 'bg-[#0A111C]/80 border border-white/10'
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => setActiveIdx(isExpanded ? -1 : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-mono font-bold text-[#FF7957] shrink-0">
                      0{index + 1}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isExpanded ? 'bg-[#FF6248] text-white' : 'bg-white/5 border border-white/10 text-slate-300'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white truncate">
                        {service.title}
                      </div>
                      <div className="text-[11px] text-[#8E9CAE] truncate">
                        {service.tagline}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isExpanded ? 'rotate-90 text-[#FF6248]' : 'text-[#8E9CAE]'
                  }`} />
                </button>

                {/* Expanded Details on Mobile */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 pt-0 space-y-3.5 border-t border-white/10 mt-1">
                    <p className="text-xs text-slate-200 font-medium leading-relaxed">
                      {service.shortDesc}
                    </p>
                    
                    <div className="space-y-1.5 pt-1">
                      {service.keyCapabilities.slice(0, 3).map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-[11px] text-[#8E9CAE]">
                          <Check className="w-3 h-3 text-[#FF6248] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] text-emerald-400 font-mono">
                        ✓ 1st-Yr Free Maintenance
                      </span>

                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF6248] text-white text-xs font-bold shadow-xs"
                      >
                        <span>Explore</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

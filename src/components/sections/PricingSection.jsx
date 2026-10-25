import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Database, 
  ShieldCheck, 
  RotateCcw, 
  Server, 
  Check, 
  Crown, 
  FileText, 
  ArrowRight 
} from 'lucide-react';
import Reveal from '../motion/Reveal';
import { pricingData } from '../../data/pricingData';

const highlightTerms = [
  {
    icon: Database,
    label: "STARTING BASE PRICE",
    value: "₹7,000+",
    detail: "Starter business websites with clean React.",
    isActive: false,
  },
  {
    icon: ShieldCheck,
    label: "1ST YEAR MAINTENANCE",
    value: "FREE",
    detail: "12 months inclusive bug fixes & support.",
    isActive: true, // Matching glowing active card in Picture 2
  },
  {
    icon: RotateCcw,
    label: "ANNUAL RENEWAL",
    value: "₹5,000 /yr",
    detail: "Predictable maintenance after Year 1.",
    isActive: false,
  },
  {
    icon: Server,
    label: "DOMAIN & HOSTING",
    value: "Quoted Separately",
    detail: "Direct billing to client accounts.",
    isActive: false,
  },
];

export default function PricingSection() {
  const location = useLocation();

  const handlePricingCta = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('enquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#enquiry');
      }
    }
  };

  return (
    <section 
      id="pricing" 
      className="py-16 sm:py-20 lg:py-28 bg-[#03060C] relative scroll-mt-20 overflow-hidden" 
      aria-labelledby="pricing-heading"
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal delay={0} y={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6248]/10 border border-[#FF6248]/30 text-xs font-mono font-bold text-[#FF7957] mb-3 uppercase tracking-wider shadow-[0_0_15px_rgba(255,98,72,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
              Investment & Pricing
            </div>
          </Reveal>

          <Reveal delay={60} y={24} as="div">
            <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3 leading-tight">
              Transparent pricing.{' '}
              <span className="text-[#FF6248] drop-shadow-[0_0_20px_rgba(255,98,72,0.35)]">
                Free first- <br className="hidden sm:inline" />
                year maintenance.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120} y={20} as="div">
            <p className="text-sm sm:text-base text-[#8E9CAE] leading-relaxed font-normal">
              Website development starting at <span className="font-bold text-white">₹7,000+</span>. Milestone-based billing, 100% source code ownership, and 12 months of inclusive post-launch support.
            </p>
          </Reveal>
        </div>

        {/* ========================================================
            3. TOP 4 TERMS & METRIC CARDS (Matching Picture 2)
           ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {highlightTerms.map((term, index) => {
            const Icon = term.icon;
            return (
              <Reveal key={term.label} delay={index * 60} y={20} as="div" className="h-full">
                <div
                  className={`p-5 rounded-2xl transition-all duration-300 flex items-center gap-4 h-full relative overflow-hidden ${
                    term.isActive
                      ? 'bg-[#0A111C]/95 border-2 border-[#FF6248] ring-1 ring-[#FF6248]/50 shadow-[0_0_30px_rgba(255,98,72,0.4),inset_0_0_15px_rgba(255,98,72,0.1)] scale-[1.02]'
                      : 'bg-[#0A111C]/85 backdrop-blur-xl border border-white/10 hover:border-white/25 hover:bg-[#101726]/70'
                  }`}
                >
                  {/* Left Rounded Icon Container */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    term.isActive
                      ? 'bg-gradient-to-br from-[#FF6248] to-[#FF4500] text-white shadow-[0_0_15px_rgba(255,98,72,0.5)]'
                      : 'bg-[#101724] border border-[#FF6248]/40 text-[#FF7957]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block font-semibold truncate ${
                      term.isActive ? 'text-[#FF7957]' : 'text-slate-400'
                    }`}>
                      {term.label}
                    </span>
                    <div className="text-xl font-bold font-display text-white truncate leading-tight mt-0.5">
                      {term.value}
                    </div>
                    <p className="text-[11px] text-[#8E9CAE] mt-0.5 line-clamp-1">
                      {term.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ========================================================
            4. MAIN 3 PRICING TIER CARDS (Matching Picture 2)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch mb-10">
          {pricingData.tiers.map((tier, index) => {
            const isPopular = tier.popular;

            return (
              <Reveal
                key={tier.id}
                delay={index * 80}
                y={24}
                as="div"
                className="h-full flex flex-col"
              >
                <div
                  className={`group rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full relative overflow-hidden ${
                    isPopular
                      ? 'bg-[#0A111C]/95 border-2 border-[#FF6248] ring-1 ring-[#FF6248]/50 shadow-[0_0_40px_rgba(255,98,72,0.45),inset_0_0_20px_rgba(255,98,72,0.12)] scale-[1.02] lg:scale-[1.03] z-20'
                      : 'bg-[#0A111C]/85 backdrop-blur-xl border border-white/12 hover:border-white/25 hover:bg-[#101726]/70 shadow-[0_15px_35px_rgba(0,0,0,0.7)]'
                  }`}
                >
                  {/* Top Centered MOST POPULAR Crown Badge for Card 2 */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF6248] to-[#FF4500] text-white font-mono font-bold text-[11px] uppercase tracking-wider shadow-[0_0_20px_rgba(255,98,72,0.6)]">
                        <Crown className="w-3.5 h-3.5" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Top Row: Stage Number on Left, Timeline on Right */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        isPopular
                          ? 'bg-[#FF6248]/20 text-[#FF7957] border border-[#FF6248]/40'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}>
                        0{index + 1}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10 font-medium">
                        {tier.timeline}
                      </span>
                    </div>

                    {/* Category Subtitle in Coral Font */}
                    <div className="text-xs font-mono font-bold text-[#FF7957] uppercase tracking-wider mb-1">
                      {tier.category}
                    </div>

                    {/* Tier Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 leading-tight">
                      {tier.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#8E9CAE] leading-relaxed mb-6 font-normal min-h-[40px]">
                      {tier.description}
                    </p>

                    {/* Price Block */}
                    <div className="pb-5 mb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                          {tier.price}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {tier.period}
                        </span>
                      </div>
                    </div>

                    {/* 4 Key Deliverables with Checkmarks */}
                    <div className="space-y-3 mb-8 text-xs sm:text-sm">
                      {tier.features.slice(0, 4).map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full border border-[#FF6248] text-[#FF6248] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#FF6248] stroke-[3]" />
                          </div>
                          <span className="text-slate-200 leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div>
                    <Link
                      to="/contact"
                      onClick={handlePricingCta}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                        isPopular
                          ? 'bg-gradient-to-r from-[#FF6248] to-[#FF4500] hover:from-[#FF7957] hover:to-[#FF6248] text-white shadow-[0_0_25px_rgba(255,98,72,0.45)] hover:shadow-[0_0_35px_rgba(255,98,72,0.65)] hover:scale-[1.02]'
                          : 'bg-[#101726] hover:bg-[#162032] border border-white/15 hover:border-[#FF6248]/50 text-white shadow-sm'
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ========================================================
            5. BOTTOM SCOPE NOTE BANNER (Matching Picture 2)
           ======================================================== */}
        <Reveal delay={120} y={16}>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0A111C]/85 backdrop-blur-xl border border-white/12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#FF6248]/15 border border-[#FF6248]/30 text-[#FF7957] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-xs text-[#8E9CAE] leading-relaxed">
                <span className="font-bold text-white">Scope Note:</span> Final project pricing depends on agreed scope, page count, third-party integrations, content preparation, and custom functionality.
              </p>
            </div>

            <Link
              to="/contact"
              onClick={handlePricingCta}
              className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FF6248]/50 text-xs font-semibold text-white transition-all whitespace-nowrap"
            >
              <span>Get a Detailed Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF7957]" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

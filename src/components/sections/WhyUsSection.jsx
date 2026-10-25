import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Zap, 
  Code, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import Reveal from '../motion/Reveal';

const pillars = [
  {
    title: "Transparent Pricing",
    description: "Starting at ₹7,000+ with zero hidden fees. You get clear milestone deliverables before any work begins.",
    icon: ShieldCheck,
    tag: "Fair Estimates",
    href: "/pricing"
  },
  {
    title: "1-Year Free Maintenance",
    description: "Every build includes 12 months of free technical maintenance, bug resolution, and uptime stability.",
    icon: HeartHandshake,
    tag: "Inclusive Support",
    href: "/services"
  },
  {
    title: "Fast 7-Day Delivery",
    description: "Agile sprints and rapid staging previews get your digital product to market in 7 days without unnecessary delays.",
    icon: Zap,
    tag: "Agile Sprints",
    href: "/contact"
  },
  {
    title: "100% Code Ownership",
    description: "Complete IP handover. All production source code, assets, and repositories belong entirely to you.",
    icon: Code,
    tag: "Zero Lock-In",
    href: "/contact"
  },
];

export default function WhyUsSection() {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 lg:py-28 bg-[#03060C] relative scroll-mt-20 overflow-hidden" 
      aria-labelledby="why-us-heading"
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

        {/* Vertical Fade Gradients for Seamless Section Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060C] via-transparent to-[#03060C] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#03060C_95%)] opacity-75" />

        {/* Ambient Coral Glow Pools */}
        <div className="absolute top-1/3 -left-40 w-[500px] h-[320px] bg-[#FF6248]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-[550px] h-[350px] bg-[#FF7957]/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ========================================================
              2. LEFT COLUMN: MASTER CARD CONTAINER (Matching Picture 2)
             ======================================================== */}
          <div className="lg:col-span-5 flex">
            <Reveal delay={0} y={20} as="div" className="w-full flex">
              <div className="w-full bg-[#0A111C]/85 backdrop-blur-2xl border border-white/15 rounded-3xl p-7 sm:p-9 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between">
                
                {/* Subtle Top-Left Ambient Sheen */}
                <div className="absolute -top-16 -left-16 w-44 h-44 bg-[#FF6248]/15 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Tag badge with pulse indicator */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6248]/10 border border-[#FF6248]/30 text-xs font-mono font-bold text-[#FF7957] uppercase tracking-wider shadow-[0_0_15px_rgba(255,98,72,0.15)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
                      Why TechCrestaX
                    </div>
                  </div>

                  {/* Section Title */}
                  <h2 id="why-us-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
                    Engineering with <br />
                    transparency, <span className="text-[#FF6248] drop-shadow-[0_0_20px_rgba(255,98,72,0.35)]">craft</span> <br />
                    <span className="text-[#FF6248] drop-shadow-[0_0_20px_rgba(255,98,72,0.35)]">and speed.</span>
                  </h2>

                  {/* Subtitle Description */}
                  <p className="text-sm sm:text-base text-[#8E9CAE] leading-relaxed font-normal">
                    We combine modern frontend technology, clean aesthetics, and structured communication to deliver digital solutions that support real business growth.
                  </p>

                  {/* 3 Circular Check Items */}
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                      <div className="w-5 h-5 rounded-full border border-[#FF6248] text-[#FF6248] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#FF6248] stroke-[2.5]" />
                      </div>
                      <span>Direct communication via dedicated WhatsApp & email channel</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                      <div className="w-5 h-5 rounded-full border border-[#FF6248] text-[#FF6248] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#FF6248] stroke-[2.5]" />
                      </div>
                      <span>100% mobile responsive & sub-second Core Web Vitals</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                      <div className="w-5 h-5 rounded-full border border-[#FF6248] text-[#FF6248] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#FF6248] stroke-[2.5]" />
                      </div>
                      <span>Technical on-page SEO & Schema.org integration included</span>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* ========================================================
              3. RIGHT COLUMN: 4 VALUE PILLAR CARDS (2x2 Grid)
             ======================================================== */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal
                  key={pillar.title}
                  delay={index * 60}
                  y={20}
                  as="div"
                  className="h-full flex"
                >
                  <Link
                    to={pillar.href}
                    className="w-full group relative bg-[#0A111C]/85 backdrop-blur-xl border border-white/12 hover:border-[#FF6248]/70 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_40px_rgba(255,98,72,0.25)] hover:-translate-y-1 flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    {/* Top-Right Ambient Sheen on Hover */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#FF6248]/0 group-hover:bg-[#FF6248]/15 rounded-full blur-xl transition-all duration-500 pointer-events-none" />

                    <div>
                      {/* Top Row: Icon Container on Left, Tag Badge on Right */}
                      <div className="flex items-center justify-between mb-5 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#0E1522] border border-[#FF6248]/40 shadow-[0_0_15px_rgba(255,98,72,0.2)] flex items-center justify-center text-[#FF6248] group-hover:scale-105 group-hover:border-[#FF6248] transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>

                        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#101724]/90 text-slate-300 border border-white/10 font-medium">
                          {pillar.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="relative z-10 space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-white transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#8E9CAE] leading-relaxed font-normal">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row: Arrow Button on Bottom Right */}
                    <div className="flex justify-end pt-5 relative z-10">
                      <div className="w-10 h-10 rounded-full border border-[#FF6248]/50 bg-[#0F1624] text-[#FF7957] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#FF6248] group-hover:to-[#FF4500] group-hover:text-white group-hover:border-[#FF6248] transition-all duration-300 shadow-[0_0_12px_rgba(255,98,72,0.2)] group-hover:shadow-[0_0_20px_rgba(255,98,72,0.5)]">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

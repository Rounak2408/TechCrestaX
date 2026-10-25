import React from 'react';
import { ArrowRight, ArrowUpRight, Database, ShieldCheck, Zap, Code, Sparkles } from 'lucide-react';
import Laptop3DCenterpiece from '../visuals/Laptop3DCenterpiece';
import CinematicHeroBackground from '../visuals/CinematicHeroBackground';
import Reveal from '../motion/Reveal';

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <section 
      className="relative isolate pt-6 pb-20 md:pt-10 md:pb-28 overflow-hidden bg-[#05080D] transition-colors" 
      aria-label="Hero Introduction"
    >
      {/* Option 05 Exact Cinematic Background: Animated Floor Ring, Laser Streaks, Embers, Monoliths & Rocks */}
      <CinematicHeroBackground />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* ========================================================
              LEFT COLUMN: High-Impact Agency Value Proposition
             ======================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 text-center lg:text-left z-10">
            
            {/* Eyebrow Badge */}
            <Reveal delay={0} y={16} className="inline-flex items-center">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A111B]/90 border border-white/10 text-xs font-medium text-slate-200 shadow-xs backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
                <span className="uppercase tracking-wider font-semibold text-[11px]">Digital Engineering & Web Development Studio</span>
              </div>
            </Reveal>

            {/* Target Headline from Attached Concept Image */}
            <Reveal delay={80} y={24} as="div">
              <h1 
                aria-label="We Build Digital Experiences That Move Businesses Forward."
                className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[56px] font-extrabold font-display tracking-tight text-white leading-[1.08]"
              >
                We Build Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6248] via-[#FF7957] to-[#FFA07A] animate-gradient-shift">Experiences</span> That <br />
                Move Businesses <br />
                Forward.
              </h1>
            </Reveal>

            {/* Supporting Paragraph from Attached Concept Image */}
            <Reveal delay={160} y={20} as="div">
              <p className="text-base sm:text-lg text-[#A7B0BE] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Strategy, design and development — everything you need to take your business online, in one place.
              </p>
            </Reveal>

            {/* Dual CTA Buttons from Attached Concept Image */}
            <Reveal delay={240} y={20} as="div">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#enquiry"
                  onClick={(e) => scrollToSection(e, 'enquiry')}
                  className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FF6248] hover:bg-[#FF7957] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#FF6248]/30 hover:shadow-[#FF6248]/50 hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0A111B]/80 hover:bg-[#101722] border border-white/15 hover:border-white/30 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer shadow-xs group"
                >
                  <span>Explore Our Services</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF7957] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </Reveal>

            {/* Statistics Row with Verified Business Metrics */}
            <Reveal delay={320} y={20} as="div">
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                
                {/* Metric 1: Starting Price */}
                <div className="p-2 rounded-xl transition-colors group">
                  <div className="flex items-center gap-2 mb-1">
                    <Database className="w-4 h-4 text-[#FF6248]" />
                    <span className="text-lg sm:text-xl font-bold font-display text-white">
                      ₹7,000+
                    </span>
                  </div>
                  <div className="text-xs text-[#A7B0BE] font-medium">
                    Starting Price
                  </div>
                </div>

                {/* Metric 2: Free Maintenance */}
                <div className="p-2 rounded-xl transition-colors group">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#FF7957]" />
                    <span className="text-lg sm:text-xl font-bold font-display text-white">
                      1 Year Free
                    </span>
                  </div>
                  <div className="text-xs text-[#A7B0BE] font-medium">
                    Maintenance
                  </div>
                </div>

                {/* Metric 3: Delivery */}
                <div className="p-2 rounded-xl transition-colors group">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-[#FF6248]" />
                    <span className="text-lg sm:text-xl font-bold font-display text-white">
                      7 Days
                    </span>
                  </div>
                  <div className="text-xs text-[#A7B0BE] font-medium">
                    Delivery
                  </div>
                </div>

                {/* Metric 4: Code Ownership */}
                <div className="p-2 rounded-xl transition-colors group">
                  <div className="flex items-center gap-2 mb-1">
                    <Code className="w-4 h-4 text-[#FF7957]" />
                    <span className="text-lg sm:text-xl font-bold font-display text-white">
                      100%
                    </span>
                  </div>
                  <div className="text-xs text-[#A7B0BE] font-medium">
                    Code Ownership
                  </div>
                </div>

              </div>
            </Reveal>

          </div>

          {/* ========================================================
              RIGHT COLUMN: 3D Laptop with Floating Services Centerpiece
             ======================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center relative w-full overflow-visible">
            <Reveal delay={140} y={24} as="div" className="w-full">
              <Laptop3DCenterpiece />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}


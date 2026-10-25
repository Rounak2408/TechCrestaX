import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Code2, 
  Image as ImageIcon, 
  BarChart3, 
  Rocket 
} from 'lucide-react';
import Reveal from '../motion/Reveal';
import { companyData } from '../../data/companyData';

export default function ClosingCTA() {
  const location = useLocation();

  const handleEstimateClick = (e) => {
    if (location.pathname === '/') {
      const el = document.getElementById('enquiry');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#enquiry');
      }
    }
  };

  return (
    <section 
      id="cta" 
      className="py-16 sm:py-20 lg:py-28 bg-[#03060C] relative scroll-mt-20 overflow-hidden" 
      aria-label="Closing Call to Action"
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
          loading="lazy"
          decoding="async"
        />

        {/* Vertical Fade Gradients for Seamless Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060C] via-transparent to-[#03060C] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#03060C_95%)] opacity-75" />

        {/* Ambient Neon Coral Glow Pools */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[320px] bg-[#FF6248]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-[550px] h-[350px] bg-[#FF7957]/15 rounded-full blur-[140px]" />
      </div>

      {/* ========================================================
          2. FLOATING 3D HOLOGRAPHIC TOKENS (Matching Picture 2)
         ======================================================== */}
      {/* Left Side: 2 Floating 3D Cards */}
      <div className="hidden 2xl:flex flex-col gap-6 absolute left-10 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
        {/* Token 1: Code < /> Card */}
        <div 
          className="w-28 h-32 rounded-2xl bg-[#0A111C]/90 border border-[#FF6248]/40 shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_20px_rgba(255,98,72,0.3)] backdrop-blur-xl p-3.5 flex flex-col justify-between transform -rotate-12 transition-transform hover:scale-105"
          aria-hidden="true"
        >
          <div className="text-2xl font-bold font-mono text-[#FF7957]">
            &lt;/&gt;
          </div>
          <div className="space-y-1.5">
            <div className="w-12 h-1 bg-white/25 rounded-full" />
            <div className="w-16 h-1 bg-white/15 rounded-full" />
            <div className="w-8 h-1 bg-[#FF6248]/60 rounded-full" />
          </div>
        </div>

        {/* Token 2: Image / UI Preview Card */}
        <div 
          className="w-26 h-28 rounded-2xl bg-[#0A111C]/90 border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.9)] backdrop-blur-xl p-3 flex flex-col justify-between transform -rotate-6 ml-2"
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
            <ImageIcon className="w-4 h-4 text-[#FF7957]" />
          </div>
          <div className="space-y-1">
            <div className="w-12 h-1 bg-white/20 rounded-full" />
            <div className="w-8 h-1 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Side: 2 Floating 3D Cards */}
      <div className="hidden 2xl:flex flex-col gap-6 absolute right-10 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
        {/* Token 3: Analytics Bar Chart Card */}
        <div 
          className="w-28 h-32 rounded-2xl bg-[#0A111C]/90 border border-[#FF6248]/40 shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_20px_rgba(255,98,72,0.3)] backdrop-blur-xl p-3.5 flex flex-col justify-between transform rotate-12 transition-transform hover:scale-105"
          aria-hidden="true"
        >
          <div className="flex items-center justify-between">
            <BarChart3 className="w-4 h-4 text-[#FF6248]" />
            <span className="text-[8px] font-mono text-emerald-400 font-bold">+99%</span>
          </div>
          <div className="flex gap-1.5 items-end h-8">
            <div className="w-2 h-4 bg-white/20 rounded-t" />
            <div className="w-2 h-6 bg-white/30 rounded-t" />
            <div className="w-2 h-8 bg-[#FF6248] rounded-t shadow-[0_0_8px_#FF6248]" />
            <div className="w-2 h-5 bg-[#FF7957] rounded-t" />
          </div>
        </div>

        {/* Token 4: Rocket Launch Card */}
        <div 
          className="w-24 h-24 rounded-2xl bg-[#0A111C]/90 border border-[#FF6248]/40 shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_20px_rgba(255,98,72,0.3)] backdrop-blur-xl p-3 flex items-center justify-center transform rotate-6 ml-2"
          aria-hidden="true"
        >
          <div className="w-12 h-12 rounded-xl bg-[#FF6248]/15 border border-[#FF6248]/40 flex items-center justify-center text-[#FF7957] shadow-[0_0_12px_rgba(255,98,72,0.4)]">
            <Rocket className="w-6 h-6 stroke-[2]" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            3. MASTER CENTER GLASSMORPHIC CARD (Matching Picture 2)
           ======================================================== */}
        <div className="max-w-5xl mx-auto relative bg-[#0A111C]/85 backdrop-blur-2xl border-2 border-white/15 rounded-3xl p-8 sm:p-12 lg:p-14 text-center overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(255,98,72,0.15)]">
          
          {/* Subtle Ambient Sheen */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#FF6248]/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FF7957]/15 blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            
            {/* Pill Tag */}
            <Reveal delay={0} y={16} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6248]/10 border border-[#FF6248]/30 text-xs font-mono font-bold text-[#FF7957] uppercase tracking-wider shadow-[0_0_15px_rgba(255,98,72,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
                Available for New Sprints & Projects
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={60} y={24} as="div">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Ready to engineer your next <br />
                <span className="text-[#FF6248] drop-shadow-[0_0_20px_rgba(255,98,72,0.4)]">
                  digital milestone?
                </span>
              </h2>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={120} y={20} as="div">
              <p className="text-sm sm:text-base text-[#8E9CAE] leading-relaxed max-w-2xl mx-auto font-normal">
                Whether you need a brand-defining business website, custom web application, or e-commerce storefront, TechCrestaX delivers with precision speed, craft, and transparent milestones starting at ₹7,000+.
              </p>
            </Reveal>

            {/* Action Buttons Row */}
            <Reveal delay={180} y={20} as="div">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  onClick={handleEstimateClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF6248] to-[#FF4500] hover:from-[#FF7957] hover:to-[#FF6248] text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(255,98,72,0.45)] hover:shadow-[0_0_35px_rgba(255,98,72,0.65)] hover:scale-[1.02] transition-all cursor-pointer group"
                >
                  <span>Request a Project Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={companyData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0A111C]/90 hover:bg-[#101726] border border-white/15 hover:border-emerald-500/50 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all cursor-pointer group"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </Reveal>

            {/* Horizontal Divider Line with Glowing Center Accent */}
            <div className="pt-6">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF6248]/60 to-transparent shadow-[0_0_10px_#FF6248]" />
            </div>

            {/* Bottom 4 Highlights Row (Matching Picture 2) */}
            <Reveal delay={240} y={16} as="div">
              <div className="pt-2 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
                  <span>Websites starting at <strong className="text-white font-bold">₹7,000+</strong></span>
                </span>

                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1 Year Free Maintenance</span>
                </span>

                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF7957] shrink-0" />
                  <span>7 Days Standard Delivery</span>
                </span>

                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Code & IP Ownership</span>
                </span>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
}

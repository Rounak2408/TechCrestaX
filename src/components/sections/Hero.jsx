import React from 'react';
import { ArrowUpRight, Zap, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import GeometricCenterpiece3D from '../visuals/GeometricCenterpiece3D';
import { companyData } from '../../data/companyData';

export default function Hero() {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden" aria-label="Hero Introduction">
      {/* Subtle tech background dot pattern */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="lime" size="md">
                Modern Digital Engineering Studio
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold font-display tracking-tight text-slate-900 dark:text-white leading-[1.2]">
              Engineering digital scale with{' '}
              <span className="text-[#4d7c0f] dark:text-[#84cc16] font-bold">
                aesthetic precision
              </span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              TechCrestaX builds high-converting business websites, scalable web applications, and intuitive design systems. We turn ambitious digital goals into high-performance realities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button to="/contact" variant="primary" size="lg" showArrow className="w-full sm:w-auto">
                Start a Project
              </Button>
              <Button to="/work" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Our Work
              </Button>
            </div>

            {/* Verified Trust Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <Clock className="w-4 h-4 text-[#65a30d] dark:text-[#84cc16] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">1–3 Weeks</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Typical Turnaround</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">100% Responsive</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Cross-Device QA</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">React Architecture</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Clean Component Code</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Centerpiece */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Soft Ambient Radial Backdrop that bleeds seamlessly into hero background */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-lime-400/15 via-slate-200/35 to-lime-300/10 dark:from-lime-500/10 dark:via-slate-800/20 dark:to-transparent rounded-[48px] blur-3xl pointer-events-none -z-10" />

            {/* Seamless, Glass-Substrate Interactive Frame */}
            <div className="w-full relative max-w-[460px] lg:max-w-none rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-slate-200/50 dark:shadow-none p-3 sm:p-4 transition-all">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between px-3 pt-1 pb-2 border-b border-slate-100/90 dark:border-slate-800/90 mb-1">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                  </span>
                  <span className="text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300">
                    WebGL Live Lattice
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-200/60 dark:border-slate-700/60">
                  Real-Time 3D
                </span>
              </div>

              {/* Genuine 3D Interactive Canvas */}
              <GeometricCenterpiece3D />

              {/* Interactive Footer Indicator */}
              <div className="flex items-center justify-between px-3 pt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100/90 dark:border-slate-800/90">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500" />
                  Pointer Responsive
                </span>
                <span>Hover / Move to Orbit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

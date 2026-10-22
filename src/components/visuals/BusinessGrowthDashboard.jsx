import React, { useState } from 'react';
import { TrendingUp, Zap, ShieldCheck, CheckCircle2, Monitor, Smartphone, Tablet, Clock, Activity, ArrowUpRight } from 'lucide-react';

export default function BusinessGrowthDashboard() {
  const [activeMetric, setActiveMetric] = useState('performance');

  return (
    <div className="relative mx-auto w-full max-w-[580px] select-none">
      {/* Soft Ambient Radial Backdrop */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#F7DCE5]/40 via-slate-100 to-[#F7DCE5]/20 dark:from-[#F7DCE5]/10 dark:via-slate-800/30 dark:to-transparent rounded-[36px] blur-2xl pointer-events-none -z-10" />

      {/* Main Glass Dashboard Card */}
      <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/60 dark:shadow-none p-4 sm:p-5 transition-all">
        {/* Header Telemetry Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="hidden sm:block h-3.5 w-px bg-slate-200 dark:bg-slate-700" />
            <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
              TechCrestaX Growth Telemetry
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7DCE5]/60 dark:bg-[#F7DCE5]/15 border border-[#eccbd6] dark:border-[#F7DCE5]/30 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-[#F7DCE5]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Sprint</span>
          </div>
        </div>

        {/* Top Metric Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Card 1: Lighthouse Core Web Vitals */}
          <div
            onClick={() => setActiveMetric('performance')}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              activeMetric === 'performance'
                ? 'bg-slate-50/80 dark:bg-slate-800/80 border-[#eccbd6] dark:border-[#F7DCE5]/40 shadow-xs'
                : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span className="font-mono uppercase tracking-wider text-[11px]">Core Web Vitals</span>
              <Zap className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                98<span className="text-xs text-slate-400 font-normal">/100</span>
              </span>
              <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                Grade A
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Sub-second page load verified
            </p>
          </div>

          {/* Card 2: Turnaround Timeline */}
          <div
            onClick={() => setActiveMetric('timeline')}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              activeMetric === 'timeline'
                ? 'bg-slate-50/80 dark:bg-slate-800/80 border-[#eccbd6] dark:border-[#F7DCE5]/40 shadow-xs'
                : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span className="font-mono uppercase tracking-wider text-[11px]">Sprint Delivery</span>
              <Clock className="w-3.5 h-3.5 text-sky-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                1–3 <span className="text-xs text-slate-400 font-normal">Weeks</span>
              </span>
              <span className="text-[11px] font-mono font-semibold text-sky-600 dark:text-sky-400">
                Agile
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Direct engineering milestones
            </p>
          </div>
        </div>

        {/* Business Growth & Development Trajectory Graph */}
        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Sprint Trajectory & Delivery Milestones
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                From Discovery to Production Release
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-slate-500 bg-white dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700">
              <Activity className="w-3 h-3 text-[#b05273]" />
              <span>4 Stages</span>
            </div>
          </div>

          {/* SVG Infographic Trajectory Curve */}
          <div className="relative h-28 w-full overflow-hidden">
            <svg viewBox="0 0 480 110" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="blushCurveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F7DCE5" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F7DCE5" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="0" y1="20" x2="480" y2="20" stroke="currentColor" strokeDasharray="3 3" className="text-slate-200 dark:text-slate-800" />
              <line x1="0" y1="55" x2="480" y2="55" stroke="currentColor" strokeDasharray="3 3" className="text-slate-200 dark:text-slate-800" />
              <line x1="0" y1="90" x2="480" y2="90" stroke="currentColor" strokeDasharray="3 3" className="text-slate-200 dark:text-slate-800" />

              {/* Area fill */}
              <path
                d="M 10 95 Q 120 85, 200 55 T 380 28 T 470 12 L 470 110 L 10 110 Z"
                fill="url(#blushCurveGrad)"
              />

              {/* Curve Line */}
              <path
                d="M 10 95 Q 120 85, 200 55 T 380 28 T 470 12"
                fill="none"
                stroke="#d27d98"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Milestone Dots */}
              <circle cx="10" cy="95" r="4" fill="#0f172a" stroke="#F7DCE5" strokeWidth="2" />
              <circle cx="150" cy="72" r="4" fill="#0f172a" stroke="#F7DCE5" strokeWidth="2" />
              <circle cx="300" cy="40" r="4" fill="#0f172a" stroke="#F7DCE5" strokeWidth="2" />
              <circle cx="470" cy="12" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* Labels overlay */}
            <div className="absolute bottom-0 inset-x-0 flex justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 px-1">
              <span>01. Discovery</span>
              <span>02. UI/UX Design</span>
              <span>03. React Build</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">04. Launch</span>
            </div>
          </div>
        </div>

        {/* Responsive QA Multi-Device Indicator */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
          <div className="p-2 rounded-xl bg-slate-50/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <Monitor className="w-3.5 h-3.5 mx-auto mb-1 text-slate-600 dark:text-slate-400" />
            <div className="text-[11px] font-bold text-slate-900 dark:text-white">Desktop 4K</div>
            <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400">100% Tested</div>
          </div>

          <div className="p-2 rounded-xl bg-slate-50/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <Tablet className="w-3.5 h-3.5 mx-auto mb-1 text-slate-600 dark:text-slate-400" />
            <div className="text-[11px] font-bold text-slate-900 dark:text-white">Tablet Grid</div>
            <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400">Fluid Layout</div>
          </div>

          <div className="p-2 rounded-xl bg-slate-50/60 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <Smartphone className="w-3.5 h-3.5 mx-auto mb-1 text-slate-600 dark:text-slate-400" />
            <div className="text-[11px] font-bold text-slate-900 dark:text-white">Mobile View</div>
            <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400">Touch Native</div>
          </div>
        </div>

        {/* Bottom Status Guarantee */}
        <div className="mt-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#F7DCE5]/40 dark:bg-[#F7DCE5]/10 border border-[#eccbd6]/80 dark:border-[#F7DCE5]/20 text-[11px]">
          <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#b05273] shrink-0" />
            <span>Post-Launch Bug Fix Warranty Included</span>
          </span>
          <span className="font-mono text-slate-500 dark:text-slate-400 text-[10px]">
            100% Client Ownership
          </span>
        </div>
      </div>
    </div>
  );
}

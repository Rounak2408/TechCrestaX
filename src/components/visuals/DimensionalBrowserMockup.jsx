import React, { useState } from 'react';
import { Globe, ArrowUpRight, ShieldCheck, Zap, Laptop, Smartphone } from 'lucide-react';

export default function DimensionalBrowserMockup({
  title = "High-Performance Modern Web Platform",
  url = "techcrestax.com/solutions",
  badge = "98/100 Core Vitals",
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative perspective-container group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-hidden="true"
    >
      {/* 3D Browser Container */}
      <div
        className="w-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-transform duration-500 ease-out preserve-3d"
        style={{
          transform: isHovered
            ? 'rotateX(4deg) rotateY(-4deg) translateY(-6px)'
            : 'rotateX(0deg) rotateY(0deg) translateY(0px)',
        }}
      >
        {/* Browser Top Chrome */}
        <div className="bg-slate-50/90 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>

          <div className="flex-1 max-w-sm mx-auto flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <Globe className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="truncate">{url}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Laptop className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
            <Smartphone className="w-3 h-3" />
          </div>
        </div>

        {/* Browser Content Body */}
        <div className="p-5 sm:p-6 bg-gradient-to-b from-slate-50/40 dark:from-slate-900/60 to-white dark:to-slate-950 space-y-4">
          {/* Header Row inside mockup */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#0f172a] dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-[10px] font-bold">
                TX
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white">{title}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#C2410C] dark:text-[#FF7C42] bg-[#FF6B4A]/20 dark:bg-[#FF6B4A]/10 border border-[#FFD4C9] px-2 py-0.5 rounded-full">
              <Zap className="w-3 h-3 text-[#C2410C] dark:text-[#FF7C42]" />
              {badge}
            </span>
          </div>

          {/* Layered Content Mockup Elements */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-xs space-y-2">
              <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
              <div className="h-3 w-36 bg-slate-800 dark:bg-slate-300 rounded" />
              <div className="h-2 w-48 bg-slate-100 dark:bg-slate-700 rounded" />
              <div className="pt-2 flex items-center gap-2">
                <span className="h-5 px-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded text-[10px] font-medium flex items-center">
                  Explore
                </span>
                <span className="h-5 px-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-[10px] font-medium flex items-center">
                  Docs
                </span>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-3 shadow-xs flex flex-col justify-between">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Uptime</div>
              <div className="text-xl font-bold font-mono text-[#FF6B4A]">99.98%</div>
              <div className="text-[9px] text-slate-300">Sub-second TTFB</div>
            </div>
          </div>

          {/* Micro Telemetry Graph */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500">Response Speed</div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200">&lt;140ms Global Latency</div>
            </div>
            <div className="flex items-end gap-1 h-6">
              {[40, 65, 50, 80, 95, 75, 90].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-t bg-[#FF6B4A] border border-orange-200 transition-all duration-300"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

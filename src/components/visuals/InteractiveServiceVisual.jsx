import React from 'react';
import DimensionalBrowserMockup from './DimensionalBrowserMockup';
import LayeredAppWindow from './LayeredAppWindow';
import ConnectedNodes3D from './ConnectedNodes3D';
import { Palette, RefreshCw, ShoppingBag, Layers, ShieldCheck, Check } from 'lucide-react';

export default function InteractiveServiceVisual({ slug = "website-development", className = "" }) {
  if (slug === 'website-development') {
    return <DimensionalBrowserMockup className={className} />;
  }

  if (slug === 'web-applications') {
    return <LayeredAppWindow className={className} />;
  }

  if (slug === 'digital-growth-seo') {
    return <ConnectedNodes3D className={className} />;
  }

  if (slug === 'ui-ux-design') {
    return (
      <div className={`bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-lg shadow-slate-200/40 dark:shadow-none space-y-4 ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 flex items-center justify-center">
              <Palette className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-white">Design System & Token Architecture</span>
          </div>
          <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
            Figma to Code
          </span>
        </div>

        {/* Layered Artboards */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 space-y-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500">Color System</span>
            <div className="grid grid-cols-4 gap-1.5 pt-1">
              <span className="h-6 rounded bg-slate-900 dark:bg-white" />
              <span className="h-6 rounded bg-slate-700 dark:bg-slate-400" />
              <span className="h-6 rounded bg-[#65a30d]" />
              <span className="h-6 rounded bg-slate-200 dark:bg-slate-600" />
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">WCAG 2.2 AA Validated</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 space-y-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500">Typography Scale</span>
            <div className="text-xs font-bold text-slate-900 dark:text-white leading-none">Manrope Display</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Inter Clean Body</div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">Fluid clamp() sizing</div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-3 flex items-center justify-between text-xs">
          <span className="font-mono text-slate-300">Tokens: 64 Core Components</span>
          <span className="text-[#84cc16] font-semibold flex items-center gap-1">
            <Check className="w-3.5 h-3.5" /> Zero Drift
          </span>
        </div>
      </div>
    );
  }

  if (slug === 'website-redesign') {
    return (
      <div className={`bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-lg shadow-slate-200/40 dark:shadow-none space-y-4 ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <RefreshCw className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-white">Modernization Benchmark</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            301 Preserved
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-rose-50/50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl p-3 space-y-1">
            <div className="text-[10px] font-mono uppercase text-rose-700 dark:text-rose-400 font-bold">Legacy Architecture</div>
            <div className="text-xl font-bold text-slate-700 dark:text-slate-200">3.8s</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Heavy JS & slow TTFB</div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-xl p-3 space-y-1">
            <div className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold">TechCrestaX Modernized</div>
            <div className="text-xl font-bold text-emerald-800 dark:text-emerald-300">0.7s</div>
            <div className="text-[10px] text-slate-600 dark:text-slate-300">Sub-second React SPA</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
          <span>Search Equity Migration</span>
          <span className="font-semibold text-slate-900 dark:text-white">100% Retained</span>
        </div>
      </div>
    );
  }

  // E-Commerce
  return (
    <div className={`bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-lg shadow-slate-200/40 dark:shadow-none space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center">
            <ShoppingBag className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-900 dark:text-white">Commercial Checkout Flow</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
          Stripe / Razorpay
        </span>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-slate-800 dark:text-slate-200">One-Page Frictionless Checkout</span>
          <span className="font-mono text-slate-500 dark:text-slate-400">Grade A</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-600 h-full w-[94%]" />
        </div>
        <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono">
          <span>Cart Abandonment</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold">-32% Reduced</span>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-3 flex items-center justify-between text-xs">
        <span className="text-slate-300 font-mono">Payment Webhooks</span>
        <span className="text-[#84cc16] font-semibold">Instant Order Receipts</span>
      </div>
    </div>
  );
}

import React from 'react';
import DimensionalBrowserMockup from './DimensionalBrowserMockup';
import LayeredAppWindow from './LayeredAppWindow';
import ConnectedNodes3D from './ConnectedNodes3D';
import { Palette, Bot, Cloud, Check, Cpu, Sparkles, Activity, ShieldCheck, Terminal, GitBranch } from 'lucide-react';

export default function InteractiveServiceVisual({ slug = "website-design-development", className = "" }) {
  if (slug === 'website-development' || slug === 'website-design-development' || slug === 'ecommerce-website-development') {
    return <DimensionalBrowserMockup className={className} />;
  }

  if (slug === 'app-development' || slug === 'web-applications' || slug === 'web-applications-platforms') {
    return <LayeredAppWindow className={className} />;
  }

  if (slug === 'digital-growth-seo' || slug === 'seo-local-seo' || slug === 'digital-growth-online-presence') {
    return <ConnectedNodes3D className={className} />;
  }

  if (slug === 'ai-automation') {
    return (
      <div className={`bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-lg shadow-slate-200/40 dark:shadow-none space-y-4 ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#FF6B4A] text-[#C2410C] flex items-center justify-center">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-white">AI Automation Pipeline</span>
          </div>
          <span className="text-[11px] font-mono text-[#C2410C] dark:text-[#FF7C42] bg-[#FF6B4A]/15 dark:bg-[#FF6B4A]/10 px-2.5 py-0.5 rounded-full border border-[#FFD4C9]">
            LLM & Workflows
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-xl p-3 space-y-1.5">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-400">Agent Handlers</span>
            <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C2410C]" />
              <span>Zero-Shot</span>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Context-Aware AI Routing</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-xl p-3 space-y-1.5">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-400">API Integration</span>
            <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>Real-Time</span>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Webhooks & CRM Sync</div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-3 flex items-center justify-between text-xs">
          <span className="font-mono text-slate-300">Custom Workflows Built</span>
          <span className="text-[#FF6B4A] font-semibold flex items-center gap-1">
            <Check className="w-3.5 h-3.5" /> Production Ready
          </span>
        </div>
      </div>
    );
  }

  if (slug === 'cloud-devops') {
    return (
      <div className={`bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-lg shadow-slate-200/40 dark:shadow-none space-y-4 ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#FF6B4A] text-[#C2410C] flex items-center justify-center">
              <Cloud className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-white">Cloud Infrastructure & CI/CD</span>
          </div>
          <span className="text-[11px] font-mono text-[#C2410C] dark:text-[#FF7C42] bg-[#FF6B4A]/15 dark:bg-[#FF6B4A]/10 px-2.5 py-0.5 rounded-full border border-[#FFD4C9]">
            99.9% Uptime
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-xl p-3 space-y-1.5">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-400">Deployment Pipeline</span>
            <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-indigo-600" />
              <span>Automated</span>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">GitHub Actions & Docker</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-xl p-3 space-y-1.5">
            <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-400">Security & Hardening</span>
            <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>TLS & SSL</span>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Zero Trust Secrets</div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-3 flex items-center justify-between text-xs">
          <span className="font-mono text-slate-300">Target Architecture</span>
          <span className="text-[#FF6B4A] font-semibold flex items-center gap-1">
            <Check className="w-3.5 h-3.5" /> High Scalability
          </span>
        </div>
      </div>
    );
  }

  // UI/UX Design
  return (
    <div className={`bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-lg shadow-slate-200/40 dark:shadow-none space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#FF6B4A] text-[#C2410C] flex items-center justify-center">
            <Palette className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-900 dark:text-white">Design System & Token Architecture</span>
        </div>
        <span className="text-[11px] font-mono text-[#C2410C] dark:text-[#FF7C42] bg-[#FF6B4A]/15 dark:bg-[#FF6B4A]/10 px-2.5 py-0.5 rounded-full border border-[#FFD4C9]">
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
            <span className="h-6 rounded bg-[#FF6B4A] border border-orange-200" />
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
        <span className="font-mono text-slate-300">Design Tokens Spec</span>
        <span className="text-[#FF6B4A] font-semibold flex items-center gap-1">
          <Check className="w-3.5 h-3.5" /> High Fidelity
        </span>
      </div>
    </div>
  );
}

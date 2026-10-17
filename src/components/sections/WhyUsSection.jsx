import React from 'react';
import { Zap, TrendingUp, Clock, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { companyData } from '../../data/companyData';

const iconMap = {
  Zap: Zap,
  TrendingUp: TrendingUp,
  Clock: Clock,
  Layers: Layers,
};

export default function WhyUsSection() {
  return (
    <section className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-[#f8fafc]/60 dark:bg-slate-950/40 relative transition-colors" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Why TechCrestaX"
              title="Modern engineering built around"
              highlight="real business results"
              description="Most digital agencies deliver either pretty visuals that load sluggishly or functional software that is difficult to navigate. At TechCrestaX, design elegance and engineering rigor move in lockstep."
            />

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-lime-100 dark:bg-lime-950/80 flex items-center justify-center text-lime-800 dark:text-lime-300">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Direct Technical Lead Access
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                No bureaucratic account managers or game of telephone. You collaborate directly with senior engineers who understand architecture, scope, and code.
              </p>
            </div>

            {/* Metric pill */}
            <div className="grid grid-cols-2 gap-4">
              {companyData.verifiedMetrics.slice(0, 2).map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mb-0.5">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Pillar Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {companyData.coreValues.map((value) => {
              const Icon = iconMap[value.icon] || ShieldCheck;
              return (
                <div
                  key={value.title}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-5">
                    <Icon className="w-5 h-5 text-[#4d7c0f] dark:text-[#84cc16]" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

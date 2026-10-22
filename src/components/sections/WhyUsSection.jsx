import React from 'react';
import { Zap, Palette, ShieldCheck, HeartHandshake, CheckCircle2, Clock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { companyData } from '../../data/companyData';

const iconMap = {
  Zap: Zap,
  Palette: Palette,
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake,
};

export default function WhyUsSection() {
  return (
    <section className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-[#faf9fb]/60 dark:bg-slate-950/40 relative transition-colors" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Why TechCrestaX"
              title="More than development."
              highlight="We build for business growth."
              description="We combine strategy, design and technology to create digital products that are attractive, reliable and aligned with your business goals."
            />

            {/* Core Commitments Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "Transparent project communication & weekly sprint updates",
                "100% responsive and scalable React development",
                "Intentional UI/UX design focused on actual conversion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-[#F7DCE5] text-[#96405d] flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Technical Partnership Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F7DCE5]/60 dark:bg-[#F7DCE5]/15 border border-[#eccbd6] flex items-center justify-center text-[#96405d] dark:text-[#F7DCE5]">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Fast Project Delivery
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Clear milestones, weekly staging previews, and standard turnaround in 1 to 3 weeks without bureaucratic agency delays.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars from Official Site */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {companyData.coreValues.map((value) => {
              const Icon = iconMap[value.icon] || ShieldCheck;
              return (
                <div
                  key={value.title}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-7 hover:border-[#eccbd6] dark:hover:border-[#F7DCE5]/40 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#F7DCE5]/40 dark:bg-slate-800 border border-[#eccbd6] dark:border-slate-700 flex items-center justify-center text-[#96405d] dark:text-[#F7DCE5] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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

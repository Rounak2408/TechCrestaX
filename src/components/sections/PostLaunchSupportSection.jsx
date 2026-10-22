import React from 'react';
import { ShieldCheck, Clock, Zap, Layers, CheckCircle2, MessageSquare } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { companyData } from '../../data/companyData';

export default function PostLaunchSupportSection() {
  const { postLaunchSupport } = companyData;

  const iconMap = {
    ShieldCheck: ShieldCheck,
    Clock: Clock,
    Zap: Zap,
    Layers: Layers,
  };

  return (
    <section className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#090e1a] relative transition-colors" aria-labelledby="support-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionHeading
            eyebrow="Long-Term Partnership"
            title="Dependable post-launch support and"
            highlight="stability warranty."
            description={postLaunchSupport.description}
            align="left"
          />
        </div>

        {/* 4 Support Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {postLaunchSupport.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || ShieldCheck;
            return (
              <div
                key={feature.title}
                className="clean-card clean-card-hover p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F7DCE5]/60 dark:bg-[#F7DCE5]/15 border border-[#eccbd6] dark:border-[#F7DCE5]/30 flex items-center justify-center text-[#96405d] dark:text-[#F7DCE5] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Confirmed Offering</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Banner Card */}
        <div className="rounded-3xl border border-[#eccbd6] dark:border-[#F7DCE5]/20 bg-gradient-to-r from-[#F7DCE5]/30 via-white to-[#F7DCE5]/20 dark:from-[#F7DCE5]/10 dark:via-slate-900 dark:to-[#F7DCE5]/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#96405d] dark:text-[#F7DCE5]">
              Direct Engineering Accessibility
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
              Need immediate technical assistance or a custom maintenance plan?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Reach our active engineering desk directly via WhatsApp for timely turnaround.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              href={companyData.contact.whatsappLink}
              variant="blush"
              size="md"
              icon={MessageSquare}
            >
              WhatsApp Support
            </Button>
            <Button
              to="/contact"
              variant="primary"
              size="md"
              showArrow
            >
              Contact Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

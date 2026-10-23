import React from 'react';
import { Check, ShieldCheck, HelpCircle, ArrowRight, Clock, Zap, Layers, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { pricingData } from '../../data/pricingData';
import { companyData } from '../../data/companyData';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#090e1a] relative scroll-mt-24" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="blush" size="md" className="mb-3">
            Clear Investment Terms
          </Badge>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Transparent Pricing.{' '}
            <span className="text-[#96405d] dark:text-[#F7DCE5]">Free First-Year</span> Maintenance.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Website development starting at <span className="font-bold text-slate-900 dark:text-white">₹7,000+</span>. We believe in clear milestone pricing, total source code ownership, and 1 full year of inclusive post-launch support.
          </p>
        </div>

        {/* 4 Core Pillars Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-3xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
            <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold block mb-1">
              Starting Price
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              ₹7,000+
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Starter business websites with clean modern React.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-[#F7DCE5]/40 dark:bg-[#F7DCE5]/10 border border-[#eccbd6] dark:border-[#F7DCE5]/30">
            <span className="text-[11px] font-mono uppercase text-[#96405d] dark:text-[#F7DCE5] font-bold block mb-1">
              Year 1 Maintenance
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              FREE
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              12 months inclusive bug fixes and stability checks.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
            <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold block mb-1">
              Renewal Maintenance
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              ₹5,000 <span className="text-xs font-normal text-slate-400">/ year</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Flat, predictable annual fee after Year 1.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
            <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold block mb-1">
              Domain & Hosting
            </span>
            <div className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
              Quoted Separately
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Direct billing on your own accounts with zero markup.
            </p>
          </div>
        </div>

        {/* Pricing Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {pricingData.tiers.map((tier) => {
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  tier.popular
                    ? 'bg-slate-900 text-white dark:bg-slate-800 border-2 border-[#eccbd6] dark:border-[#F7DCE5]/50 shadow-xl relative'
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-800 shadow-xs'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-[#F7DCE5] text-[#96405d] font-mono font-bold text-xs uppercase tracking-wider shadow-sm">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-xs font-mono font-semibold ${tier.popular ? 'text-slate-300' : 'text-[#96405d] dark:text-[#F7DCE5]'}`}>
                      {tier.category}
                    </span>
                    {!tier.popular && (
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-display mb-2">
                    {tier.name}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${tier.popular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                    {tier.description}
                  </p>

                  {/* Price Row */}
                  <div className="pb-6 mb-6 border-b border-slate-200/80 dark:border-slate-700">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
                        {tier.price}
                      </span>
                      <span className={`text-xs font-mono ${tier.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                        {tier.period}
                      </span>
                    </div>
                    <span className={`text-[11px] font-mono mt-1 block ${tier.popular ? 'text-[#F7DCE5]' : 'text-[#96405d] dark:text-[#F7DCE5]'}`}>
                      Sprint timeline: {tier.timeline}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold block ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      Included Deliverables:
                    </span>
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                          tier.popular ? 'bg-[#F7DCE5] text-[#96405d]' : 'bg-[#F7DCE5] text-[#96405d]'
                        }`}>
                          ✓
                        </span>
                        <span className={tier.popular ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  to="/contact"
                  variant={tier.popular ? "blush" : "primary"}
                  size="md"
                  showArrow
                  className="w-full justify-center"
                >
                  {tier.ctaText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Pricing Variable Factors Box */}
        <div className="p-7 sm:p-10 rounded-3xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#96405d] dark:text-[#F7DCE5] font-bold block mb-1">
              Pricing Transparency Note
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-2">
              How We Formulate Your Project Estimate
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {pricingData.maintenanceTerms.scopeDisclaimer} We provide an itemized milestone proposal before any work begins so you have complete cost predictability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingData.pricingFactors.map((factor) => (
              <div key={factor.title} className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {factor.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Need a personalized proposal for your business?
            </span>
            <div className="flex items-center gap-3">
              <Button to="/contact" variant="primary" size="sm" showArrow>
                Request an Itemized Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

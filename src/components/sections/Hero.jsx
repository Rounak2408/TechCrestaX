import React from 'react';
import { ArrowUpRight, MessageSquare, ShieldCheck, Zap, Clock, Check } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import HeroProjectShowcase from '../visuals/HeroProjectShowcase';
import { companyData } from '../../data/companyData';

export default function Hero() {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden" aria-label="Hero Introduction">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Official Positioning */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="blush" size="md">
                Modern Web Engineering & Digital Studio
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold font-display tracking-tight text-slate-900 dark:text-white leading-[1.18]">
              We build websites and platforms that{' '}
              <span className="text-[#96405d] dark:text-[#F7DCE5] font-bold inline-block">
                move your business forward.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              TechCrestaX designs and engineers custom, high-performance websites, e-commerce storefronts, and web platforms tailored to help businesses establish authority and drive measurable customer enquiries.
            </p>

            {/* Target Audience Clarity Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono uppercase tracking-wider text-[11px] text-slate-400 dark:text-slate-500">
                Built For:
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                Ambitious Startups
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                Growing Businesses
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                Professional Practices
              </span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button to="/contact" variant="primary" size="lg" showArrow className="w-full sm:w-auto shadow-sm">
                Request a Project Estimate
              </Button>
              <Button
                href={companyData.contact.whatsappLink}
                variant="secondary"
                size="lg"
                icon={MessageSquare}
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Official Guarantees from Business Profile */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-600 dark:text-slate-300 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#F7DCE5] text-[#96405d] flex items-center justify-center text-[10px] font-bold">✓</span>
                Websites starting at ₹7,000+
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#F7DCE5] text-[#96405d] flex items-center justify-center text-[10px] font-bold">✓</span>
                1st Year Free Maintenance (12 Mo)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#F7DCE5] text-[#96405d] flex items-center justify-center text-[10px] font-bold">✓</span>
                1–3 Week Agile Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#F7DCE5] text-[#96405d] flex items-center justify-center text-[10px] font-bold">✓</span>
                100% Code Ownership
              </span>
            </div>

            {/* Verified Authentic Terms Row */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-3 gap-3 sm:gap-6 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  ₹7,000+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Starting Base Price
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  1 Year Free
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Website Maintenance
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  1–3 Weeks
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Sprint Launch Time
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Interactive Live Project Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroProjectShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle2, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { reviewsConfig } from '../../data/reviewsData';
import { companyData } from '../../data/companyData';

export default function TestimonialsSection() {
  return (
    <section
      className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-[#faf9fb]/60 dark:bg-slate-950/40 relative overflow-hidden transition-colors"
      aria-labelledby="reviews-heading"
    >
      {/* Subtle tech dot pattern */}
      <div className="absolute inset-0 bg-tech-dots opacity-25 pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF6B4A]/10 dark:bg-[#FF6B4A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Public Trust & Reputation"
            title="Verified client projects and"
            highlight="Google Business reviews."
            description="We prioritize authenticity. We do not invent review quotes or satisfaction percentages. Explore our live public deliveries and view verified client feedback on Google."
          />

          <div className="shrink-0">
            <a
              href={reviewsConfig.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#FF6B4A] dark:hover:border-[#FF6B4A]/40 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white shadow-xs transition-all"
            >
              <Globe className="w-4 h-4 text-[#C2410C] dark:text-[#FF7C42]" />
              <span>View Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Grand Reputation & Verification Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Official Google Review Portal Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 sm:p-9 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge variant="blush" size="sm">
                  Google Verified Profile
                </Badge>
                <span className="text-xs font-mono text-slate-400">
                  Rajkot, Gujarat Base
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-3">
                Transparent Public Reviews
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {reviewsConfig.notice} Rather than displaying fabricated ratings, we invite all clients and partners to read and publish reviews directly through Google Search and Google Maps.
              </p>

              {/* Verified Trust Badges */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Unfiltered reviews hosted on Google's public platform</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Real project attribution on live client websites</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <a
                href={reviewsConfig.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs"
              >
                <span>Read & Review on Google</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Verified Client Deliveries Grid */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 sm:p-9 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Live Verified Client Deliveries
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  HTTP 200 Verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {reviewsConfig.verifiedClientDeliveries.map((delivery) => (
                  <a
                    key={delivery.name}
                    href={delivery.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 hover:border-[#FF6B4A] dark:hover:border-[#FF6B4A]/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#FF6B4A] dark:group-hover:text-[#FF7C42] transition-colors truncate">
                          {delivery.name}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white shrink-0" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block truncate">
                        {delivery.domain}
                      </span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-500 dark:text-slate-400 truncate max-w-[120px]">
                        {delivery.category}
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        {delivery.status}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FF6B4A]/10 dark:bg-[#FF6B4A]/10 border border-[#FFD4C9] dark:border-[#FF6B4A]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700 dark:text-slate-300">
              <span className="text-center sm:text-left">
                Every project is launched under strict QA protocols with complete source code handover.
              </span>
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-bold text-[#C2410C] dark:text-[#FF7C42] hover:underline flex items-center gap-1"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

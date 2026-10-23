import React from 'react';
import { ExternalLink } from 'lucide-react';

const authenticClients = [
  {
    name: "Scalpel.in",
    tagline: "Doctor Appointment Platform",
    domain: "scalpel.in",
    badge: "Live Medical Platform",
    isLive: true,
  },
  {
    name: "Agriqen Seeds",
    tagline: "Biotech & Agriculture",
    domain: "agriqen.com",
    badge: "Live Corporate Platform",
    isLive: true,
  },
  {
    name: "Sahyog Sagar",
    tagline: "Restaurant & Local SEO",
    domain: "sahyogsagar.in",
    badge: "Live Hospitality",
    isLive: true,
  },
  {
    name: "Law & Legal Bureau",
    tagline: "Professional Legal Practice",
    domain: "lawandlegalbureau.com",
    badge: "Live Legal Firm",
    isLive: true,
  },
  {
    name: "YOG4YOU",
    tagline: "Yoga & Wellness Platform",
    domain: "yog4you.org",
    badge: "Live Wellness Hub",
    isLive: true,
  },
  {
    name: "Dew Drops Tourism",
    tagline: "Travel & Tour Operator",
    domain: "dewdropstourism.in",
    badge: "Live Tourism Platform",
    isLive: true,
  },
  {
    name: "The Fyoli Project",
    tagline: "Cultural Brand & Project",
    domain: "thefyoliproject.com",
    badge: "Live Storytelling",
    isLive: true,
  },
  {
    name: "BLKMND",
    tagline: "Fashion E-commerce",
    domain: "blkmndofficial.com",
    badge: "Live E-commerce",
    isLive: true,
  },
  {
    name: "Divine Mane Naturals",
    tagline: "Haircare & Product Website",
    domain: "divinemanenaturals.com",
    badge: "Live Product Website",
    isLive: true,
  },
];

export default function TrustedBrandsMarquee() {
  return (
    <section className="py-8 bg-slate-50/70 dark:bg-slate-950/70 border-y border-slate-200/80 dark:border-slate-800/80 overflow-hidden relative" aria-label="Verified Client Projects">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-2 font-semibold uppercase tracking-wider text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Authentic Client Projects & Deliveries
        </span>
        <span className="hidden sm:inline text-[11px] text-slate-400">
          Verified Web Platforms Built by TechCrestaX
        </span>
      </div>

      <div className="flex overflow-hidden select-none">
        {/* Doubled marquee list for infinite loop */}
        <div className="animate-infinite-marquee flex items-center gap-6 sm:gap-8 shrink-0">
          {[...authenticClients, ...authenticClients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-[#eccbd6] dark:hover:border-[#F7DCE5]/40 transition-colors shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-[#F7DCE5]/50 dark:bg-[#F7DCE5]/15 border border-[#eccbd6] dark:border-[#F7DCE5]/30 flex items-center justify-center font-display font-extrabold text-xs text-[#96405d] dark:text-[#F7DCE5]">
                {client.name.substring(0, 2).toUpperCase()}
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    {client.name}
                  </span>
                  {client.isLive && (
                    <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-200 dark:border-emerald-900">
                      Live
                    </span>
                  )}
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[170px]">
                  {client.domain} • {client.tagline}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

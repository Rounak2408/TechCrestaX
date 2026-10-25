import React from 'react';
import { ExternalLink } from 'lucide-react';

// Custom, authentic vector logos for each official client
const clientBrands = [
  {
    name: "Scalpel.in",
    tagline: "Doctor Appointment Platform",
    domain: "scalpel.in",
    liveUrl: "https://www.scalpel.in/",
    isLive: true,
    theme: "bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-950/40 dark:to-teal-900/40 border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M3 12h18" strokeWidth="2.5" />
        <path d="M8 12h2l1.5-3 2 6 1.5-3h2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" className="opacity-40" />
      </svg>
    )
  },
  {
    name: "Agriqen Seeds",
    tagline: "Biotech & Hybrid Agriculture",
    domain: "agriqen.com",
    liveUrl: "https://www.agriqen.com/",
    isLive: true,
    theme: "bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950/40 dark:to-green-900/40 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V10" strokeWidth="2.2" />
        <path d="M12 10C12 5.5 15.5 3 20 3c-.5 4.5-3.5 7-8 7z" fill="currentColor" fillOpacity="0.25" />
        <path d="M12 14c0-3.5-2.5-5.5-6-5.5.4 3.5 2.5 5.5 6 5.5z" fill="currentColor" fillOpacity="0.25" />
      </svg>
    )
  },
  {
    name: "Sahyog Sagar",
    tagline: "Restaurant & Local SEO",
    domain: "sahyogsagar.in",
    liveUrl: "https://www.sahyogsagar.in/",
    isLive: true,
    theme: "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/40 dark:to-orange-900/40 border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18" strokeWidth="2.5" />
        <path d="M4 15a8 8 0 0 1 16 0H4z" fill="currentColor" fillOpacity="0.2" />
        <circle cx="12" cy="5" r="1.5" fill="currentColor" />
        <path d="M12 6.5v1.5" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: "Law & Legal Bureau",
    tagline: "Advocates & Legal Practice",
    domain: "lawandlegalbureau.com",
    liveUrl: "https://www.lawandlegalbureau.com/",
    isLive: true,
    theme: "bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-indigo-950/40 dark:to-slate-900 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M7 21h10" strokeWidth="2" />
        <path d="M4 7l8-2 8 2" strokeWidth="2" />
        <path d="M4 7l-2 5h4L4 7z" fill="currentColor" fillOpacity="0.2" />
        <path d="M20 7l-2 5h4l-2-5z" fill="currentColor" fillOpacity="0.2" />
      </svg>
    )
  },
  {
    name: "YOG4YOU",
    tagline: "Yoga & Wellness Platform",
    domain: "yog4you.org",
    liveUrl: "https://www.yog4you.org/",
    isLive: true,
    theme: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/40 dark:to-pink-900/40 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c1.5 3 4 5 7 5-2 3-4 6-7 12-3-6-5-9-7-12 3 0 5.5-2 7-5z" fill="currentColor" fillOpacity="0.2" />
        <circle cx="12" cy="14" r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "Dew Drops Tourism",
    tagline: "Travel & Tour Operator",
    domain: "dewdropstourism.in",
    liveUrl: "https://www.dewdropstourism.in/",
    isLive: true,
    theme: "bg-gradient-to-br from-sky-50 to-blue-100 dark:from-sky-950/40 dark:to-blue-900/40 border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 19l6-9 4 5 3-3 5 7H3z" fill="currentColor" fillOpacity="0.2" />
        <circle cx="18" cy="6" r="2.5" fill="currentColor" fillOpacity="0.3" />
      </svg>
    )
  },
  {
    name: "The Fyoli Project",
    tagline: "Cultural Heritage & Crafts",
    domain: "thefyoliproject.com",
    liveUrl: "https://www.thefyoliproject.com/",
    isLive: true,
    theme: "bg-gradient-to-br from-rose-50 to-orange-100 dark:from-rose-950/40 dark:to-orange-900/40 border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.25" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeWidth="2.2" />
        <path d="M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    )
  },
  {
    name: "BLKMND",
    tagline: "Streetwear Fashion Store",
    domain: "blkmndofficial.com",
    liveUrl: "https://www.blkmndofficial.com/",
    isLive: true,
    theme: "bg-gradient-to-br from-slate-900 via-slate-800 to-black dark:from-black dark:to-slate-900 border-slate-700 text-white shadow-sm",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 12L2 9l4-6z" fill="currentColor" fillOpacity="0.2" />
        <path d="M2 9h20M12 21L8 9l4-6 4 6-4 12z" strokeWidth="1.6" />
      </svg>
    )
  },
  {
    name: "Divine Mane Naturals",
    tagline: "Botanical Haircare Brand",
    domain: "divinemanenaturals.com",
    liveUrl: "https://divinemanenaturals.com/",
    isLive: true,
    theme: "bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950/40 dark:to-rose-900/40 border-orange-200 dark:border-pink-800 text-rose-600 dark:text-rose-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5C12 2.5 5.5 9 5.5 14a6.5 6.5 0 0 0 13 0c0-5-6.5-11.5-6.5-11.5z" fill="currentColor" fillOpacity="0.2" />
        <path d="M12 8c0 3 1.5 5 3.5 6.5" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    name: "Timur Foods",
    tagline: "Food Processing & Export",
    domain: "timurfoods.com",
    liveUrl: null,
    isLive: false,
    theme: "bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-teal-950/40 dark:to-emerald-900/40 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" strokeWidth="1.6" />
      </svg>
    )
  },
  {
    name: "TheArteCraft",
    tagline: "Handcrafted Decor & Art",
    domain: "theartecraft.com",
    liveUrl: null,
    isLive: false,
    theme: "bg-gradient-to-br from-amber-50 to-stone-100 dark:from-stone-900 dark:to-amber-950/40 border-amber-200 dark:border-stone-700 text-stone-700 dark:text-stone-300",
    logo: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3h8l2 5-2 13H8L6 8l2-5z" fill="currentColor" fillOpacity="0.2" />
        <path d="M6 8h12M9 13h6" strokeWidth="1.8" />
      </svg>
    )
  }
];

export default function TrustedBrandsMarquee() {
  return (
    <section
      className="py-8 bg-[#05080D] dark:bg-[#05080D] border-y border-white/10 overflow-hidden relative select-none"
      aria-label="Verified Client Deliveries"
    >
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#05080D] via-[#05080D]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#05080D] via-[#05080D]/90 to-transparent z-10 pointer-events-none" />

      {/* Header Eyebrow Row */}
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between text-xs font-mono text-[#A7B0BE]">
        <span className="flex items-center gap-2 font-semibold uppercase tracking-wider text-[11px] text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Authentic Client Projects & Official Deliveries
        </span>
        <span className="hidden sm:inline text-[11px] text-[#A7B0BE] font-mono">
          Verified Web Platforms Built by TechCrestaX
        </span>
      </div>

      {/* Infinite Seamless Marquee Slider */}
      <div className="flex overflow-hidden">
        <div className="animate-infinite-marquee flex items-center gap-4 sm:gap-6 shrink-0 py-1">
          {[...clientBrands, ...clientBrands].map((client, idx) => {
            const CardWrapper = client.liveUrl ? 'a' : 'div';
            const wrapperProps = client.liveUrl
              ? {
                  href: client.liveUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  title: `Visit ${client.name} live platform`,
                }
              : {};

            return (
              <CardWrapper
                key={`${client.name}-${idx}`}
                {...wrapperProps}
                className="group flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#0A111B] border border-white/10 shadow-xs hover:border-[#FF6248] hover:shadow-[0_0_20px_rgba(255,98,72,0.3)] hover:-translate-y-0.5 transition-all duration-300 shrink-0 cursor-pointer theme-card-interactive"
              >
                {/* Official Brand Vector Logo Emblem */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 shadow-2xs ${client.theme}`}
                >
                  {client.logo}
                </div>

                {/* Company Name, Live Status & Tagline */}
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#FF6248] dark:group-hover:text-[#FF7957] transition-colors">
                      {client.name}
                    </span>

                    {client.isLive ? (
                      <span className="text-[10px] font-mono font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded-md border border-emerald-200/80 dark:border-emerald-800/80 flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        Live
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
                        Staging
                      </span>
                    )}

                    {client.liveUrl && (
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#FF6B4A] dark:group-hover:text-[#FF7C42] transition-colors opacity-0 group-hover:opacity-100" />
                    )}
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 truncate max-w-[200px] mt-0.5">
                    <span className="text-slate-600 dark:text-slate-300 font-medium">{client.domain}</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span className="truncate">{client.tagline}</span>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

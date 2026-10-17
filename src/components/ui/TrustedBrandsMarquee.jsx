import React from 'react';

const brands = [
  {
    name: "UrbanFit",
    category: "Fitness & Athletics",
    svg: (
      <svg viewBox="0 0 140 32" className="h-6 w-auto fill-current">
        <text x="0" y="24" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-1">URBANFIT</text>
      </svg>
    ),
  },
  {
    name: "Finora",
    category: "Fintech SaaS",
    svg: (
      <svg viewBox="0 0 130 32" className="h-6 w-auto fill-current">
        <circle cx="14" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M14 9v14M9 16h10" stroke="currentColor" strokeWidth="2.5" />
        <text x="34" y="23" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.5">Finora</text>
      </svg>
    ),
  },
  {
    name: "RoadRunner",
    category: "Fleet Logistics",
    svg: (
      <svg viewBox="0 0 160 32" className="h-6 w-auto fill-current">
        <text x="0" y="22" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="19" fontStyle="italic">RoadRunner</text>
        <path d="M110 24c15 0 25-4 40-10" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "PRECIZION",
    category: "Engineering Partners",
    svg: (
      <svg viewBox="0 0 150 32" className="h-6 w-auto fill-current">
        <rect x="0" y="4" width="140" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="10" y="21" fontFamily="JetBrains Mono, monospace" fontWeight="800" fontSize="15" letterSpacing="1">PRECIZION</text>
      </svg>
    ),
  },
  {
    name: "Crave",
    category: "Hospitality & Dining",
    svg: (
      <svg viewBox="0 0 110 32" className="h-6 w-auto fill-current">
        <text x="0" y="24" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-1">CRAVE</text>
      </svg>
    ),
  },
  {
    name: "Alloy Systems",
    category: "Enterprise Tech",
    svg: (
      <svg viewBox="0 0 130 32" className="h-6 w-auto fill-current">
        <circle cx="15" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="3" />
        <polygon points="15,8 21,22 9,22" fill="currentColor" />
        <text x="34" y="23" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="21" letterSpacing="-0.5">Alloy</text>
      </svg>
    ),
  },
  {
    name: "Nexora",
    category: "Global Supply Chain",
    svg: (
      <svg viewBox="0 0 130 32" className="h-6 w-auto fill-current">
        <text x="0" y="23" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="21" letterSpacing="1">NEXORA</text>
      </svg>
    ),
  },
  {
    name: "NorthStar",
    category: "Infrastructure",
    svg: (
      <svg viewBox="0 0 150 32" className="h-6 w-auto fill-current">
        <path d="M16 6l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" fill="currentColor" />
        <text x="32" y="22" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="19">NorthStar</text>
      </svg>
    ),
  },
  {
    name: "Vanguard",
    category: "Advisory & Talent",
    svg: (
      <svg viewBox="0 0 140 32" className="h-6 w-auto fill-current">
        <text x="0" y="23" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.5">VANGUARD</text>
      </svg>
    ),
  },
  {
    name: "Nycom",
    category: "Technology Systems",
    svg: (
      <svg viewBox="0 0 120 32" className="h-6 w-auto fill-current">
        <text x="0" y="24" fontFamily="JetBrains Mono, monospace" fontWeight="900" fontSize="22" letterSpacing="2">nycom</text>
      </svg>
    ),
  },
];

export default function TrustedBrandsMarquee({ title = "Trusted by Industry Leaders & Fast-Growing Modern Brands" }) {
  return (
    <section className="py-10 border-y border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 relative overflow-hidden select-none" aria-label="Trusted Industry Leaders and Clients">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-7">
        <h3 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-semibold">
          {title}
        </h3>
      </div>

      {/* Infinite Continuous Carousel Container with Left/Right Edge Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafaf9] dark:from-[#0b1120] via-[#fafaf9]/80 dark:via-[#0b1120]/80 to-transparent z-10 pointer-events-none" />
        {/* Right Edge Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafaf9] dark:from-[#0b1120] via-[#fafaf9]/80 dark:via-[#0b1120]/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track: duplicated array ensures continuous non-breaking loop */}
        <div className="animate-infinite-marquee flex items-center gap-12 sm:gap-16">
          {/* First Loop */}
          {brands.map((brand, i) => (
            <div
              key={`b1-${i}`}
              className="flex items-center gap-3 shrink-0 text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-200 px-2 cursor-pointer group"
              title={`${brand.name} • ${brand.category}`}
            >
              <div className="opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
                {brand.svg}
              </div>
            </div>
          ))}

          {/* Second Duplicate Loop for seamless infinite loop */}
          {brands.map((brand, i) => (
            <div
              key={`b2-${i}`}
              className="flex items-center gap-3 shrink-0 text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-200 px-2 cursor-pointer group"
              title={`${brand.name} • ${brand.category}`}
            >
              <div className="opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
                {brand.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

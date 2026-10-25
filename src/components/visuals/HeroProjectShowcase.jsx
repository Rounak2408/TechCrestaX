import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, ShieldCheck, Stethoscope, Sprout, UtensilsCrossed, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const showcaseProjects = [
  {
    id: "scalpel-in",
    title: "Scalpel.in",
    client: "Dr. Rahul Bhanja Chowdhury",
    category: "Doctor Appointment Platform",
    url: "https://www.scalpel.in/",
    displayUrl: "www.scalpel.in",
    icon: Stethoscope,
    status: "Live Production",
    summary: "Specialized surgical consultation platform engineered with direct patient appointment booking and clinic WhatsApp routing.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    badge: "Healthcare & Surgery",
    tech: ["React", "Booking Engine", "Tailwind CSS"]
  },
  {
    id: "agriqen-seeds",
    title: "Agriqen Seeds",
    client: "Agriqen Seeds & Biotech Pvt. Ltd.",
    category: "Agri-Biotech Flagship",
    url: "https://www.agriqen.com/",
    displayUrl: "www.agriqen.com",
    icon: Sprout,
    status: "Live Production",
    summary: "Corporate agricultural biotechnology platform showcasing hybrid seed varieties and regional distributor inquiry channels.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
    badge: "Biotechnology & Seeds",
    tech: ["React", "Product Catalog", "Tailwind CSS"]
  },
  {
    id: "sahyog-sagar",
    title: "Sahyog Sagar",
    client: "Sahyog Sagar Restaurant",
    category: "Restaurant & Local SEO",
    url: "https://www.sahyogsagar.in/",
    displayUrl: "www.sahyogsagar.in",
    icon: UtensilsCrossed,
    status: "Live Production",
    summary: "High-converting culinary web presence featuring interactive digital menus, Google Maps discovery, and direct WhatsApp table bookings.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    badge: "Hospitality & Dining",
    tech: ["React", "Local SEO", "Digital Menu"]
  },
  {
    id: "law-and-legal-bureau",
    title: "Law & Legal Bureau",
    client: "Advocate Pankaj Kumar",
    category: "Legal Practice Platform",
    url: "https://www.lawandlegalbureau.com/",
    displayUrl: "www.lawandlegalbureau.com",
    icon: Scale,
    status: "Live Production",
    summary: "Authoritative legal practice website showcasing litigation domains, advocate credentials, and confidential consultation intake.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    badge: "Legal Practice",
    tech: ["React", "SEO Schema", "Tailwind CSS"]
  }
];

export default function HeroProjectShowcase() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProject = showcaseProjects[selectedIdx];
  const Icon = activeProject.icon;

  return (
    <div className="relative mx-auto w-full max-w-[580px] select-none">
      {/* Soft Ambient Radial Backdrop */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF6B4A]/20 via-slate-100 to-[#FFB627]/15 dark:from-[#FF6B4A]/10 dark:via-slate-800/30 dark:to-transparent rounded-[36px] blur-2xl pointer-events-none -z-10" />

      {/* Main Dimensional Window Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden transition-all">
        
        {/* Browser Top Chrome Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-700/80">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 ml-1.5 hidden sm:inline">
              Verified Production Delivery
            </span>
          </div>

          {/* Real SSL URL Pill */}
          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[11px] font-mono text-slate-700 dark:text-slate-300 hover:border-[#FF6B4A]/60 dark:hover:border-[#FF6B4A]/50 transition-colors"
            title={`Open live site: ${activeProject.url}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-900 dark:text-white">{activeProject.displayUrl}</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Project Selector Segmented Tabs */}
        <div className="grid grid-cols-4 p-1 bg-slate-100/90 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-700/80 gap-1 text-center">
          {showcaseProjects.map((proj, idx) => {
            const isSelected = selectedIdx === idx;
            const ProjIcon = proj.icon;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`py-2 px-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs border border-[#FFD4C9] dark:border-[#FF6B4A]/40 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <ProjIcon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#FF6B4A] dark:text-[#FF7C42]' : 'text-slate-400'}`} />
                <span className="truncate text-[11px] sm:text-xs">
                  {proj.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Visual Window Viewport */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800 group">
          <img
            src={activeProject.image}
            alt={`${activeProject.title} verified project delivery`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Vignette Overlay for Crisp Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-black/20 pointer-events-none" />

          {/* Top Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 text-[11px] font-semibold text-slate-900 dark:text-white shadow-xs">
              {activeProject.badge}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-mono font-bold tracking-tight shadow-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live Site
            </span>
          </div>

          {/* Bottom Floating Info Glass Card */}
          <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white truncate">
                {activeProject.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mt-0.5">
                {activeProject.summary}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-xs font-semibold transition-colors shadow-xs"
              >
                <span>Visit Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to={`/work/${activeProject.id}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#FF6B4A]/10 hover:bg-[#FF6B4A]/20 text-[#C2410C] dark:text-[#FF8C70] text-xs font-semibold transition-colors border border-[#FFD4C9] dark:border-[#FF6B4A]/30"
              >
                Details
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Verified Assurance Tag */}
      <div className="mt-2.5 flex items-center justify-between px-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Verified client platform</span>
        </span>
        <span>Built by TechCrestaX</span>
      </div>
    </div>
  );
}

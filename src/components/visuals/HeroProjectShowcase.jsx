import React, { useState } from 'react';
import { Globe, ArrowUpRight, ShieldCheck, Zap, Stethoscope, Sprout, UtensilsCrossed, Scale, ExternalLink, CheckCircle2 } from 'lucide-react';

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
    highlight: "Appointment Scheduling Engine",
    metrics: "Sub-Second Load • Mobile Clinic QA",
    summary: "Specialized surgical consultation and appointment booking platform engineered with clean patient pathways and direct clinic inquiry routing.",
    features: ["Doctor Appointment Booking Flow", "Surgical Procedure Catalog", "Direct Clinic WhatsApp Connect"],
    stack: ["React", "Tailwind CSS", "Booking Engine", "Responsive UI"],
    gradient: "from-sky-500/10 via-slate-50 to-[#F7DCE5]/20 dark:from-sky-950/20 dark:via-slate-900 dark:to-[#F7DCE5]/5"
  },
  {
    id: "agriqen-seeds",
    title: "Agriqen Seeds",
    client: "Agriqen Seeds & Biotech Pvt. Ltd.",
    category: "Agri-Biotech Corporate Website",
    url: "https://www.agriqen.com/",
    displayUrl: "www.agriqen.com",
    icon: Sprout,
    status: "Live Production",
    highlight: "Hybrid Seed Taxonomy",
    metrics: "Product Catalog • Distributor Inquiries",
    summary: "Corporate agricultural biotechnology flagship presenting hybrid seed varieties, crop research, and national distributor inquiry channels.",
    features: ["Hybrid Crop Seed Catalog", "Distributor Lead Capture", "Zero Layout Shift Performance"],
    stack: ["React", "Product Catalog", "Tailwind CSS", "Vite"],
    gradient: "from-emerald-500/10 via-slate-50 to-[#F7DCE5]/20 dark:from-emerald-950/20 dark:via-slate-900 dark:to-[#F7DCE5]/5"
  },
  {
    id: "sahyog-sagar",
    title: "Sahyog Sagar",
    client: "Sahyog Sagar Restaurant",
    category: "Restaurant & Local SEO Platform",
    url: "https://www.sahyogsagar.in/",
    displayUrl: "www.sahyogsagar.in",
    icon: UtensilsCrossed,
    status: "Live Production",
    highlight: "Digital Menu & Table Inquiries",
    metrics: "Local SEO Schema • Fast Mobile Menu",
    summary: "High-converting culinary web presence featuring interactive category menus, Google Maps discovery, and direct WhatsApp table bookings.",
    features: ["Digital Mobile Menu Explorer", "Table Reservation Workflow", "Google LocalBusiness Schema"],
    stack: ["React", "Local SEO", "Schema.org", "Tailwind CSS"],
    gradient: "from-amber-500/10 via-slate-50 to-[#F7DCE5]/20 dark:from-amber-950/20 dark:via-slate-900 dark:to-[#F7DCE5]/5"
  },
  {
    id: "law-and-legal-bureau",
    title: "Law & Legal Bureau",
    client: "Advocate Pankaj Kumar",
    category: "Legal Practice & Consultation",
    url: "https://www.lawandlegalbureau.com/",
    displayUrl: "www.lawandlegalbureau.com",
    icon: Scale,
    status: "Live Production",
    highlight: "Confidential Legal Intake",
    metrics: "Practice Area Directory • Fast SLA",
    summary: "Authoritative legal practice flagship showcasing litigation domains, counsel credentials, and confidential consultation scheduling.",
    features: ["Litigation Practice Taxonomy", "Confidential Intake Flow", "Authoritative Typography"],
    stack: ["React", "Semantic HTML5", "Tailwind CSS", "SEO Schema"],
    gradient: "from-slate-500/10 via-slate-50 to-[#F7DCE5]/20 dark:from-slate-950/20 dark:via-slate-900 dark:to-[#F7DCE5]/5"
  }
];

export default function HeroProjectShowcase() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProject = showcaseProjects[selectedIdx];
  const Icon = activeProject.icon;

  return (
    <div className="relative mx-auto w-full max-w-[580px] select-none">
      {/* Soft Ambient Radial Backdrop */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#F7DCE5]/50 via-slate-100 to-[#F7DCE5]/25 dark:from-[#F7DCE5]/10 dark:via-slate-800/30 dark:to-transparent rounded-[36px] blur-2xl pointer-events-none -z-10" />

      {/* Main Dimensional Window Container */}
      <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all">
        
        {/* Browser Top Chrome Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-700/80">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 ml-1 hidden sm:inline">
              TechCrestaX Project Delivery
            </span>
          </div>

          {/* Real SSL URL Pill */}
          <a
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[11px] font-mono text-slate-700 dark:text-slate-300 hover:border-[#eccbd6] dark:hover:border-[#F7DCE5] transition-colors"
            title={`Open live site: ${activeProject.url}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-900 dark:text-white">{activeProject.displayUrl}</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Project Selector Segmented Control */}
        <div className="grid grid-cols-4 p-1.5 bg-slate-100/80 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-700/80 gap-1 text-center">
          {showcaseProjects.map((proj, idx) => {
            const isSelected = selectedIdx === idx;
            const ProjIcon = proj.icon;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`py-2 px-1 rounded-xl text-xs font-semibold transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs border border-[#eccbd6] dark:border-[#F7DCE5]/40 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-1">
                  <ProjIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#96405d] dark:text-[#F7DCE5]' : 'text-slate-400'}`} />
                  <span className="truncate max-w-[70px] sm:max-w-none text-[11px] sm:text-xs">
                    {proj.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Project Showcase Canvas */}
        <div className={`p-5 sm:p-6 bg-gradient-to-b ${activeProject.gradient} transition-colors min-h-[310px] flex flex-col justify-between`}>
          <div>
            {/* Top Status & Client Attribution */}
            <div className="flex items-center justify-between mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7DCE5]/70 dark:bg-[#F7DCE5]/15 text-[#96405d] dark:text-[#F7DCE5] border border-[#eccbd6] dark:border-[#F7DCE5]/30 text-[11px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#96405d] dark:bg-[#F7DCE5] animate-pulse" />
                {activeProject.status}
              </span>

              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700">
                {activeProject.category}
              </span>
            </div>

            {/* Project Title & Client Heading */}
            <div className="mb-3">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center justify-between">
                <span>{activeProject.title}</span>
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#96405d] dark:text-[#F7DCE5] hover:underline"
                >
                  <span>Visit Live</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                Client: {activeProject.client}
              </p>
            </div>

            {/* Summary description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {activeProject.summary}
            </p>

            {/* Verified Feature Checklist */}
            <div className="space-y-1.5 mb-5 bg-white/70 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200/70 dark:border-slate-700/70">
              {activeProject.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Tech Stack Pills & Official Attribution */}
          <div className="pt-3 border-t border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-1.5">
              {activeProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className="text-[10px] text-slate-400">
              Built by TechCrestaX
            </span>
          </div>
        </div>
      </div>

      {/* Floating Trust Indicator Pill */}
      <div className="mt-3.5 flex items-center justify-between px-2 text-xs font-mono text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Verified Client Deliveries</span>
        </span>
        <span>Click tabs to preview real builds</span>
      </div>
    </div>
  );
}

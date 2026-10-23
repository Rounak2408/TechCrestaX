import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ExternalLink, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

export default function PortfolioPreview() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'website', label: 'Websites & SEO' },
    { key: 'platforms', label: 'Web Applications' },
    { key: 'ecommerce', label: 'E-commerce' },
  ];

  const displayedProjects = filter === 'all'
    ? portfolioData.slice(0, 6)
    : portfolioData.filter((p) => p.categoryKey === filter).slice(0, 6);

  return (
    <section
      className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-[#faf9fb]/70 dark:bg-slate-950/40 relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Subtle Ambient Blush Glows matching website aesthetic */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#F7DCE5]/20 dark:bg-[#F7DCE5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F7DCE5]/25 dark:bg-[#F7DCE5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching website brand theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Verified Deliveries"
            title="Genuine client projects engineered for"
            highlight="real business results."
            description="Explore authentic web applications, corporate flagships, and digital platforms delivered by TechCrestaX with verified live domains and measurable outcomes."
          />

          <div className="shrink-0 flex items-center gap-3">
            <Button to="/work" variant="secondary" showArrow>
              View All 11 Projects
            </Button>
          </div>
        </div>

        {/* Filter Tabs matching website pill styles */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-mono transition-all cursor-pointer whitespace-nowrap ${
                filter === cat.key
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid with Rich Pictures & Official Website Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#eccbd6] dark:hover:border-[#F7DCE5]/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Corner Ambient Blush Glow on hover */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#F7DCE5]/30 dark:bg-[#F7DCE5]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div>
                {/* Project Picture Banner with Floating Badges */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-5">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for high text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Top-left Floating Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white text-[11px] font-semibold tracking-wide shadow-xs flex items-center gap-1.5">
                    <span>{project.badgeCategory || project.type}</span>
                  </div>

                  {/* Bottom-right Floating Result / Metric Badge */}
                  {project.resultBadge && (
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-emerald-500 text-white dark:bg-emerald-950/90 dark:text-emerald-300 dark:border dark:border-emerald-500/30 text-[11px] font-bold tracking-tight shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-emerald-400 animate-pulse" />
                      <span>{project.resultBadge}</span>
                    </div>
                  )}
                </div>

                {/* Title & Circular Arrow Action Button */}
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-[#96405d] dark:group-hover:text-[#F7DCE5] transition-colors leading-snug">
                      <Link to={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <Link
                    to={`/work/${project.slug}`}
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-[#F7DCE5] group-hover:text-[#96405d] text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs"
                    aria-label={`View ${project.title} case study`}
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {project.summary}
                </p>

                {/* Key Deliverables Highlights Box */}
                <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-2xl p-3 border border-slate-100 dark:border-slate-800 mb-4 space-y-1.5">
                  {project.keyFeatures.slice(0, 2).map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  {project.techStack.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 1-Yr Free Maintenance Guarantee Tag */}
                <div className="flex items-center justify-between mb-2 text-[11px] font-mono">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-lg border border-emerald-200/60 dark:border-emerald-800/50">
                    <ShieldCheck className="w-3 h-3" /> 1-Yr Free Maintenance
                  </span>
                  <span className="text-slate-400 dark:text-slate-500">{project.timeline}</span>
                </div>
              </div>

              {/* Card Footer: Live External Link & Case Study Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-900 dark:text-white hover:text-[#96405d] dark:hover:text-[#F7DCE5] transition-colors"
                    title={`Visit ${project.title} live production domain`}
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="truncate max-w-[120px]">{project.liveUrl.replace('https://', '').replace(/\/$/, '')}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                    In Development
                  </span>
                )}

                <Link
                  to={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 dark:text-white hover:text-[#96405d] dark:hover:text-[#F7DCE5] transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#96405d] dark:text-[#F7DCE5]" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Portfolio Assurance Banner matching website theme */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#F7DCE5]/50 dark:bg-[#F7DCE5]/15 border border-[#eccbd6] dark:border-[#F7DCE5]/30 flex items-center justify-center text-[#96405d] dark:text-[#F7DCE5] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                1-Year Free Maintenance & Intellectual Property Handover
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Every client build includes 100% code ownership, production cutover, and 12 months of guaranteed maintenance.
              </p>
            </div>
          </div>

          <Button to="/contact" variant="primary" size="sm" showArrow className="shrink-0">
            Start Your Build
          </Button>
        </div>

      </div>
    </section>
  );
}

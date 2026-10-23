import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Globe, ExternalLink, Filter, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ClosingCTA from '../components/sections/ClosingCTA';
import SEO from '../components/seo/SEO';
import { portfolioData } from '../data/portfolioData';
import { createBreadcrumbSchema } from '../data/seoSchemas';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterOptions = [
    { key: 'all', label: 'All Projects (11)' },
    { key: 'website', label: 'Websites & SEO' },
    { key: 'platforms', label: 'Web Applications' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'growth', label: 'Brand & Growth' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter((p) => p.categoryKey === activeFilter);

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Work' }
      ]),
      {
        "@type": "ItemList",
        "name": "TechCrestaX Portfolio & Production Projects",
        "itemListElement": portfolioData.map((p, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": p.title,
          "url": p.liveUrl || `https://www.techcrestax.com/work/${p.slug}`,
          "description": p.summary
        }))
      }
    ]
  };

  return (
    <div className="py-8 sm:py-12 bg-white dark:bg-[#070c18] min-h-screen">
      <SEO
        title="Portfolio & Case Studies — Verified Client Projects | TechCrestaX"
        description="Explore 11 authentic client projects and web applications engineered by TechCrestaX, including Scalpel.in, Agriqen Seeds, Sahyog Sagar, Law & Legal Bureau, and YOG4YOU."
        keywords={[
          "web development portfolio Rajkot",
          "Scalpel in doctor appointment platform",
          "Agriqen Seeds website",
          "Sahyog Sagar restaurant website",
          "Law and Legal Bureau website",
          "TechCrestaX client work",
          "verified web development India"
        ]}
        canonical="https://www.techcrestax.com/work"
        schema={portfolioSchema}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Work & Case Studies' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blush" size="md" className="mb-3">
            Selected Work Catalog
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Engineering Proof.{' '}
            <span className="text-[#96405d] dark:text-[#F7DCE5]">Genuine</span> Client Deliveries.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Every digital platform we build is engineered for performance, clean architecture, and real business conversion. Explore our verified deliveries with live domain access.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-mono uppercase text-slate-400 mr-2 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#96405d] dark:text-[#F7DCE5]" /> Filter by:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setActiveFilter(opt.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === opt.key
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Rich Picture Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-white dark:bg-[#0d1527] border border-slate-200/90 dark:border-slate-800/90 hover:border-[#eccbd6] dark:hover:border-slate-700 rounded-3xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Ambient Blush Corner Glow */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#F7DCE5]/25 dark:bg-[#F7DCE5]/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div>
                {/* Project Picture Banner with Floating Badges */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 mb-4">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                  {/* Top-left Floating Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 text-slate-900 dark:text-white text-[11px] font-semibold tracking-wide shadow-xs">
                    {project.badgeCategory || project.type}
                  </div>

                  {/* Bottom-right Floating Metric / Status Badge */}
                  {project.resultBadge && (
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-emerald-500 text-white dark:bg-emerald-950/90 dark:text-emerald-300 dark:border dark:border-emerald-500/30 text-[11px] font-bold tracking-tight shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-emerald-400 animate-pulse" />
                      <span>{project.resultBadge}</span>
                    </div>
                  )}
                </div>

                {/* Title and Circular Action Arrow */}
                <div className="flex items-start justify-between gap-3 mb-1.5 px-1">
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
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 px-1 line-clamp-2">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 px-1 mb-4">
                  {project.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Deliverables Highlights */}
                <div className="bg-slate-50/80 dark:bg-slate-900/60 rounded-2xl p-3 border border-slate-100 dark:border-slate-800/80 mb-4 space-y-1.5">
                  {project.keyFeatures.slice(0, 2).map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* 1-Yr Free Maintenance Guarantee Tag */}
                <div className="flex items-center justify-between mb-2 px-1 text-[11px] font-mono">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-lg border border-emerald-200/60 dark:border-emerald-800/50">
                    <ShieldCheck className="w-3 h-3" /> 1-Yr Free Maintenance
                  </span>
                  <span className="text-slate-400 dark:text-slate-500">{project.timeline}</span>
                </div>
              </div>

              {/* Card Bottom: Live Link & Case Study Details */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between px-1 text-xs">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sky-600 dark:text-sky-400 hover:underline font-mono transition-colors"
                    title={`Visit ${project.title} live domain`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[130px]">{project.liveUrl.replace('https://', '').replace(/\/$/, '')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-400 font-mono text-[11px]">
                    In Development
                  </span>
                )}

                <Link
                  to={`/work/${project.slug}`}
                  className="font-semibold text-slate-900 dark:text-white hover:text-[#96405d] dark:hover:text-sky-300 flex items-center gap-1 transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pricing & Maintenance Assurance Card */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-[#faf9fb] dark:bg-[#0d1527] border border-slate-200/90 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#96405d] dark:text-[#F7DCE5] font-bold">
              Transparent Agency Terms
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Websites Starting at ₹7,000+ with 1 Year Free Maintenance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              100% full source code ownership, sub-second performance QA, and flat ₹5,000/yr renewal after the first year.
            </p>
          </div>

          <Button to="/pricing" variant="primary" size="md" showArrow className="shrink-0">
            View Pricing Details
          </Button>
        </div>

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}

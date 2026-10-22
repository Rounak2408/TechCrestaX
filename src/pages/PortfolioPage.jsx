import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Filter } from 'lucide-react';
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
    { key: 'all', label: 'All Projects' },
    { key: 'saas', label: 'SaaS & Web Apps' },
    { key: 'business', label: 'Business & Brand' },
    { key: 'platforms', label: 'Commercial & Platforms' },
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
        "name": "TechCrestaX Portfolio & Case Studies",
        "itemListElement": portfolioData.map((p, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": p.title,
          "url": `https://www.techcrestax.com/work/${p.slug}`,
          "description": p.summary
        }))
      }
    ]
  };

  return (
    <div className="py-8 sm:py-12 bg-white dark:bg-[#090e1a] min-h-screen">
      <SEO
        title="Portfolio & Production Case Studies — TechCrestaX"
        description="Explore verified client projects and case studies engineered by TechCrestaX, including SaaS dashboards, commercial platforms, and high-performance React web applications."
        keywords={[
          "web development portfolio",
          "case studies digital engineering",
          "React web apps showcase",
          "TechCrestaX work",
          "SaaS dashboard case study",
          "web application design Rajkot"
        ]}
        canonical="https://www.techcrestax.com/work"
        schema={portfolioSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Work & Case Studies' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blush" size="md" className="mb-3">
            Selected Work
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Engineering Proof.{' '}
            <span className="text-[#96405d] dark:text-[#F7DCE5]">Real</span> Deliverables.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Every project we deploy solves distinct commercial and technical objectives. Explore verified case studies highlighting architecture, performance, and UI execution.
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
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#eccbd6] dark:hover:border-[#F7DCE5]/40 rounded-3xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Graphic Mockup Area */}
              <div className="relative aspect-[16/10] bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 overflow-hidden group/img">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category} Case Study by TechCrestaX`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-slate-950/40 pointer-events-none" />

                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <Badge variant="blush" size="sm" className="shadow-sm backdrop-blur-md">
                    {project.badge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-900 dark:text-slate-100 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/90 dark:border-slate-700 shadow-sm font-semibold">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-200 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.slug}.techcrestax.app</span>
                  </div>

                  <div className="hidden sm:flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono uppercase text-white bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                    <span className="text-[#96405d] dark:text-[#F7DCE5] font-semibold">{project.timeline}</span>
                    <span>{project.clientType}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-[#96405d] dark:group-hover:text-[#F7DCE5] transition-colors">
                    <Link to={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>

                {/* Metric Strip */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="grid grid-cols-3 gap-2 py-2">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="text-center sm:text-left">
                        <div className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      to={`/work/${project.slug}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-[#96405d] dark:hover:text-[#F7DCE5] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <span className="text-xs font-mono text-slate-400">
                      ID: TCX-0{project.id}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}

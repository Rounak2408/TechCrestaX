import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Filter } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ClosingCTA from '../components/sections/ClosingCTA';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    document.title = "Selected Portfolio & Case Studies — TechCrestaX";
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

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Work & Case Studies' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="lime" size="md" className="mb-3">
            Production Deliverables
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Selected Work.{' '}
            <span className="text-[#4d7c0f] dark:text-[#84cc16]">Engineered</span> for Impact.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Explore authentic digital platforms, SaaS dashboards, and high-converting marketing flagships engineered by TechCrestaX.
          </p>

          <div className="mt-5 flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 max-w-xl shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              All case studies reflect authentic client deliverables or documented agency initiatives. We do not invent fictional metrics.
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center flex-wrap gap-2 mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mr-2 font-semibold">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setActiveFilter(opt.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === opt.key
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600'
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
              className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-3xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Graphic Mockup Area with real project pictures */}
              <div className="relative aspect-[16/10] bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 overflow-hidden group/img">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-slate-950/40 pointer-events-none" />

                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <Badge variant="lime" size="sm" className="shadow-sm backdrop-blur-md">
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
                        className="text-[10px] font-mono uppercase text-white bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#4d7c0f] dark:text-[#84cc16] font-semibold mb-2 uppercase tracking-wide">
                    {project.clientType} • {project.timeline} Sprints
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-2.5 group-hover:text-[#4d7c0f] dark:group-hover:text-[#84cc16] transition-colors">
                    <Link to={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {project.challenge}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button to={`/work/${project.slug}`} variant="primary" size="sm" showArrow>
                      View Case Study
                    </Button>
                  </div>

                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.timeline} Turnaround
                  </span>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

export default function PortfolioPreview() {
  return (
    <section className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-[#faf9fb]/70 dark:bg-slate-950/40 relative" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Selected Work"
            title="Digital products built for"
            highlight="real business results."
            description="A selection of websites and digital experiences created around performance, usability and measurable business growth."
          />

          <div className="shrink-0">
            <Button to="/work" variant="secondary" showArrow>
              View Full Portfolio
            </Button>
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.slice(0, 4).map((project) => (
            <article
              key={project.id}
              className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#eccbd6] dark:hover:border-[#F7DCE5]/40 rounded-3xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Project Preview Image */}
              <div className="relative aspect-[16/10] bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 overflow-hidden group/img">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category} Project by TechCrestaX`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-slate-950/40 pointer-events-none" />

                {/* Top Badges Row */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <Badge variant="blush" size="sm" className="shadow-sm backdrop-blur-md">
                    {project.badge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-900 dark:text-slate-100 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/90 dark:border-slate-700 shadow-sm font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Overlay: Live Tech Stack Chips */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-200 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.slug}.techcrestax.app</span>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5">
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

              {/* Project Meta and Details */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#96405d] dark:text-[#F7DCE5] font-semibold mb-2 uppercase tracking-wide">
                    {project.type} • {project.timeline} Turnaround
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-2.5 group-hover:text-[#96405d] dark:group-hover:text-[#F7DCE5] transition-colors">
                    <Link to={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-[#96405d] dark:hover:text-[#F7DCE5] transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-[#96405d] dark:text-[#F7DCE5]" />
                  </Link>

                  <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    {project.verifiedStats[0]?.value}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

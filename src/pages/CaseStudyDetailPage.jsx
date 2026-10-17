import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck, Quote, Clock, Layers, Zap, ExternalLink, Globe } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ClosingCTA from '../components/sections/ClosingCTA';
import { portfolioData } from '../data/portfolioData';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const project = portfolioData.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — TechCrestaX Case Study`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Case Study Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">The requested project breakdown could not be located.</p>
        <Button to="/work" variant="primary">
          Back to Portfolio
        </Button>
      </div>
    );
  }

  const otherProjects = portfolioData.filter((p) => p.slug !== slug);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Work', to: '/work' },
            { label: project.title },
          ]}
        />

        {/* Case Study Header Banner */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-12 mb-10 shadow-sm relative overflow-hidden transition-colors">
          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="lime" size="md">
                {project.badge}
              </Badge>
              <span className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#4d7c0f] dark:text-[#84cc16] font-semibold bg-lime-50 dark:bg-lime-950/60 px-3 py-1 rounded-full border border-lime-200 dark:border-lime-900">
                {project.timeline} Turnaround
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {project.summary}
            </p>

            {/* Quick Meta Grid */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-1">
                  Client / Vertical
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {project.clientType}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-1">
                  Industry
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {project.industry}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-1">
                  Sprint Duration
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#4d7c0f] dark:text-[#84cc16]">
                  {project.timeline}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-1">
                  Primary Stack
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {project.techStack[0]} + {project.techStack[1]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: High-Fidelity Dimensional Browser Mockup Showcase */}
        <div className="mb-14 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
          {/* macOS Browser Header Frame */}
          <div className="bg-slate-100 dark:bg-slate-800/80 px-4 py-3 border-b border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block" />
            </div>

            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-1 rounded-full text-xs font-mono text-slate-600 dark:text-slate-300">
              <Globe className="w-3.5 h-3.5 text-[#4d7c0f] dark:text-[#84cc16]" />
              <span>https://{project.slug}.techcrestax.app</span>
            </div>

            <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
              100% Responsive QA
            </div>
          </div>

          {/* Screenshot Display Frame */}
          <div className="relative group overflow-hidden bg-slate-950 max-h-[560px]">
            <img
              src={project.image}
              alt={`${project.title} interface preview and design implementation`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-xs font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                Official TechCrestaX Project Asset • Production Architecture
              </span>
            </div>
          </div>
        </div>

        {/* Narrative Columns: Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 sm:p-9 space-y-3 shadow-xs">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
              01. The Challenge & Context
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Overcoming Legacy Constraints
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 sm:p-9 space-y-3 shadow-xs">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4d7c0f] dark:text-[#84cc16] block">
              02. The Architectural Solution
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Strategic & Technical Delivery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features & Architecture Decisions */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 mb-14 space-y-10 shadow-xs">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-5">
              Key Engineering Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl p-3.5">
                  <Check className="w-4 h-4 text-[#4d7c0f] dark:text-[#84cc16] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-5">
              Architectural & Engineering Decisions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.architectureDecisions.map((dec, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl p-3.5">
                  <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {dec}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-2.5">
              Full Technology Ecosystem
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-800 dark:text-slate-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Client Quote & Verified Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <Quote className="w-8 h-8 text-[#4d7c0f]/40 dark:text-[#84cc16]/40" />
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 italic leading-relaxed">
                "{project.clientQuote}"
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              Verified Feedback • Recorded Post-Delivery Survey
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900 dark:bg-slate-950 border dark:border-slate-800 text-white rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#84cc16] font-bold block mb-4">
                Verified Benchmarks
              </span>
              <div className="space-y-5">
                {project.verifiedStats.map((stat, i) => (
                  <div key={i} className="border-b border-slate-800 pb-3 last:border-b-0 last:pb-0">
                    <div className="text-2xl font-bold font-mono text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              Audited in production staging
            </div>
          </div>
        </div>

        {/* Other Projects with Visual Thumbnails */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
              Explore Related Work
            </h3>
            <Link to="/work" className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#4d7c0f] dark:hover:text-[#84cc16]">
              View All Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl overflow-hidden transition-all shadow-xs flex flex-col justify-between group"
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      <Link to={`/work/${p.slug}`} className="hover:text-[#4d7c0f] dark:hover:text-[#84cc16]">
                        {p.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                      {p.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <Link to={`/work/${p.slug}`} className="font-bold text-slate-900 dark:text-white hover:text-[#4d7c0f] dark:hover:text-[#84cc16] inline-flex items-center gap-1">
                      <span>Read Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {p.timeline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contextual Contact & Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}

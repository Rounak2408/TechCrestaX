import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, AlertCircle, Layout, Cpu, Palette, TrendingUp, RefreshCw, ShoppingBag, Bot, Cloud } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import FAQSection from '../components/sections/FAQSection';
import ClosingCTA from '../components/sections/ClosingCTA';
import InteractiveServiceVisual from '../components/visuals/InteractiveServiceVisual';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Layout,
  Cpu,
  Palette,
  TrendingUp,
  RefreshCw,
  ShoppingBag,
  Bot,
  Cloud,
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} — TechCrestaX Services`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Service Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">The requested service specification does not exist.</p>
        <Button to="/services" variant="primary">
          Return to All Services
        </Button>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Layout;
  const relatedProjects = portfolioData.filter((p) =>
    service.relatedProjects?.includes(p.slug)
  );

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Services', to: '/services' },
            { label: service.title },
          ]}
        />

        {/* Hero Banner for Service */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-12 mb-14 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7DCE5]/50 dark:bg-[#F7DCE5]/20 border border-[#F7DCE5] flex items-center justify-center text-[#96405d] dark:text-[#f7dce5]">
                  <Icon className="w-5 h-5" />
                </div>
                <Badge variant="blush" size="md">
                  {service.badge}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#96405d] dark:text-[#f7dce5] font-semibold">
                {service.tagline}
              </p>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {service.longDesc}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Button to="/contact" variant="primary" size="lg" showArrow>
                  Enquire for {service.title}
                </Button>
                <Button to="/services" variant="secondary" size="lg" icon={ArrowLeft}>
                  Back to All Services
                </Button>
              </div>
            </div>

            {/* Visual on Service Detail */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-sm">
                <InteractiveServiceVisual slug={service.slug} />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Problems Addressed & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problems Addressed */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 shadow-xs">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center text-rose-600 dark:text-rose-400">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                Challenges We Eliminate
              </h2>
            </div>

            <ul className="space-y-3.5">
              {service.problemsSolved.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Capabilities */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 shadow-xs">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-[#F7DCE5]/60 dark:bg-[#F7DCE5]/20 flex items-center justify-center text-[#96405d] dark:text-[#f7dce5]">
                <Check className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                Key Engineering Deliverables
              </h2>
            </div>

            <ul className="space-y-3.5">
              {service.keyCapabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <Check className="w-4 h-4 text-[#96405d] dark:text-[#f7dce5] shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900 dark:text-white">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section: Verified Technologies & Workflow */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-4">
              <Badge variant="neutral" size="sm" className="mb-2">
                Tech Stack
              </Badge>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                Verified Technologies
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5">
                We select robust, battle-tested modern tools built for maintainability, speed, and business growth.
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Typical Delivery Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.workflow.map((wf) => (
                <div key={wf.step} className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-xl p-5">
                  <span className="text-xl font-mono font-bold text-[#96405d] dark:text-[#f7dce5] block mb-2">
                    {wf.step}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {wf.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mb-16">
            <div className="mb-6">
              <Badge variant="blush" size="sm" className="mb-2">
                Proof in Production
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                Representative Case Studies
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-6 sm:p-7 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-[#96405d] dark:text-[#f7dce5] font-semibold uppercase tracking-wider block mb-2">
                      {proj.category}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      <Link to={`/work/${proj.slug}`} className="hover:text-[#96405d] dark:hover:text-[#f7dce5]">
                        {proj.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 line-clamp-3">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <Link
                      to={`/work/${proj.slug}`}
                      className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#96405d] dark:hover:text-[#f7dce5] inline-flex items-center gap-1.5"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {proj.timeline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {service.faqs && <FAQSection faqs={service.faqs} />}

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}

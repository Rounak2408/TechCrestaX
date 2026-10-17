import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Layout, Cpu, Palette, TrendingUp, RefreshCw, ShoppingBag } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import FAQSection from '../components/sections/FAQSection';
import ClosingCTA from '../components/sections/ClosingCTA';
import InteractiveServiceVisual from '../components/visuals/InteractiveServiceVisual';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

const iconMap = {
  Layout,
  Cpu,
  Palette,
  TrendingUp,
  RefreshCw,
  ShoppingBag,
};

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services & Technical Capabilities — TechCrestaX";
  }, []);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="lime" size="md" className="mb-3">
            Capabilities Matrix
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Bespoke Services.{' '}
            <span className="text-[#4d7c0f] dark:text-[#84cc16]">Engineered</span> for Scale.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            TechCrestaX delivers verified digital solutions ranging from high-converting marketing flagships to custom SaaS architectures. Explore our capabilities below.
          </p>
        </div>

        {/* Detailed Services Stack with 3D Visual Accents */}
        <div className="space-y-12 mb-20">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 hover:border-[#65a30d] dark:hover:border-[#84cc16] active:border-[#65a30d] dark:active:border-[#84cc16] hover:ring-4 hover:ring-lime-500/15 dark:hover:ring-lime-400/20 active:ring-4 active:ring-lime-500/15 rounded-3xl p-6 sm:p-10 lg:p-12 transition-all duration-300 shadow-xs hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Title and Overview */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200">
                        <Icon className="w-5 h-5 text-[#4d7c0f] dark:text-[#84cc16]" />
                      </div>
                      <Badge variant="neutral" size="sm">
                        {service.badge}
                      </Badge>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold text-[#4d7c0f] dark:text-[#84cc16]">
                      {service.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.longDesc}
                    </p>

                    {/* Key Deliverables */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-2">
                        Key Deliverables:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.keyCapabilities.slice(0, 4).map((cap, i) => (
                          <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-lime-700 dark:text-[#84cc16] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Button to={`/services/${service.slug}`} variant="primary" size="sm" showArrow>
                        View Full Specifications
                      </Button>
                      <Button to="/contact" variant="secondary" size="sm">
                        Enquire Now
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: 3D Dimensional Visual */}
                  <div className="lg:col-span-6 flex items-center justify-center">
                    <div className="w-full max-w-md">
                      <InteractiveServiceVisual slug={service.slug} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Comparison Matrix */}
        <div className="mb-20">
          <div className="max-w-2xl mb-6">
            <Badge variant="neutral" size="sm" className="mb-2">
              Comparison Grid
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Service Comparison & Scopes
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-xs">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th scope="col" className="py-3.5 px-6 font-bold">Service Category</th>
                  <th scope="col" className="py-3.5 px-6 font-bold">Primary Focus</th>
                  <th scope="col" className="py-3.5 px-6 font-bold">Typical Duration</th>
                  <th scope="col" className="py-3.5 px-6 font-bold">Key Technologies</th>
                  <th scope="col" className="py-3.5 px-6 font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {servicesData.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                      {s.title}
                    </td>
                    <td className="py-4 px-6 max-w-xs truncate text-slate-600 dark:text-slate-300">
                      {s.tagline}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-[#4d7c0f] dark:text-[#84cc16] font-semibold">
                      1–3 Weeks
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-500 dark:text-slate-400">
                      {s.technologies.slice(0, 3).join(', ')}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <Link
                        to={`/services/${s.slug}`}
                        className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#4d7c0f] dark:hover:text-[#84cc16] inline-flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <FAQSection />

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layout, Cpu, Palette, TrendingUp, RefreshCw, ShoppingBag, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { servicesData } from '../../data/servicesData';

const iconMap = {
  Layout: Layout,
  Cpu: Cpu,
  Palette: Palette,
  TrendingUp: TrendingUp,
  RefreshCw: RefreshCw,
  ShoppingBag: ShoppingBag,
};

export default function CapabilitiesSection() {
  return (
    <section className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 relative" aria-labelledby="capabilities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Engineered services built for"
            highlight="real business growth"
            description="From bespoke marketing websites to full-stack cloud software, we provide specialized digital services that solve concrete business challenges."
          />

          <div className="shrink-0">
            <Button to="/services" variant="secondary" showArrow>
              View All 6 Services
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;

            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group relative bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 hover:border-[#65a30d] dark:hover:border-[#84cc16] active:border-[#65a30d] dark:active:border-[#84cc16] hover:ring-4 hover:ring-lime-500/20 dark:hover:ring-lime-400/25 active:ring-4 active:ring-lime-500/20 dark:active:ring-lime-400/25 rounded-3xl p-6 sm:p-7 transition-all duration-300 ease-out shadow-xs hover:shadow-2xl hover:shadow-lime-500/[0.08] dark:hover:shadow-black/50 hover:-translate-y-2 active:translate-y-0 active:scale-[0.99] flex flex-col justify-between overflow-hidden cursor-pointer select-none text-left"
              >
                {/* Luminous border glow effect */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-lime-400/20 via-transparent to-lime-600/10 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4d7c0f] via-[#65a30d] to-[#84cc16] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />

                {/* Background hover light glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-lime-50/40 dark:from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 group-hover:bg-[#0b1329] dark:group-hover:bg-white group-hover:text-[#84cc16] dark:group-hover:text-slate-900 group-active:bg-[#0b1329] dark:group-active:bg-white group-active:text-[#84cc16] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-xs group-hover:shadow-md">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <Badge variant="neutral" size="sm" className="group-hover:border-lime-300 dark:group-hover:border-lime-700 group-hover:text-lime-800 dark:group-hover:text-lime-300 transition-colors">
                      {service.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#4d7c0f] dark:group-hover:text-[#84cc16] group-active:text-[#4d7c0f] dark:group-active:text-[#84cc16] transition-colors duration-200 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Micro Dimensional Accent for first two cards */}
                  {index === 0 && (
                    <div className="mb-5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-[11px] font-mono text-slate-600 dark:text-slate-300 flex items-center justify-between group-hover:border-lime-300 dark:group-hover:border-lime-700/60 group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:shadow-xs transition-all duration-300">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Responsive Browser Engine</span>
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">100% QA</span>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="mb-5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-[11px] font-mono text-slate-600 dark:text-slate-300 flex items-center justify-between group-hover:border-lime-300 dark:group-hover:border-lime-700/60 group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:shadow-xs transition-all duration-300">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                        <span>REST & GraphQL APIs</span>
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">&lt;100ms Latency</span>
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                    {service.keyCapabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1">
                        <Check className="w-3.5 h-3.5 text-[#65a30d] dark:text-[#84cc16] shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between relative z-10">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#4d7c0f] dark:group-hover:text-[#84cc16] group-active:text-[#4d7c0f] dark:group-active:text-[#84cc16] rounded-lg py-1 px-2 -ml-1 group-hover:bg-lime-50 dark:group-hover:bg-lime-950/50 group-active:bg-lime-50 dark:group-active:bg-lime-950/50 transition-all duration-200"
                  >
                    <span>Explore Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#4d7c0f] dark:group-hover:text-[#84cc16] group-active:text-[#4d7c0f] dark:group-active:text-[#84cc16] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>

                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white group-active:text-slate-900 dark:group-active:text-white group-hover:font-bold transition-all duration-200">
                    0{index + 1}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

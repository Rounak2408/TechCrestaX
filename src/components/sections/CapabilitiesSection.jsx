import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const [hoveredServiceId, setHoveredServiceId] = useState(null);

  // Enable instant touch events on mobile browsers
  useEffect(() => {
    const handleTouch = () => {};
    window.addEventListener('touchstart', handleTouch, { passive: true });
    return () => window.removeEventListener('touchstart', handleTouch);
  }, []);

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
            const isCardActive = hoveredServiceId !== null
              ? hoveredServiceId === service.id
              : activeServiceId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                onTouchStart={() => setActiveServiceId(service.id)}
                onClick={() => {
                  if (activeServiceId === service.id) {
                    navigate(`/services/${service.slug}`);
                  } else {
                    setActiveServiceId(service.id);
                  }
                }}
                className={`group relative rounded-3xl p-6 sm:p-7 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden cursor-pointer select-none text-left touch-manipulation border-2 ${
                  isCardActive
                    ? 'bg-white dark:bg-slate-900 border-[#65a30d] dark:border-[#84cc16] ring-4 ring-lime-500/25 dark:ring-lime-400/30 shadow-2xl shadow-lime-500/10 dark:shadow-black/50 -translate-y-1.5'
                    : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-[#65a30d] dark:hover:border-[#84cc16]'
                }`}
              >
                {/* Luminous border glow effect */}
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-b from-lime-400/25 via-transparent to-lime-600/10 transition-opacity duration-300 pointer-events-none -z-10 ${
                    isCardActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Top accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4d7c0f] via-[#65a30d] to-[#84cc16] transition-opacity duration-300 ${
                    isCardActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Background hover light glow overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-lime-50/40 dark:from-white/[0.02] via-transparent to-transparent transition-opacity duration-300 pointer-events-none rounded-3xl ${
                    isCardActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl border transition-all duration-300 shadow-xs flex items-center justify-center ${
                        isCardActive
                          ? 'bg-[#0b1329] dark:bg-white text-[#84cc16] dark:text-slate-900 border-transparent scale-110 -rotate-3 shadow-md'
                          : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300" />
                    </div>
                    <Badge
                      variant="neutral"
                      size="sm"
                      className={`transition-colors ${
                        isCardActive
                          ? 'border-lime-400 dark:border-lime-600 text-lime-800 dark:text-lime-300 bg-lime-50/80 dark:bg-lime-950/40'
                          : ''
                      }`}
                    >
                      {service.badge}
                    </Badge>
                  </div>

                  <h3
                    className={`text-xl font-bold transition-colors duration-200 mb-2 ${
                      isCardActive
                        ? 'text-[#4d7c0f] dark:text-[#84cc16]'
                        : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Micro Dimensional Accent for first two cards */}
                  {index === 0 && (
                    <div
                      className={`mb-5 p-2.5 rounded-xl border text-[11px] font-mono flex items-center justify-between transition-all duration-300 ${
                        isCardActive
                          ? 'bg-white dark:bg-slate-800 border-lime-300 dark:border-lime-700/60 shadow-xs text-slate-800 dark:text-slate-200'
                          : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Responsive Browser Engine</span>
                      </span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">100% QA</span>
                    </div>
                  )}

                  {index === 1 && (
                    <div
                      className={`mb-5 p-2.5 rounded-xl border text-[11px] font-mono flex items-center justify-between transition-all duration-300 ${
                        isCardActive
                          ? 'bg-white dark:bg-slate-800 border-lime-300 dark:border-lime-700/60 shadow-xs text-slate-800 dark:text-slate-200'
                          : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
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
                      <li
                        key={i}
                        className={`text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2 transition-transform duration-200 ${
                          isCardActive ? 'translate-x-1' : ''
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#65a30d] dark:text-[#84cc16] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between relative z-10">
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold rounded-lg py-1 px-2 -ml-1 transition-all duration-200 ${
                      isCardActive
                        ? 'text-[#4d7c0f] dark:text-[#84cc16] bg-lime-50 dark:bg-lime-950/50'
                        : 'text-slate-900 dark:text-white hover:text-[#4d7c0f] dark:hover:text-[#84cc16]'
                    }`}
                  >
                    <span>Explore Specifications</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-all duration-300 ${
                        isCardActive
                          ? 'text-[#4d7c0f] dark:text-[#84cc16] translate-x-1 -translate-y-1'
                          : 'text-slate-400'
                      }`}
                    />
                  </Link>

                  <span
                    className={`text-xs font-mono transition-all duration-200 ${
                      isCardActive
                        ? 'text-slate-900 dark:text-white font-bold'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

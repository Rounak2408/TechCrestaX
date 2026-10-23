import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Layout, ShoppingBag, Cpu, Palette, Search, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { servicesData } from '../../data/servicesData';

const iconMap = {
  Layout: Layout,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Palette: Palette,
  Search: Search,
  TrendingUp: TrendingUp,
};

export default function CapabilitiesSection() {
  const navigate = useNavigate();
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const [hoveredServiceId, setHoveredServiceId] = useState(null);

  const handleCardInteraction = (serviceId) => {
    setActiveServiceId(serviceId);
    setHoveredServiceId(serviceId);
  };

  const handleCardClick = (service) => {
    navigate(`/services/${service.slug}`);
  };

  return (
    <section className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#090e1a] relative" aria-labelledby="capabilities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Core Services"
            title="Six specialized disciplines built to"
            highlight="scale your digital presence."
            description="From initial brand discovery to live code deployment, we engineer digital products that communicate value, perform reliably, and convert visitors into active clients."
          />

          <div className="shrink-0 flex items-center gap-3">
            <Button to="/services" variant="secondary" showArrow>
              Explore All 6 Services
            </Button>
          </div>
        </div>

        {/* 6 Approved Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;
            const isCardActive = hoveredServiceId !== null
              ? hoveredServiceId === service.id
              : activeServiceId === service.id;

            return (
              <div
                key={service.id}
                data-service-id={service.id}
                onMouseEnter={() => {
                  setHoveredServiceId(service.id);
                  setActiveServiceId(service.id);
                }}
                onMouseLeave={() => setHoveredServiceId(null)}
                onTouchStart={() => handleCardInteraction(service.id)}
                className={`group relative rounded-3xl p-6 sm:p-7 service-interactive-card flex flex-col justify-between overflow-hidden cursor-pointer text-left touch-manipulation bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 transition-all ${
                  isCardActive ? 'is-active ring-1 ring-[#eccbd6]' : ''
                }`}
                onClick={() => handleCardClick(service)}
              >
                {/* Luminous border glow aura overlay */}
                <div className="card-ambient-aura" />
                <div className="card-top-line" />

                <div className="relative z-10">
                  {/* Top Row: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F7DCE5]/40 dark:bg-slate-800 border border-[#eccbd6] dark:border-slate-700 flex items-center justify-center text-[#96405d] dark:text-[#F7DCE5] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                        0{index + 1}
                      </span>
                      <Badge variant="blush" size="sm">
                        {service.badge}
                      </Badge>
                    </div>
                  </div>

                  {/* Title & Purpose */}
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-[#96405d] dark:group-hover:text-[#F7DCE5] transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#96405d] dark:text-[#F7DCE5]" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Purpose Box */}
                  <div className="mb-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300">
                    <span className="font-mono uppercase text-[10px] text-slate-400 dark:text-slate-500 block font-semibold mb-0.5">
                      Core Purpose:
                    </span>
                    <span>{service.purpose}</span>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-1.5 mb-5">
                    {service.keyCapabilities.slice(0, 3).map((cap) => (
                      <div key={cap} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Next Step & Link */}
                <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="font-mono text-[11px] text-[#96405d] dark:text-[#F7DCE5] font-semibold flex items-center gap-1">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    Includes 1-Yr Maint.
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#faf9fb] dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              Need a blended scope combining website design, local SEO, and appointment workflows? We tailor custom milestone packages starting at ₹7,000+.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="sm" showArrow className="shrink-0">
            Request Scope Review
          </Button>
        </div>
      </div>
    </section>
  );
}

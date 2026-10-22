import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Layout, Cpu, Bot, Palette, Cloud, TrendingUp, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { servicesData } from '../../data/servicesData';

const iconMap = {
  Layout: Layout,
  Cpu: Cpu,
  Bot: Bot,
  Palette: Palette,
  Cloud: Cloud,
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

  const handleTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target) {
      const card = target.closest('[data-service-id]');
      if (card) {
        const id = card.getAttribute('data-service-id');
        if (id && id !== activeServiceId) {
          setActiveServiceId(id);
          setHoveredServiceId(id);
        }
      }
    }
  };

  const handleCardClick = (service) => {
    if (activeServiceId === service.id) {
      navigate(`/services/${service.slug}`);
    } else {
      setActiveServiceId(service.id);
      setHoveredServiceId(service.id);
    }
  };

  return (
    <section className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 relative" aria-labelledby="capabilities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="What We Build"
            title="Technology solutions designed to"
            highlight="accelerate growth"
            description="From first idea to final deployment, we create digital products that look premium, perform smoothly, and solve real business problems."
          />

          <div className="shrink-0">
            <Button to="/services" variant="secondary" showArrow>
              View All 6 Services
            </Button>
          </div>
        </div>

        {/* Services Grid with Touch and Hover Tracking */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          onTouchMove={handleTouchMove}
        >
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
                onPointerDown={() => handleCardInteraction(service.id)}
                onClick={() => handleCardClick(service)}
                className={`group relative rounded-3xl p-6 sm:p-7 service-interactive-card flex flex-col justify-between overflow-hidden cursor-pointer select-none text-left touch-manipulation bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 transition-all ${
                  isCardActive ? 'is-active' : ''
                }`}
              >
                {/* Luminous border glow aura overlay */}
                <div
                  className={`card-ambient-aura ${
                    isCardActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Top accent line */}
                <div
                  className={`card-top-line ${
                    isCardActive ? 'opacity-100 !scale-x-100' : ''
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl border transition-all duration-300 shadow-xs flex items-center justify-center ${
                        isCardActive
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent scale-105 shadow-sm'
                          : 'bg-[#F7DCE5]/40 dark:bg-slate-800 border-[#eccbd6] dark:border-slate-700 text-slate-900 dark:text-slate-200 group-hover:scale-105'
                      }`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300" />
                    </div>
                    <Badge
                      variant="blush"
                      size="sm"
                    >
                      {service.badge}
                    </Badge>
                  </div>

                  <h3
                    className={`text-xl font-bold font-display transition-colors duration-200 mb-2 ${
                      isCardActive
                        ? 'text-slate-950 dark:text-white'
                        : 'text-slate-900 dark:text-white group-hover:text-slate-950 dark:group-hover:text-white'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                    {service.keyCapabilities.slice(0, 3).map((cap, i) => (
                      <li
                        key={i}
                        className={`text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2 transition-transform duration-200 ${
                          isCardActive ? 'translate-x-1' : ''
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-[#96405d] dark:text-[#F7DCE5] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between relative z-10">
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold rounded-lg py-1 px-2 -ml-1 text-slate-900 dark:text-white hover:text-[#96405d] dark:hover:text-[#F7DCE5] transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
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

import React from 'react';

/**
 * AnimatedGrid
 * Fine technical coordinate grid lines matching the TechCrestaX engineering aesthetic.
 * Features subtle continuous drift, radial gradient falloff, and low-contrast laser crosshairs.
 */
export default function AnimatedGrid({ intensity = 'default' }) {
  const opacityMap = {
    hero: 0.35,
    home: 0.28,
    portfolio: 0.18,
    services: 0.22,
    about: 0.16,
    pricing: 0.10,
    faq: 0.08,
    contact: 0.20,
    insights: 0.14,
    privacy: 0.05,
    default: 0.18,
  };

  const gridOpacity = opacityMap[intensity] || opacityMap.default;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 ease-out"
      style={{ opacity: gridOpacity }}
      aria-hidden="true"
    >
      {/* 1. Fine Technical 44px Coordinate Grid */}
      <div
        className="absolute -inset-[100px] w-[calc(100%+200px)] h-[calc(100%+200px)] sm:animate-grid-drift"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 98, 72, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 98, 72, 0.07) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '88px 88px, 88px 88px, 22px 22px, 22px 22px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.1) 75%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.1) 75%, transparent 95%)',
        }}
      />

      {/* 2. Delicate Isometric Perspective Coordinates Accent */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(255, 121, 87, 0.06) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}

import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import AmbientGlow from './AmbientGlow';
import AnimatedGrid from './AnimatedGrid';
import LightTrails from './LightTrails';
import ParticleLayer from './ParticleLayer';

/**
 * GlobalAtmosphere
 * Master background orchestrator that coordinates:
 * 1. Deep navy & near-black gradients + soft ambient glow pools + mouse spotlight (AmbientGlow)
 * 2. Fine technical coordinate grid lines with subtle drift (AnimatedGrid)
 * 3. Elegant sweeping curved orange light trails connecting sections (LightTrails)
 * 4. Restrained floating embers/sparks (ParticleLayer)
 *
 * Dynamically adapts intensity to each route (Home, Portfolio, Services, Pricing, About, etc.)
 * while maintaining a unified, continuous dark cinematic atmosphere across the entire site.
 */
export default function GlobalAtmosphere() {
  const location = useLocation();

  // Determine section/page preset from current URL pathname
  const currentPreset = useMemo(() => {
    const path = location.pathname.toLowerCase();

    if (path === '/') return 'home';
    if (path.startsWith('/work') || path.startsWith('/portfolio')) return 'portfolio';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/pricing')) return 'pricing';
    if (path.startsWith('/faq')) return 'faq';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/insights')) return 'insights';
    if (path.startsWith('/privacy')) return 'privacy';

    return 'default';
  }, [location.pathname]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#05080D]"
      aria-hidden="true"
    >
      {/* 1. Deep Gradients, Breathing Coral Glow Pools & Mouse Spotlight */}
      <AmbientGlow intensity={currentPreset} />

      {/* 2. Technical Coordinate Grid with Subtle Continuous Drift */}
      <AnimatedGrid intensity={currentPreset} />

      {/* 3. Sweeping Curved Light Trails Connecting Viewport Sections */}
      <LightTrails intensity={currentPreset} />

      {/* 4. Restrained Floating Embers & Particle Drift Canvas (Desktop & Tablet) */}
      <div className="hidden sm:block">
        <ParticleLayer intensity={currentPreset} />
      </div>
    </div>
  );
}

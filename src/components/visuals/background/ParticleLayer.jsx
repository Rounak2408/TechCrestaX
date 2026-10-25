import React, { useEffect, useRef } from 'react';

/**
 * ParticleLayer
 * Single lightweight HTML5 Canvas engine rendering subtle floating embers/sparks.
 * Features gentle vertical drift, horizontal sway, and soft alpha breathing.
 * Pauses automatically when tab is hidden or when reduced motion is preferred.
 */
export default function ParticleLayer({ intensity = 'default' }) {
  const canvasRef = useRef(null);

  const countMultiplierMap = {
    hero: 1.0,
    home: 0.85,
    portfolio: 0.5,
    services: 0.6,
    about: 0.5,
    pricing: 0.25,
    faq: 0.2,
    contact: 0.6,
    insights: 0.4,
    privacy: 0.15,
    default: 0.5,
  };

  const currentMultiplier = countMultiplierMap[intensity] || countMultiplierMap.default;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let isTabVisible = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap at 1.5 for performance
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Determine particle count based on screen width and route intensity
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth < 1024;
    const baseCount = isMobile ? 8 : isTablet ? 16 : 28;
    const particleCount = Math.max(4, Math.round(baseCount * currentMultiplier));

    const colors = ['#FF6248', '#FF7957', '#FFA07A', '#FFB627'];

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.2 - Math.random() * 0.5,
        size: 1.0 + Math.random() * 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.2 + Math.random() * 0.6,
        swaySpeed: 0.01 + Math.random() * 0.02,
        swayAmp: 0.3 + Math.random() * 0.7,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      if (!isTabVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      time += 1;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.y += p.vy;
          p.x += Math.sin(time * p.swaySpeed + p.swayOffset) * p.swayAmp;

          // Wrap around top to bottom
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = '#FF6248';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [currentMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
      aria-hidden="true"
    />
  );
}

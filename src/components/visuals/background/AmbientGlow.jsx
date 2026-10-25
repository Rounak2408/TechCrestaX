import React, { useEffect, useRef } from 'react';

/**
 * AmbientGlow
 * Renders deep navy/near-black gradients, soft coral-orange ambient glow pools,
 * and an interactive mouse spotlight on fine pointer devices.
 */
export default function AmbientGlow({ intensity = 'default' }) {
  const spotlightRef = useRef(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const animFrameId = useRef(null);
  const isMoving = useRef(false);

  // Intensity opacity multiplier map
  const opacityMap = {
    hero: 1.0,
    home: 0.9,
    portfolio: 0.75,
    services: 0.7,
    about: 0.7,
    pricing: 0.5,
    faq: 0.45,
    contact: 0.8,
    insights: 0.65,
    privacy: 0.35,
    default: 0.7,
  };

  const currentMultiplier = opacityMap[intensity] || opacityMap.default;

  useEffect(() => {
    // Only activate cursor-following spotlight on fine pointer devices (desktop mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!mediaQuery.matches) return;

    const handlePointerMove = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
      if (!isMoving.current) {
        isMoving.current = true;
        renderLoop();
      }
    };

    const renderLoop = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.08;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.08;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      const dx = Math.abs(targetPos.current.x - currentPos.current.x);
      const dy = Math.abs(targetPos.current.y - currentPos.current.y);

      if (dx > 0.1 || dy > 0.1) {
        animFrameId.current = requestAnimationFrame(renderLoop);
      } else {
        isMoving.current = false;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 ease-out"
      style={{ opacity: currentMultiplier }}
      aria-hidden="true"
    >
      {/* 1. Base Deep Atmospheric Gradient (Obsidian to Deep Slate Navy) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05080D] via-[#070D16] to-[#05080D]" />

      {/* 2. Interactive Mouse-Following Spotlight (Desktop Fine Pointer Only) */}
      <div
        ref={spotlightRef}
        className="hidden md:block absolute top-0 left-0 w-[600px] h-[600px] rounded-full will-change-transform opacity-35 dark:opacity-50 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(255, 98, 72, 0.15) 0%, rgba(255, 121, 87, 0.05) 45%, transparent 70%)',
          filter: 'blur(35px)',
          transform: 'translate3d(-1000px, -1000px, 0) translate(-50%, -50%)',
        }}
      />

      {/* 3. Primary Ambient Coral Glow Pools (Smooth breathing) */}
      {/* Upper-Left Accent Pool */}
      <div
        className="absolute top-[8%] -left-36 w-[520px] h-[520px] rounded-full bg-[#FF6248]/12 blur-[140px] animate-pulse-soft-glow"
        style={{ animationDuration: '9s' }}
      />

      {/* Center-Right Secondary Coral Pool */}
      <div
        className="absolute top-[42%] -right-40 w-[580px] h-[580px] rounded-full bg-[#FF7957]/10 blur-[150px] animate-pulse-soft-glow"
        style={{ animationDuration: '11s', animationDelay: '2.5s' }}
      />

      {/* Lower Warm Amber Reflection Pool */}
      <div
        className="absolute bottom-[12%] left-1/4 w-[480px] h-[480px] rounded-full bg-[#FFB627]/8 blur-[130px] animate-pulse-soft-glow"
        style={{ animationDuration: '13s', animationDelay: '5s' }}
      />

      {/* 4. Peripheral Atmospheric Vignette (Soft dark border falloff) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(5, 8, 13, 0.75) 100%)',
        }}
      />
    </div>
  );
}

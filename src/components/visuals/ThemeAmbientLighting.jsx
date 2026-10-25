import React, { useEffect, useRef } from 'react';

/**
 * ThemeAmbientLighting
 * Provides high-performance, GPU-accelerated atmospheric lighting across the entire theme.
 * Includes breathing background ambient orbs and a subtle mouse-following spotlight
 * that illuminates obsidian cards, glass surfaces, and borders.
 */
export default function ThemeAmbientLighting() {
  const spotlightRef = useRef(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const animFrameId = useRef(null);
  const isMoving = useRef(false);

  useEffect(() => {
    // Only activate cursor-following spotlight on devices with fine pointer (mouse/trackpad)
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
      // Smooth lerp (linear interpolation) for luxurious fluid lag
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
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Interactive Mouse Spotlight Glow (Subtle Obsidian Sheen) */}
      <div
        ref={spotlightRef}
        className="hidden md:block absolute top-0 left-0 w-[550px] h-[550px] rounded-full will-change-transform opacity-40 dark:opacity-60 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(255, 98, 72, 0.12) 0%, rgba(255, 121, 87, 0.04) 40%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'translate3d(-1000px, -1000px, 0) translate(-50%, -50%)',
        }}
      />

      {/* 2. Ambient Floating Orbs Across the Viewport */}
      <div
        className="absolute top-[15%] -left-32 w-96 h-96 rounded-full bg-[#FF6248]/10 blur-[130px] animate-pulse-soft-glow"
        style={{ animationDuration: '8s' }}
      />
      <div
        className="absolute top-[50%] -right-32 w-[420px] h-[420px] rounded-full bg-[#FF7957]/8 blur-[140px] animate-pulse-soft-glow"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-[10%] left-1/4 w-[380px] h-[380px] rounded-full bg-[#FFB627]/6 blur-[120px] animate-pulse-soft-glow"
        style={{ animationDuration: '12s', animationDelay: '4s' }}
      />
    </div>
  );
}

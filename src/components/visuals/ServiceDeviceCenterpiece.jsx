import React, { useState, useRef } from 'react';
import { Code, Type, Image as ImageIcon, BarChart3, Sliders, Smartphone, Laptop, Check, ExternalLink } from 'lucide-react';

export default function ServiceDeviceCenterpiece({ activeService = {}, activeIdx = 0 }) {
  const [tilt, setTilt] = useState({ x: 4, y: -8 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current || window.innerWidth < 1024) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const factorX = (y - centerY) / centerY;
    const factorY = (x - centerX) / centerX;

    setTilt({
      x: 4 - factorX * 6,
      y: -8 + factorY * 10
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 4, y: -8 });
  };

  // Dynamic preview artwork per service
  const previewImages = [
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', // Mountain sunset (Website)
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', // Fashion Store (E-commerce)
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', // SaaS Analytics (Web Apps)
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', // UI Design (UI/UX)
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', // SEO Growth (SEO)
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80', // Server Cloud (Maintenance)
  ];

  const currentImage = previewImages[activeIdx % previewImages.length];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[380px] sm:h-[420px] flex items-center justify-center select-none perspective-[1200px]"
      aria-hidden="true"
    >
      {/* 3D Root Transformation Wrapper */}
      <div
        className="relative w-full max-w-[380px] sm:max-w-[420px] h-[340px] flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* ========================================================
            1. VOLCANIC CYLINDRICAL GLOWING PEDESTAL BASE
           ======================================================== */}
        <div 
          className="absolute bottom-4 w-72 sm:w-84 h-16 rounded-[100%] bg-gradient-to-b from-[#1E293B] via-[#0A1018] to-black border-2 border-[#FF6248] shadow-[0_0_40px_rgba(255,98,72,0.6),inset_0_0_20px_rgba(255,98,72,0.3)] flex items-center justify-center"
          style={{
            transform: 'rotateX(68deg) translateZ(-35px)',
          }}
        >
          {/* Inner Neon Glowing Core */}
          <div className="w-56 h-10 rounded-[100%] bg-[#FF6248]/30 blur-md" />
        </div>

        {/* Ambient Floor Light Bloom */}
        <div 
          className="absolute bottom-0 w-80 h-10 bg-[#FF6248]/25 blur-2xl rounded-full pointer-events-none"
          style={{ transform: 'translateZ(-50px)' }}
        />

        {/* ========================================================
            2. MAIN 3D DESKTOP MONITOR / DISPLAY SCREEN
           ======================================================== */}
        <div
          className="relative w-[270px] sm:w-[310px] aspect-[16/11] rounded-2xl bg-[#0A1018] border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(255,98,72,0.2)] overflow-hidden"
          style={{
            transform: 'translateZ(20px) rotateY(-4deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Monitor Top Window Chrome */}
          <div className="h-6 bg-[#0E1522] border-b border-white/10 px-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>

            <div className="w-32 h-3 rounded bg-white/5 border border-white/10 flex items-center px-1.5 text-[8px] font-mono text-slate-400">
              <span className="truncate">techcrestax.com/studio</span>
            </div>

            <div className="w-3" />
          </div>

          {/* Screen Display Visual Artwork */}
          <div className="relative w-full h-[calc(100%-24px)] overflow-hidden bg-slate-950">
            <img
              src={currentImage}
              alt="Discipline Showcase Art"
              className="w-full h-full object-cover transition-opacity duration-500 ease-out"
            />
            
            {/* Vignette & Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1018] via-transparent to-black/30 pointer-events-none" />

            {/* In-Screen Floating UI Cards */}
            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono text-white flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] animate-pulse" />
              <span>Production Live</span>
            </div>

            {/* Bottom Overlay Label */}
            <div className="absolute inset-x-3 bottom-2.5 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold text-white block leading-tight drop-shadow-md">
                  {activeService.title || 'Digital Experience'}
                </span>
                <span className="text-[8px] font-mono text-[#FF7957] block">
                  React • Tailwind • Sub-second
                </span>
              </div>
              <div className="w-5 h-5 rounded-md bg-[#FF6248] text-white flex items-center justify-center shadow-xs">
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            {/* Specular Diagonal Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
          </div>

          {/* Monitor Stand Stem */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-[#1E293B] to-[#0A1018] border-x border-white/20" />
        </div>

        {/* ========================================================
            3. MOBILE SMARTPHONE MOCKUP (Floating Front-Right)
           ======================================================== */}
        <div
          className="absolute -right-2 sm:right-2 bottom-8 w-[82px] sm:w-[94px] aspect-[9/18] rounded-xl sm:rounded-2xl bg-black border-2 border-white/25 shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_20px_rgba(255,98,72,0.3)] overflow-hidden"
          style={{
            transform: 'translateZ(65px) rotateY(-8deg) rotateZ(3deg)',
          }}
        >
          {/* Phone Dynamic Island / Speaker Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-7 h-2 rounded-full bg-black border border-white/20 z-20" />

          {/* Phone Screen UI */}
          <div className="relative w-full h-full bg-[#080D16] p-2 pt-5 flex flex-col justify-between">
            <div className="space-y-1.5">
              {/* Mini App Header */}
              <div className="flex items-center justify-between">
                <div className="w-3 h-3 rounded-full bg-[#FF6248]" />
                <div className="w-8 h-1.5 bg-white/20 rounded-full" />
              </div>

              {/* Mini Content Card */}
              <div className="w-full h-10 rounded-lg overflow-hidden relative border border-white/10 mt-1">
                <img
                  src={currentImage}
                  alt="Mobile UI"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Micro Data Rows */}
              <div className="space-y-1 pt-1">
                <div className="w-full h-1.5 bg-white/25 rounded-full" />
                <div className="w-3/4 h-1.5 bg-[#FF6248]/60 rounded-full" />
                <div className="w-1/2 h-1 bg-white/15 rounded-full" />
              </div>
            </div>

            {/* Mobile Bottom Navigation Bar */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-around">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF6248]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
            </div>
          </div>
        </div>

        {/* ========================================================
            4. FLOATING 3D HOLOGRAPHIC TOKENS (From Picture 2)
           ======================================================== */}

        {/* Token 1: `</>` Code Token (Top Right of Monitor) */}
        <div
          className="absolute -top-3 right-10 sm:right-16 w-11 h-11 rounded-xl bg-[#0A111C]/95 border border-[#FF6248]/50 shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(255,98,72,0.4)] flex items-center justify-center text-[#FF7957] backdrop-blur-xl"
          style={{
            transform: 'translateZ(85px) rotateZ(6deg)',
          }}
        >
          <Code className="w-5 h-5 font-bold" />
        </div>

        {/* Token 2: `T` Typography Token (Right Edge of Monitor) */}
        <div
          className="absolute top-24 -right-5 sm:-right-4 w-10 h-10 rounded-xl bg-[#0A111C]/95 border border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(255,98,72,0.2)] flex items-center justify-center text-white backdrop-blur-xl"
          style={{
            transform: 'translateZ(90px) rotateZ(-4deg)',
          }}
        >
          <span className="font-serif font-bold text-lg text-white">T</span>
        </div>

        {/* Token 3: Photo / Media Icon Token (Left Edge of Monitor) */}
        <div
          className="absolute top-28 -left-5 sm:-left-4 w-10 h-10 rounded-xl bg-[#0A111C]/95 border border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(255,98,72,0.2)] flex items-center justify-center text-[#FF7957] backdrop-blur-xl"
          style={{
            transform: 'translateZ(75px) rotateZ(-8deg)',
          }}
        >
          <ImageIcon className="w-4 h-4" />
        </div>

        {/* Token 4: Mini Analytics / Sliders Widget (Bottom Left of Monitor) */}
        <div
          className="absolute -bottom-2 left-6 sm:left-10 px-3 py-1.5 rounded-xl bg-[#0A111C]/95 border border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(255,98,72,0.3)] flex items-center gap-2 backdrop-blur-xl"
          style={{
            transform: 'translateZ(95px) rotateZ(4deg)',
          }}
        >
          <BarChart3 className="w-3.5 h-3.5 text-[#FF6248]" />
          <div className="w-10 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-[#FF6248] rounded-full" />
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>

      </div>
    </div>
  );
}

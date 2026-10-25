import React, { useState, useRef } from 'react';
import { Target, BarChart3, Layers, Check, Sparkles } from 'lucide-react';

/**
 * ProcessHoloWidgets (Left side floating 3D holographic cards)
 */
export function ProcessHoloWidgets() {
  const [tilt, setTilt] = useState({ x: 5, y: 10 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: 5 - ((y - centerY) / centerY) * 6,
      y: 10 + ((x - centerX) / centerX) * 8
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 5, y: 10 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-44 sm:w-48 h-[290px] hidden xl:flex flex-col justify-center select-none perspective-[1000px]"
      aria-hidden="true"
    >
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out flex flex-col justify-center gap-3.5"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Card 1: Target / Scoping Radar Token */}
        <div
          className="w-36 p-3 rounded-2xl bg-[#0A111C]/90 border border-white/15 shadow-[0_12px_28px_rgba(0,0,0,0.85),0_0_15px_rgba(255,98,72,0.25)] backdrop-blur-xl flex items-center gap-2.5 transition-transform hover:scale-105"
          style={{ transform: 'translateZ(35px) rotateZ(-3deg)' }}
        >
          <div className="w-8 h-8 rounded-xl bg-[#FF6248]/20 border border-[#FF6248]/40 text-[#FF7957] flex items-center justify-center shrink-0">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-white leading-tight">Scope Spec</div>
            <div className="text-[8px] font-mono text-[#FF7957]">100% Target Met</div>
          </div>
        </div>

        {/* Card 2: Analytics Chart Card */}
        <div
          className="w-44 p-3.5 rounded-2xl bg-[#0A111C]/95 border border-[#FF6248]/40 shadow-[0_16px_36px_rgba(0,0,0,0.9),0_0_20px_rgba(255,98,72,0.3)] backdrop-blur-xl space-y-2 transition-transform hover:scale-105 -ml-2"
          style={{ transform: 'translateZ(65px) rotateZ(2deg)' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-[#FF6248]" />
              <span className="text-[10px] font-bold text-white">Velocity</span>
            </div>
            <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">+98.4%</span>
          </div>
          <div className="space-y-1">
            <div className="flex gap-1 items-end h-5 pt-1">
              <div className="w-2 bg-white/20 rounded-t h-2" />
              <div className="w-2 bg-white/20 rounded-t h-3" />
              <div className="w-2 bg-[#FF6248]/60 rounded-t h-4" />
              <div className="w-2 bg-[#FF6248] rounded-t h-5" />
              <div className="w-2 bg-[#FF7957] rounded-t h-3.5" />
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-[#FF6248] rounded-full" />
            </div>
          </div>
        </div>

        {/* Card 3: Sprint Backlog Wireframe Card */}
        <div
          className="w-36 p-2.5 rounded-xl bg-[#060A12]/95 border border-white/15 shadow-[0_10px_24px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center gap-2 transition-transform hover:scale-105"
          style={{ transform: 'translateZ(20px) rotateZ(-2deg)' }}
        >
          <Layers className="w-4 h-4 text-[#8E9CAE]" />
          <div className="space-y-1 flex-1">
            <div className="w-full h-1 bg-white/30 rounded-full" />
            <div className="w-2/3 h-1 bg-white/15 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProcessPedestalChecklist (Right side 3D glowing volcanic pedestal with Checklist tablet)
 */
export function ProcessPedestalChecklist({ activeIndex = 0 }) {
  const [tilt, setTilt] = useState({ x: 8, y: -12 });
  const containerRef = useRef(null);

  const checklistItems = [
    { label: 'Plan', done: true },
    { label: 'Design', done: true },
    { label: 'Develop', done: true },
    { label: 'Test', done: true },
    { label: 'Launch', done: true },
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: 8 - ((y - centerY) / centerY) * 6,
      y: -12 + ((x - centerX) / centerX) * 8
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 8, y: -12 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-48 sm:w-56 h-[310px] hidden xl:flex items-center justify-center select-none perspective-[1000px]"
      aria-hidden="true"
    >
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* ========================================================
            1. VOLCANIC CYLINDRICAL GLOWING PEDESTAL BASE
           ======================================================== */}
        <div
          className="absolute bottom-2 w-44 h-12 rounded-[100%] bg-gradient-to-b from-[#1E293B] via-[#0A1018] to-black border-2 border-[#FF6248] shadow-[0_0_35px_rgba(255,98,72,0.65),inset_0_0_15px_rgba(255,98,72,0.4)] flex items-center justify-center"
          style={{
            transform: 'rotateX(68deg) translateZ(-30px)',
          }}
        >
          <div className="w-32 h-6 rounded-[100%] bg-[#FF6248]/40 blur-sm" />
        </div>

        {/* Ambient Floor Bloom */}
        <div
          className="absolute bottom-0 w-48 h-8 bg-[#FF6248]/30 blur-xl rounded-full pointer-events-none"
          style={{ transform: 'translateZ(-40px)' }}
        />

        {/* ========================================================
            2. 3D CHECKLIST BOARD / TABLET
           ======================================================== */}
        <div
          className="relative w-36 sm:w-40 rounded-2xl bg-[#0A111C]/95 border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_25px_rgba(255,98,72,0.25)] p-3.5 space-y-2 backdrop-blur-xl"
          style={{
            transform: 'translateZ(35px) rotateY(-6deg) rotateX(4deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Tablet Header / Specular Sheen */}
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF6248] animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">Sprint Track</span>
            </div>
            <Sparkles className="w-3 h-3 text-[#FF7957]" />
          </div>

          {/* 5 Checklist Items from Picture 2 */}
          <div className="space-y-1.5 pt-1">
            {checklistItems.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 p-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isCurrent
                      ? 'bg-[#FF6248]/20 border border-[#FF6248]/50 text-white shadow-[0_0_10px_rgba(255,98,72,0.2)]'
                      : 'bg-white/5 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 ${
                    item.done
                      ? 'bg-gradient-to-br from-[#FF6248] to-[#FF4500] text-white shadow-[0_0_8px_rgba(255,98,72,0.4)]'
                      : 'bg-white/10 text-slate-400'
                  }`}>
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-[11px]">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

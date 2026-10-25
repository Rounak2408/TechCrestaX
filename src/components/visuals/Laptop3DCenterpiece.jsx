import React, { useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Code, 
  Palette, 
  ShoppingBag, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Sliders, 
  MousePointer, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilityCards = [
  // --- LEFT COLUMN ---
  {
    id: 'web-dev',
    title: 'Website Development',
    subtitle: 'Custom Web Engineering',
    path: '/services/website-design-development',
    icon: Code,
    side: 'left',
    translateZ: 70,
    rotateY: -10,
    delay: 0
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    subtitle: 'Figma Systems & Modern UI',
    path: '/services/ui-ux-design',
    icon: Palette,
    side: 'left',
    translateZ: 90,
    rotateY: -14,
    delay: 100
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    subtitle: 'High-Converting Stores',
    path: '/services/ecommerce-website-development',
    icon: ShoppingBag,
    side: 'left',
    translateZ: 60,
    rotateY: -8,
    delay: 200
  },

  // --- RIGHT COLUMN ---
  {
    id: 'seo-growth',
    title: 'SEO & Digital Growth',
    subtitle: 'Search Authority & Ranking',
    path: '/services/seo-local-seo',
    icon: TrendingUp,
    side: 'right',
    translateZ: 70,
    rotateY: 10,
    delay: 150
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    subtitle: 'Full-Stack Scalable Platforms',
    path: '/services/web-applications-platforms',
    icon: Layers,
    side: 'right',
    translateZ: 90,
    rotateY: 14,
    delay: 250
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    subtitle: '1st Year Free • ₹5,000/yr Renewal',
    path: '/pricing',
    icon: ShieldCheck,
    side: 'right',
    translateZ: 60,
    rotateY: 8,
    delay: 350
  }
];

export default function Laptop3DCenterpiece() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(true);
  const currentTiltRef = useRef({ x: 4, y: -6 });
  const targetTiltRef = useRef({ x: 4, y: -6 });
  const animFrameRef = useRef(null);
  const timeRef = useRef(0);

  // 60FPS Smooth Lerp Physics Loop with Organic Idle Floating - zero React re-renders!
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    let running = true;

    // IntersectionObserver to pause physics when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !animFrameRef.current) {
          animFrameRef.current = requestAnimationFrame(animatePhysics);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const animatePhysics = () => {
      if (!running) return;

      if (!isVisibleRef.current) {
        animFrameRef.current = null;
        return;
      }

      timeRef.current += 0.016;

      if (!isHoveredRef.current) {
        // Continuous gentle sinusoidal floating oscillation
        const floatY = Math.sin(timeRef.current * 0.75) * 2.0;
        const floatX = Math.cos(timeRef.current * 0.55) * 1.4;
        targetTiltRef.current = {
          x: 4 + floatX,
          y: -6 + floatY
        };
      }

      // Smooth Linear Interpolation (Damping factor = 0.065 for liquid-smooth feel)
      const damping = 0.065;
      currentTiltRef.current.x += (targetTiltRef.current.x - currentTiltRef.current.x) * damping;
      currentTiltRef.current.y += (targetTiltRef.current.y - currentTiltRef.current.y) * damping;

      if (sceneRef.current) {
        sceneRef.current.style.transform = `rotateX(${currentTiltRef.current.x.toFixed(2)}deg) rotateY(${currentTiltRef.current.y.toFixed(2)}deg)`;
      }

      animFrameRef.current = requestAnimationFrame(animatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(animatePhysics);

    return () => {
      running = false;
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, []);

  // Smooth mouse movement parallax tracking
  const handleMouseMove = (e) => {
    if (!containerRef.current || window.innerWidth < 1024) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const factorX = (y - rect.height / 2) / (rect.height / 2);
    const factorY = (x - rect.width / 2) / (rect.width / 2);

    targetTiltRef.current = {
      x: 4 - factorX * 6.5,
      y: -6 + factorY * 9.5
    };
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  const handleBuildClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#enquiry');
    }
  };

  const leftCards = capabilityCards.filter(c => c.side === 'left');
  const rightCards = capabilityCards.filter(c => c.side === 'right');

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[1020px] mx-auto select-none py-6 lg:py-10 overflow-visible"
      style={{ perspective: '1700px' }}
      aria-label="3D Laptop and Floating Services Showcase"
    >
      {/* ========================================================
          1. VOLUMETRIC CORAL HALO AMBIENCE (Seamless Background Glow)
         ======================================================== */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] sm:w-[820px] h-[520px] sm:h-[620px] rounded-full pointer-events-none -z-20 blur-[130px] opacity-45"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,98,72,0.5) 0%, rgba(255,121,87,0.2) 45%, transparent 72%)'
        }}
      />

      {/* ========================================================
          2. MASTER 3D TILTED SCENE CONTAINER (Preserve 3D)
         ======================================================== */}
      <div 
        ref={sceneRef}
        className="relative w-full flex items-center justify-center will-change-transform"
        style={{
          transform: 'rotateX(4deg) rotateY(-6deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        
        {/* ========================================================
            3. GLOWING NEON ORANGE CIRCULAR LASER RING (Behind Laptop)
           ======================================================== */}
        <div 
          className="absolute -top-16 sm:-top-20 w-[460px] sm:w-[580px] md:w-[660px] h-[460px] sm:h-[580px] md:h-[660px] rounded-full pointer-events-none -z-10"
          style={{
            transform: 'translateZ(-95px)',
            background: 'radial-gradient(circle, transparent 62%, rgba(255,98,72,0.12) 65%, rgba(255,121,87,0.85) 70%, rgba(255,230,210,1) 71%, rgba(255,98,72,0.85) 72%, transparent 77%)',
            boxShadow: '0 0 70px rgba(255,98,72,0.45), inset 0 0 45px rgba(255,98,72,0.3)',
            filter: 'drop-shadow(0 0 18px #FF6248)'
          }}
        />

        {/* ========================================================
            4. RUGGED VOLCANIC BASALT ROCK PEDESTAL (Under Laptop)
           ======================================================== */}
        <div 
          className="absolute -bottom-14 sm:-bottom-20 left-1/2 -translate-x-1/2 w-[520px] sm:w-[640px] md:w-[720px] h-[190px] sm:h-[240px] pointer-events-none z-0"
          style={{ transform: 'translateZ(-25px)' }}
        >
          <svg viewBox="0 0 720 240" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="pedestalBaseGrad" x1="0%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#010204" />
                <stop offset="50%" stopColor="#070C15" />
                <stop offset="100%" stopColor="#121B28" />
              </linearGradient>
              <linearGradient id="pedestalFacetGrad" x1="20%" y1="100%" x2="70%" y2="0%">
                <stop offset="0%" stopColor="#04070D" />
                <stop offset="50%" stopColor="#0D1421" />
                <stop offset="100%" stopColor="#1C2738" />
              </linearGradient>
              <linearGradient id="pedestalRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6248" stopOpacity="0.2" />
                <stop offset="25%" stopColor="#FF7957" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#FFA07A" stopOpacity="1.0" />
                <stop offset="75%" stopColor="#FF7957" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FF6248" stopOpacity="0.2" />
              </linearGradient>
              <filter id="pedestalGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Massive Volcanic Rock Base */}
            <polygon
              points="30,240 50,135 140,105 230,80 360,72 490,85 580,115 650,145 690,240"
              fill="url(#pedestalBaseGrad)"
            />

            {/* 3D Rock Facets */}
            <polygon points="140,105 230,80 360,72 300,165 190,175" fill="url(#pedestalFacetGrad)" opacity="0.88" />
            <polygon points="360,72 490,85 580,115 510,180 390,170" fill="url(#pedestalFacetGrad)" opacity="0.8" />

            {/* Glowing Orange Molten Rim Light Line across Crest */}
            <polyline
              points="50,135 140,105 230,80 360,72 490,85 580,115 650,145"
              stroke="url(#pedestalRimGrad)"
              strokeWidth="4"
              fill="none"
              filter="url(#pedestalGlowFilter)"
            />
          </svg>
        </div>

        {/* ========================================================
            5. THE REAL 3D LAPTOP (MacBook Pro Chassis & Screen)
           ======================================================== */}
        <div 
          className="relative w-[340px] sm:w-[440px] md:w-[500px] lg:w-[540px] z-20 transition-all duration-300"
          style={{ transform: 'translateZ(15px)' }}
        >
          {/* Laptop Screen Portion (Open at 114 degrees) */}
          <div 
            className="relative rounded-t-2xl sm:rounded-t-3xl bg-[#0F1722] p-2.5 sm:p-3 pb-2 border-2 border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.95)] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #1C2739 0%, #0A111A 100%)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.95), 0 0 45px rgba(255,98,72,0.25)'
            }}
          >
            {/* Top Bezel Camera Dot */}
            <div className="w-full flex items-center justify-center pb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 ring-1 ring-slate-800" />
            </div>

            {/* In-Screen Modern Web Experience Display */}
            <div className="relative aspect-[16/10.5] rounded-lg sm:rounded-xl overflow-hidden bg-[#05080D] border border-white/10 shadow-inner">
              
              {/* Wallpaper: Majestic Sunset Mountains */}
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Web Experience Display"
                className="w-full h-full object-cover brightness-65"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-[#05080D]/50 to-transparent pointer-events-none" />

              {/* In-Screen Mini Header Bar */}
              <div className="absolute top-0 left-0 right-0 px-3 py-1.5 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_6px_#FF6248]" />
                  <span className="font-display font-bold text-[10px] text-white tracking-tight">TechCrestaX Studio</span>
                </div>
                <div className="flex items-center gap-2 text-[8px] text-slate-300 font-mono">
                  <span>Showcase</span>
                  <span>Capabilities</span>
                  <span>Contact</span>
                </div>
              </div>

              {/* In-Screen Main Content (Exact match to Picture 2) */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-left">
                <div className="max-w-[280px] sm:max-w-[340px] space-y-1.5 sm:space-y-2">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#FF6248]/25 text-[#FF7957] border border-[#FF6248]/40 text-[9px] font-mono uppercase tracking-wider font-semibold">
                    Studio Platform
                  </span>
                  
                  {/* Headline */}
                  <h4 className="text-sm sm:text-lg md:text-xl font-extrabold font-display text-white leading-tight drop-shadow-md">
                    Modern Web Experiences for Growing Businesses.
                  </h4>

                  {/* UI Action Button & Card Snippet */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleBuildClick}
                      className="px-3 py-1 rounded-md text-[9px] font-bold text-white bg-[#FF6248] hover:bg-[#FF7957] shadow-sm hover:scale-105 transition-all cursor-pointer"
                    >
                      Build
                    </button>
                    <span className="px-2.5 py-1 rounded-md text-[9px] font-medium text-slate-300 bg-white/10 backdrop-blur-md border border-white/15">
                      Case Studies
                    </span>
                  </div>
                </div>
              </div>

              {/* In-Screen Mini Preview Widget (Mountain Card Preview) */}
              <div className="hidden sm:block absolute top-8 right-4 w-[110px] p-2 rounded-lg bg-[#0A111B]/85 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="w-full h-12 rounded overflow-hidden mb-1.5">
                  <img 
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80" 
                    alt="Mountain Widget" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 h-1.5 bg-white/40 rounded-full mb-1" />
                <div className="w-1/2 h-1 bg-[#FF6248]/60 rounded-full" />
              </div>

              {/* Glass Diagonal Sheen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />

            </div>
          </div>

          {/* Laptop Base & Keyboard Chassis (3D Perspective) */}
          <div 
            className="relative h-[24px] sm:h-[30px] rounded-b-xl sm:rounded-b-2xl bg-gradient-to-b from-[#1E293B] via-[#121B27] to-[#0A1018] border-x-2 border-b-2 border-white/20 shadow-2xl flex items-center justify-center"
            style={{
              transform: 'rotateX(42deg) translateY(-3px)',
              transformOrigin: 'top center',
              boxShadow: '0 25px 50px rgba(0,0,0,0.95), 0 0 30px rgba(255,98,72,0.2)'
            }}
          >
            {/* Front Notch Indentation */}
            <div className="w-16 sm:w-20 h-1 bg-black/70 rounded-full" />
          </div>
        </div>

        {/* ========================================================
            6. FLOATING 3D GLASS CARDS (3 on Left, 3 on Right)
           ======================================================== */}

        {/* --- LEFT COLUMN: 3 TILES --- */}
        <div className="absolute left-[-20px] sm:left-[-40px] lg:left-[-75px] xl:left-[-95px] top-[10%] bottom-[12%] flex flex-col justify-between z-30 pointer-events-auto">
          {leftCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                to={card.path}
                className="group relative flex items-center gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#0A111B]/85 hover:bg-[#121B29]/95 border border-white/15 hover:border-[#FF6248] shadow-[0_15px_35px_rgba(0,0,0,0.75)] hover:shadow-[0_0_30px_rgba(255,98,72,0.5)] backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  transform: `translateZ(${card.translateZ}px) rotateY(${card.rotateY}deg)`
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF6248]/15 border border-[#FF6248]/40 flex items-center justify-center text-[#FF7957] group-hover:bg-[#FF6248] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left pr-2">
                  <span className="font-display font-bold text-xs sm:text-sm text-white block group-hover:text-[#FF7957] transition-colors whitespace-nowrap">
                    {card.title}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF6248] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto shrink-0" />
              </Link>
            );
          })}
        </div>

        {/* --- RIGHT COLUMN: 3 TILES --- */}
        <div className="absolute right-[-20px] sm:right-[-40px] lg:right-[-75px] xl:right-[-95px] top-[10%] bottom-[12%] flex flex-col justify-between z-30 pointer-events-auto">
          {rightCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                to={card.path}
                className="group relative flex items-center gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#0A111B]/85 hover:bg-[#121B29]/95 border border-white/15 hover:border-[#FF6248] shadow-[0_15px_35px_rgba(0,0,0,0.75)] hover:shadow-[0_0_30px_rgba(255,98,72,0.5)] backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  transform: `translateZ(${card.translateZ}px) rotateY(${card.rotateY}deg)`
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF6248]/15 border border-[#FF6248]/40 flex items-center justify-center text-[#FF7957] group-hover:bg-[#FF6248] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left pr-2">
                  <span className="font-display font-bold text-xs sm:text-sm text-white block group-hover:text-[#FF7957] transition-colors whitespace-nowrap">
                    {card.title}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF6248] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto shrink-0" />
              </Link>
            );
          })}
        </div>

        {/* ========================================================
            7. FLOATING 3D CREATIVE SATELLITE TOKENS (Picture 2 Parity)
           ======================================================== */}
        
        {/* Floating Mountain Art Card (Top Left) */}
        <div 
          className="hidden md:block absolute -top-10 left-6 sm:left-10 w-28 h-20 rounded-xl overflow-hidden border border-white/20 shadow-2xl z-25 pointer-events-none"
          style={{ transform: 'translateZ(75px) rotateZ(-7deg)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" 
            alt="Floating Mountain Art" 
            className="w-full h-full object-cover brightness-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Floating Glass Control Slider Widget (Top Right) */}
        <div 
          className="hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0A111B]/90 border border-white/20 shadow-xl backdrop-blur-md absolute -top-8 right-6 sm:right-10 z-25 pointer-events-none"
          style={{ transform: 'translateZ(75px) rotateZ(5deg)' }}
        >
          <Sliders className="w-3.5 h-3.5 text-[#FF7957]" />
          <div className="w-14 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div className="w-3/5 h-full bg-[#FF6248] rounded-full" />
          </div>
          <span className="w-2 h-2 rounded-full bg-[#FF7957] shadow-[0_0_6px_#FF6248]" />
        </div>

        {/* Floating Typography Badge `Aa` (Bottom Right) */}
        <div 
          className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A111B]/95 border border-white/25 shadow-2xl backdrop-blur-xl absolute bottom-2 right-14 sm:right-20 z-30 pointer-events-none"
          style={{ 
            transform: 'translateZ(85px) rotateZ(8deg)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.85), 0 0 20px rgba(255,98,72,0.3)'
          }}
        >
          <span className="font-display font-extrabold text-lg text-white">Aa</span>
        </div>

        {/* Floating Color Palette Capsule (Bottom Right) */}
        <div 
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A111B]/95 border border-white/20 shadow-xl backdrop-blur-xl absolute -bottom-3 right-2 sm:right-6 z-30 pointer-events-none"
          style={{ transform: 'translateZ(70px) rotateZ(-4deg)' }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6248] shadow-[0_0_6px_#FF6248]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7957]" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#101722] border border-white/20" />
        </div>

        {/* Floating 3D Pointer Cursor (Left Bezel) */}
        <div 
          className="hidden lg:block absolute top-[28%] left-[22%] z-35 pointer-events-none animate-bounce-gentle"
          style={{ transform: 'translateZ(95px)' }}
        >
          <div className="w-7 h-7 rounded-full bg-[#FF6248]/20 border border-[#FF6248] flex items-center justify-center shadow-[0_0_15px_#FF6248]">
            <MousePointer className="w-3.5 h-3.5 text-white fill-[#FF6248]" />
          </div>
        </div>

        {/* Floating Crystal Diamond Prism (Above Laptop Center) */}
        <div 
          className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 z-25 pointer-events-none"
          style={{ transform: 'translateZ(85px)' }}
        >
          <div className="w-5 h-8 bg-gradient-to-b from-[#FFA07A]/60 via-[#FF6248]/40 to-transparent rotate-45 border border-white/30 shadow-[0_0_15px_rgba(255,98,72,0.4)]" />
        </div>

      </div>

      {/* ========================================================
          8. REFLECTIVE GROUND HORIZON SHEEN
         ======================================================== */}
      <div className="relative mt-12 w-full h-8 flex items-center justify-center pointer-events-none">
        <div className="w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF6248] to-transparent opacity-75" />
        <div className="absolute w-3/5 h-5 bg-[#FF6248]/25 blur-lg rounded-full -top-2.5" />
      </div>

      {/* ========================================================
          9. MOBILE CAPABILITIES QUICK-NAV (< 1024px)
         ======================================================== */}
      <div className="lg:hidden mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 px-1">
        {capabilityCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.id}
              to={card.path}
              className="flex items-center gap-2 p-2 rounded-xl bg-[#0A101A]/90 border border-white/10 hover:border-[#FF6248] text-xs text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <div className="w-6 h-6 rounded-md bg-[#FF6248]/15 border border-[#FF6248]/30 text-[#FF7957] flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="truncate font-medium">{card.title}</span>
            </Link>
          );
        })}
      </div>

    </div>
  );
}

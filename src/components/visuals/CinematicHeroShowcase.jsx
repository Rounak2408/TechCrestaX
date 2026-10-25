import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowUpRight, RotateCw, ShieldCheck, Stethoscope, Sprout, UtensilsCrossed, Scale, ArrowRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

const showcaseProjects = [
  {
    id: "scalpel-in",
    title: "Scalpel.in",
    client: "Dr. Rahul Bhanja Chowdhury",
    category: "Healthcare & Surgery",
    url: "https://www.scalpel.in/",
    displayUrl: "www.scalpel.in",
    detailsPath: "/work/scalpel-in",
    icon: Stethoscope,
    status: "Live Production",
    summary: "Specialized surgical consultation platform engineered with direct patient appointment booking and clinic WhatsApp routing.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    badge: "Healthcare & Surgery",
    tagline: "Expert Surgical Care For A Healthier Tomorrow",
    subtagline: "Advanced technology. Experienced specialists. Compassionate care.",
    cta1: "Book Appointment",
    cta2: "View Services",
    accentColor: "#2563EB",
    navLinks: ["Home", "About", "Services", "For Patients"]
  },
  {
    id: "agriqen-seeds",
    title: "Agriqen Seeds",
    client: "Agriqen Seeds & Biotech Pvt. Ltd.",
    category: "Agriculture & Biotech",
    url: "https://www.agriqen.com/",
    displayUrl: "www.agriqen.com",
    detailsPath: "/work/agriqen-seeds",
    icon: Sprout,
    status: "Live Production",
    summary: "Corporate agricultural biotechnology platform showcasing hybrid seed varieties and regional distributor inquiry channels.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
    badge: "Agriculture & Biotech",
    tagline: "Cultivating a Greener Tomorrow",
    subtagline: "High-yield hybrid seeds engineered for sustainable agriculture & thriving harvests.",
    cta1: "Explore Seeds",
    cta2: "Distributors",
    accentColor: "#10B981",
    navLinks: ["Home", "About", "Seed Varieties", "Distributors"]
  },
  {
    id: "sahyog-sagar",
    title: "Sahyog Sagar",
    client: "Sahyog Sagar Dining & Community",
    category: "NGO & Social Work",
    url: "https://www.sahyogsagar.in/",
    displayUrl: "www.sahyogsagar.in",
    detailsPath: "/work/sahyog-sagar",
    icon: UtensilsCrossed,
    status: "Live Production",
    summary: "Community dining & hospitality platform with digital menu discovery and direct reservation pathways.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    badge: "NGO & Community",
    tagline: "Crafting Memorable Community Experiences",
    subtagline: "Authentic regional culinary heritage & community social engagement.",
    cta1: "Digital Menu",
    cta2: "Table Booking",
    accentColor: "#F59E0B",
    navLinks: ["Home", "About", "Menu", "Community"]
  },
  {
    id: "law-and-legal-bureau",
    title: "Law & Legal Bureau",
    client: "Advocate Pankaj Kumar",
    category: "Legal Services",
    url: "https://www.lawandlegalbureau.com/",
    displayUrl: "www.lawandlegalbureau.com",
    detailsPath: "/work/law-and-legal-bureau",
    icon: Scale,
    status: "Live Production",
    summary: "Authoritative legal practice website showcasing litigation domains, advocate credentials, and confidential consultation intake.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    badge: "Legal Services",
    tagline: "Legal insight for a Stronger Tomorrow",
    subtagline: "Litigation domains, corporate advocacy credentials, and confidential consultation intake.",
    cta1: "Consultation",
    cta2: "Practice Areas",
    accentColor: "#8B5CF6",
    navLinks: ["Practice Areas", "Advocates", "Case Results", "Contact"]
  }
];

export default function CinematicHeroShowcase() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [tilt, setTilt] = useState({ x: 5, y: -10 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const containerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const floatAnimRef = useRef(null);
  const floatTimeRef = useRef(0);

  const activeProject = showcaseProjects[selectedIdx];
  const restingTilt = { x: 5, y: -10 };
  const CYCLE_DURATION = 4600; // 4.6s auto-cycle

  // Relative projects in the 3D amphitheater fan
  const nextIdx = (selectedIdx + 1) % showcaseProjects.length;
  const prevIdx = (selectedIdx + showcaseProjects.length - 1) % showcaseProjects.length;
  const backIdx = (selectedIdx + 2) % showcaseProjects.length;

  const nextProject = showcaseProjects[nextIdx];
  const prevProject = showcaseProjects[prevIdx];
  const backProject = showcaseProjects[backIdx];

  // Auto-Cycle Handlers
  const handleSelectProject = (idx) => {
    if (idx === selectedIdx) return;
    setIsTransitioning(true);
    setProgress(0);
    setSelectedIdx(idx);
    setTimeout(() => setIsTransitioning(false), 450);
  };

  const goToNextProject = () => {
    setIsTransitioning(true);
    setProgress(0);
    setSelectedIdx((prev) => (prev + 1) % showcaseProjects.length);
    setTimeout(() => setIsTransitioning(false), 450);
  };

  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextProject();
          return 0;
        }
        return prev + (stepMs / CYCLE_DURATION) * 100;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, isHovered, selectedIdx]);

  // Subtle 3D Floating Undulation
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    let running = true;
    const animateFloat = () => {
      if (!running) return;
      floatTimeRef.current += 0.018;

      if (!isHovered) {
        const floatY = Math.sin(floatTimeRef.current) * 1.8;
        const floatX = Math.cos(floatTimeRef.current * 0.7) * 0.9;
        setTilt({
          x: restingTilt.x + floatX,
          y: restingTilt.y + floatY
        });
      }

      floatAnimRef.current = requestAnimationFrame(animateFloat);
    };

    floatAnimRef.current = requestAnimationFrame(animateFloat);

    return () => {
      running = false;
      if (floatAnimRef.current) cancelAnimationFrame(floatAnimRef.current);
    };
  }, [isHovered]);

  // Mouse Parallax Tilt
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
      x: restingTilt.x - factorX * 4,
      y: restingTilt.y + factorY * 6
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt(restingTilt);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[1040px] mx-auto select-none lg:py-2"
      style={{ perspective: '1600px' }}
      aria-label="Interactive 3D Project Centerpiece"
    >
      {/* Ambient Orange Volumetric Glow */}
      <div 
        className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 w-[760px] h-[520px] rounded-full pointer-events-none -z-10 blur-[100px] opacity-45"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,98,72,0.45) 0%, rgba(255,121,87,0.18) 45%, transparent 70%)'
        }}
      />

      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 xl:gap-6">
        
        {/* ========================================================
            CENTER STAGE: 3D AMPHITHEATER FAN OF CARDS
           ======================================================== */}
        <div className="relative w-full xl:flex-1 flex justify-center items-center py-4 sm:py-8 overflow-visible">
          
          {/* Main 3D Tilted Stage Wrapper */}
          <div 
            className="relative w-full max-w-[560px] sm:max-w-[580px] transition-transform duration-500 ease-out"
            style={{
              transform: `rotateY(${tilt.y}deg) rotateX(${tilt.x}deg) rotateZ(-1deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* ----------------------------------------------------
                ORANGE NEON PORTAL ARC (Wrapping directly behind browser)
               ---------------------------------------------------- */}
            <div 
              className="absolute -top-16 -left-20 -right-16 -bottom-10 pointer-events-none -z-10"
              style={{ transform: 'translateZ(-90px)' }}
            >
              <svg className="w-full h-full" viewBox="0 0 700 520" fill="none">
                <defs>
                  <linearGradient id="arcGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7957" stopOpacity="0.95" />
                    <stop offset="45%" stopColor="#FF6248" stopOpacity="0.9" />
                    <stop offset="80%" stopColor="#FFA07A" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FF6248" stopOpacity="0" />
                  </linearGradient>
                  <filter id="arcGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="12" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 660 480 C 660 160, 520 20, 280 40 C 160 50, 70 120, 20 220"
                  stroke="url(#arcGlowGradient)"
                  strokeWidth="4.5"
                  fill="none"
                  filter="url(#arcGlowFilter)"
                />
              </svg>
            </div>

            {/* ----------------------------------------------------
                CARD 1: FAR LEFT (Sahyog Sagar - Community / NGO)
               ---------------------------------------------------- */}
            <button 
              type="button"
              onClick={() => handleSelectProject(backIdx)}
              title={`Switch to ${backProject.title}`}
              className="hidden lg:block absolute -left-[160px] top-10 w-[185px] h-[330px] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.8)] opacity-45 hover:opacity-85 hover:border-[#FF6248] cursor-pointer transition-all duration-700 text-left group z-0"
              style={{
                transform: 'rotateY(26deg) rotateZ(-5deg) translateZ(-115px) translateY(18px)',
                background: '#060A10'
              }}
            >
              <img 
                src={backProject.image} 
                alt={backProject.title} 
                className="w-full h-full object-cover brightness-55 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-transparent to-black/50" />
              <div className="absolute top-3.5 left-3.5">
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-black/60 text-amber-300 border border-amber-400/30">
                  {backProject.badge}
                </span>
              </div>
              <div className="absolute bottom-4 left-3.5 right-3.5">
                <p className="text-sm font-bold text-white leading-tight truncate">{backProject.title}</p>
                <span className="text-[11px] text-slate-400 block truncate mt-0.5">{backProject.category}</span>
              </div>
            </button>

            {/* ----------------------------------------------------
                CARD 2: MID LEFT (Agriqen Seeds - Agriculture & Biotech)
               ---------------------------------------------------- */}
            <button 
              type="button"
              onClick={() => handleSelectProject(prevIdx)}
              title={`Switch to ${prevProject.title}`}
              className="hidden sm:block absolute -left-[90px] sm:-left-[110px] top-4 w-[215px] sm:w-[235px] h-[350px] sm:h-[390px] rounded-2xl overflow-hidden border border-white/20 shadow-[0_25px_50px_rgba(0,0,0,0.85)] opacity-80 hover:opacity-100 hover:border-[#FF6248] hover:shadow-[0_0_25px_rgba(255,98,72,0.4)] cursor-pointer transition-all duration-700 text-left group z-10"
              style={{
                transform: 'rotateY(20deg) rotateZ(-3deg) translateZ(-55px) translateY(8px)',
                background: '#0A111B'
              }}
            >
              {/* Neon Orange Rim Light Highlight */}
              <div 
                className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,98,72,0.8) 0%, transparent 60%)',
                  filter: 'blur(1px)'
                }}
              />
              <img 
                src={prevProject.image} 
                alt={prevProject.title} 
                className="w-full h-full object-cover brightness-65 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-[#05080D]/40 to-black/30" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
                <span className="text-xs font-bold text-white font-display tracking-tight">
                  {prevProject.title}
                </span>
              </div>

              <div className="absolute bottom-5 left-4 right-4 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                  {prevProject.badge}
                </span>
                <p className="text-sm font-bold text-white leading-snug line-clamp-2">
                  {prevProject.tagline}
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-white/90 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 text-[#FF7957]" />
                  </span>
                </div>
              </div>
            </button>

            {/* ----------------------------------------------------
                CARD 3: RIGHT LAYERED (Law & Legal Bureau - Lady Justice)
               ---------------------------------------------------- */}
            <button 
              type="button"
              onClick={() => handleSelectProject(nextIdx)}
              title={`Switch to ${nextProject.title}`}
              className="hidden sm:block absolute -right-[90px] sm:-right-[110px] top-6 w-[215px] sm:w-[235px] h-[355px] sm:h-[395px] rounded-2xl overflow-hidden border border-white/20 shadow-[0_25px_50px_rgba(0,0,0,0.85)] opacity-80 hover:opacity-100 hover:border-[#FF6248] hover:shadow-[0_0_25px_rgba(255,98,72,0.4)] cursor-pointer transition-all duration-700 text-left group z-10"
              style={{
                transform: 'rotateY(-22deg) rotateZ(3deg) translateZ(-45px) translateY(6px)',
                background: '#0A111B'
              }}
            >
              {/* Neon Orange Rim Light Highlight */}
              <div 
                className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(225deg, rgba(255,98,72,0.85) 0%, transparent 60%)',
                  filter: 'blur(1px)'
                }}
              />
              <img 
                src={nextProject.image} 
                alt={nextProject.title} 
                className="w-full h-full object-cover brightness-65 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-[#05080D]/40 to-black/30" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_6px_#8B5CF6]" />
                <span className="text-xs font-bold text-white font-display tracking-tight">
                  {nextProject.title}
                </span>
              </div>

              <div className="absolute bottom-5 left-4 right-4 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-semibold block">
                  {nextProject.badge}
                </span>
                <p className="text-sm font-bold text-white leading-snug line-clamp-2">
                  {nextProject.tagline}
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-white/90 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    <span>Up Next</span>
                    <ArrowRight className="w-3 h-3 text-[#FF6248]" />
                  </span>
                </div>
              </div>
            </button>

            {/* ----------------------------------------------------
                ORANGE NEON RIM GLOW (Surrounding Main Center Browser)
               ---------------------------------------------------- */}
            <div 
              className="absolute -inset-2.5 rounded-[32px] pointer-events-none opacity-90 blur-md z-20"
              style={{
                background: 'linear-gradient(135deg, rgba(255,98,72,0.95) 0%, rgba(255,121,87,0.6) 40%, rgba(255,98,72,0.2) 75%, transparent 100%)',
              }}
            />
            <div 
              className="absolute -inset-1 rounded-[26px] pointer-events-none z-20"
              style={{
                background: 'linear-gradient(135deg, #FF6248 0%, #FF7957 40%, rgba(255,121,87,0.5) 70%, transparent 100%)',
                filter: 'drop-shadow(0 0 12px #FF6248)'
              }}
            />

            {/* ----------------------------------------------------
                CARD 0: MAIN CENTRAL TILTED BROWSER WINDOW
               ---------------------------------------------------- */}
            <div 
              className="relative rounded-2xl sm:rounded-3xl bg-[#0A111B] border border-white/25 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300 z-20"
              style={{
                boxShadow: isHovered 
                  ? '0 35px 80px -15px rgba(0,0,0,0.98), 0 0 50px -10px rgba(255,98,72,0.45)' 
                  : '0 30px 70px -15px rgba(0,0,0,0.95), 0 0 35px -10px rgba(255,98,72,0.3)'
              }}
            >
              {/* Browser Chrome Toolbar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#05080D]/95 border-b border-white/10 backdrop-blur-md">
                {/* Window Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                </div>

                {/* Animated URL Bar */}
                <div className="flex items-center justify-center flex-1 max-w-xs sm:max-w-sm mx-2">
                  <div className="w-full flex items-center justify-between px-3 py-1 rounded-full bg-[#101722] border border-white/10 text-[11px] font-mono text-slate-300 transition-colors">
                    <span className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-ping" />
                      <span className="truncate transition-all duration-300">{activeProject.displayUrl}</span>
                    </span>
                    <RotateCw className={`w-2.5 h-2.5 text-slate-500 shrink-0 ml-1.5 ${isTransitioning ? 'animate-spin' : ''}`} />
                  </div>
                </div>

                {/* Status Indicator & Autoplay Toggle */}
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold tracking-tight">
                    SSL 256-bit
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    title={isPlaying ? "Pause 3D rotation" : "Play 3D rotation"}
                    className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5 fill-current" />}
                  </button>
                </div>
              </div>

              {/* Realistic In-Browser Webpage Mockup with Generous Height for Legibility */}
              <div className="relative min-h-[440px] sm:min-h-[480px] md:min-h-[500px] overflow-hidden bg-[#05080D]">
                
                {/* Background Image of Project */}
                <img 
                  key={activeProject.id}
                  src={activeProject.image} 
                  alt={activeProject.title}
                  className={`w-full h-full object-cover transition-all duration-700 brightness-75 scale-100 group-hover:scale-105 ${
                    isTransitioning ? 'opacity-80 scale-102' : 'opacity-100'
                  }`}
                />

                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-[#05080D]/55 to-black/45 pointer-events-none" />

                {/* Mock In-Browser Header Bar */}
                <div className="absolute top-0 left-0 right-0 px-4 sm:px-5 py-3 flex items-center justify-between border-b border-white/10 bg-black/55 backdrop-blur-md z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF6248] shadow-[0_0_6px_#FF6248]" />
                    <span className="font-display font-extrabold text-xs sm:text-sm text-white tracking-tight">
                      {activeProject.title}
                    </span>
                  </div>

                  {/* Nav links */}
                  <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-300 font-medium">
                    {activeProject.navLinks.map((link, idx) => (
                      <span key={idx} className="hover:text-white cursor-pointer transition-colors">
                        {link}
                      </span>
                    ))}
                  </div>

                  {/* Blue CTA button inside mock */}
                  <div 
                    className="px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-xs"
                    style={{ background: activeProject.accentColor }}
                  >
                    {activeProject.cta1}
                  </div>
                </div>

                {/* Mock In-Browser Hero Content with Proper Vertical Breathing Room */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 pb-24 sm:pb-28 text-left z-10">
                  <div className="max-w-md space-y-2.5">
                    
                    {/* Badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-xs font-semibold text-white shadow-xs">
                      {activeProject.badge}
                    </span>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold font-display text-white leading-[1.18] drop-shadow-md">
                      {activeProject.tagline}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-slate-200/95 leading-relaxed max-w-md line-clamp-2 drop-shadow-xs">
                      {activeProject.subtagline}
                    </p>
                    
                    {/* Mock Action Buttons */}
                    <div className="flex items-center gap-3 pt-2">
                      <div 
                        className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md flex items-center gap-2 cursor-default"
                        style={{ background: activeProject.accentColor }}
                      >
                        <span>{activeProject.cta1}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <div className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-white/95 bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/20 transition-colors cursor-default">
                        {activeProject.cta2}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* ----------------------------------------------------
                FLOATING FOREGROUND GLASS INFO PANEL (Positioned cleanly below internal buttons)
               ---------------------------------------------------- */}
            <div 
              className="absolute -bottom-8 sm:-bottom-9 left-4 sm:left-7 right-4 sm:right-7 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0A111B]/95 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-30 transition-all duration-300"
              style={{
                transform: 'translateZ(50px)'
              }}
            >
              {/* Project Title & Summary */}
              <div className="space-y-0.5 text-left min-w-0 flex-1 pr-2">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm sm:text-base text-white truncate">
                    {activeProject.title}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                    {activeProject.category}
                  </span>
                </div>
                <p className="text-xs text-[#A7B0BE] line-clamp-1 leading-snug">
                  {activeProject.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#101722] hover:bg-[#151E2A] border border-white/15 hover:border-white/30 text-white font-medium text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <span>Visit Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF7957]" />
                </a>

                <Link
                  to={activeProject.detailsPath}
                  className="px-4 py-1.5 rounded-lg bg-[#FF6248] hover:bg-[#FF7957] text-white font-bold text-xs transition-all shadow-md shadow-[#FF6248]/30 cursor-pointer"
                >
                  Details
                </Link>
              </div>
            </div>

          </div>

          {/* Reflective Floor Horizon Light Trail beneath composition */}
          <div className="relative mt-14 w-full h-8 flex items-center justify-center pointer-events-none">
            <div className="w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF6248] to-transparent opacity-75" />
            <div className="absolute w-3/5 h-5 bg-[#FF6248]/25 blur-lg rounded-full -top-2.5" />
          </div>

        </div>

        {/* ========================================================
            RIGHT: VERTICAL 4-PROJECT SELECTOR WITH PROGRESS
           ======================================================== */}
        <div 
          className="w-full xl:w-[210px] shrink-0 flex xl:flex-col gap-2.5 sm:gap-3 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0 scrollbar-none z-10"
          role="tablist"
          aria-label="Hero Featured Projects Auto-Selector"
        >
          {showcaseProjects.map((project, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectProject(idx)}
                className={`w-full text-left p-2.5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col relative overflow-hidden group shrink-0 min-w-[200px] xl:min-w-0 ${
                  isSelected
                    ? 'bg-[#101722] border-[#FF6248] shadow-[0_0_22px_rgba(255,98,72,0.3)]'
                    : 'bg-[#0A111B]/80 hover:bg-[#101722] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 w-full">
                  {/* Thumbnail */}
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-black/40 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#FF6248]/15 ring-1 ring-[#FF6248] rounded-lg" />
                    )}
                  </div>

                  {/* Title & Category */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`font-display font-bold text-xs sm:text-sm truncate transition-colors ${
                        isSelected ? 'text-[#FF7957]' : 'text-white group-hover:text-[#FF7957]'
                      }`}>
                        {project.title}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] animate-pulse shrink-0" />
                      )}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-[#A7B0BE] block truncate">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Animated Autoplay Progress Bar on Active Tab */}
                {isSelected && (
                  <div className="w-full h-[2px] bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#FF6248] to-[#FF7957] transition-all duration-75 ease-linear rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}

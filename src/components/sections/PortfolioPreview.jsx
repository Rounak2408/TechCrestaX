import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ExternalLink, ShieldCheck, FolderGit2 } from 'lucide-react';
import Reveal from '../motion/Reveal';
import { portfolioData } from '../../data/portfolioData';

// Subtle Floating Sparks Canvas for Cinematic Atmosphere
function PortfolioEmbers() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let isVisible = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let width = 0;
    let height = 0;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const count = 35;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 800),
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.2 - Math.random() * 0.4,
        size: 1.0 + Math.random() * 2.2,
        alpha: 0.15 + Math.random() * 0.7,
        swaySpeed: 0.015 + Math.random() * 0.02,
        swayRange: 0.4 + Math.random() * 0.8,
        time: Math.random() * 100,
      });
    }

    let time = 0;
    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.time += p.swaySpeed;
        p.x += Math.sin(p.time) * p.swayRange + p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 110, 80, ${p.alpha})`;
        ctx.shadowColor = '#FF6248';
        ctx.shadowBlur = 8;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      aria-hidden="true"
    />
  );
}

export default function PortfolioPreview() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'website', label: 'Websites & SEO' },
    { key: 'platforms', label: 'Web Applications' },
    { key: 'ecommerce', label: 'E-commerce' },
  ];

  const displayedProjects = filter === 'all'
    ? portfolioData.slice(0, 6)
    : portfolioData.filter((p) => p.categoryKey === filter).slice(0, 6);

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-28 bg-[#03060C] relative overflow-hidden scroll-mt-20"
      aria-labelledby="portfolio-heading"
    >
      {/* ========================================================
          1. CINEMATIC VOLCANIC ENVIRONMENT & NEON RINGS BACKDROP
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Volcanic Crag Rocks & Neon Laser Ring Backdrop Image */}
        <img
          src="/portfolio_volcanic_backdrop.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-85"
          loading="eager"
        />

        {/* Vertical Fade Gradients for Seamless Section Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060C] via-transparent to-[#03060C] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#03060C_95%)] opacity-75" />

        {/* Ambient Neon Coral Glow Pools */}
        <div className="absolute top-1/4 left-0 w-[450px] h-[300px] bg-[#FF6248]/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[320px] bg-[#FF7957]/15 rounded-full blur-[140px]" />

        {/* Floating Sparks & Embers Layer */}
        <PortfolioEmbers />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            2. SECTION HEADER WITH CALLOUT & ANNOTATION
           ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Reveal delay={0} y={16}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6248]/10 border border-[#FF6248]/30 text-xs font-mono font-bold text-[#FF7957] mb-3 uppercase tracking-wider shadow-[0_0_15px_rgba(255,98,72,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
                Selected Work
              </div>
            </Reveal>

            <Reveal delay={60} y={24} as="div">
              <h2 id="portfolio-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
                Authentic digital products built for{' '}
                <span className="text-[#FF6248] drop-shadow-[0_0_20px_rgba(255,98,72,0.35)]">
                  real business results.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={120} y={20} as="div">
              <p className="text-sm sm:text-base text-[#8E9CAE] max-w-2xl mt-3 leading-relaxed">
                Explore verified medical platforms, corporate agritech flagships, and hospitality websites engineered by TechCrestaX with active production domains.
              </p>
            </Reveal>
          </div>

          {/* Right Action: Cursive Annotation + "View All 11 Projects" Button */}
          <div className="shrink-0 flex flex-col items-start md:items-end">
            <Reveal delay={120} y={16}>
              <div className="relative flex flex-col items-start md:items-end">
                {/* Handwritten Cursive "Real Client Projects" + Curving Arrow */}
                <div className="flex items-center gap-1.5 mb-2 md:mr-6 text-[#FF6248]">
                  <span className="text-base sm:text-lg font-serif italic font-bold tracking-wide text-[#FF6248] drop-shadow-[0_0_8px_rgba(255,98,72,0.5)]">
                    Real Client Projects
                  </span>
                  <svg
                    width="36"
                    height="26"
                    viewBox="0 0 36 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FF6248] translate-y-1.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 3C12 2 28 5 30 18M30 18L22 17M30 18L33 11"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Main Action Button */}
                <Link
                  to="/work"
                  className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6248] to-[#FF4500] hover:from-[#FF7957] hover:to-[#FF6248] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(255,98,72,0.45)] hover:shadow-[0_0_35px_rgba(255,98,72,0.65)] hover:scale-[1.02]"
                  aria-label="View all 11 client projects"
                >
                  <span>View All 11 Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Subtitle Under Button */}
                <div className="flex items-center gap-1.5 mt-2.5 text-[11px] sm:text-xs text-[#8E9CAE]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_6px_#FF6248]" />
                  <span>Trusted by businesses across healthcare, agriculture, hospitality and more.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ========================================================
            3. FILTER TABS
           ======================================================== */}
        <Reveal delay={150} y={16}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat.key
                    ? 'bg-[#FF6248] text-white shadow-[0_0_15px_rgba(255,98,72,0.45)] scale-[1.02]'
                    : 'bg-[#0A111C]/80 backdrop-blur-md text-[#8E9CAE] border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ========================================================
            4. 6 EDITORIAL PROJECT CARDS WITH HERO SPOTLIGHT ON CARD 1
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedProjects.map((project, index) => {
            const isHeroSpotlight = index === 0;

            return (
              <Reveal
                key={project.id}
                delay={Math.min(index * 70, 280)}
                y={26}
                as="div"
                className="h-full flex flex-col"
              >
                <article
                  className={`group relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden h-full ${
                    isHeroSpotlight
                      ? 'bg-[#0A111C]/90 backdrop-blur-xl border-2 border-[#FF6248] ring-1 ring-[#FF6248]/50 shadow-[0_0_35px_rgba(255,98,72,0.45),0_0_70px_rgba(255,98,72,0.2),inset_0_0_15px_rgba(255,98,72,0.12)]'
                      : 'bg-[#0A111C]/80 backdrop-blur-xl border border-white/10 hover:border-[#FF6248]/60 hover:shadow-[0_0_30px_rgba(255,98,72,0.25)]'
                  }`}
                >
                  {/* Corner Accent Light Sheen on Hover */}
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#FF6248]/0 group-hover:bg-[#FF6248]/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Visual Media Container with Badges */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 mb-4">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      
                      {/* Vignette Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05080D]/90 via-transparent to-transparent pointer-events-none" />

                      {/* Top-left Category Pill */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#05080D]/85 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold tracking-wide shadow-xs">
                        {project.badgeCategory || project.type}
                      </div>

                      {/* Top-Right Circular Interactive Arrow */}
                      <Link
                        to={`/work/${project.slug}`}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-[#FF6248] border border-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105"
                        aria-label={`Open details for ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>

                      {/* Bottom-Left Live SSL Link Overlay */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#052e16]/85 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold tracking-tight shadow-xs hover:bg-emerald-950 transition-colors"
                          >
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span>{project.liveUrl.replace('https://www.', '').replace('https://', '').replace(/\/$/, '')}</span>
                            <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-80" />
                          </a>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full bg-amber-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 font-mono text-[10px] font-bold">
                            In Development
                          </span>
                        )}

                        <span className="text-[10px] font-mono text-slate-300/90 font-medium">
                          {project.timeline || '7 Days'}
                        </span>
                      </div>
                    </div>

                    {/* Project Title & Industry */}
                    <div className="mb-2">
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FF7957] transition-colors leading-tight">
                        <Link to={`/work/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-[#8E9CAE] mt-1 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Concise Summary */}
                    <p className="text-xs sm:text-sm text-[#8E9CAE] leading-relaxed line-clamp-2 mb-4 font-normal">
                      {project.summary}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-5">
                      {project.techStack.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/5 text-[#A7B0BE] border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                    <span className="inline-flex items-center gap-1.5 text-[#8E9CAE] font-mono text-[11px]">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#FF6248]" />
                      <span className="line-clamp-1">{project.clientType}</span>
                    </span>

                    <Link
                      to={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-white group-hover:text-[#FF7957] transition-colors shrink-0"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ========================================================
            5. CLEAN ASSURANCE BANNER WITH SHIELD & ESTIMATE BUTTON
           ======================================================== */}
        <Reveal delay={100} y={20}>
          <div className="mt-12 sm:mt-14 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0B111F]/90 backdrop-blur-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative z-20">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#FF6248]/10 text-[#FF6248] border border-[#FF6248]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,98,72,0.2)]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Every project includes <span className="text-[#FF7957] font-bold">1st-year</span> free maintenance & full code handover
                </h4>
                <p className="text-xs sm:text-sm text-[#8E9CAE] mt-0.5">
                  Starting at ₹7,000+ with 100% intellectual property ownership, zero vendor lock-in, and reliable support.
                </p>
              </div>
            </div>

            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('enquiry');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#enquiry');
                }
              }}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer group"
            >
              <span>Request Estimate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>

        {/* ========================================================
            6. REFLECTIVE WET GROUND HORIZON SHEEN (From Image 2)
           ======================================================== */}
        <div className="relative mt-8 sm:mt-10 w-full h-10 flex items-center justify-center pointer-events-none">
          <div className="w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF6248] to-transparent opacity-85 shadow-[0_0_15px_#FF6248]" />
          <div className="absolute w-3/5 h-6 bg-[#FF6248]/25 blur-xl rounded-full -top-3" />
          <div className="absolute w-1/3 h-12 bg-[#FF7957]/15 blur-2xl rounded-full -top-6" />
        </div>

      </div>
    </section>
  );
}

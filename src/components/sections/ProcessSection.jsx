import React, { useState } from 'react';
import { 
  Search, 
  PenTool, 
  Code, 
  Rocket, 
  ArrowRight, 
  FileText,
  Users,
  Target,
  Layers
} from 'lucide-react';
import Reveal from '../motion/Reveal';

const processStages = [
  {
    step: "01",
    stageNum: 1,
    title: "Discovery",
    subtitle: "Milestone Sprint",
    icon: Search,
    description: "We understand your business, goals, audience, and project requirements in depth.",
    deepDesc: "We understand your business, goals, audience, and project requirements before starting execution. This ensures a clear roadmap and zero ambiguity throughout the project.",
    deliverable: "Project Roadmap, Scope Spec & Tech Stack Selection",
    cadence: "3 to 7 Working Days",
    reviewGate: "Interactive Sign-Off",
    nextStage: "Design",
    activities: [
      { text: "Requirement scoping & user journey discovery", icon: Users },
      { text: "Competitor analysis & value positioning", icon: Target },
      { text: "Information architecture & content structure", icon: Layers },
      { text: "Technical stack & milestone schedule definition", icon: Code }
    ]
  },
  {
    step: "02",
    stageNum: 2,
    title: "Design",
    subtitle: "Milestone Sprint",
    icon: PenTool,
    description: "We create a modern visual direction, wireframes, and interactive prototypes.",
    deepDesc: "We create a modern visual direction, wireframes, and interactive prototypes focused on brand clarity and conversion.",
    deliverable: "High-Fidelity Wireframes & Interactive Prototypes",
    cadence: "3 to 7 Working Days",
    reviewGate: "Interactive Sign-Off",
    nextStage: "Development",
    activities: [
      { text: "Design tokens & responsive UI component library", icon: Layers },
      { text: "Mobile-first layouts (320px to 4K displays)", icon: Target },
      { text: "Micro-interaction choreography & typography scale", icon: Users },
      { text: "WCAG accessibility contrast validation", icon: Code }
    ]
  },
  {
    step: "03",
    stageNum: 3,
    title: "Development",
    subtitle: "Milestone Sprint",
    icon: Code,
    description: "We turn the approved design into a fast, responsive, and scalable product.",
    deepDesc: "We engineer production-ready code with clean semantics, modern React architecture, and sub-second loading.",
    deliverable: "Production Codebase & Staging Preview",
    cadence: "3 to 7 Working Days",
    reviewGate: "Interactive Sign-Off",
    nextStage: "Launch",
    activities: [
      { text: "Modern React & component-driven engineering", icon: Code },
      { text: "Clean semantic markup & responsive CSS styling", icon: Layers },
      { text: "API integrations & custom business logic", icon: Target },
      { text: "Staging preview links for client review", icon: Users }
    ]
  },
  {
    step: "04",
    stageNum: 4,
    title: "Launch",
    subtitle: "Milestone Sprint",
    icon: Rocket,
    description: "We test, deploy, and support your product to ensure a smooth, successful launch.",
    deepDesc: "We execute comprehensive QA testing, DNS domain deployment, SSL certification, and commence 1-year free maintenance.",
    deliverable: "Live Production Release & Post-Launch Support",
    cadence: "1 to 2 Working Days",
    reviewGate: "Interactive Sign-Off",
    nextStage: "Discovery",
    activities: [
      { text: "Cross-browser & multi-device QA validation", icon: Target },
      { text: "Domain DNS mapping, SSL & technical SEO launch", icon: Layers },
      { text: "Source code repository & IP assets handover", icon: Code },
      { text: "Activation of 1-year free maintenance guarantee", icon: Users }
    ]
  }
];

export default function ProcessSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentStage = processStages[activeIdx] || processStages[0];

  return (
    <section 
      id="process" 
      className="py-16 sm:py-20 lg:py-28 bg-[#03060C] relative scroll-mt-20 overflow-hidden" 
      aria-labelledby="process-heading"
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

        {/* Vertical Fade Gradients for Seamless Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060C] via-transparent to-[#03060C] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#03060C_95%)] opacity-75" />

        {/* Ambient Neon Coral Glow Pools */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[320px] bg-[#FF6248]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-[550px] h-[350px] bg-[#FF7957]/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            2. SECTION HEADER (Matching Picture 2 Exactly)
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal delay={0} y={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6248]/10 border border-[#FF6248]/30 text-xs font-mono font-bold text-[#FF7957] mb-3 uppercase tracking-wider shadow-[0_0_15px_rgba(255,98,72,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
              Delivery Methodology
            </div>
          </Reveal>

          <Reveal delay={60} y={24} as="div">
            <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              A structured process for{' '}
              <span className="text-[#FF6248] drop-shadow-[0_0_20px_rgba(255,98,72,0.35)]">
                predictable results.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120} y={20} as="div">
            <p className="text-sm sm:text-base text-[#8E9CAE] max-w-2xl mx-auto mt-3 leading-relaxed">
              We eliminate ambiguity through transparent, milestone-driven sprints. You know exactly what is being designed, built, and tested at every stage.
            </p>
          </Reveal>
        </div>

        {/* ========================================================
            3. TOP 4 PROCESS STAGE CARDS WITH CONNECTIVE ARROWS & PROGRESSION
           ======================================================== */}
        <div className="relative mb-8 sm:mb-10">
          {/* Subtle connecting progress line behind cards (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 -translate-y-1/2 z-0 pointer-events-none">
            <div className="w-full h-full bg-white/10 relative overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#FF6248] via-[#FF7957] to-[#FFA07A] transition-all duration-500 shadow-[0_0_10px_#FF6248]"
                style={{ width: `${((activeIdx + 1) / processStages.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch relative z-10">
            {processStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = idx === activeIdx;
              const hasNext = idx < processStages.length - 1;

              return (
                <Reveal key={stage.step} delay={idx * 80} y={20} as="div" className="h-full flex-1">
                  <div className="relative h-full">
                    <button
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between h-full cursor-pointer group relative ${
                        isActive
                          ? 'bg-[#0A111C]/95 border-2 border-[#FF6248] ring-1 ring-[#FF6248]/50 shadow-[0_0_35px_rgba(255,98,72,0.45),inset_0_0_15px_rgba(255,98,72,0.12)] scale-[1.02]'
                          : 'bg-[#0A111C]/85 backdrop-blur-xl border border-white/12 hover:border-[#FF6248]/50 hover:bg-[#101726]/80'
                      }`}
                      aria-pressed={isActive}
                    >
                      <div>
                        {/* Top Bar: Number Tag on Left, Stage Pill on Right */}
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                            isActive
                              ? 'bg-[#FF6248]/20 text-[#FF7957] border border-[#FF6248]/40 shadow-[0_0_8px_rgba(255,98,72,0.3)]'
                              : 'bg-white/5 text-slate-400 border border-white/10 group-hover:text-white'
                          }`}>
                            {stage.step}
                          </span>

                          <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold transition-colors ${
                            isActive
                              ? 'bg-black/50 text-[#FF7957] border border-[#FF6248]/50 shadow-[0_0_10px_rgba(255,98,72,0.2)]'
                              : 'bg-white/5 text-slate-300 border border-white/10'
                          }`}>
                            Stage {stage.stageNum}
                          </span>
                        </div>

                        {/* Icon Container */}
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center my-3 transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-[#FF6248] to-[#FF4500] text-white shadow-[0_0_20px_rgba(255,98,72,0.5)] scale-105'
                            : 'bg-[#0E1522] border border-[#FF6248]/40 text-[#FF7957] group-hover:scale-105 group-hover:border-[#FF6248]'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-0.5 mb-2">
                          <h3 className="text-lg font-bold font-display text-white group-hover:text-[#FF7957] transition-colors">
                            {stage.title}
                          </h3>
                          <div className="text-xs text-[#8E9CAE] font-medium">
                            {stage.subtitle}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-[#8E9CAE] leading-relaxed mb-5 min-h-[48px]">
                          {stage.description}
                        </p>
                      </div>

                      {/* Stage Deliverable Footer */}
                      <div className="pt-3 border-t border-white/10">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                          Stage Deliverable
                        </span>
                        <div className="text-xs font-semibold text-slate-200 flex items-start gap-1.5 leading-snug">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1 ${
                            isActive ? 'bg-[#FF6248] shadow-[0_0_6px_#FF6248] animate-pulse' : 'bg-[#FF6248]/80'
                          }`} />
                          <span className="line-clamp-2">{stage.deliverable}</span>
                        </div>
                      </div>
                    </button>

                    {/* Connective Chevron Arrow (Centered between cards on desktop) */}
                    {hasNext && (
                      <div 
                        className={`hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full border items-center justify-center shadow-lg pointer-events-none transition-colors duration-300 ${
                          idx < activeIdx 
                            ? 'bg-[#FF6248] border-[#FF7957] text-white shadow-[0_0_12px_rgba(255,98,72,0.5)]' 
                            : 'bg-[#0A111C] border-white/20 text-[#8E9CAE]'
                        }`}
                        aria-hidden="true"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            4. BOTTOM MASTER DEEP-DIVE CONTAINER (Full-Width Matching Picture 2)
           ======================================================== */}
        <Reveal delay={160} y={24} as="div">
          <div className="w-full bg-[#0A111C]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden text-left">

          
          {/* Ambient Corner Coral Sheen */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#FF6248]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Sub-Column: Header with Vertical Coral Bar, Title, Copy, and 2x2 Activities */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Header Badge */}
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7957]">
                  Stage {currentStage.step} / 04 • Active Sprint Deep Dive
                </span>
              </div>

              {/* Title & Description with Vertical Accent Line */}
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-12 rounded-full bg-[#FF6248] shadow-[0_0_15px_#FF6248] shrink-0 mt-1" />
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white leading-tight">
                    {currentStage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E9CAE] mt-2.5 leading-relaxed font-normal max-w-xl">
                    {currentStage.deepDesc}
                  </p>
                </div>
              </div>

              {/* 2x2 Sprint Activities with Dedicated Coral Icon Containers */}
              <div className="pt-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 block">
                  Key Sprint Activities & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStage.activities.map((act) => {
                    const ActIcon = act.icon;
                    return (
                      <div 
                        key={act.text}
                        className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/10 text-xs font-medium text-slate-200"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#FF6248]/15 border border-[#FF6248]/35 text-[#FF7957] flex items-center justify-center shrink-0">
                          <ActIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{act.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Sub-Column: Guaranteed Milestone Output SLA Card */}
            <div className="lg:col-span-5 bg-[#060A12]/90 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl text-left">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                  Guaranteed Milestone Output
                </span>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6248]/15 border border-[#FF6248]/35 text-[#FF7957] flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {currentStage.deliverable}
                  </span>
                </div>
              </div>

              {/* SLA Specs */}
              <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#8E9CAE] font-mono">Sprint Cadence:</span>
                  <span className="font-semibold text-white">{currentStage.cadence}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8E9CAE] font-mono">Client Review Gate:</span>
                  <span className="font-bold text-[#FF7957]">{currentStage.reviewGate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8E9CAE] font-mono">Next Milestone:</span>
                  <span className="font-semibold text-white">{currentStage.nextStage}</span>
                </div>
              </div>

              {/* Glowing Coral CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveIdx((prev) => (prev + 1) % processStages.length)}
                  className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-[#FF6248] to-[#FF4500] hover:from-[#FF7957] hover:to-[#FF6248] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,98,72,0.45)] hover:shadow-[0_0_35px_rgba(255,98,72,0.65)] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <span>Advance to Next Stage</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
        </Reveal>

      </div>
    </section>
  );
}

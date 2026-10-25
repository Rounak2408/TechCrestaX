import React, { useState, useRef } from 'react';
import { CheckCircle2, Clock, ArrowRight, FileCheck } from 'lucide-react';

export default function IsometricWorkflow3D({ steps = [] }) {
  const [activeStep, setActiveStep] = useState(0);
  const tabRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    let nextIndex = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (index + 1) % steps.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (index - 1 + steps.length) % steps.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = steps.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      setActiveStep(nextIndex);
      if (tabRefs.current[nextIndex]) {
        tabRefs.current[nextIndex].focus();
      }
    }
  };

  const currentStep = steps[activeStep] || steps[0];

  return (
    <div className="w-full space-y-8" aria-label="Interactive Development Process Timeline">
      {/* 4-Stage Pathway Track */}
      <div className="relative py-2">
        {/* Visual Connecting Line for desktop with traveling laser energy beam */}
        <div
          className="hidden lg:block absolute top-[44px] left-12 right-12 h-0.5 bg-white/10 -translate-y-1/2 z-0 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-[#FF6248] to-transparent shadow-[0_0_14px_#FF6248]"
            style={{
              animation: 'laserTravelHorizontal 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            }}
          />
        </div>

        {/* Accessible Tab List */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10"
          role="tablist"
          aria-label="Development Process Stages"
        >
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.step}
                ref={(el) => (tabRefs.current[idx] = el)}
                role="tab"
                id={`process-tab-${idx}`}
                aria-selected={isSelected}
                aria-controls={`process-panel-${idx}`}
                tabIndex={isSelected ? 0 : -1}
                type="button"
                onClick={() => setActiveStep(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`group text-left p-6 rounded-2xl transition-all duration-300 border cursor-pointer focus:outline-none theme-card-interactive ${
                  isSelected
                    ? 'bg-[#101722] border-[#FF6248] shadow-[0_0_30px_rgba(255,98,72,0.35)] scale-[1.02] ring-1 ring-[#FF6248]'
                    : 'bg-[#0A111B] hover:bg-[#101722] border-white/10 shadow-xs hover:border-white/20 hover:scale-[1.01]'
                }`}
              >
                {/* Step Node Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    {isSelected && (
                      <span className="coral-radar-ring" />
                    )}
                    <span
                      className={`relative z-10 w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-colors shadow-xs ${
                        isSelected
                          ? 'bg-[#FF6248] text-white shadow-[0_0_15px_rgba(255,98,72,0.5)]'
                          : 'bg-[#151E2A] text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {step.step}
                    </span>
                  </div>

                  <span
                    className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full transition-colors ${
                      isSelected
                        ? 'bg-[#FF6248]/15 text-[#FF7957] border border-[#FF6248]/30 shadow-xs'
                        : 'bg-[#151E2A] text-[#A7B0BE]'
                    }`}
                  >
                    Stage {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#FF7957] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#A7B0BE] font-mono mb-3 line-clamp-1">
                  {step.subtitle || 'Milestone Sprint'}
                </p>

                <p className="text-xs sm:text-sm text-[#A7B0BE] leading-relaxed line-clamp-2 mb-4">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Stage Deliverable
                  </span>
                  <span className="text-xs font-semibold text-slate-200 line-clamp-1 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-[#FF6248]' : 'bg-slate-600'}`} />
                    {step.deliverable}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Deep-Dive Panel */}
      {currentStep && (
        <div
          role="tabpanel"
          id={`process-panel-${activeStep}`}
          aria-labelledby={`process-tab-${activeStep}`}
          tabIndex={0}
          className="bg-[#0A111B] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/15 focus:outline-none transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle tech background grid */}
          <div className="absolute inset-0 cinematic-grid opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stage Overview */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF7957]">
                <Clock className="w-4 h-4" />
                <span>STAGE {currentStep.step} / 04 ACTIVE SPRINT DEEP DIVE</span>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {currentStep.title}
                </h4>
                {currentStep.subtitle && (
                  <p className="text-sm font-mono text-slate-400 mt-1">
                    {currentStep.subtitle}
                  </p>
                )}
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              {/* Activities Checklist */}
              {currentStep.activities && currentStep.activities.length > 0 && (
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Key Sprint Activities & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStep.activities.map((activity, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B4A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Stage Deliverable & SLA Card */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5 backdrop-blur-md">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  Guaranteed Milestone Output
                </span>
                <div className="text-base font-bold text-white flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#FF6B4A] shrink-0" />
                  <span>{currentStep.deliverable}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Sprint Cadence:</span>
                  <span className="font-semibold text-white">3 to 7 Working Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Client Review Gate:</span>
                  <span className="font-semibold text-[#FF6B4A]">Interactive Sign-Off</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono">Next Milestone:</span>
                  <span className="font-semibold text-white">
                    {steps[(activeStep + 1) % steps.length]?.title || 'Launch'}
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Advance to Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

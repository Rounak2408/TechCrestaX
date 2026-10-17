import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { reviewsData } from '../../data/reviewsData';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const activeReview = reviewsData[activeIndex] || reviewsData[0];
  const intervalDuration = 4200; // 4.2 seconds per customer review

  // Continuous Automatic Rotation (Never pauses or freezes, always rotates smoothly)
  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / intervalDuration) * 100, 100);
      setProgress(pct);

      if (elapsed >= intervalDuration) {
        setActiveIndex((prev) => (prev + 1) % reviewsData.length);
        setProgress(0);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
    setProgress(0);
  };

  const handleSelectReview = (idx) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  return (
    <section
      className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 relative overflow-hidden transition-colors"
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle tech dot pattern */}
      <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime-400/10 dark:bg-lime-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Client Reviews"
            title="Trusted by founders and"
            highlight="growing teams"
            description="Authentic feedback from company founders, product leaders, and marketing directors who partnered with TechCrestaX to engineer their digital products."
          />

          {/* Rating Summary & Slide Controls */}
          <div className="flex items-center gap-3">
            <div className="shrink-0 p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="border-l border-slate-200 dark:border-slate-700 pl-3">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">5.0 / 5.0 Rating</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Verified Client Feedback</span>
              </div>
            </div>

            {/* Next / Prev Controls */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Grand Featured Showcase Stage (Automatic One-by-One Rotation) */}
        <div className="relative mb-8">
          <article
            className="group relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-2 border-slate-200/90 dark:border-slate-800 hover:border-[#65a30d] dark:hover:border-[#84cc16] rounded-3xl p-7 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300 overflow-hidden"
          >
            {/* Auto-rotation Progress Line on top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full bg-gradient-to-r from-[#4d7c0f] via-[#65a30d] to-[#84cc16] transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Top Bar: Stars, Verified Pill, Slide Count & Live Pulse */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {activeReview.verifiedOutcome && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{activeReview.verifiedOutcome}</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#4d7c0f] dark:text-[#84cc16]">
                  Auto Rotating
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                  0{activeIndex + 1} / 0{reviewsData.length}
                </span>
              </div>
            </div>

            {/* Main Animated Quote */}
            <div className="relative min-h-[110px] sm:min-h-[90px] flex items-center mb-8">
              <p
                key={activeReview.id}
                className="text-lg sm:text-2xl lg:text-[25px] font-normal font-sans text-slate-800 dark:text-slate-100 leading-relaxed italic tracking-tight animate-in fade-in zoom-in-98 duration-300"
              >
                “{activeReview.quote}”
              </p>
            </div>

            {/* Bottom Meta & Client Attribution */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-12 h-12 rounded-2xl ${activeReview.avatarBg} font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-xs`}
                >
                  {activeReview.initials}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {activeReview.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {activeReview.role}, <span className="font-semibold text-slate-700 dark:text-slate-200">{activeReview.company}</span>
                  </p>
                </div>
              </div>

              {activeReview.projectSlug && (
                <Link
                  to={`/work/${activeReview.projectSlug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0b1329] dark:hover:bg-white text-slate-800 dark:text-slate-200 hover:text-white dark:hover:text-slate-900 text-xs sm:text-sm font-semibold transition-all duration-200 self-start sm:self-auto group/btn shadow-xs"
                >
                  <span>View Case Study ({activeReview.projectTitle})</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              )}
            </div>
          </article>
        </div>

        {/* Interactive Client Review Thumbnails / Pills (Synced with live auto-rotation) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {reviewsData.map((review, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={review.id}
                type="button"
                onClick={() => handleSelectReview(idx)}
                className={`relative p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer overflow-hidden ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-[#65a30d] dark:border-[#84cc16] ring-2 ring-lime-500/20 shadow-md'
                    : 'bg-white/60 dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 opacity-75 hover:opacity-100'
                }`}
              >
                {/* Active progress indicator strip on active client pill */}
                {isSelected && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 dark:bg-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-[#4d7c0f] to-[#84cc16] transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="flex items-center gap-2.5 mb-1.5 pt-1">
                  <div className={`w-7 h-7 rounded-xl ${review.avatarBg} font-mono font-bold text-[10px] flex items-center justify-center shrink-0`}>
                    {review.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {review.name}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      {review.company}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 italic">
                  "{review.quote}"
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

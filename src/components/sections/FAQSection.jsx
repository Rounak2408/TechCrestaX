import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight, MessageSquare, HelpCircle } from 'lucide-react';
import Reveal from '../motion/Reveal';
import { faqsData } from '../../data/faqsData';

export default function FAQSection({ faqs = faqsData, limit = 4 }) {
  const rawItems = Array.isArray(faqs) && faqs.length > 0 ? faqs : faqsData;
  const normalizedItems = rawItems.map((faq, index) => ({
    id: faq.id !== undefined ? faq.id : index,
    question: faq.question || faq.q || 'Frequently Asked Question',
    answer: faq.answer || faq.a || '',
    category: faq.category || '',
  }));

  const items = limit ? normalizedItems.slice(0, limit) : normalizedItems;
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="py-16 sm:py-20 lg:py-28 bg-[#03060C] relative scroll-mt-20 overflow-hidden" 
      aria-labelledby="faq-heading"
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
          loading="lazy"
          decoding="async"
        />

        {/* Vertical Fade Gradients for Seamless Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060C] via-transparent to-[#03060C] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#03060C_95%)] opacity-75" />

        {/* Ambient Neon Coral Glow Pools */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[320px] bg-[#FF6248]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-[550px] h-[350px] bg-[#FF7957]/15 rounded-full blur-[140px]" />
      </div>

      {/* ========================================================
          FLOATING 3D HOLOGRAPHIC TOKENS (Matching Picture 2)
         ======================================================== */}
      {/* Left Token: FAQ Chat Bubble Card */}
      <div 
        className="hidden 2xl:flex absolute left-12 top-1/2 -translate-y-1/2 z-10 w-28 h-36 rounded-2xl bg-[#0A111C]/90 border border-[#FF6248]/40 shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_20px_rgba(255,98,72,0.3)] backdrop-blur-xl p-4 flex-col justify-between transform -rotate-6 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-10 h-10 rounded-xl bg-[#FF6248]/15 text-[#FF7957] flex items-center justify-center border border-[#FF6248]/30">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <div className="w-12 h-1 bg-white/20 rounded-full" />
          <div className="w-8 h-1 bg-white/10 rounded-full" />
        </div>
        <div className="self-end px-2 py-0.5 rounded-md bg-[#FF6248]/20 border border-[#FF6248]/40 text-[#FF7957] font-mono text-[10px] font-bold shadow-[0_0_8px_rgba(255,98,72,0.3)]">
          FAQ
        </div>
      </div>

      {/* Right Token: Question Mark Token */}
      <div 
        className="hidden 2xl:flex absolute right-12 top-1/2 -translate-y-1/2 z-10 w-28 h-36 rounded-2xl bg-[#0A111C]/90 border border-[#FF6248]/40 shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_20px_rgba(255,98,72,0.3)] backdrop-blur-xl p-4 flex-col justify-between transform rotate-6 pointer-events-none"
        aria-hidden="true"
      >
        <div className="text-3xl font-extrabold font-serif text-[#FF7957] self-end drop-shadow-[0_0_12px_rgba(255,98,72,0.6)]">
          ?
        </div>
        <div className="space-y-1.5">
          <div className="w-14 h-1.5 bg-white/20 rounded-full" />
          <div className="w-10 h-1.5 bg-white/10 rounded-full" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            2. SECTION HEADER (Matching Picture 2)
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal delay={0} y={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6248]/10 border border-[#FF6248]/30 text-xs font-mono font-bold text-[#FF7957] mb-3 uppercase tracking-wider shadow-[0_0_15px_rgba(255,98,72,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
              Frequently Asked
            </div>
          </Reveal>

          <Reveal delay={60} y={24} as="div">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3 leading-tight">
              Questions before{' '}
              <span className="text-[#FF6248] drop-shadow-[0_0_20px_rgba(255,98,72,0.35)]">
                starting a project.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120} y={20} as="div">
            <p className="text-sm sm:text-base text-[#8E9CAE] leading-relaxed max-w-2xl mx-auto font-normal">
              Here are answers to some common questions about our process, timelines and services.
            </p>
          </Reveal>
        </div>

        {/* ========================================================
            3. ACCORDION LIST (Matching Picture 2)
           ======================================================== */}
        <div className="space-y-4 mb-12">
          {items.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <Reveal
                key={faq.id}
                delay={Math.min(index * 60, 240)}
                y={18}
                as="div"
                className="w-full"
              >
                <div
                  className={`rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden relative ${
                    isOpen
                      ? 'bg-[#0A111C]/95 border-2 border-[#FF6248] ring-1 ring-[#FF6248]/50 shadow-[0_0_35px_rgba(255,98,72,0.45),inset_0_0_15px_rgba(255,98,72,0.12)] p-6 sm:p-7'
                      : 'bg-[#0A111C]/85 backdrop-blur-xl border border-white/12 hover:border-white/25 hover:bg-[#101726]/70 p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] cursor-pointer'
                  }`}
                >
                  {/* Header Button */}
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Circular Question Mark Icon Box */}
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#FF6248]/15 border border-[#FF6248]/40 text-[#FF7957] shadow-[0_0_10px_rgba(255,98,72,0.2)]'
                          : 'bg-[#FF6248]/10 border border-[#FF6248]/30 text-[#FF7957] group-hover:bg-[#FF6248]/15'
                      }`}>
                        ?
                      </div>

                      {/* Question Text */}
                      <span className={`text-base sm:text-lg font-bold font-display leading-snug transition-colors ${
                        isOpen ? 'text-white' : 'text-white group-hover:text-slate-100'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    {/* Circular Chevron Button (Matching Picture 2) */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-br from-[#FF6248] to-[#FF4500] text-white shadow-[0_0_12px_rgba(255,98,72,0.4)]'
                          : 'bg-white/5 border border-white/10 text-[#8E9CAE] group-hover:text-white group-hover:border-white/20'
                      }`}
                    >
                      <ChevronDown className={`w-4 h-4 stroke-[2.5] transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`} />
                    </div>
                  </button>

                  {/* Expandable Answer Body with smooth CSS Grid height transition */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className={`grid transition-all duration-300 ease-out text-left ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pt-4 mt-4 border-t border-white/10'
                        : 'grid-rows-[0fr] opacity-0 pt-0 mt-0 border-t-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-[#8E9CAE] leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ========================================================
            4. VIEW ALL FAQS BUTTON (Matching Picture 2)
           ======================================================== */}
        <Reveal delay={120} y={16}>
          <div className="text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0A111C]/90 hover:bg-[#101726] border-2 border-[#FF6248]/60 hover:border-[#FF6248] text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,98,72,0.25)] hover:shadow-[0_0_30px_rgba(255,98,72,0.45)] transition-all hover:scale-[1.02] group cursor-pointer"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF7957] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { faqsData } from '../../data/faqsData';

export default function FAQSection({ faqs = faqsData, limit = 5 }) {
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
    <section className="py-16 lg:py-24 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#090e1a] relative transition-colors" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Questions before"
            highlight="starting a project."
            description="Here are answers to some common questions about our process, timelines and services."
            align="center"
          />
        </div>

        <div className="space-y-3.5 mb-10">
          {items.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50/70 dark:bg-slate-800/60 border-[#eccbd6] dark:border-[#F7DCE5]/40 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white cursor-pointer group"
                >
                  <span className={`text-base sm:text-[17px] font-bold leading-snug transition-colors ${
                    isOpen ? 'text-slate-950 dark:text-white' : 'text-slate-900 dark:text-white group-hover:text-slate-950 dark:group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white'
                        : 'text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All FAQs Link */}
        <div className="text-center">
          <Button to="/faq" variant="secondary" size="md" showArrow>
            View All Frequently Asked Questions
          </Button>
        </div>
      </div>
    </section>
  );
}

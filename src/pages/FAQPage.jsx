import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, MessageSquare, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import ClosingCTA from '../components/sections/ClosingCTA';
import { faqsData } from '../data/faqsData';
import { companyData } from '../data/companyData';

import SEO from '../components/seo/SEO';
import { createBreadcrumbSchema, createFAQSchema } from '../data/seoSchemas';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openId, setOpenId] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Frequently Asked Questions' }
      ]),
      createFAQSchema(faqsData)
    ]
  };

  const categories = ['All', ...new Set(faqsData.map((f) => f.category))];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-8 sm:py-12 bg-white dark:bg-[#090e1a] min-h-screen">
      <SEO
        title="Frequently Asked Questions — Pricing, Timelines & Process | TechCrestaX"
        description="Find answers to common questions about TechCrestaX web development sprints, 1-3 week delivery timelines, milestone pricing, and 100% code ownership."
        keywords={[
          "TechCrestaX FAQ",
          "web development pricing Rajkot",
          "website delivery timeline",
          "code ownership agreement",
          "post-launch maintenance support Gujarat"
        ]}
        canonical="https://www.techcrestax.com/faq"
        schema={faqPageSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blush" size="md" className="mb-3">
            Official Knowledge Base
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Answers before{' '}
            <span className="text-[#96405d] dark:text-[#F7DCE5]">starting your project</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Find clear, founder-approved answers regarding project turnaround times, full-stack capabilities, mobile QA standards, source code ownership, and post-launch maintenance.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, e.g. 'timeline', 'mobile', 'backend', 'warranty'..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#eccbd6] dark:focus:border-[#F7DCE5] focus:bg-white dark:focus:bg-slate-700 transition-colors shadow-xs"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[#eccbd6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-50/70 dark:bg-slate-800/60 border-[#eccbd6] dark:border-[#F7DCE5]/40 shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white cursor-pointer group"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                        {faq.category}
                      </span>
                      <span className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isOpen ? 'text-slate-950 dark:text-white' : 'text-slate-900 dark:text-white'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

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
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-500">
              <HelpCircle className="w-8 h-8 mx-auto mb-2 text-slate-400" />
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200">No matching questions found</p>
              <p className="text-xs text-slate-400 mt-1">Try a different search term or browse all categories.</p>
            </div>
          )}
        </div>

        {/* Direct Ask Question Card */}
        <div className="rounded-3xl border border-[#eccbd6] dark:border-[#F7DCE5]/20 bg-[#F7DCE5]/30 dark:bg-[#F7DCE5]/10 p-6 sm:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <Badge variant="blush" size="sm">
              Direct Engineering Consultation
            </Badge>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Have a question not listed here?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We provide direct consultation with our lead engineers. Connect with us on WhatsApp or submit a project brief to get instant clarity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <Button
              href={companyData.contact.whatsappLink}
              variant="blush"
              size="lg"
              icon={MessageSquare}
              className="w-full sm:w-auto"
            >
              Ask on WhatsApp
            </Button>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              showArrow
              className="w-full sm:w-auto"
            >
              Submit an Inquiry
            </Button>
          </div>
        </div>
      </div>

      <ClosingCTA />
    </div>
  );
}

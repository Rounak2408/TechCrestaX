import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ClosingCTA from '../components/sections/ClosingCTA';
import { insightsData } from '../data/insightsData';

export default function InsightsPage() {
  useEffect(() => {
    document.title = "Insights & Technical Strategy — TechCrestaX";
  }, []);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Insights & Strategy' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="lime" size="md" className="mb-3">
            Thought Leadership
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Engineering Insights.{' '}
            <span className="text-[#4d7c0f] dark:text-[#84cc16]">Design</span> Philosophy.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Technical analysis, frontend performance strategies, and user experience methodologies developed by the TechCrestaX engineering team.
          </p>

          <div className="mt-5 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 shadow-xs">
            <span className="text-[#4d7c0f] dark:text-[#84cc16] font-mono font-bold uppercase tracking-wider block mb-1">
              Demonstration Content Notice
            </span>
            Articles published in this section represent curated thought-leadership samples demonstrating our approach to modern web architecture, design tokens, and conversion optimization.
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-3xl p-6 sm:p-7 transition-all duration-200 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3.5">
                  <span className="text-[#4d7c0f] dark:text-[#84cc16] font-semibold">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-[#4d7c0f] dark:group-hover:text-[#84cc16] transition-colors mb-3 leading-snug">
                  <Link to={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <Link
                  to={`/insights/${article.slug}`}
                  className="font-bold text-slate-900 dark:text-white hover:text-[#4d7c0f] dark:hover:text-[#84cc16] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px]">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}

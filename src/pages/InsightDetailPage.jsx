import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, ArrowUpRight } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ClosingCTA from '../components/sections/ClosingCTA';
import { insightsData } from '../data/insightsData';

import SEO from '../components/seo/SEO';
import { createBreadcrumbSchema } from '../data/seoSchemas';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <SEO
          title="Article Not Found — TechCrestaX"
          description="The requested publication could not be found."
        />
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Article Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">The requested publication could not be found.</p>
        <Button to="/insights" variant="primary">
          Back to Insights
        </Button>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Insights', to: '/insights' },
        { label: article.title }
      ]),
      {
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.summary,
        "datePublished": article.date,
        "author": {
          "@type": "Person",
          "name": article.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "TechCrestaX",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.techcrestax.com/logo.png"
          }
        }
      }
    ]
  };

  const otherArticles = insightsData.filter((a) => a.slug !== slug);

  return (
    <div className="py-8 sm:py-12">
      <SEO
        title={`${article.title} — TechCrestaX Insights`}
        description={article.summary}
        keywords={[
          article.title,
          article.category,
          ...article.tags,
          "TechCrestaX insights",
          "web engineering guide"
        ]}
        canonical={`https://www.techcrestax.com/insights/${article.slug}`}
        ogType="article"
        schema={articleSchema}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Insights', to: '/insights' },
            { label: article.title },
          ]}
        />

        {/* Article Header */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="blush" size="sm">
              {article.category}
            </Badge>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-[#FFD4C9] pl-4 italic">
            {article.summary}
          </p>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#C2410C] dark:text-[#FF7C42]" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">{article.author}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {article.tags.map((t) => (
                <span key={t} className="font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose max-w-none space-y-7 text-slate-700 dark:text-slate-300 leading-relaxed mb-14">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white pt-3 border-t border-slate-100 dark:border-slate-800">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-[17px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>

        {/* Author & Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">
              Published by {article.author}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Technical publication highlighting modern web engineering best practices.
            </p>
          </div>

          <Button to="/insights" variant="secondary" size="sm" icon={ArrowLeft} className="shrink-0">
            All Articles
          </Button>
        </div>

        {/* Related Articles */}
        {otherArticles.length > 0 && (
          <div className="mb-16 pt-10 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-6">
              More Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherArticles.slice(0, 2).map((other) => (
                <div
                  key={other.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-[#FF6B4A] dark:hover:border-[#FF6B4A]/40 rounded-2xl p-6 transition-all shadow-xs"
                >
                  <span className="text-[11px] font-mono text-[#C2410C] dark:text-[#FF7C42] font-semibold uppercase block mb-1.5">
                    {other.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    <Link to={`/insights/${other.slug}`} className="hover:text-[#FF6B4A] dark:hover:text-[#FF7C42]">
                      {other.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
                    {other.summary}
                  </p>
                  <Link
                    to={`/insights/${other.slug}`}
                    className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#FF6B4A] dark:hover:text-[#FF7C42] inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}

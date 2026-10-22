import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Compass } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

import SEO from '../components/seo/SEO';

export default function NotFoundPage() {
  return (
    <div className="py-16 lg:py-24 flex items-center justify-center">
      <SEO
        title="404 — Page Not Found | TechCrestaX"
        description="The requested page could not be located on TechCrestaX."
      />
      <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
        <div className="inline-block">
          <Badge variant="amber" size="md">
            404 Error • Path Unresolved
          </Badge>
        </div>

        <div className="relative">
          <div className="text-8xl sm:text-9xl font-extrabold font-display text-slate-100 dark:text-slate-800/60 select-none tracking-widest">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white">
              Route Not Found
            </h1>
          </div>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
          The requested coordinate or endpoint does not exist within the TechCrestaX architecture.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button to="/" variant="primary" size="lg" icon={Home} showArrow>
            Return to Homepage
          </Button>
          <Button to="/services" variant="secondary" size="lg">
            Explore Services
          </Button>
        </div>

        {/* Helpful Route Navigation */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
          <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-3">
            Suggested Navigation Destinations:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <Link
              to="/work"
              className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs font-medium"
            >
              Portfolio & Case Studies
            </Link>
            <Link
              to="/about"
              className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs font-medium"
            >
              About Studio
            </Link>
            <Link
              to="/insights"
              className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs font-medium"
            >
              Agency Insights
            </Link>
            <Link
              to="/contact"
              className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs font-medium"
            >
              Contact Engineers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { companyData } from '../data/companyData';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy & Engagement Terms — TechCrestaX";
  }, []);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy & Terms' }]} />

        <div className="mb-10">
          <Badge variant="neutral" size="sm" className="mb-2.5">
            Legal & Data Transparency
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-3">
            Privacy Policy & Terms of Engagement
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-normal">
            Last updated: October 2024 • TechCrestaX Digital Solutions
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-7 text-sm text-slate-600 dark:text-slate-300 leading-relaxed shadow-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              1. Independent Redesign Notice
            </h2>
            <p>
              This website is an independent redesign concept and engineering portfolio demonstration developed to showcase modern frontend architecture, aesthetic design systems, and responsive digital strategy for TechCrestaX.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-5">
            <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              2. Data Collection & Project Inquiries
            </h2>
            <p>
              Information submitted through our project enquiry form (such as your name, email address, company name, and project scope) is utilized exclusively to evaluate your inquiry and prepare a technical estimate. We do not sell, rent, or lease client information to third-party advertising brokers.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-5">
            <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              3. Intellectual Property & Code Ownership
            </h2>
            <p>
              Under standard TechCrestaX commercial contracts, all deliverables, custom React components, database schemas, and digital assets engineered specifically for a client become 100% the property of the client upon final payment milestone completion, with zero recurring proprietary lock-in.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-5">
            <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              4. Cookies & Web Analytics
            </h2>
            <p>
              This website employs minimal performance and session analytics to measure aggregate page visits, Core Web Vitals latency, and browser resolution trends. No intrusive behavioral trackers or third-party advertising cookies are embedded.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-5">
            <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              5. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions or data clarification requests, you may contact our engineering desk directly at{' '}
              <a href={`mailto:${companyData.contact.primaryEmail}`} className="text-[#4d7c0f] dark:text-[#84cc16] font-semibold hover:underline">
                {companyData.contact.primaryEmail}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Button to="/" variant="secondary">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}

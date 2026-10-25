import React, { useEffect } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { companyData } from '../data/companyData';

import SEO from '../components/seo/SEO';

export default function PrivacyPage() {
  return (
    <div className="py-8 sm:py-12">
      <SEO
        title="Privacy Policy & Engagement Terms — TechCrestaX"
        description="Read the TechCrestaX privacy policy, data protection practices, non-disclosure terms, and intellectual property ownership standards."
        keywords={[
          "TechCrestaX privacy policy",
          "terms of engagement",
          "IP ownership agreement",
          "confidentiality agreement"
        ]}
        canonical="https://www.techcrestax.com/privacy"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy & Terms' }]} />

        <div className="mb-10">
          <Badge variant="blush" size="sm" className="mb-2.5">
            Legal & Data Transparency
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-3">
            Privacy Policy & Terms of Engagement
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-normal">
            Last updated: 2026 • TechCrestaX, Rajkot, Gujarat, India
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-7 text-sm text-slate-600 dark:text-slate-300 leading-relaxed shadow-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              1. Company Profile & Transparency
            </h2>
            <p>
              TechCrestaX is a digital solutions and web development agency established in 2026 and headquartered in Rajkot, Gujarat, India. We specialize in bespoke website development, application development, AI automation, UI/UX design, cloud infrastructure, and technical search engine optimization.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-5">
            <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              2. Data Collection & Project Enquiries
            </h2>
            <p>
              Information submitted through our project enquiry form (such as your name, email address, company name, phone number, and project scope) is utilized exclusively to evaluate your inquiry and prepare a technical estimate. We do not sell, rent, or lease client information to third-party advertising brokers.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-5">
            <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              3. Intellectual Property & Code Ownership
            </h2>
            <p>
              Under standard TechCrestaX commercial agreements, all deliverables, custom React components, database schemas, and digital assets engineered specifically for a client become 100% the property of the client upon final milestone delivery and payment, with zero recurring vendor lock-in.
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
              5. Contact Regarding Privacy & Terms
            </h2>
            <p>
              If you have any questions or data clarification requests, you may contact our team directly at{' '}
              <a href={`mailto:${companyData.contact.primaryEmail}`} className="text-[#C2410C] dark:text-[#FF7C42] font-semibold hover:underline">
                {companyData.contact.primaryEmail}
              </a>
              {' '}or via direct message on{' '}
              <a href={companyData.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#C2410C] dark:text-[#FF7C42] font-semibold hover:underline">
                WhatsApp
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

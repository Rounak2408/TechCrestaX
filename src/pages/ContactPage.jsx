import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, ShieldCheck, Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import ProjectEnquiryForm from '../components/forms/ProjectEnquiryForm';
import LocationMapSection from '../components/sections/LocationMapSection';
import Reveal from '../components/motion/Reveal';
import { companyData } from '../data/companyData';

import SEO from '../components/seo/SEO';
import { organizationSchema, createBreadcrumbSchema } from '../data/seoSchemas';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Contact & Inquiries' }
      ]),
      {
        "@type": "ContactPage",
        "@id": "https://www.techcrestax.com/contact#webpage",
        "url": "https://www.techcrestax.com/contact",
        "name": "Contact TechCrestaX",
        "description": "Get in touch with TechCrestaX in Rajkot, Gujarat. Technical consultations and project estimates.",
        "mainEntity": organizationSchema
      }
    ]
  };

  return (
    <div className="py-8 sm:py-12 bg-transparent min-h-screen">
      <SEO
        title="Contact Us — Start Your Web Project | TechCrestaX, Rajkot"
        description="Get in touch with TechCrestaX in Rajkot, Gujarat. Submit your project requirements for an estimate and technical consultation within 24 hours."
        keywords={[
          "contact TechCrestaX",
          "hire web developer Rajkot",
          "project inquiry TechCrestaX",
          "web development agency contact Gujarat",
          "techcrestax@gmail.com",
          "techcrestax whatsapp",
          "website quotation Rajkot"
        ]}
        canonical="https://www.techcrestax.com/contact"
        schema={contactSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact & Inquiries' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <Reveal delay={0} y={16}>
            <Badge variant="blush" size="md" className="mb-3">
              Start a Project
            </Badge>
          </Reveal>
          <Reveal delay={60} y={24} as="div">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
              Let's build something{' '}
              <span className="text-[#C2410C] dark:text-[#FF7C42]">remarkable together</span>.
            </h1>
          </Reveal>
          <Reveal delay={120} y={20} as="div">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Have an upcoming project, website redesign, or custom web application in mind? Share your requirements below or reach out directly to our leadership team.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Contact Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Verified Channels & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={140} y={20}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 space-y-5 shadow-xs">
              <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                Verified Direct Channels
              </h2>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FF6B4A]/15 dark:bg-slate-800 border border-[#FFD4C9] flex items-center justify-center text-[#C2410C] dark:text-[#FF7C42] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">
                      Primary Inquiries Email
                    </span>
                    <a
                      href={`mailto:${companyData.contact.primaryEmail}`}
                      className="font-semibold text-slate-900 dark:text-white hover:text-[#FF6B4A] dark:hover:text-[#FF7C42] transition-colors break-all"
                    >
                      {companyData.contact.primaryEmail}
                    </a>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Alt: {companyData.contact.secondaryEmail}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">
                      Direct WhatsApp Desk
                    </span>
                    <a
                      href={companyData.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Fastest response for active scopes (under 2 hrs)
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FF6B4A]/15 dark:bg-slate-800 border border-[#FFD4C9] flex items-center justify-center text-[#C2410C] dark:text-[#FF7C42] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">
                      Studio Headquarters
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {companyData.location.addressString}
                    </span>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Serving clients across global time zones
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Next Steps Card */}
            <div className="bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 space-y-3.5">
              <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C2410C] dark:text-[#FF7C42]" />
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-slate-900 dark:text-white font-bold bg-white dark:bg-slate-700 w-5 h-5 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 shrink-0">
                    1
                  </span>
                  <span>We review your requirements and formulate an initial technical assessment within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-slate-900 dark:text-white font-bold bg-white dark:bg-slate-700 w-5 h-5 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 shrink-0">
                    2
                  </span>
                  <span>We schedule a direct 20-minute video or WhatsApp strategy session with engineering leads.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-slate-900 dark:text-white font-bold bg-white dark:bg-slate-700 w-5 h-5 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 shrink-0">
                    3
                  </span>
                  <span>You receive a transparent, fixed-scope proposal with milestone sprint deliverables and timeline guarantees.</span>
                </li>
              </ol>
            </div>

            {/* Verified Client Reputation Box */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Client Verification
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Google Verified Base
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Authentic web deliverables for Scalpel.in, Agriqen Seeds, Sahyog Sagar, Law & Legal Bureau, and YOG4YOU.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Public Reviews on Google</span>
                <a
                  href={companyData.contact.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C2410C] dark:text-[#FF7C42] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <Reveal delay={180} y={24}>
              <ProjectEnquiryForm />
            </Reveal>
          </div>
        </div>

        {/* Verified Geographic Location & Google Maps Section */}
        <Reveal delay={200} y={24}>
          <LocationMapSection />
        </Reveal>
      </div>
    </div>
  );
}

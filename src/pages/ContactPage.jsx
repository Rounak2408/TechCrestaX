import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import ProjectEnquiryForm from '../components/forms/ProjectEnquiryForm';
import { companyData } from '../data/companyData';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Start a Project & Contact — TechCrestaX";
  }, []);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact & Inquiries' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="lime" size="md" className="mb-3">
            Direct Engineering Inquiry
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Let's Engineer Your{' '}
            <span className="text-[#4d7c0f] dark:text-[#84cc16]">Next Milestone</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Have an upcoming project, website redesign, or custom web application in mind? Share your requirements or reach out directly to our lead engineers.
          </p>
        </div>

        {/* 2-Column Contact Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Verified Channels & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 space-y-5 shadow-xs">
              <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                Verified Direct Channels
              </h2>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#4d7c0f] dark:text-[#84cc16]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">
                      Primary Inquiries Email
                    </span>
                    <a
                      href={`mailto:${companyData.contact.primaryEmail}`}
                      className="font-semibold text-slate-900 dark:text-white hover:text-[#4d7c0f] dark:hover:text-[#84cc16] transition-colors break-all"
                    >
                      {companyData.contact.primaryEmail}
                    </a>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Alt: {companyData.contact.secondaryEmail}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
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
                      className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                      {companyData.contact.phone}
                    </a>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Fastest response for urgent project scopes
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-700 dark:text-sky-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">
                      Studio Operations
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

            {/* Commitment Card */}
            <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                What Happens Next?
              </h3>
              <ol className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-900 dark:text-white font-bold">1.</span>
                  <span>We review your requirements and formulate an initial technical assessment within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-900 dark:text-white font-bold">2.</span>
                  <span>We schedule a direct 20-minute video call with a technical lead to clarify architecture and milestones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-slate-900 dark:text-white font-bold">3.</span>
                  <span>You receive a transparent, fixed-scope proposal with milestone deliverables and timeline guarantees.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ProjectEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

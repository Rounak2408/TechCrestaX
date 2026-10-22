import React from 'react';
import { ArrowUpRight, MessageSquare, ShieldCheck, Clock, Zap } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { companyData } from '../../data/companyData';

export default function ClosingCTA() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" aria-label="Closing Call to Action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-2xl">
          {/* Subtle 3D Coordinate Grid Effect */}
          <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F7DCE5]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-slate-700/20 blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-block">
              <Badge variant="blush" size="md">
                Available for New Sprints & Projects
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-display tracking-tight text-white leading-tight">
              Ready to engineer your next{' '}
              <span className="text-[#F7DCE5]">digital milestone</span>?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you need a brand-defining website, custom application, or an intelligent AI workflow, TechCrestaX delivers with precision speed, craft, and transparent milestones.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Button
                to="/contact"
                variant="blush"
                size="lg"
                showArrow
                className="w-full sm:w-auto"
              >
                Start Your Project
              </Button>
              <Button
                href={companyData.contact.whatsappLink}
                variant="darkOutline"
                size="lg"
                icon={MessageSquare}
                className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800"
              >
                Chat on WhatsApp (+91 83404 26550)
              </Button>
            </div>

            <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F7DCE5]" />
                <span>1–3 Week Typical Sprints</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Code Ownership</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#F7DCE5]" />
                <span>Direct Lead Collaboration</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

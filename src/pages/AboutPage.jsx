import React, { useEffect } from 'react';
import { ShieldCheck, Target, HeartHandshake, Zap, MapPin, Mail, Phone, Users, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import ClosingCTA from '../components/sections/ClosingCTA';
import ConnectedNodes3D from '../components/visuals/ConnectedNodes3D';
import { companyData } from '../data/companyData';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About TechCrestaX — Mission, Values & Engineering Philosophy";
  }, []);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About TechCrestaX' }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mb-14">
          <Badge variant="lime" size="md" className="mb-3">
            Studio Identity & Ethos
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Engineered for Impact.{' '}
            <span className="text-[#4d7c0f] dark:text-[#84cc16]">Rooted</span> in Growth.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            TechCrestaX was established with a singular conviction: businesses deserve modern technology that creates verifiable commercial growth, not just superficial visual decoration.
          </p>
        </div>

        {/* Mission Statement Box with 3D Connected Nodes Accent */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-12 mb-16 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#4d7c0f] dark:text-[#84cc16] font-bold">
                The Core Philosophy
              </span>
              <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-bold font-display text-slate-900 dark:text-white leading-snug">
                "Businesses deserve technology that creates real growth, not just beautiful interfaces."
              </blockquote>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                Every design decision, database schema, and line of frontend code at TechCrestaX is evaluated against a simple benchmark: does this enhance user trust, accelerate transaction velocity, and simplify operations?
              </p>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-sm">
                <ConnectedNodes3D />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <Badge variant="neutral" size="sm" className="mb-2">
              Operating Principles
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              How We Build & Collaborate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200">
                <Zap className="w-4 h-4 text-[#4d7c0f] dark:text-[#84cc16]" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                Modern Technology Standards
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We reject bloated monolithic themes and fragile legacy scripts. We engineer exclusively on modern component stacks — React, Vite, Tailwind CSS, and headless architectures — ensuring your web app remains fast, secure, and maintainable.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200">
                <Target className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                Conversion-First Strategy
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                An exceptional website is an active sales representative. We structure user journeys, typography hierarchies, and call-to-actions around behavioral psychology to maximize organic engagement and lead acquisition.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200">
                <HeartHandshake className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                Client First & Direct Collaboration
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We believe in transparent partnerships, not isolated agency contracts. You collaborate directly with experienced technical leads who communicate clearly, deliver on sprint dates, and provide ongoing guidance.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200">
                <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                Agile 1–3 Week Delivery
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Traditional digital agencies drag projects across months of bureaucratic review. We structure focused agile sprints that take your product from wireframe kickoff to production launch in 1 to 3 weeks.
              </p>
            </div>
          </div>
        </div>

        {/* Engineering Roles & Structure */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 shadow-xs">
          <div className="max-w-3xl mb-8">
            <Badge variant="lime" size="sm" className="mb-2">
              Cross-Functional Team
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white mb-2">
              Disciplined Technical Leadership
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every project is led by specialized practitioners combining design craftsmanship with full-stack engineering rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-mono text-[#4d7c0f] dark:text-[#84cc16] font-semibold uppercase tracking-wider block">
                Engineering Discipline
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Technical Lead & Full-Stack Architecture
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Directs React architecture, API interfaces, deployment infrastructure, and performance benchmarking.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-wider block">
                Design Discipline
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                UI/UX & Design Systems
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Shapes design tokens, responsive typography hierarchies, accessibility contrast, and micro-interactions.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider block">
                Growth Discipline
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Digital Growth & Technical SEO
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Engineers Core Web Vitals compliance, Schema.org metadata, and conversion funnel optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Location & Operations */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0">
              <MapPin className="w-5 h-5 text-[#4d7c0f] dark:text-[#84cc16]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Operational Base in Rajkot, Gujarat
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Headquartered in India, partnering with ambitious digital clients worldwide across remote sprint cycles.
              </p>
            </div>
          </div>

          <Button to="/contact" variant="primary" size="md" showArrow className="shrink-0">
            Work With Us
          </Button>
        </div>

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}

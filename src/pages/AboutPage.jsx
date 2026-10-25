import React, { useEffect } from 'react';
import { ShieldCheck, Target, HeartHandshake, Zap, MapPin, Mail, Phone, Users, CheckCircle2, Clock, Palette } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import ClosingCTA from '../components/sections/ClosingCTA';
import Reveal from '../components/motion/Reveal';
import { companyData } from '../data/companyData';

import SEO from '../components/seo/SEO';
import { organizationSchema, createBreadcrumbSchema } from '../data/seoSchemas';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'About TechCrestaX' }
      ]),
      {
        "@type": "AboutPage",
        "@id": "https://www.techcrestax.com/about#webpage",
        "url": "https://www.techcrestax.com/about",
        "name": "About TechCrestaX",
        "description": "Learn about TechCrestaX, founded in 2026 in Rajkot, Gujarat. Meet our leadership team and discover our digital engineering mission.",
        "mainEntity": organizationSchema
      }
    ]
  };

  return (
    <div className="py-8 sm:py-12 bg-transparent min-h-screen">
      <SEO
        title="About Us — Digital Engineering Team & Mission | TechCrestaX"
        description="Discover TechCrestaX, founded in 2026 in Rajkot, Gujarat. Learn about our leadership team, core engineering values, and dedication to building websites that move businesses forward."
        keywords={[
          "about TechCrestaX",
          "web development agency Rajkot",
          "Rishu Thakur founder",
          "digital solutions team Gujarat",
          "TechCrestaX headquarters",
          "web engineering company India"
        ]}
        canonical="https://www.techcrestax.com/about"
        schema={aboutSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About TechCrestaX' }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mb-14">
          <Reveal delay={0} y={16}>
            <Badge variant="blush" size="md" className="mb-3">
              About Our Company
            </Badge>
          </Reveal>
          <Reveal delay={60} y={24} as="div">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
              From Vision to Impact.{' '}
              <span className="text-[#C2410C] dark:text-[#FF7C42]">Built for</span> Business Growth.
            </h1>
          </Reveal>
          <Reveal delay={120} y={20} as="div">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              TechCrestaX is a modern digital engineering and web development company based in Rajkot, Gujarat. We help ambitious startups and expanding businesses launch premium websites, scalable web applications, and digital growth engines that convert.
            </p>
          </Reveal>
        </div>

        {/* Verified Company Engineering Standards Bar */}
        <Reveal delay={140} y={24}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 mb-16 shadow-xs">
            {companyData.trustPillars.map((pillar) => (
              <div key={pillar.label}>
                <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                  {pillar.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {pillar.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {pillar.detail}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mission Statement Box */}
        <Reveal delay={160} y={24}>
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-12 mb-16 shadow-xs relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] dark:text-[#FF7C42] font-bold">
                The Guiding Philosophy
              </span>
              <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-bold font-display text-slate-900 dark:text-white leading-snug">
                "We combine strategy, design and technology to create digital products that are attractive, reliable and aligned with your business goals."
              </blockquote>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                At TechCrestaX, we move beyond generic templates to engineer custom digital experiences. We believe that modern websites must not only look visually stunning but also rank effectively, load in sub-seconds, and drive actual customer inquiries.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Official Team Section with Verified Photos */}
        <div className="mb-20">
          <div className="max-w-3xl mb-10">
            <Badge variant="blush" size="sm" className="mb-2">
              Meet The Minds
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white mb-3">
              Leadership & Engineering Practitioners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Meet the core team directing strategy, client relationships, technical architecture, and creative execution at TechCrestaX.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.team.map((member, index) => (
              <Reveal key={member.name} delay={index * 80} y={24} as="div" className="h-full">
                <div
                  className="group clean-card p-4 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden flex flex-col justify-between h-full hover:border-[#FF6248]/50 transition-all duration-300"
                >
                  <div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                      <img
                        src={member.image}
                        alt={`${member.name} — ${member.role} at TechCrestaX`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-3 left-3 text-[11px] font-mono text-white bg-slate-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                        TechCrestaX
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-[#C2410C] dark:text-[#FF7C42] font-semibold mt-0.5 mb-2">
                      {member.role}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Verified Team Member</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 4 Core Operating Principles */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <Reveal delay={0} y={16}>
              <Badge variant="neutral" size="sm" className="mb-2">
                Operating Principles
              </Badge>
            </Reveal>
            <Reveal delay={60} y={24} as="div">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                The Principles That Guide Our Work
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0} y={20} as="div">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 space-y-2.5 shadow-xs hover:border-[#FF6248]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B4A]/15 dark:bg-slate-800 border border-[#FFD4C9] flex items-center justify-center text-[#C2410C] dark:text-[#FF7C42]">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                  Fast Execution
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We move quickly from idea to launch without compromising design craftsmanship or technical quality. Most standard business websites deliver in 7 days.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80} y={20} as="div">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 space-y-2.5 shadow-xs hover:border-[#FF6248]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B4A]/15 dark:bg-slate-800 border border-[#FFD4C9] flex items-center justify-center text-[#C2410C] dark:text-[#FF7C42]">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                  Premium Design
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every interface is crafted with high aesthetic fidelity, balanced typography scales, and intuitive user journeys that communicate brand authority.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160} y={20} as="div">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 space-y-2.5 shadow-xs hover:border-[#FF6248]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B4A]/15 dark:bg-slate-800 border border-[#FFD4C9] flex items-center justify-center text-[#C2410C] dark:text-[#FF7C42]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                  Secure & Scalable Development
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We build exclusively with modern frameworks (React, Next.js, Vite, Tailwind CSS) following secure coding standards and sub-second Core Web Vitals optimization.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240} y={20} as="div">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 space-y-2.5 shadow-xs hover:border-[#FF6248]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B4A]/15 dark:bg-slate-800 border border-[#FFD4C9] flex items-center justify-center text-[#C2410C] dark:text-[#FF7C42]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                  Dedicated Support
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  You get clear milestone updates and dependable assistance throughout the project, backed by an included post-launch bug warranty and 24/7 project support.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Technologies We Use (Official Business Profile Specification) */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <Reveal delay={0} y={16}>
                <Badge variant="blush" size="sm" className="mb-2">
                  Core Engineering Stack
                </Badge>
              </Reveal>
              <Reveal delay={60} y={24} as="div">
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                  Technologies We Use
                </h2>
              </Reveal>
              <Reveal delay={120} y={20} as="div">
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Selected for sub-second performance, clean component architecture, and long-term business scalability.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {companyData.technologiesWeUse.map((tech, index) => (
              <Reveal key={tech} delay={index * 40} y={16} as="div">
                <div
                  className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-2xs flex items-center justify-center text-center font-mono font-bold text-sm text-slate-800 dark:text-slate-100 hover:border-[#FF6B4A] dark:hover:border-[#FF6B4A]/40 transition-colors"
                >
                  {tech}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Operating Headquarters & Global Delivery */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B4A]/12 dark:bg-slate-800 border border-[#FFD4C9] flex items-center justify-center text-[#C2410C] dark:text-[#FF7C42] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white">
                Headquartered in Rajkot, Gujarat, India
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Operating with global delivery standards, partnering with ambitious startups and businesses worldwide.
              </p>
            </div>
          </div>

          <Button to="/contact" variant="primary" size="md" showArrow className="shrink-0">
            Start a Project
          </Button>
        </div>

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}

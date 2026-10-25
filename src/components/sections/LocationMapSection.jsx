import React from 'react';
import { MapPin, ExternalLink, MessageSquare, Clock, Globe2, Navigation, Compass } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { companyData } from '../../data/companyData';

export default function LocationMapSection() {
  const googleMapsDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=Rajkot+Gujarat+India";

  return (
    <section className="py-16 lg:py-20 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#090e1a] relative" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Badge variant="blush" size="md" className="mb-3">
              Studio Headquarters
            </Badge>
            <h2 id="location-heading" className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Based in Rajkot, Gujarat.{' '}
              <span className="text-[#FF6B4A] dark:text-[#FF7C42]">Delivering Worldwide.</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Our engineering studio is located in Rajkot, Gujarat, India. We collaborate with clients across India and globally through milestone-driven sprints and transparent communication.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-[#FF6B4A] text-xs sm:text-sm font-semibold shadow-xs hover:scale-105 active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4 text-[#FF6B4A] dark:text-[#FF7C42]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Interactive Map Card with Floating Details Overlay */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900">
          
          {/* Embedded Google Map Iframe for Rajkot, Gujarat */}
          <div className="w-full h-[380px] sm:h-[440px] relative">
            <iframe
              title="TechCrestaX Studio Location — Rajkot, Gujarat"
              src="https://maps.google.com/maps?q=Rajkot,%20Gujarat,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 contrast-[102%]"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Floating Studio Meta Card (Desktop: Top-Left Overlay, Mobile: Integrated Bottom Panel) */}
          <div className="static lg:absolute lg:top-6 lg:left-6 lg:max-w-sm w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl border-t lg:border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FF6B4A]/10 text-[#C2410C] dark:text-[#FF8C70] border border-[#FFD4C9] flex items-center justify-center font-bold shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    TechCrestaX Studio
                  </h3>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Rajkot, Gujarat, India
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Hub
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FF6B4A] dark:text-[#FF7C42] shrink-0" />
                <span>Working Hours: Mon – Sat, 9:30 AM – 7:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-[#FF6B4A] dark:text-[#FF7C42] shrink-0" />
                <span>Timezone: Indian Standard Time (IST, UTC+5:30)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FF6B4A] hover:bg-[#E85938] text-white text-xs font-bold transition-all shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all"
                title="View full directions in Google Maps"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

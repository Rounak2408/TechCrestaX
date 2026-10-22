import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { companyData } from '../../data/companyData';
import { servicesData } from '../../data/servicesData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-300 relative overflow-hidden" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-block">
              <img
                src="/logo.png"
                alt="TechCrestaX Official Logo"
                className="w-9 h-9 rounded-xl object-contain bg-white/10 p-0.5 border border-white/10"
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center">
                TechCrestaX
                <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-[#F7DCE5]" />
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyData.shortDescription}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#F7DCE5]/40 transition-colors"
                aria-label="TechCrestaX on LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#F7DCE5]/40 transition-colors"
                aria-label="TechCrestaX on Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 hover:border-emerald-500/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-white transition-colors inline-block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Navigation Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/work" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio & Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  All Capabilities
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us & Team
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Verified Presence */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#F7DCE5] shrink-0 mt-0.5" />
                <span>{companyData.location.addressString}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F7DCE5] shrink-0" />
                <a
                  href={`mailto:${companyData.contact.primaryEmail}`}
                  className="text-slate-400 hover:text-white transition-colors break-all"
                >
                  {companyData.contact.primaryEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F7DCE5] shrink-0" />
                <a
                  href={companyData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {companyData.contact.phone}
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400">
              <span className="text-white font-medium block mb-1">Standard Turnaround:</span>
              1 to 3 weeks across milestone-driven agile sprints.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} TechCrestaX. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Independent Digital Engineering & Design</span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-colors focus-visible:ring-2 focus-visible:ring-white border border-slate-800"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

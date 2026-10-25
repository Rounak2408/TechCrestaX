import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  User, 
  Layout, 
  IndianRupee, 
  FileText, 
  Check, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Copy, 
  CheckCircle2, 
  BarChart3, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import Reveal from '../motion/Reveal';
import { companyData } from '../../data/companyData';

const servicesList = [
  'Website Design & Development',
  'E-commerce Website Development',
  'Web Applications & Platforms',
  'UI/UX Design',
  'SEO & Local SEO',
  'Digital Growth & Online Presence'
];

const budgetOptions = [
  'Starter Website (₹7,000 – ₹15,000)',
  'Commercial Platform (₹15,000 – ₹30,000)',
  'E-commerce / Web App (₹25,000 – ₹50,000+)',
  'Custom Scope / Discussion'
];

export default function HomeEnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Design & Development',
    budget: 'Starter Website (₹7,000 – ₹15,000)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email (e.g. name@company.com)';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your requirements';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructMessage = () => {
    return `*TechCrestaX Project Enquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service:* ${formData.service}\n` +
      `*Budget:* ${formData.budget}\n` +
      `*Details:* ${formData.message}`;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const text = encodeURIComponent(constructMessage());
    window.open(`https://wa.me/918340426550?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Project Enquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(constructMessage());
    window.location.href = `mailto:techcrestax@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const copyDetails = () => {
    navigator.clipboard.writeText(constructMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="enquiry" 
      className="py-16 sm:py-20 lg:py-28 bg-[#03060C] relative scroll-mt-20 overflow-hidden" 
      aria-labelledby="enquiry-heading"
    >
      {/* ========================================================
          1. CINEMATIC VOLCANIC ENVIRONMENT & NEON RINGS BACKDROP
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Volcanic Crag Rocks & Neon Laser Ring Backdrop Image */}
        <img
          src="/portfolio_volcanic_backdrop.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-85"
          loading="lazy"
          decoding="async"
        />

        {/* Vertical Fade Gradients for Seamless Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060C] via-transparent to-[#03060C] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#03060C_95%)] opacity-75" />

        {/* Ambient Neon Coral Glow Pools */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[320px] bg-[#FF6248]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-[550px] h-[350px] bg-[#FF7957]/15 rounded-full blur-[140px]" />
      </div>

      {/* ========================================================
          FLOATING 3D HOLOGRAPHIC TOKENS (Matching Picture 2)
         ======================================================== */}
      {/* Left Token: Analytics Bar Chart Token */}
      <div 
        className="hidden 2xl:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 w-24 h-32 rounded-2xl bg-[#0A111C]/90 border border-[#FF6248]/40 shadow-[0_20px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(255,98,72,0.3)] backdrop-blur-xl flex-col items-center justify-center gap-2 p-3 transform -rotate-6 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-10 h-10 rounded-xl bg-[#FF6248]/15 text-[#FF7957] flex items-center justify-center">
          <BarChart3 className="w-5 h-5" />
        </div>
        <div className="flex gap-1 items-end h-6">
          <div className="w-1.5 h-3 bg-white/20 rounded-t" />
          <div className="w-1.5 h-4 bg-white/30 rounded-t" />
          <div className="w-1.5 h-6 bg-[#FF6248] rounded-t shadow-[0_0_6px_#FF6248]" />
        </div>
      </div>

      {/* Right Token: 3D Code Token */}
      <div 
        className="hidden 2xl:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 w-24 h-32 rounded-2xl bg-[#0A111C]/90 border border-[#FF6248]/40 shadow-[0_20px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(255,98,72,0.3)] backdrop-blur-xl flex-col items-center justify-center gap-2 p-3 transform rotate-6 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6248]/20 to-[#FF4500]/10 border border-[#FF6248]/40 text-[#FF7957] flex items-center justify-center shadow-[0_0_12px_rgba(255,98,72,0.3)]">
          <Code2 className="w-6 h-6 stroke-[2.5]" />
        </div>
        <span className="text-[10px] font-mono font-bold text-white tracking-wider">CLEAN CODE</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            2. SECTION HEADER (Matching Picture 2)
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal delay={0} y={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6248]/10 border border-[#FF6248]/30 text-xs font-mono font-bold text-[#FF7957] mb-3 uppercase tracking-wider shadow-[0_0_15px_rgba(255,98,72,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6248] shadow-[0_0_8px_#FF6248] animate-pulse" />
              Project Enquiry
            </div>
          </Reveal>

          <Reveal delay={60} y={24} as="div">
            <h2 id="enquiry-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3 leading-tight">
              Let's build something <br />
              <span className="text-[#FF6248] drop-shadow-[0_0_20px_rgba(255,98,72,0.35)]">
                exceptional together.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120} y={20} as="div">
            <p className="text-sm sm:text-base text-[#8E9CAE] leading-relaxed max-w-2xl mx-auto font-normal">
              Share your project specifications for a rapid turnaround estimate, or connect directly on WhatsApp.
            </p>
          </Reveal>
        </div>

        {/* ========================================================
            3. TWO-COLUMN INTERACTIVE EXPERIENCE
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Direct Communication Channels & Value Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#0A111C]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-5">
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                Direct Communication Channels
              </h3>

              {/* WhatsApp Active Card (Glowing Border from Picture 2) */}
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#0A111C]/95 border-2 border-[#FF6248] shadow-[0_0_25px_rgba(255,98,72,0.35)] hover:shadow-[0_0_35px_rgba(255,98,72,0.5)] transition-all duration-300 group hover:scale-[1.01]"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-sm text-white group-hover:text-emerald-400 block transition-colors truncate">
                      Chat on WhatsApp
                    </span>
                    <span className="text-xs text-[#8E9CAE] font-mono truncate">
                      Instant consultation channel
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full border border-[#FF6248]/50 text-[#FF7957] flex items-center justify-center shrink-0 group-hover:bg-[#FF6248] group-hover:text-white transition-all shadow-sm">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Email Direct Card */}
              <a
                href="mailto:techcrestax@gmail.com"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#0A111C]/80 border border-white/10 hover:border-[#FF6248]/50 hover:bg-[#101726]/60 transition-all duration-300 group hover:scale-[1.01]"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-[#FF6248]/15 border border-[#FF6248]/35 flex items-center justify-center text-[#FF7957] shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-sm text-white group-hover:text-[#FF7957] block transition-colors truncate">
                      techcrestax@gmail.com
                    </span>
                    <span className="text-xs text-[#8E9CAE] font-mono truncate">
                      Project briefs & RFPs
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full border border-white/20 text-[#8E9CAE] flex items-center justify-center shrink-0 group-hover:border-[#FF6248]/50 group-hover:text-[#FF7957] transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Response SLA */}
              <div className="flex items-center gap-3 pt-2 text-xs text-[#8E9CAE]">
                <Clock className="w-4 h-4 text-[#FF7957] shrink-0" />
                <span>We reply with project estimates within 24 business hours.</span>
              </div>

              {/* Studio Location */}
              <div className="flex items-center gap-3 text-xs text-[#8E9CAE]">
                <MapPin className="w-4 h-4 text-[#FF7957] shrink-0" />
                <span>Rajkot, Gujarat, India • Global Client Delivery</span>
              </div>
            </div>

            {/* Bottom Value Highlights Card (with subtle corner chart accent) */}
            <div className="p-5 rounded-2xl bg-[#0A111C]/85 backdrop-blur-xl border border-[#FF6248]/30 shadow-[0_0_20px_rgba(255,98,72,0.15)] relative overflow-hidden space-y-2.5 text-xs text-slate-200">
              
              {/* Corner Ambient Illustration from Picture 2 */}
              <div className="absolute -bottom-2 -right-2 flex items-end gap-1 opacity-25 pointer-events-none">
                <div className="w-2 h-4 bg-[#FF6248] rounded-t" />
                <div className="w-2 h-7 bg-[#FF6248] rounded-t" />
                <div className="w-2 h-10 bg-[#FF7957] rounded-t" />
                <div className="w-2 h-14 bg-[#FF6248] rounded-t" />
              </div>
              <Sparkles className="absolute top-3 right-3 w-4 h-4 text-[#FF7957]/40 pointer-events-none animate-pulse" />

              <div className="flex items-center gap-2.5 relative z-10">
                <div className="w-4 h-4 rounded-full border border-[#FF6248] text-[#FF6248] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#FF6248] stroke-[3]" />
                </div>
                <span>Websites starting at ₹7,000+ with 1st year maintenance free</span>
              </div>

              <div className="flex items-center gap-2.5 relative z-10">
                <div className="w-4 h-4 rounded-full border border-[#FF6248] text-[#FF6248] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#FF6248] stroke-[3]" />
                </div>
                <span>Transparent milestones with zero surprise agency markups</span>
              </div>

              <div className="flex items-center gap-2.5 relative z-10">
                <div className="w-4 h-4 rounded-full border border-[#FF6248] text-[#FF6248] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#FF6248] stroke-[3]" />
                </div>
                <span>100% source code ownership handed over at completion</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form with Field Icons */}
          <div className="lg:col-span-7 bg-[#0A111C]/90 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between">
            
            {/* Top-Right Glow Sheen */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#FF6248]/15 rounded-full blur-2xl pointer-events-none" />

            {submitted ? (
              <div className="text-center py-10 space-y-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Enquiry Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9CAE] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your enquiry details have been prepared. We look forward to connecting with you.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={copyDetails}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-xs font-semibold text-slate-200 hover:bg-[#101722] cursor-pointer transition-all shadow-sm"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to clipboard' : 'Copy details'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#FF7957] hover:underline cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4 relative z-10 text-left">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="home-enquiry-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-[#FF6248]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="home-enquiry-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        placeholder="e.g. John Doe"
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl text-xs sm:text-sm bg-[#0E1522] border ${
                          errors.name ? 'border-rose-400 ring-1 ring-rose-400' : 'border-white/10'
                        } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF6248]/50 focus:border-[#FF6248] transition-all`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="home-enquiry-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-[#FF6248]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="home-enquiry-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="name@company.com"
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl text-xs sm:text-sm bg-[#0E1522] border ${
                          errors.email ? 'border-rose-400' : 'border-white/10'
                        } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF6248]/50 focus:border-[#FF6248] transition-all`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service of Interest */}
                <div>
                  <label htmlFor="home-enquiry-service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service Required
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Layout className="w-4 h-4" />
                    </div>
                    <select
                      id="home-enquiry-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl text-xs sm:text-sm bg-[#0E1522] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6248]/50 focus:border-[#FF6248] transition-all"
                    >
                      {servicesList.map((s) => (
                        <option key={s} value={s} className="bg-[#0A111B] text-white">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="home-enquiry-budget" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Estimated Budget Range
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <select
                      id="home-enquiry-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl text-xs sm:text-sm bg-[#0E1522] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6248]/50 focus:border-[#FF6248] transition-all"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-[#0A111B] text-white">{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Brief */}
                <div>
                  <label htmlFor="home-enquiry-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Requirements / Goals <span className="text-[#FF6248]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <textarea
                      id="home-enquiry-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Briefly describe what you're looking to build, desired features, or launch timeline..."
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl text-xs sm:text-sm bg-[#0E1522] border ${
                        errors.message ? 'border-rose-400' : 'border-white/10'
                      } text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF6248]/50 focus:border-[#FF6248] transition-all`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Action Buttons: WhatsApp Dispatch & Email Dispatch (Matching Picture 2) */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="relative overflow-hidden flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
                  >
                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                    <MessageSquare className="w-4 h-4 text-white relative z-10" />
                    <span className="relative z-10">Send via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform relative z-10" />
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF6248] to-[#FF4500] hover:from-[#FF7957] hover:to-[#FF6248] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_25px_rgba(255,98,72,0.45)] hover:shadow-[0_0_35px_rgba(255,98,72,0.65)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
                  >
                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                    <Mail className="w-4 h-4 text-white relative z-10" />
                    <span className="relative z-10">Send via Email</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform relative z-10" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

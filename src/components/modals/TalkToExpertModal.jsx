import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, ChevronLeft, ChevronRight, CheckCircle2, 
  ShieldCheck, Star, Send, Lock, Phone, Mail,
  ChevronDown, Check
} from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function TalkToExpertModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    company: '',
    message: '',
    ndaChecked: true,
  });

  const [errors, setErrors] = useState({});

  const servicesList = [
    'Website Development',
    'App Development',
    'AI Automation',
    'UI/UX Design',
    'Cloud & DevOps',
    'Digital Growth & Technical SEO',
  ];

  // Keyboard escape handler and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Click outside to close custom category dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    };
    if (isCategoryOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isCategoryOpen]);


  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share a brief note about your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: 'Website Development',
      company: '',
      message: '',
      ndaChecked: true,
    });
    setErrors({});
    setIsSubmitted(false);
    setIsOpen(false);
    setIsCategoryOpen(false);
  };

  const mailtoUrl = `mailto:${companyData.contact.primaryEmail}?subject=${encodeURIComponent(
    `Project Discussion: ${formData.service} (${formData.company || formData.firstName})`
  )}&body=${encodeURIComponent(
    `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\n\nProject Scope:\n${formData.message}`
  )}`;

  const whatsappUrl = `https://wa.me/918340426550?text=${encodeURIComponent(
    `Hello TechCrestaX, I want to discuss a ${formData.service} project.\n\nName: ${formData.firstName} ${formData.lastName}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nScope: ${formData.message}`
  )}`;

  return (
    <>
      {/* Floating Bottom-Right Pill Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#0b1329] dark:bg-slate-900 hover:bg-slate-900 dark:hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-slate-900/40 border border-slate-700/80 hover:border-[#F7DCE5]/80 hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Talk to an expert"
        >
          {/* Active Status Pulse Dot */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7DCE5] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F7DCE5]" />
          </span>

          <MessageSquare className="w-4 h-4 text-[#F7DCE5] group-hover:rotate-6 transition-transform" />
          <span className="tracking-tight">Talk to an expert</span>
        </button>
      </div>

      {/* Modal Dialog Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="expert-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Modal Container */}
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Mobile Top Trust Bar */}
            <div className="lg:hidden bg-gradient-to-r from-[#0b1329] via-[#0f172a] to-[#111c38] text-white px-4 py-3 border-b border-slate-800 flex items-center justify-between pr-12">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#F7DCE5] animate-pulse" />
                <span className="text-[11px] font-mono font-medium text-slate-200">
                  TechCrestaX Studio
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#F7DCE5] bg-[#F7DCE5]/20 border border-[#F7DCE5]/40 px-2 py-0.5 rounded-full">
                Response &lt;12h
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 flex-1 overflow-y-auto">
              
              {/* LEFT COLUMN: Dark Navy Verified Client Showcase */}
              <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-[#0b1329] via-[#0f172a] to-[#111c38] text-white p-7 sm:p-9 flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
                <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-[#F7DCE5]/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-slate-700/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#F7DCE5] font-bold block mb-2">
                      Official Client Deliveries
                    </span>
                    <h2 className="text-2xl sm:text-[26px] font-bold font-display leading-snug tracking-tight text-white">
                      We Build Websites That Move Businesses Forward
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      Custom design, modern React architecture, and transparent terms.
                    </p>
                  </div>

                  {/* Pricing & Terms Highlights */}
                  <div className="bg-slate-900/90 text-slate-100 p-5 rounded-2xl shadow-xl space-y-3.5 border border-slate-700/80">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                      <span className="text-xs text-slate-400 font-mono">Website Development</span>
                      <span className="text-xs font-mono font-bold text-[#F7DCE5]">Starts at ₹7,000+</span>
                    </div>
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                      <span className="text-xs text-slate-400 font-mono">1st-Year Maintenance</span>
                      <span className="text-xs font-mono font-bold text-emerald-400">100% Free (12 Mo)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono">Code Ownership</span>
                      <span className="text-xs font-mono font-bold text-white">100% Client-Owned</span>
                    </div>
                  </div>

                  {/* Verified Deliveries */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                      Live Verified Deliveries
                    </span>
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <span className="font-semibold text-white">Scalpel.in</span>
                        <span className="text-[11px] font-mono text-[#F7DCE5]">Doctor Appointment</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <span className="font-semibold text-white">Agriqen Seeds</span>
                        <span className="text-[11px] font-mono text-[#F7DCE5]">Agriculture & Biotech</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <span className="font-semibold text-white">Sahyog Sagar</span>
                        <span className="text-[11px] font-mono text-[#F7DCE5]">Restaurant & SEO</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Projects List */}
                <div className="pt-6 border-t border-slate-800/80 relative z-10 mt-6 lg:mt-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold">
                    Approved Client Portfolio
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-slate-400">
                    <span className="text-slate-200">Scalpel.in</span>
                    <span>•</span>
                    <span className="text-slate-200">Agriqen</span>
                    <span>•</span>
                    <span className="text-slate-200">Sahyog Sagar</span>
                    <span>•</span>
                    <span className="text-slate-200">Law & Legal</span>
                    <span>•</span>
                    <span className="text-slate-200">YOG4YOU</span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Interactive Consultation Form */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative transition-colors overflow-y-auto">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                    <div className="pr-8">
                      <h3 id="expert-modal-title" className="text-lg sm:text-2xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                        Start Your Project Discussion
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Guaranteed technical response within <span className="font-semibold text-slate-800 dark:text-slate-200">12 hours</span>.
                      </p>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="e.g. Alex"
                          className={`w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${
                            errors.firstName ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200 dark:border-slate-700'
                          } focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white`}
                        />
                        {errors.firstName && <span className="text-[11px] text-rose-500 mt-0.5">{errors.firstName}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="e.g. Morgan"
                          className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Business Email*
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className={`w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${
                            errors.email ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200 dark:border-slate-700'
                          } focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white`}
                        />
                        {errors.email && <span className="text-[11px] text-rose-500 mt-0.5">{errors.email}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Phone Number
                        </label>
                        <div className="flex gap-1.5 w-full min-w-0">
                          <span className="px-2.5 py-2 sm:py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center shrink-0">
                            +91
                          </span>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="83404 26550"
                            className="w-full min-w-0 flex-1 px-3 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div className="relative min-w-0" ref={dropdownRef}>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Project Category
                        </label>
                        <button
                          type="button"
                          onClick={() => setIsCategoryOpen((prev) => !prev)}
                          className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white cursor-pointer select-none"
                          aria-haspopup="listbox"
                          aria-expanded={isCategoryOpen}
                        >
                          <span className="truncate pr-2 font-medium text-left">
                            {formData.service}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isCategoryOpen && (
                          <div
                            role="listbox"
                            className="absolute z-50 left-0 right-0 w-full mt-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden py-1 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
                          >
                            {servicesList.map((serviceName) => {
                              const isSelected = formData.service === serviceName;
                              return (
                                <button
                                  key={serviceName}
                                  type="button"
                                  role="option"
                                  aria-selected={isSelected}
                                  onClick={() => {
                                    setFormData({ ...formData, service: serviceName });
                                    setIsCategoryOpen(false);
                                  }}
                                  className={`w-full px-3.5 py-2 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#F7DCE5] text-[#96405d] dark:bg-[#F7DCE5]/20 dark:text-[#f7dce5] font-semibold'
                                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                                  }`}
                                >
                                  <span className="truncate pr-2">{serviceName}</span>
                                  {isSelected && (
                                    <Check className="w-3.5 h-3.5 text-[#96405d] dark:text-[#f7dce5] shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Corp"
                          className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
                        />
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Project Scope*
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe what you're looking to design, engineer, or automate..."
                        className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${
                          errors.message ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200 dark:border-slate-700'
                        } focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white resize-none`}
                      />
                      {errors.message && <span className="text-[11px] text-rose-500 mt-0.5">{errors.message}</span>}
                    </div>

                    {/* Submit CTA Button */}
                    <button
                      type="submit"
                      className="w-full py-3 sm:py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-[#F7DCE5]/40"
                    >
                      <Send className="w-4 h-4 text-[#F7DCE5]" />
                      <span>Request Free Consultation</span>
                    </button>

                    {/* NDA Checkbox */}
                    <div className="flex items-center gap-2 pt-0.5 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
                      <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Your idea is protected with strict confidentiality &amp; 100% IP ownership.</span>
                    </div>

                    {/* Confirmed Official Badges */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] text-slate-600 dark:text-slate-400">
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="font-bold text-slate-900 dark:text-white block">25+ Projects</span>
                        <span>Delivered</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="font-bold text-slate-900 dark:text-white block">98% Rating</span>
                        <span>Satisfaction</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="font-bold text-slate-900 dark:text-white block">100% IP</span>
                        <span>Client Ownership</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="font-bold text-slate-900 dark:text-white block">24/7 Desk</span>
                        <span>Post-Launch</span>
                      </div>
                    </div>
                  </form>
                ) : (
                  /* Form Submission Confirmation View */
                  <div className="space-y-6 text-center my-auto py-6">
                    <div className="w-14 h-14 rounded-full bg-[#F7DCE5] text-[#96405d] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                        Discussion Request Formulated!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-md mx-auto">
                        Thank you, {formData.firstName}. We have prepared your project summary. Connect directly with our engineering team:
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={mailtoUrl}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send via Email Client</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Instant WhatsApp Connect</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white underline pt-4 cursor-pointer"
                    >
                      Done & Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

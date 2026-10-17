import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Send, AlertCircle, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { companyData } from '../../data/companyData';

export default function ProjectEnquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: ['Website Development'],
    message: '',
    budgetRange: '$2,000 – $5,000',
    timeline: 'Standard (2–4 weeks)',
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [isReadyToDispatch, setIsReadyToDispatch] = useState(false);

  const availableServices = [
    'Website Development',
    'Web Applications & SaaS',
    'UI/UX Design & Systems',
    'Digital Growth & SEO',
    'Website Redesign',
    'Cloud & DevOps',
  ];

  const budgetOptions = [
    'Under $2,000',
    '$2,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000+',
    'Flexible / Milestone-based',
  ];

  const timelineOptions = [
    'Urgent (1–2 weeks)',
    'Standard (2–4 weeks)',
    'Comprehensive (1–2 months)',
    'Flexible / Phased Roadmap',
  ];

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.serviceInterest.includes(service);
      if (exists) {
        if (prev.serviceInterest.length === 1) return prev; // keep at least one
        return {
          ...prev,
          serviceInterest: prev.serviceInterest.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          serviceInterest: [...prev.serviceInterest, service],
        };
      }
    });
    if (errors.serviceInterest) {
      setErrors((prev) => ({ ...prev, serviceInterest: null }));
    }
  };

  const validateStep1 = () => {
    const stepErrors = {};
    if (!formData.name.trim()) {
      stepErrors.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      stepErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      stepErrors.email = 'Please provide a valid email format (e.g. name@company.com).';
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const validateStep2 = () => {
    const stepErrors = {};
    if (!formData.serviceInterest || formData.serviceInterest.length === 0) {
      stepErrors.serviceInterest = 'Please select at least one service category.';
    }
    if (!formData.message.trim()) {
      stepErrors.message = 'Please provide a brief description of your project.';
    } else if (formData.message.trim().length < 15) {
      stepErrors.message = `Project description is too short (${formData.message.trim().length}/15 characters minimum).`;
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setErrors({});
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep1() && validateStep2()) {
      setIsReadyToDispatch(true);
    }
  };

  const getFormattedPayload = () => {
    return `PROJECT ENQUIRY FOR TECHCRESTAX
====================================
Client Name:    ${formData.name}
Email Address:  ${formData.email}
Company/Brand:  ${formData.company || 'Direct Engagement / Stealth'}
Phone / WA:     ${formData.phone || 'Not Provided'}

PROJECT SPECIFICATIONS:
Services:       ${formData.serviceInterest.join(', ')}
Budget Range:   ${formData.budgetRange}
Desired Timing: ${formData.timeline}

PROJECT OVERVIEW:
${formData.message}
====================================
Submitted via TechCrestaX Interactive Project Hub`;
  };

  const handleMailtoDispatch = () => {
    const subject = encodeURIComponent(`Project Brief: ${formData.name} — ${formData.serviceInterest[0] || 'Digital Project'}`);
    const body = encodeURIComponent(getFormattedPayload());
    window.location.href = `mailto:${companyData.contact.primaryEmail}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppDispatch = () => {
    const text = encodeURIComponent(
      `Hello TechCrestaX team! I am submitting an inquiry for a project:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Company:* ${formData.company || 'N/A'}\n*Services:* ${formData.serviceInterest.join(', ')}\n*Budget:* ${formData.budgetRange}\n*Timeline:* ${formData.timeline}\n\n*Brief:* ${formData.message}`
    );
    window.open(`https://wa.me/918340426550?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyPayload = () => {
    navigator.clipboard.writeText(getFormattedPayload());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg shadow-slate-200/50 dark:shadow-none relative overflow-hidden transition-colors">
      {/* Step Progress Header */}
      {!isReadyToDispatch && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4d7c0f] dark:text-[#84cc16]">
              Step {currentStep} of 3
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {currentStep === 1 && 'Contact Details'}
              {currentStep === 2 && 'Project Scope & Requirements'}
              {currentStep === 3 && 'Investment & Final Review'}
            </span>
          </div>

          {/* Accessible Step Progress Track */}
          <div className="grid grid-cols-3 gap-2" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={3}>
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                currentStep >= 1 ? 'bg-slate-900 dark:bg-white' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            />
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                currentStep >= 2 ? 'bg-slate-900 dark:bg-white' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            />
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                currentStep >= 3 ? 'bg-[#84cc16]' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            />
          </div>

          {/* Step Pill Buttons for Easy Backtrack */}
          <div className="flex items-center justify-between mt-3 text-xs font-medium text-slate-500 dark:text-slate-400">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors ${
                currentStep === 1 ? 'font-bold text-slate-900 dark:text-white' : ''
              }`}
            >
              1. Contact
            </button>
            <button
              type="button"
              onClick={() => validateStep1() && setCurrentStep(2)}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors ${
                currentStep === 2 ? 'font-bold text-slate-900 dark:text-white' : ''
              }`}
            >
              2. Scope
            </button>
            <button
              type="button"
              onClick={() => validateStep1() && validateStep2() && setCurrentStep(3)}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors ${
                currentStep === 3 ? 'font-bold text-slate-900 dark:text-white' : ''
              }`}
            >
              3. Review
            </button>
          </div>
        </div>
      )}

      {!isReadyToDispatch ? (
        <form onSubmit={handleSubmit} noValidate>
          {/* ================= STEP 1: CONTACT DETAILS ================= */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  Let's start with your contact details
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  We'll use this to send your project scope review, technical architecture suggestions, and direct communication.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="e.g. Sarah Jenkins"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-700 transition-colors ${
                      errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-slate-900 dark:focus:border-white'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-xs text-rose-500 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="sarah@yourbrand.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-700 transition-colors ${
                      errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-slate-900 dark:focus:border-white'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-xs text-rose-500 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Company / Organization <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Finora SaaS or Studio Vance"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-700 focus:border-slate-900 dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Phone / WhatsApp <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000 or +91..."
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-700 focus:border-slate-900 dark:focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#4d7c0f] shrink-0" />
                  <span>Strict NDA and data confidentiality observed</span>
                </div>
                <Button type="button" onClick={handleNext} variant="primary" showArrow>
                  Continue to Project Scope
                </Button>
              </div>
            </div>
          )}

          {/* ================= STEP 2: PROJECT DETAILS ================= */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  Define your project scope & requirements
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Choose the services you require and summarize what you want to achieve.
                </p>
              </div>

              {/* Service Selection Pills */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5 font-semibold">
                  Required Services <span className="text-rose-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((service) => {
                    const isSelected = formData.serviceInterest.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 border ${
                          isSelected
                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {isSelected && <span className="mr-1.5 font-bold">✓</span>}
                        {service}
                      </button>
                    );
                  })}
                </div>
                {errors.serviceInterest && (
                  <p role="alert" className="text-xs text-rose-500 flex items-center gap-1 mt-2 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.serviceInterest}
                  </p>
                )}
              </div>

              {/* Project Description Textarea */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold">
                    Project Overview & Goals <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-slate-400">
                    {formData.message.trim().length} chars (min 15)
                  </span>
                </div>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  placeholder="Tell us about the product or website you need built, your core goals, key integrations, or any reference websites you admire..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-xl p-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-700 transition-colors leading-relaxed ${
                    errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-slate-900 dark:focus:border-white'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-xs text-rose-500 flex items-center gap-1 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                <Button type="button" onClick={handleBack} variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  Back
                </Button>
                <Button type="button" onClick={handleNext} variant="primary" showArrow>
                  Continue to Budget & Review
                </Button>
              </div>
            </div>
          )}

          {/* ================= STEP 3: OPTIONAL REQUIREMENTS & REVIEW ================= */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  Investment range & final review
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Specify your ideal budget and timeline, then review your brief before submitting.
                </p>
              </div>

              {/* Budget & Timeline Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="budgetRange" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-semibold">
                    Target Budget Range
                  </label>
                  <select
                    id="budgetRange"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:bg-white dark:focus:bg-slate-700 focus:border-slate-900 dark:focus:border-white transition-colors"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-semibold">
                    Desired Delivery Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:bg-white dark:focus:bg-slate-700 focus:border-slate-900 dark:focus:border-white transition-colors"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Live Review Summary Box */}
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Project Brief Summary
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs font-semibold text-[#4d7c0f] dark:text-[#84cc16] hover:underline"
                  >
                    Edit Details
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-mono">Contact:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {formData.name || 'Not provided'} ({formData.email})
                    </span>
                  </div>
                  {formData.company && (
                    <div>
                      <span className="text-slate-400 block font-mono">Company:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {formData.company}
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="text-slate-400 block font-mono">Scope:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {formData.serviceInterest.join(', ')}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono">Budget / Timing:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {formData.budgetRange} • {formData.timeline}
                    </span>
                  </div>
                </div>

                {formData.message && (
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                    <span className="text-slate-400 block font-mono mb-1">Brief Overview:</span>
                    <p className="line-clamp-2 italic">"{formData.message}"</p>
                  </div>
                )}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                <Button type="button" onClick={handleBack} variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  Back
                </Button>
                <Button type="submit" variant="primary" showArrow>
                  Review & Transmit Brief
                </Button>
              </div>
            </div>
          )}
        </form>
      ) : (
        /* ================= HONEST DISPATCH SCREEN ================= */
        <div className="py-4 space-y-6 animate-fadeIn">
          <div className="text-center max-w-lg mx-auto space-y-3">
            <div className="w-14 h-14 bg-lime-100 dark:bg-lime-950/80 rounded-2xl flex items-center justify-center mx-auto text-[#4d7c0f] dark:text-[#84cc16]">
              <Check className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
              Project Brief Compiled & Ready
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We provide a direct, transparent communication path with TechCrestaX leadership. Choose your preferred dispatch channel below:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <button
              type="button"
              onClick={handleMailtoDispatch}
              className="flex items-center gap-3 p-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all text-left shadow-sm group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#84cc16] shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  Launch Email Client
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-xs text-slate-300 font-mono">
                  Direct to {companyData.contact.primaryEmail}
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDispatch}
              className="flex items-center gap-3 p-4 bg-[#25D366] text-white rounded-2xl hover:bg-[#20ba59] transition-all text-left shadow-sm group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  Send on WhatsApp
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-xs text-emerald-100 font-mono">
                  Fastest response (under 2 hrs)
                </div>
              </div>
            </button>
          </div>

          {/* Formatted Payload Preview Box */}
          <div className="max-w-2xl mx-auto bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Formatted Brief Payload:
              </span>
              <button
                type="button"
                onClick={handleCopyPayload}
                className="text-xs font-mono text-[#4d7c0f] dark:text-[#84cc16] hover:underline flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Payload
                  </>
                )}
              </button>
            </div>
            <pre className="text-xs font-mono text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto max-h-48 overflow-y-auto">
              {getFormattedPayload()}
            </pre>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                setIsReadyToDispatch(false);
                setCurrentStep(1);
              }}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline font-mono"
            >
              ← Edit brief or start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

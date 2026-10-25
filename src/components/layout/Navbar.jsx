import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  ChevronDown, 
  Layout, 
  ShoppingBag, 
  Code, 
  Palette, 
  Search, 
  TrendingUp, 
  MapPin, 
  ShieldCheck, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import Button from '../ui/Button';
import { companyData } from '../../data/companyData';
import { servicesData } from '../../data/servicesData';

const serviceIcons = {
  'website-design-development': Layout,
  'ecommerce-website-development': ShoppingBag,
  'web-applications-platforms': Code,
  'ui-ux-design': Palette,
  'seo-local-seo': Search,
  'digital-growth-online-presence': TrendingUp,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const location = useLocation();
  const navigate = useNavigate();

  const dropdownCloseTimeout = useRef(null);

  // Scroll detection for sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close overlays on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOffCanvasOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer or off-canvas is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setOffCanvasOpen(false);
        setServicesDropdownOpen(false);
      }
    };

    if (mobileMenuOpen || offCanvasOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, offCanvasOpen]);

  // Smooth hover handlers for services dropdown (prevents accidental closing)
  const handleDropdownEnter = () => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownCloseTimeout.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  // Nav links configuration
  const navLinks = [
    { name: 'Home', path: '/', id: 'hero' },
    { name: 'Work', path: '/work', id: 'portfolio' },
    { name: 'Services', path: '/services', id: 'services', hasDropdown: true },
    { name: 'Pricing', path: '/pricing', id: 'pricing' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'FAQ', path: '/faq', id: 'faq' },
    { name: 'Contact', path: '/contact', id: 'enquiry' },
  ];

  // Scroll spy on homepage
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const sectionIds = ['enquiry', 'faq', 'pricing', 'about', 'services', 'portfolio', 'hero'];

    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const triggerOffset = 180;

      if (scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerOffset) {
            setActiveSection(id);
            return;
          }
        }
      }

      setActiveSection('hero');
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    window.addEventListener('resize', handleScrollSpy, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      window.removeEventListener('resize', handleScrollSpy);
    };
  }, [location.pathname]);

  // Handle URL hash on initial load
  useEffect(() => {
    if (location.pathname === '/' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const el = document.getElementById(hashId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(hashId);
        }, 150);
      }
    }
  }, [location.pathname]);

  // Determine active link
  const isLinkActive = (link) => {
    if (location.pathname === '/') {
      return activeSection === link.id;
    }
    if (link.path === '/') return location.pathname === '/';
    if (link.id === 'portfolio') {
      return location.pathname.startsWith('/work') || location.pathname.startsWith('/portfolio');
    }
    if (link.id === 'services') {
      return location.pathname.startsWith('/services');
    }
    if (link.id === 'pricing') {
      return location.pathname.startsWith('/pricing');
    }
    if (link.id === 'faq') {
      return location.pathname.startsWith('/faq');
    }
    return location.pathname.startsWith(link.path);
  };

  // Click handler
  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (e?.currentTarget) {
      e.currentTarget.blur();
    }

    if (location.pathname === '/') {
      e.preventDefault();
      if (link.id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('hero');
        window.history.pushState(null, '', '/');
      } else {
        const el = document.getElementById(link.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(link.id);
          window.history.pushState(null, '', `#${link.id}`);
        } else {
          navigate(link.path);
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 dark:bg-[#090e1a]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-xs'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveSection('hero');
                  window.history.pushState(null, '', '/');
                }
              }}
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white rounded-xl p-1 -m-1"
              aria-label="TechCrestaX Homepage"
            >
              <img
                src="/logo.png"
                alt="TechCrestaX Official Logo"
                className="w-9 h-9 rounded-xl object-contain shadow-xs border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white flex items-center">
                  TechCresta<span className="text-slate-950 dark:text-white">X</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
                  Digital Engineering
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with Animated Interactive Links & Dropdown */}
          <nav 
            className="hidden md:flex items-center gap-1 bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-full px-2.5 py-1 shadow-xs backdrop-blur-md relative" 
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link)}
                      onFocus={handleDropdownEnter}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                      className={`relative px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 outline-none flex items-center gap-1.5 select-none ${
                        active || servicesDropdownOpen
                          ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs border border-[#FFD4C9] dark:border-[#FF6B4A]/40 font-bold scale-[1.02]'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] dark:bg-[#FF8C70] animate-pulse shrink-0" />
                      )}
                      <span>{link.name}</span>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 transition-transform duration-200 opacity-60 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#FF6B4A]' : ''
                        }`} 
                      />
                    </Link>

                    {/* Services Dropdown Panel (Bridge area prevents hover gaps) */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-2.5 z-50 transition-all duration-200 transform ${
                        servicesDropdownOpen 
                          ? 'opacity-100 translate-y-0 pointer-events-auto visible' 
                          : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                      }`}
                    >
                      <div className="w-[580px] bg-white/98 dark:bg-[#0B0F19]/98 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-2xl shadow-2xl p-4 overflow-hidden">
                        
                        {/* Header bar inside dropdown */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800/80 px-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              Core Engineering Disciplines
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF6B4A]/10 text-[#C2410C] dark:text-[#FF8C70] font-mono font-bold">
                              6 Disciplines
                            </span>
                          </div>
                          <Link
                            to="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-xs font-semibold text-[#FF6B4A] hover:text-[#FF7C42] flex items-center gap-1 transition-colors"
                          >
                            <span>All Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        {/* 2-Column Grid of 6 Services */}
                        <div className="grid grid-cols-2 gap-2">
                          {servicesData.map((service, idx) => {
                            const IconComponent = serviceIcons[service.id] || Layout;
                            return (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200/70 dark:hover:border-slate-700/60 transition-all duration-150"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#FF6B4A]/10 text-[#C2410C] dark:text-[#FF8C70] border border-[#FFD4C9] dark:border-[#FF6B4A]/30 flex items-center justify-center shrink-0 group-hover/item:scale-105 group-hover/item:bg-[#FF6B4A] group-hover/item:text-white transition-all">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-[#FF6B4A] dark:group-hover/item:text-[#FF7C42] transition-colors flex items-center justify-between">
                                    <span className="truncate">{service.title}</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-[#FF6B4A] shrink-0 ml-1" />
                                  </div>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                                    {service.tagline}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Bottom assurance footer */}
                        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 px-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50/60 dark:bg-slate-900/60 -mx-4 -mb-4 p-3 rounded-b-2xl">
                          <span className="flex items-center gap-1.5 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>1st Year Free Maintenance Included</span>
                          </span>
                          <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">
                            Starts ₹7,000+
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 outline-none select-none ${
                    active
                      ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs border border-[#FFD4C9] dark:border-[#FF6B4A]/40 font-bold scale-[1.02]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] dark:bg-[#FF8C70] animate-pulse shrink-0" />
                    )}
                    <span>{link.name}</span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: CTA & 9-Dot Canvas Drawer (Option 05 Signature) */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Primary Coral-Orange CTA (Option 05 Signature) */}
            <Link
              to="/contact"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  const el = document.getElementById('enquiry');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#enquiry');
                  }
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF6248] hover:bg-[#FF7957] text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-md shadow-[#FF6248]/30 hover:shadow-[#FF6248]/50 hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Studio Overview 9-Dot Canvas Trigger */}
            <button
              type="button"
              onClick={() => setOffCanvasOpen(true)}
              aria-label="Open Studio Overview Drawer"
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A111B] flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#FF6248] dark:hover:text-white hover:border-[#FF6248]/50 transition-all cursor-pointer shadow-2xs group"
              title="Studio Overview"
            >
              <div className="grid grid-cols-3 gap-[3px] group-hover:scale-110 transition-transform">
                <span className="w-[3px] h-[3px] rounded-full bg-current" />
                <span className="w-[3px] h-[3px] rounded-full bg-current" />
                <span className="w-[3px] h-[3px] rounded-full bg-current" />
                <span className="w-[3px] h-[3px] rounded-full bg-current" />
                <span className="w-[3px] h-[3px] rounded-full bg-[#FF6248]" />
                <span className="w-[3px] h-[3px] rounded-full bg-current" />
                <span className="w-[3px] h-[3px] rounded-full bg-current" />
                <span className="w-[3px] h-[3px] rounded-full bg-current" />
                <span className="w-[3px] h-[3px] rounded-full bg-current" />
              </div>
            </button>
          </div>

          {/* Mobile Right Controls: Single Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6248] active:scale-95 transition-all duration-200 cursor-pointer shadow-xs"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#FF6248]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Off-Canvas Studio Drawer (Alpha Agency Signature Experience) */}
      {offCanvasOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setOffCanvasOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white dark:bg-[#0B0F19] shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between p-6 sm:p-8 animate-in slide-in-from-right duration-300 overflow-y-auto">
              
              <div>
                {/* Header: Logo & Close */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo.png"
                      alt="TechCrestaX Official Logo"
                      className="w-9 h-9 rounded-xl object-contain shadow-xs border border-slate-100 dark:border-slate-800"
                    />
                    <div>
                      <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                        TechCresta<span className="text-[#FF6B4A]">X</span>
                      </span>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                        Digital Engineering Studio
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOffCanvasOpen(false)}
                    className="p-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                    aria-label="Close Drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* About Pitch */}
                <div className="pt-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C2410C] dark:text-[#FF8C70] mb-2 block">
                    About The Studio
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {companyData.summary}
                  </p>
                </div>

                {/* Key Business Facts */}
                <div className="pt-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 block">
                    Verified Engagement Standards
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                      <div className="text-lg font-bold font-display text-slate-900 dark:text-white">₹7,000+</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Starting Price</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                      <div className="text-lg font-bold font-display text-[#C2410C] dark:text-[#FF8C70]">1 Year Free</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Maintenance Included</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                      <div className="text-lg font-bold font-display text-slate-900 dark:text-white">11 Projects</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">9 Live + 2 Staging</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                      <div className="text-lg font-bold font-display text-slate-900 dark:text-white">₹5,000 / yr</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Subsequent Renewal</div>
                    </div>
                  </div>
                </div>

                {/* Quick Navigation Links */}
                <div className="pt-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 block">
                    Direct Navigation
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
                    <Link 
                      to="/work" 
                      onClick={() => setOffCanvasOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#FF6B4A] transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF6B4A]" />
                      <span>Portfolio Gallery</span>
                    </Link>
                    <Link 
                      to="/services" 
                      onClick={() => setOffCanvasOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#FF6B4A] transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF6B4A]" />
                      <span>All Services</span>
                    </Link>
                    <Link 
                      to="/pricing" 
                      onClick={() => setOffCanvasOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#FF6B4A] transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF6B4A]" />
                      <span>Transparent Pricing</span>
                    </Link>
                    <Link 
                      to="/about" 
                      onClick={() => setOffCanvasOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#FF6B4A] transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF6B4A]" />
                      <span>About Agency</span>
                    </Link>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="pt-6 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Office & Direct Dispatch
                  </span>
                  
                  <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#FF6B4A] shrink-0" />
                      <span>{companyData.location.city}, {companyData.location.state}, India</span>
                    </div>

                    <a 
                      href={`mailto:${companyData.contact.primaryEmail}`}
                      className="flex items-center gap-2.5 hover:text-[#FF6B4A] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#FF6B4A] shrink-0" />
                      <span>{companyData.contact.primaryEmail}</span>
                    </a>

                    <a 
                      href={companyData.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 hover:text-white dark:text-emerald-400 dark:hover:text-white border border-emerald-500/30 hover:border-emerald-500 font-semibold text-xs sm:text-sm transition-all duration-200 shadow-2xs group mt-1"
                      aria-label="Direct message on WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>Direct Message on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <Link
                  to="/contact"
                  onClick={() => setOffCanvasOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-[#FF6B4A] text-white dark:bg-white dark:hover:bg-[#FF6B4A] dark:hover:text-white dark:text-slate-900 font-semibold text-sm transition-all shadow-md cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Mobile Drawer Overlay via Portal directly to body */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-x-0 top-[60px] bottom-0 z-40 bg-white/98 dark:bg-[#090e1a]/98 backdrop-blur-2xl md:hidden overflow-y-auto border-t border-slate-200/90 dark:border-slate-800/90 px-6 py-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-200"
          id="mobile-navigation"
          style={{ height: 'calc(100dvh - 60px)' }}
        >
          <div className="space-y-1">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-slate-800/80">
              <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold">
                Menu & Services
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6248] font-bold">
                TechCrestaX
              </span>
            </div>

            {navLinks.map((link) => {
              const active = isLinkActive(link);

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="py-1">
                    <div className="flex items-center justify-between py-2.5 px-3 rounded-xl">
                      <Link
                        to={link.path}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`text-base font-bold ${
                          active ? 'text-[#C2410C] dark:text-[#FF8C70]' : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        aria-label="Toggle Services list"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Expandable sub-services accordion */}
                    {mobileServicesOpen && (
                      <div className="ml-3 pl-3 border-l border-slate-200 dark:border-slate-800 space-y-1.5 my-1">
                        {servicesData.map((svc) => (
                          <Link
                            key={svc.id}
                            to={`/services/${svc.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 px-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-[#FF6B4A] dark:hover:text-[#FF7C42]"
                          >
                            {svc.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`flex items-center justify-between text-base sm:text-lg font-bold py-3 px-3 rounded-xl transition-all ${
                    active
                      ? 'text-slate-950 dark:text-white bg-[#FF6B4A]/10 dark:bg-[#FF6B4A]/20 font-extrabold border border-[#FFD4C9] dark:border-[#FF6B4A]/30'
                      : 'text-slate-900 dark:text-white hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {active && <span className="w-2 h-2 rounded-full bg-[#FF6B4A] dark:bg-[#FF8C70] animate-pulse" />}
                    {link.name}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 ${active ? 'text-slate-900 dark:text-white opacity-100' : 'opacity-40'}`} />
                </Link>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              showArrow
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (location.pathname === '/') {
                  e.preventDefault();
                  const el = document.getElementById('enquiry');
                  if (el) {
                    setTimeout(() => {
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', '#enquiry');
                    }, 100);
                  }
                }
              }}
            >
              Start a Project
            </Button>

            <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <a
                href={`mailto:${companyData.contact.primaryEmail}`}
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white py-1"
              >
                <Mail className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />
                <span className="truncate">{companyData.contact.primaryEmail}</span>
              </a>
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white py-1 font-semibold text-emerald-600 dark:text-emerald-400"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Direct Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}

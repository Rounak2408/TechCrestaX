import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, Mail, Sun, Moon } from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';
import { companyData } from '../../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme, isDark } = useTheme();

  // Scroll detection for navbar background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Nav Links with section mapping
  const navLinks = [
    { name: 'Home', path: '/', id: 'hero' },
    { name: 'Services', path: '/services', id: 'services' },
    { name: 'Portfolio', path: '/work', id: 'portfolio' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'FAQ', path: '/faq', id: 'faq' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  // Dynamic Scroll-Spy: Track which section is in view on the homepage
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const sectionIds = ['contact', 'faq', 'about', 'portfolio', 'services', 'hero'];

    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Top of page
      if (scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      // Near bottom of page
      if (windowHeight + scrollY >= docHeight - 120) {
        setActiveSection('contact');
        return;
      }

      // Check sections from bottom to top
      const triggerOffset = 180;
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

  // Handle URL hash on initial load or direct navigation (e.g. /#services)
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

  // Determine if a link should be styled as currently active
  const isLinkActive = (link) => {
    if (location.pathname === '/') {
      return activeSection === link.id;
    }

    if (link.path === '/') return location.pathname === '/';
    if (link.id === 'portfolio') {
      return location.pathname.startsWith('/work') || location.pathname.startsWith('/portfolio');
    }
    if (link.id === 'faq') {
      return location.pathname.startsWith('/faq');
    }
    return location.pathname.startsWith(link.path);
  };

  // Click handler: smooth scroll if on homepage, navigate otherwise
  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);

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

  const currentSectionName = navLinks.find((l) => l.id === activeSection)?.name || 'Home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 dark:bg-[#090e1a]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-xs'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Logo & Live Section Indicator */}
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
                  <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-[#eccbd6]" />
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
                  Digital Engineering
                </span>
              </div>
            </Link>

            {/* Live Active Section Breadcrumb Badge (Appears when scrolling past hero on Homepage) */}
            {location.pathname === '/' && activeSection && activeSection !== 'hero' && (
              <div className="hidden xl:flex items-center gap-1.5 ml-3 pl-3 border-l border-slate-200 dark:border-slate-800 text-xs font-mono transition-all animate-in fade-in duration-200">
                <span className="text-slate-400 dark:text-slate-500 text-[11px]">viewing:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F7DCE5]/60 dark:bg-[#F7DCE5]/15 text-[#96405d] dark:text-[#F7DCE5] font-semibold text-[11px] border border-[#F7DCE5] flex items-center gap-1.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#96405d] dark:bg-[#F7DCE5] animate-pulse" />
                  {currentSectionName}
                </span>
              </div>
            )}
          </div>

          {/* Desktop Navigation with Active Section Indicator */}
          <nav 
            className="hidden md:flex items-center gap-1 bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-full px-2.5 py-1 shadow-xs backdrop-blur-md" 
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                    active
                      ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs border border-[#F7DCE5] dark:border-[#F7DCE5]/30 font-bold scale-[1.02]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#96405d] dark:bg-[#F7DCE5] animate-pulse shrink-0" />
                    )}
                    <span>{link.name}</span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <Button to="/contact" variant="primary" size="sm" showArrow>
              Start a Project
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay via Portal directly to body */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-x-0 top-[60px] bottom-0 z-40 bg-white/98 dark:bg-[#090e1a]/98 backdrop-blur-2xl md:hidden overflow-y-auto border-t border-slate-200/90 dark:border-slate-800/90 px-6 py-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-200"
          id="mobile-navigation"
          style={{ height: 'calc(100dvh - 60px)' }}
        >
          <div className="space-y-1">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold">
                  Section Navigation
                </span>
                {location.pathname === '/' && (
                  <span className="px-2 py-0.5 rounded-full bg-[#F7DCE5]/60 dark:bg-[#F7DCE5]/20 text-[#96405d] dark:text-[#F7DCE5] text-[10px] font-mono font-bold">
                    in: {currentSectionName}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="text-xs font-mono flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 active:scale-95 transition-all"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>
            </div>

            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`flex items-center justify-between text-base sm:text-lg font-bold py-3.5 px-3 rounded-xl transition-all ${
                    active
                      ? 'text-slate-950 dark:text-white bg-[#F7DCE5]/50 dark:bg-[#F7DCE5]/15 font-extrabold border border-[#eccbd6]'
                      : 'text-slate-900 dark:text-white hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {active && <span className="w-2 h-2 rounded-full bg-[#96405d] dark:bg-[#F7DCE5] animate-pulse" />}
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
              onClick={() => setMobileMenuOpen(false)}
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
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white py-1"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{companyData.contact.phone} (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}

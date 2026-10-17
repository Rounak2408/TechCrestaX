import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, Mail, Sun, Moon } from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';
import { companyData } from '../../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#fafaf9]/95 dark:bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-xs'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-white rounded-lg p-1 -m-1"
            aria-label="TechCrestaX Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#84cc16] dark:text-[#4d7c0f]" fill="none" stroke="currentColor">
                <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 10L15 14M15 10L9 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
                TechCresta<span className="text-[#4d7c0f] dark:text-[#84cc16]">X</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
                Digital Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-full px-3 py-1 shadow-xs backdrop-blur-md" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                    active
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle & CTA */}
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

          {/* Mobile Right Controls: Theme Toggle & Hamburger Button */}
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
          className="fixed inset-x-0 top-[60px] bottom-0 z-40 bg-white/98 dark:bg-[#0b1120]/98 backdrop-blur-2xl md:hidden overflow-y-auto border-t border-slate-200/90 dark:border-slate-800/90 px-6 py-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-200"
          id="mobile-navigation"
          style={{ height: 'calc(100dvh - 60px)' }}
        >
          <div className="space-y-1">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-slate-800/80">
              <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold">
                Navigation Menu
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className="text-xs font-mono flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 active:scale-95 transition-all"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base sm:text-lg font-bold py-3.5 px-3 rounded-xl transition-all ${
                    active
                      ? 'text-[#4d7c0f] dark:text-[#84cc16] bg-lime-50/80 dark:bg-lime-950/40 font-extrabold'
                      : 'text-slate-900 dark:text-white hover:text-[#4d7c0f] dark:hover:text-[#84cc16] hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />}
                    {link.name}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 ${active ? 'text-[#84cc16] opacity-100' : 'opacity-40'}`} />
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
                <Mail className="w-4 h-4 text-[#4d7c0f] dark:text-[#84cc16] shrink-0" />
                <span className="truncate">{companyData.contact.primaryEmail}</span>
              </a>
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white py-1"
              >
                <Phone className="w-4 h-4 text-[#4d7c0f] dark:text-[#84cc16] shrink-0" />
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

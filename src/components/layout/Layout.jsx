import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import TalkToExpertModal from '../modals/TalkToExpertModal';
import GlobalAtmosphere from '../visuals/background/GlobalAtmosphere';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#05080D] text-slate-900 dark:text-slate-100 selection:bg-[#FFD4C9] dark:selection:bg-[#FF6248]/30 selection:text-[#0f172a] dark:selection:text-white transition-colors duration-200 font-sans relative">
      {/* Global Cinematic Background System: Ambient Glow, Grid, Light Trails & Particles */}
      <GlobalAtmosphere />

      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0f172a] focus:text-white focus:font-bold focus:rounded-md shadow-xl"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Navbar />

      <main id="main-content" className="flex-grow pt-16">
        {children}
      </main>

      <Footer />
      <TalkToExpertModal />
    </div>
  );
}

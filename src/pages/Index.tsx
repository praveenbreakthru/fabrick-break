import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import LiquidBackground from '@/components/ui/LiquidBackground';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import StoriesSection from '@/components/sections/StoriesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import LabsSection from '@/components/sections/LabsSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import AboutSection from '@/components/sections/AboutSection';
import CareersSection from '@/components/sections/CareersSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'stories':
        return <StoriesSection />;
      case 'services':
        return <ServicesSection />;
      case 'industries':
        return <IndustriesSection />;
      case 'labs':
        return <LabsSection />;
      case 'ecosystem':
        return <EcosystemSection />;
      case 'about':
        return <AboutSection />;
      case 'careers':
        return <CareersSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setPage={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <LiquidBackground />
        <Header currentPage={currentPage} setPage={setCurrentPage} />
        <main className="relative z-10 pb-32">
          {renderPage()}
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 border-t border-border/30 bg-background/50 backdrop-blur-xl">
          <div className="container mx-auto max-w-7xl px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue via-brand-violet to-brand-indigo flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm font-grotesk">B</span>
                </div>
                <span className="font-bold text-foreground font-grotesk">
                  BREAKTHRU<span className="text-brand-violet">.AI</span>
                </span>
              </button>
              
              <p className="text-sm text-muted-foreground">
                © 2024 Breakthru Enterprise Solutions. All rights reserved.
              </p>
              
              <div className="flex gap-6">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </button>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
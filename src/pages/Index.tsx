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
      </div>
    </ThemeProvider>
  );
};

export default Index;
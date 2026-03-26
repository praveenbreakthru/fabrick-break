import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const FULL_NAV_LINKS = [
  ...NAV_LINKS,
  { name: 'Ecosystem', id: 'ecosystem', subtitle: "Our squad." },
  { name: 'Careers', id: 'careers', subtitle: "Join the fabric." },
];

const DRAWER_NAV_LINKS = [
  { name: 'Stories', id: 'stories' },
  { name: 'Services', id: 'services' },
  { name: 'Industries', id: 'industries' },
  { name: 'Labs', id: 'labs' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

interface HeaderProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const Header = ({ currentPage, setPage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setPage(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
          isScrolled && "py-3"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-full border backdrop-blur-2xl transition-all duration-500",
            isScrolled
              ? "bg-background/80 border-border/50 shadow-lg shadow-foreground/5"
              : "bg-transparent border-transparent"
          )}
        >
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <button
              onClick={() => setPage('home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue via-brand-violet to-brand-indigo flex items-center justify-center shadow-lg shadow-brand-violet/30 group-hover:scale-110 transition-transform">
                <span className="text-primary-foreground font-black text-lg font-grotesk">D</span>
              </div>
              <span className="text-xl font-black tracking-tight font-grotesk text-foreground">
                Digital<span className="text-brand-violet">Fabric</span>
              </span>
            </button>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>

              {/* Navigation Drawer Toggle */}
              <button
                onClick={() => setIsNavDrawerOpen(true)}
                className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors flex flex-col gap-1.5 items-center justify-center w-10 h-10"
              >
                <span className="w-5 h-0.5 bg-foreground rounded-full" />
                <span className="w-5 h-0.5 bg-foreground rounded-full" />
                <span className="w-5 h-0.5 bg-foreground rounded-full" />
              </button>

              <button
                onClick={() => setPage('contact')}
                className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold text-sm uppercase tracking-wide hover:scale-105 transition-transform font-grotesk"
              >
                Let's Talk
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <nav className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-6 p-8">
          {FULL_NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={cn(
                "text-4xl font-black uppercase tracking-tight font-grotesk transition-all duration-300 animate-fade-up",
                currentPage === link.id ? "text-foreground" : "text-muted-foreground"
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-all duration-500 ease-in-out",
          isNavDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-xl transition-all duration-500",
            isNavDrawerOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsNavDrawerOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-80 bg-background border-l border-border/50 shadow-2xl transition-transform duration-500 ease-out",
            isNavDrawerOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/30">
            <span className="text-lg font-black uppercase tracking-tight font-grotesk text-foreground">
              Navigate
            </span>
            <button
              onClick={() => setIsNavDrawerOpen(false)}
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col p-6 gap-2">
            {DRAWER_NAV_LINKS.map((link, i) => (
              <button
                key={link.id}
                onClick={() => {
                  setPage(link.id);
                  setIsNavDrawerOpen(false);
                }}
                className={cn(
                  "text-left px-4 py-4 rounded-xl text-lg font-bold font-grotesk transition-all duration-300",
                  currentPage === link.id
                    ? "bg-foreground/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
                style={{
                  transform: isNavDrawerOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isNavDrawerOpen ? 1 : 0,
                  transitionDelay: `${i * 50}ms`
                }}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
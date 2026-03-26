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

interface HeaderProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const Header = ({ currentPage, setPage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          "sticky top-0 z-50 transition-all duration-500 px-6 py-4",
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
                <span className="text-primary-foreground font-black text-lg font-grotesk">B</span>
              </div>
              <span className="text-xl font-black tracking-tight font-grotesk text-foreground">
                Breakthru<span className="text-brand-violet">.ai</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {FULL_NAV_LINKS.slice(0, 6).map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-grotesk",
                    currentPage === link.id
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </nav>

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
    </>
  );
};

export default Header;
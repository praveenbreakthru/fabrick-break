import React from 'react';
import { ArrowRight, ArrowUpRight, FlaskConical } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import GlassCard from '@/components/ui/GlassCard';

interface HeroSectionProps {
  setPage: (page: string) => void;
}

const STORY_PREVIEWS = [
  { id: 'finance', category: 'Fintech', title: 'The Neo-Bank Heist', color: 'from-brand-blue to-brand-cyan' },
  { id: 'manufacturing', category: 'Manufacturing', title: 'Ghost in the Machine', color: 'from-brand-orange to-destructive' },
  { id: 'telecom', category: 'Telecom', title: 'Signal vs. Noise', color: 'from-brand-violet to-brand-indigo' }
];

const HeroSection = ({ setPage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 px-6">
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <div className="space-y-8 max-w-3xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/40 dark:bg-card/5 border border-border/60 dark:border-border/10 backdrop-blur-xl animate-fade-in shadow-lg shadow-foreground/5 dark:shadow-background/20">
              <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse shadow-[0_0_10px_hsl(var(--brand-emerald)/0.5)]" />
              <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase">
                System Online v2.1
              </span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tight text-foreground mix-blend-normal dark:mix-blend-overlay animate-fade-up font-grotesk">
              ARCHITECT.<br />
              BUILD.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet drop-shadow-sm dark:drop-shadow-[0_0_30px_hsl(var(--brand-indigo)/0.3)]">
                RUN.
              </span>
            </h1>
            
            {/* Description card */}
            <div className="glass-card p-6 rounded-2xl max-w-xl animate-fade-up">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                We are the <span className="text-foreground font-semibold glow-text">Digital Fabric</span>. A hybrid of high-end consulting and deep engineering. No slide decks, just shipped code.
              </p>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <BrandButton onClick={() => setPage('contact')}>
                Start Transformation <ArrowRight className="w-4 h-4" />
              </BrandButton>
              <BrandButton variant="secondary" onClick={() => setPage('stories')}>
                Explore Stories <ArrowUpRight className="w-4 h-4" />
              </BrandButton>
            </div>
          </div>

          {/* Right content - Story previews */}
          <div className="hidden lg:flex flex-col items-end gap-6 h-full justify-center perspective-1000">
            <div className="text-right mb-4">
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-violet font-grotesk tracking-tighter uppercase">
                Breakthru Stories
              </h3>
              <p className="text-sm text-muted-foreground font-mono">Real impact. Real code.</p>
            </div>
              
            {STORY_PREVIEWS.map((story, i) => (
              <div 
                key={i}
                onClick={() => setPage('stories')}
                className="group relative w-80 cursor-pointer transition-all duration-500 hover:w-96 hover:-translate-x-4"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${story.color} rounded-[2rem] opacity-0 group-hover:opacity-75 blur-xl transition duration-500`} />
                  
                <GlassCard 
                  className="relative p-6 flex flex-col justify-between h-full bg-card/80 dark:bg-background/80 border-border/50 dark:border-border/10" 
                  hoverEffect={false}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r ${story.color}`}>
                      {story.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:translate-x-2 transition-transform duration-300 font-grotesk">
                    {story.title}
                  </h4>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Labs teaser */}
      <div className="container mx-auto px-6 max-w-7xl mt-20 relative z-20">
        <div 
          onClick={() => setPage('labs')} 
          className="group cursor-pointer relative overflow-hidden rounded-[2.5rem] border border-border/30 dark:border-border/10 bg-card/30 dark:bg-background/40 backdrop-blur-2xl p-12 text-center transition-all duration-500 hover:border-brand-cyan/50 hover:shadow-[0_0_80px_hsl(var(--brand-cyan)/0.25)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-brand-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 dark:bg-brand-cyan/20 text-brand-cyan rounded-full text-xs font-mono uppercase tracking-widest mb-6 border border-brand-cyan/30">
              <FlaskConical className="w-3 h-3" /> Experimental Division
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tighter font-grotesk">
              BREAKTHRU LABS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Where we engineer the impossible. Explore our R&D studio, internal products, and the bleeding edge of AI.
            </p>
            <span className="inline-flex items-center gap-2 text-brand-cyan font-bold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform">
              Enter The Lab <ArrowRight className="w-4 h-4" />
            </span>
          </div>
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: `linear-gradient(hsl(var(--brand-cyan)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-cyan)/0.3) 1px, transparent 1px)`, 
              backgroundSize: '40px 40px',
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' 
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
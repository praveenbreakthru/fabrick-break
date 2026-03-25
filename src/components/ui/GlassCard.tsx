import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: 'default' | 'light' | 'dark' | 'gradient';
  onClick?: () => void;
}

const GlassCard = ({ 
  children, 
  className, 
  hoverEffect = true, 
  variant = 'default', 
  onClick 
}: GlassCardProps) => {
  const variants = {
    default: "bg-card/60 dark:bg-background/40 border-border/40 dark:border-border/20 shadow-2xl shadow-foreground/5 dark:shadow-background/20 backdrop-saturate-150",
    light: "bg-card/70 dark:bg-card/10 border-border/50 dark:border-border/20 shadow-xl shadow-brand-blue/5 backdrop-saturate-150",
    dark: "bg-secondary/50 dark:bg-background/60 border-border/40 dark:border-border/10 shadow-xl shadow-foreground/10 backdrop-saturate-150",
    gradient: "bg-gradient-to-br from-card/40 to-card/10 dark:from-card/10 dark:to-transparent border-border/30 dark:border-border/10 backdrop-saturate-150"
  };

  return (
    <div 
      onClick={onClick}
      className={cn(
        "rounded-[2rem] border backdrop-blur-2xl transition-all duration-500 relative overflow-hidden group",
        variants[variant],
        hoverEffect && "hover:bg-card/70 dark:hover:bg-card/10 hover:border-border/60 dark:hover:border-border/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 dark:via-foreground/10 to-transparent opacity-80" />
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
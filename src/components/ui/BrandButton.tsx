import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BrandButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const BrandButton = ({ 
  children, 
  variant = 'primary', 
  className, 
  onClick 
}: BrandButtonProps) => {
  const baseStyle = "px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 flex items-center gap-3 relative overflow-hidden group uppercase text-sm backdrop-blur-md cursor-pointer antialiased font-grotesk";
  
  const variants = {
    primary: "bg-foreground/90 dark:bg-primary/90 text-background dark:text-primary-foreground hover:bg-foreground dark:hover:bg-primary hover:scale-105 shadow-xl shadow-foreground/10 dark:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    secondary: "bg-card/30 dark:bg-card/10 border border-border/40 dark:border-border/20 text-foreground dark:text-primary hover:bg-card/50 dark:hover:bg-card/20 hover:border-border/60 dark:hover:border-border/40",
    outline: "border border-brand-blue/50 text-brand-blue hover:bg-brand-blue/10 hover:border-brand-blue"
  };

  return (
    <button 
      onClick={onClick} 
      className={cn(baseStyle, variants[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 dark:via-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    </button>
  );
};

export default BrandButton;
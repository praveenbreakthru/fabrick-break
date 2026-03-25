import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeading = ({ 
  children, 
  align = 'center', 
  className 
}: SectionHeadingProps) => {
  return (
    <h2 className={cn(
      "text-4xl md:text-7xl font-black mb-12 tracking-tight uppercase relative z-10 font-grotesk",
      "text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40",
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      {children}
    </h2>
  );
};

export default SectionHeading;
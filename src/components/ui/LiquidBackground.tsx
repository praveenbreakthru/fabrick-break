import React from 'react';

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background transition-colors duration-700">
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
      
      {/* Mesh gradient blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[hsl(var(--mesh-1))] rounded-full blur-[180px] animate-mesh-float mix-blend-multiply dark:mix-blend-screen opacity-50" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[hsl(var(--mesh-2))] rounded-full blur-[180px] animate-mesh-float animation-delay-2000 mix-blend-multiply dark:mix-blend-screen opacity-50" />
      <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] bg-[hsl(var(--mesh-3))] rounded-full blur-[150px] animate-pulse-slow mix-blend-multiply dark:mix-blend-screen opacity-40" />
    </div>
  );
};

export default LiquidBackground;
import React, { useState } from 'react';
import { Briefcase, Factory, Network, ShoppingBag, Landmark, Activity, ArrowRight, ArrowLeft, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { INDUSTRY_DETAILS } from '@/lib/constants';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import BrandButton from '@/components/ui/BrandButton';

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  finance: <Briefcase className="w-8 h-8" />,
  manufacturing: <Factory className="w-8 h-8" />,
  telecom: <Network className="w-8 h-8" />,
  retail: <ShoppingBag className="w-8 h-8" />,
  family: <Landmark className="w-8 h-8" />,
  healthcare: <Activity className="w-8 h-8" />,
};

const INDUSTRY_COLORS: Record<string, string> = {
  finance: 'from-brand-blue to-brand-cyan',
  manufacturing: 'from-brand-orange to-destructive',
  telecom: 'from-brand-indigo to-brand-violet',
  retail: 'from-pink-500 to-rose-500',
  family: 'from-brand-emerald to-teal-500',
  healthcare: 'from-destructive to-rose-500',
};

const industries = [
  { id: "finance", title: "Financial Services", tags: ["Digital Banking", "Payments", "Wealth"] },
  { id: "manufacturing", title: "Manufacturing", tags: ["IoT", "Smart Factory", "Supply Chain"] },
  { id: "telecom", title: "Telecom", tags: ["5G Ops", "Network AI", "Digital BSS"] },
  { id: "retail", title: "Retail & CPG", tags: ["Customer 360", "Omnichannel", "Forecasting"] },
  { id: "family", title: "Family Offices", tags: ["Wealth Tech", "Reporting", "Security"] },
  { id: "healthcare", title: "Healthcare", tags: ["Telemedicine", "Patient Data", "AI Diag"] }
];

const IndustryDetail = ({ industry, onBack }: { industry: any, onBack: () => void }) => (
  <div className="animate-fade-in">
    {/* Hero */}
    <div className="mb-16 relative rounded-[3rem] overflow-hidden min-h-[500px] flex items-end p-10 md:p-16 group">
      <img 
        src={industry.image} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        alt={industry.title} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent dark:from-background/90 dark:via-background/50" />
      
      <div className="relative z-10 w-full">
        <button 
          onClick={onBack}
          className="absolute top-[-40px] left-0 flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors group/btn"
        >
          <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" /> Back to Industries
        </button>
        
        <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 backdrop-blur-md rounded-full text-xs font-mono uppercase tracking-widest mb-4 text-primary-foreground">
              {industry.tagline}
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-primary-foreground mb-4 font-grotesk leading-tight">
              {industry.title}
            </h2>
          </div>
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${INDUSTRY_COLORS[industry.id]} text-primary-foreground shadow-lg`}>
            {INDUSTRY_ICONS[industry.id]}
          </div>
        </div>
      </div>
    </div>

    {/* Digital Shift Section */}
    <div className="grid lg:grid-cols-2 gap-12 mb-20">
      <h2 className="text-4xl font-bold text-foreground font-grotesk lg:col-span-2">The Digital Shift</h2>
      
      <GlassCard className="p-8" variant="dark">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-brand-orange" />
          <h3 className="text-xl font-bold text-foreground">The Challenge</h3>
        </div>
        <div className="space-y-6">
          {industry.challenges.map((c: any, i: number) => (
            <div key={i} className="p-4 bg-background/30 rounded-xl border border-border/30">
              <h4 className="font-bold text-foreground mb-1">{c.title}</h4>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-8" variant="gradient">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle2 className="w-6 h-6 text-brand-emerald" />
          <h3 className="text-xl font-bold text-foreground">Our Solution</h3>
        </div>
        <div className="space-y-6">
          {industry.solutions.map((s: any, i: number) => (
            <div key={i} className="p-4 bg-brand-emerald/5 rounded-xl border border-brand-emerald/20">
              <h4 className="font-bold text-foreground mb-1">{s.title}</h4>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>

    {/* Outcome */}
    <GlassCard className="p-10 text-center" variant="light">
      <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">The Result</h3>
      <p className="text-2xl md:text-3xl font-bold text-foreground font-grotesk">
        "{industry.outcome}"
      </p>
    </GlassCard>
  </div>
);

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const selectedIndustry = activeIndustry 
    ? INDUSTRY_DETAILS[activeIndustry as keyof typeof INDUSTRY_DETAILS] 
    : null;

  return (
    <div className="pt-32 min-h-screen px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        {!activeIndustry ? (
          <div className="animate-fade-in">
            <SectionHeading>Where We Play</SectionHeading>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-20 text-xl font-light">
              Vertical depth meets horizontal scale.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {industries.map((ind, i) => (
                <GlassCard 
                  key={ind.id} 
                  className="group p-8 cursor-pointer"
                  onClick={() => setActiveIndustry(ind.id)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${INDUSTRY_COLORS[ind.id]} text-primary-foreground shadow-lg group-hover:scale-110 transition-transform`}>
                      {INDUSTRY_ICONS[ind.id]}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">0{i+1}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-grotesk">
                    {ind.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ind.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs font-mono px-3 py-1 rounded-full border border-border/60 dark:border-border/10 bg-card/40 dark:bg-card/5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Family Office Highlight */}
            <GlassCard 
              className="p-0 overflow-hidden cursor-pointer group"
              onClick={() => setActiveIndustry('family')}
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-emerald/10 text-brand-emerald rounded-full text-xs font-mono uppercase tracking-widest mb-6 w-fit border border-brand-emerald/30">
                    New Offering
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-grotesk">
                    Family Office Transformations
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Modernizing wealth management with institutional-grade technology. We build bespoke investment platforms, consolidated reporting dashboards, and secure data infrastructure for single and multi-family offices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Consolidated Reporting', 'Private Equity Workflows', 'Secure Data Vaults'].map(t => (
                      <span key={t} className="text-xs font-mono px-3 py-1 rounded-full border border-brand-emerald/30 text-brand-emerald">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-brand-emerald font-bold group-hover:translate-x-2 transition-transform">
                    Explore Industry Solution <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80" 
                    alt="Family Office"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </GlassCard>
          </div>
        ) : (
          <IndustryDetail 
            industry={selectedIndustry} 
            onBack={() => setActiveIndustry(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default IndustriesSection;
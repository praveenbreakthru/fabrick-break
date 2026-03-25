import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Target, Database, Cpu, Rocket, Lightbulb, MapPin, BarChart3, ShieldCheck, Landmark, Layers, Sparkles, Zap, Workflow, CheckCircle2, Users, Building2, Network } from 'lucide-react';
import { SERVICE_DETAILS } from '@/lib/constants';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import BrandButton from '@/components/ui/BrandButton';

const ICONS: Record<string, React.ReactNode> = {
  Target: <Target className="w-10 h-10" />,
  Database: <Database className="w-10 h-10" />,
  Cpu: <Cpu className="w-10 h-10" />,
  Rocket: <Rocket className="w-10 h-10" />,
  MapPin: <MapPin className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Landmark: <Landmark className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Workflow: <Workflow className="w-5 h-5" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
};

const PILLARS = [
  { id: 'strategy', title: "Strategy", desc: "Blueprints that compile.", color: "from-brand-blue to-brand-cyan", tags: ["Roadmap", "ROI Modeling"] },
  { id: 'data', title: "Data & AI", desc: "From lakes to intelligence.", color: "from-brand-violet to-pink-500", tags: ["Lakehouse", "GenAI Agents"] },
  { id: 'engineering', title: "Engineering", desc: "Hardcore platform build.", color: "from-brand-indigo to-brand-blue", tags: ["Cloud Native", "DevSecOps"] },
  { id: 'growth', title: "Growth", desc: "Scale on demand.", color: "from-brand-emerald to-teal-500", tags: ["Squads", "GCC Build"] }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  
  const service = activeService ? SERVICE_DETAILS[activeService as keyof typeof SERVICE_DETAILS] : null;

  if (activeService && service) {
    return (
      <div className="pt-32 min-h-screen px-6 relative z-10 animate-fade-in">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section of Detail */}
          <div className="mb-16 relative rounded-[3rem] overflow-hidden min-h-[500px] flex items-end p-10 md:p-16 group">
            <img 
              src={service.image} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt={service.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent dark:from-background/90 dark:via-background/50" />
            
            <div className="relative z-10 w-full">
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-[-40px] left-0 flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors group/btn"
              >
                <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" /> Back to Services
              </button>
              <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 backdrop-blur-md rounded-full text-xs font-mono uppercase tracking-widest mb-4 text-primary-foreground">
                    {service.tagline}
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black text-primary-foreground mb-4 font-grotesk leading-tight">
                    {service.title}
                  </h2>
                </div>
                <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-xl border border-primary/20 text-primary-foreground">
                  {ICONS[service.iconName]}
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-foreground mb-6 font-grotesk">The Approach</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">{service.description}</p>
              
              <h3 className="text-2xl font-bold text-foreground mb-6 font-grotesk">Key Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.capabilities.map((cap, i) => (
                  <GlassCard key={i} className="p-6" variant="dark">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-brand-blue/10 text-brand-blue">
                        {ICONS[cap.iconName]}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{cap.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
            
            <div>
              <GlassCard className="p-8 sticky top-32" variant="gradient">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-card/20 dark:bg-card/10 rounded-full text-xs font-mono uppercase tracking-widest mb-6 text-muted-foreground">
                  <Lightbulb className="w-3 h-3 text-yellow-500" /> Philosophy
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-grotesk">How We Work</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.approach}
                </p>
                <BrandButton className="w-full justify-center">Engage This Service</BrandButton>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="animate-fade-in">
          <SectionHeading>Capabilities</SectionHeading>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-20 text-xl font-light">
            We don't just advise. We architect, build, and run.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {PILLARS.map((p, i) => (
              <GlassCard 
                key={i} 
                className="p-0 group min-h-[400px] flex flex-col hover:border-border/30 transition-colors cursor-pointer"
                onClick={() => setActiveService(p.id)}
              >
                <div className="p-10 md:p-12 flex-1 relative z-10 flex flex-col">
                  <div className="mb-8 flex justify-between items-start">
                    <div className={`p-5 rounded-3xl bg-gradient-to-br ${p.color} shadow-lg shadow-foreground/5 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-primary-foreground">
                        {p.id === 'strategy' && <Target className="w-10 h-10" />}
                        {p.id === 'data' && <Database className="w-10 h-10" />}
                        {p.id === 'engineering' && <Cpu className="w-10 h-10" />}
                        {p.id === 'growth' && <Rocket className="w-10 h-10" />}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-foreground mb-4 font-grotesk">{p.title}</h3>
                  <p className="text-muted-foreground text-xl leading-relaxed mb-8 flex-1 font-light">{p.desc}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {p.tags.map(t => (
                      <span 
                        key={t} 
                        className="text-xs font-mono px-4 py-2 rounded-full border border-border/60 dark:border-border/10 bg-card/40 dark:bg-card/5 text-muted-foreground uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
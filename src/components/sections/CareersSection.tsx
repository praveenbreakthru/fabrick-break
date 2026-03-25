import React from 'react';
import { Rocket, Users, Coffee, MonitorSmartphone, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';

const ROLES = [
  { title: "Senior Platform Engineer", loc: "Bengaluru, India", type: "Engineering" },
  { title: "Data Scientist (LLM Focus)", loc: "Remote / Hybrid", type: "AI Labs" },
  { title: "Solutions Architect", loc: "Dubai, UAE", type: "Consulting" },
  { title: "Frontend Lead (React)", loc: "Hyderabad, India", type: "Engineering" }
];

const PERKS = [
  { icon: <Rocket className="w-6 h-6" />, title: "High Autonomy", desc: "You own the module. You own the deployment." },
  { icon: <Users className="w-6 h-6" />, title: "No Bureaucracy", desc: "Flat hierarchy. Ideas win, not titles." },
  { icon: <MonitorSmartphone className="w-6 h-6" />, title: "Top-Tier Gear", desc: "MacBooks, Copilot licenses, and whatever you need to ship." }
];

const CareersSection = () => {
  return (
    <div className="pt-32 min-h-screen px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <SectionHeading>Join The Fabric</SectionHeading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are looking for builders, architects, and dreamers who want to own the outcome.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Life at Breakthru */}
          <GlassCard className="p-10" variant="gradient">
            <h3 className="text-3xl font-bold text-foreground mb-8 font-grotesk">Life at Breakthru</h3>
            
            <div className="space-y-6">
              {PERKS.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background/30 border border-border/30">
                  <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Open Roles */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 font-grotesk">Open Roles</h3>
            
            <div className="space-y-4 mb-8">
              {ROLES.map((role, i) => (
                <GlassCard key={i} className="p-6 group cursor-pointer" variant="dark">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-brand-blue transition-colors">
                        {role.title}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{role.loc}</span>
                        <span>•</span>
                        <span className="text-brand-blue">{role.type}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </GlassCard>
              ))}
            </div>
            
            <button className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Positions <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersSection;
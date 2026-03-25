import React from 'react';
import { Handshake, Network } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';

const STRATEGIC_PARTNERS = [
  { name: 'Snowflake', tag: 'Data Cloud', color: 'bg-[#29B5E8]' },
  { name: 'Google Cloud', tag: 'AI Infrastructure', color: 'bg-[#4285F4]' },
  { name: 'Databricks', tag: 'Data Intelligence', color: 'bg-[#FF3621]' },
  { name: 'Intellect Design', tag: 'Fintech Platform', color: 'bg-[#002D72]' },
];

const PARTNER_MODELS = [
  { title: "Co-Engineering", desc: "Joint IP development" },
  { title: "Implementation", desc: "Last-mile delivery" },
  { title: "White-Label", desc: "Product / Platform Squads" }
];

const CATEGORIES = ['Cloud Infrastructure', 'Data Platforms', 'AI/ML Model Modelers', 'Industry SaaS'];

const EcosystemSection = () => {
  return (
    <div className="pt-32 min-h-screen px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <SectionHeading>The Constellation</SectionHeading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't go alone. We integrate with the giants to deliver the holistic "Digital Fabric".
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Strategic Alliances */}
          <GlassCard className="p-10" variant="dark">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                <Handshake className="w-8 h-8" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4 font-grotesk">Strategic Alliances</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Deep engineering partnerships where we don't just implement tools, we build on top of them.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {STRATEGIC_PARTNERS.map((p, i) => (
                <div key={i} className="group p-4 rounded-xl bg-background/30 border border-border/30 hover:bg-background/50 transition-colors">
                  <div className={`w-3 h-3 rounded-full ${p.color} mb-3`} />
                  <div>
                    <h4 className="font-bold text-foreground">{p.name}</h4>
                    <p className="text-xs text-muted-foreground">{p.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* How We Partner */}
          <GlassCard className="p-10 flex flex-col justify-center" variant="gradient">
            <Network className="w-12 h-12 text-brand-violet mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-8 font-grotesk">How We Partner</h3>
            
            <div className="space-y-6">
              {PARTNER_MODELS.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background/20 border border-border/20">
                  <div className="w-8 h-8 rounded-full bg-brand-violet/20 text-brand-violet flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => (
            <GlassCard key={i} className="p-6 text-center" variant="light">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Category 0{i+1}</p>
              <h4 className="font-bold text-foreground">{cat}</h4>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcosystemSection;
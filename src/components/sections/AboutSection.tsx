import React from 'react';
import { Sparkles, Code2, Users, Heart, Check, MapPin, Building2, Globe } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import BrandButton from '@/components/ui/BrandButton';
import { PARTNERS } from '@/lib/constants';

const VALUES = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Code > Slides',
    description: 'We ship working software, not PowerPoint decks. Every engagement results in production-ready code.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Extreme Ownership',
    description: 'We treat your platform as if it were our own. On-call, accountable, and invested in outcomes.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Engineer-to-Engineer',
    description: 'No account managers or intermediaries. You work directly with the engineers building your system.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Radical Transparency',
    description: 'Open access to our code, our roadmaps, and our honest assessment of project risks.',
  },
];

const MANIFESTO = [
  "No slides without code.",
  "Outcome over output.",
  "We own the crash.",
  "AI-Native from Day 0."
];

const LOCATIONS = [
  { 
    region: "India", 
    role: "Engineering HQ", 
    cities: ["Bengaluru", "Mumbai", "Hyderabad"],
    icon: <Building2 className="w-6 h-6" />
  },
  { 
    region: "GCC", 
    role: "Client Engagement", 
    cities: ["Dubai", "Riyadh"],
    icon: <Globe className="w-6 h-6" />
  },
  { 
    region: "Southeast Asia", 
    role: "Regional Ops", 
    cities: ["Kuala Lumpur", "Manila"],
    icon: <MapPin className="w-6 h-6" />
  }
];

const AboutSection = () => {
  return (
    <div className="pt-32 min-h-screen px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-mono uppercase tracking-widest mb-6 border border-brand-blue/30">
              <Sparkles className="w-3 h-3" /> Since 2023
            </div>
            <SectionHeading align="left" className="mb-6">The Digital Fabric</SectionHeading>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              We exist in the gap between the slide-deck consultants and the body-shop system integrators. 
            </p>
            <p className="text-2xl font-bold text-foreground mb-8">
              We architect. We build. We run.
            </p>
            <BrandButton>Join The Fabric</BrandButton>
          </div>
          
          <div className="relative">
            <GlassCard className="p-8" variant="dark">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-grotesk">Our Manifesto</h3>
              <div className="space-y-4">
                {MANIFESTO.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background/20 border border-border/20">
                    <Check className="w-5 h-5 text-brand-emerald" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {VALUES.map((value, i) => (
            <GlassCard key={i} className="p-8 group" variant="light">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-primary-foreground transition-all duration-300">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-grotesk">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Global Footprint */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-3xl font-bold text-foreground font-grotesk">Global Footprint</h3>
              <p className="text-muted-foreground">3 Hubs • 200+ Engineers</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, i) => (
              <GlassCard key={i} className="p-8" variant="gradient">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-brand-violet/10 text-brand-violet">
                    {loc.icon}
                  </div>
                  <span className="text-sm text-muted-foreground">{loc.role}</span>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4 font-grotesk">{loc.region}</h4>
                <div className="flex flex-wrap gap-2">
                  {loc.cities.map(city => (
                    <span key={city} className="text-xs font-mono px-3 py-1 rounded-full border border-border/40 text-muted-foreground">
                      {city}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Registered Address */}
        <GlassCard className="p-10 text-center" variant="dark">
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">Registered Entity</h3>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Building2 className="w-6 h-6 text-brand-blue" />
          </div>
          <p className="text-xl font-bold text-foreground mb-2">Breakthru Enterprise Solutions Private Limited</p>
          <p className="text-muted-foreground">1292 - 1293, Trichy Rd, Nadar Colony, Race Course,</p>
          <p className="text-muted-foreground">Coimbatore, Tamil Nadu 641018</p>
          <p className="text-sm text-muted-foreground mt-4">CIN: U72900KA2023PTC178945</p>
        </GlassCard>

        {/* Partners */}
        <div className="text-center mt-24">
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-8">
            Ecosystem Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {PARTNERS.map((partner, i) => (
              <div 
                key={i} 
                className={`text-2xl md:text-3xl font-bold ${partner.color} opacity-60 hover:opacity-100 transition-opacity font-grotesk`}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
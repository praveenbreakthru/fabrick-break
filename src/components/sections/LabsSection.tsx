import React from 'react';
import { FlaskConical, Bot, BrainCircuit, Eye, Server, ArrowUpRight, Check, Send, Siren } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import BrandButton from '@/components/ui/BrandButton';

const LAB_PRODUCTS = [
  {
    title: 'Nexus BD',
    subtitle: 'The Autonomous Growth Engine.',
    description: 'An advanced AI-powered Business Development automation platform that streamlines the entire sales prospecting workflow. From dual-provider AI research (Gemini + Deepseek) to hyper-personalized email outreach.',
    icon: <Bot className="w-8 h-8" />,
    status: 'Beta Access',
    statusColor: 'bg-brand-violet/10 text-brand-violet border-brand-violet/30',
    color: 'from-brand-cyan to-brand-blue',
    features: [
      "Dual AI Research Engine",
      "Auto-Personalized Landing Pages",
      "Sentiment Analysis on Replies",
      "Workflow Automation"
    ],
    cta: 'Request Demo Access',
  },
  {
    title: 'Agent Lenz',
    subtitle: 'The AIOps Sentinel.',
    description: 'Comprehensive AI-powered incident management and SRE platform. Streamline operations, reduce downtime by 60%, and automate routine tasks to focus human expertise on complex problems.',
    icon: <Siren className="w-8 h-8" />,
    status: 'Live V1.0',
    statusColor: 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/30',
    color: 'from-brand-orange to-yellow-500',
    features: [
      "Intelligent Alert Correlation",
      "Automated War Rooms",
      "Real-time SLA Compliance",
      "Predictive Breach Detection"
    ],
    cta: 'Explore Platform',
  },
];

const LabsSection = () => {
  return (
    <div className="pt-32 min-h-screen px-6 relative z-10">
      {/* Exclusive Background for Labs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-brand-cyan/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-brand-violet/10 rounded-full blur-[180px] animate-mesh-float" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(hsl(var(--brand-cyan)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-cyan)/0.3) 1px, transparent 1px)`, 
            backgroundSize: '60px 60px' 
          }} 
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full text-brand-cyan text-xs font-mono uppercase tracking-widest mb-8">
            <FlaskConical className="w-4 h-4" /> Experimental Division
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-foreground mb-6 tracking-tighter font-grotesk">
            BREAKTHRU<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet">
              LABS
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where the world's best creative ideas get built. Experience the art of modern AI studios.
          </p>
        </div>

        {/* Product Gallery */}
        <div className="space-y-12 mb-24">
          {LAB_PRODUCTS.map((product, i) => (
            <GlassCard key={i} className="p-0 overflow-hidden group" variant="dark">
              <div className="grid lg:grid-cols-2">
                {/* Image/Visual Side */}
                <div className={`relative h-64 lg:h-auto min-h-[400px] bg-gradient-to-br ${product.color} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary-foreground/10 backdrop-blur-xl flex items-center justify-center text-primary-foreground">
                      {product.icon}
                    </div>
                  </div>
                  <div 
                    className="absolute inset-0 opacity-20" 
                    style={{ 
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} 
                  />
                </div>

                {/* Content Side */}
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-background/30 text-foreground">
                      {product.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-black text-foreground mb-2 font-grotesk">
                    {product.title}
                  </h3>
                  <p className="text-xl text-brand-blue mb-4">{product.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-brand-emerald" /> {feat}
                      </div>
                    ))}
                  </div>
                  
                  <BrandButton variant="outline">
                    {product.cta} <ArrowUpRight className="w-4 h-4" />
                  </BrandButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Co-Create Studio Form */}
        <GlassCard className="p-0 overflow-hidden relative" variant="gradient">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border/30">
              <div className="p-4 rounded-2xl bg-brand-violet/10 text-brand-violet w-fit mb-6">
                <BrainCircuit className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-4 font-grotesk">Co-Create with Labs</h3>
              <p className="text-muted-foreground text-lg">
                Have a breakthrough idea? Register it here. We build the world's best creative ideas.
              </p>
            </div>

            <div className="p-10 md:p-16">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Visionary Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-violet/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Contact Signal</label>
                    <input 
                      type="email" 
                      placeholder="you@future.com"
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-violet/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">The Big Idea</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your breakthrough concept..."
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-violet/50 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <BrandButton className="w-full justify-center">
                  Register Interest <Send className="w-4 h-4" />
                </BrandButton>
              </form>
            </div>
          </div>

          {/* Decorative Grid */}
          <div 
            className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none" 
            style={{ 
              backgroundImage: `linear-gradient(hsl(var(--brand-violet)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-violet)/0.5) 1px, transparent 1px)`, 
              backgroundSize: '30px 30px' 
            }} 
          />
        </GlassCard>
      </div>
    </div>
  );
};

export default LabsSection;
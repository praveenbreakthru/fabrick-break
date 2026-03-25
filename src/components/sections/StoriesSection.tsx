import React, { useState } from 'react';
import { Zap, Code2, ShieldCheck } from 'lucide-react';
import { STORIES_DATA } from '@/lib/constants';
import GlassCard from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';

type StoryKey = keyof typeof STORIES_DATA;

const StoriesSection = () => {
  const [activeStory, setActiveStory] = useState<StoryKey>('finance');
  const story = STORIES_DATA[activeStory];

  return (
    <div className="pt-32 min-h-screen relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Story tabs */}
        <div className="flex gap-4 overflow-x-auto pb-8 mb-16 scrollbar-hide snap-x">
          {Object.entries(STORIES_DATA).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveStory(key as StoryKey)}
              className={cn(
                "flex-shrink-0 snap-start px-8 py-6 rounded-3xl border transition-all duration-500 min-w-[280px] text-left relative overflow-hidden group backdrop-blur-xl",
                activeStory === key 
                  ? "bg-card/70 dark:bg-card/10 border-border/60 dark:border-border/40 shadow-xl dark:shadow-[0_0_30px_hsl(var(--foreground)/0.1)]" 
                  : "bg-card/30 dark:bg-background/20 border-border/40 dark:border-border/5 text-muted-foreground hover:bg-card/50 dark:hover:bg-card/5 hover:border-border/50 dark:hover:border-border/20"
              )}
            >
              <div className="text-xs font-mono uppercase mb-3 opacity-60 flex items-center gap-2">
                <span className={cn(
                  "w-2 h-2 rounded-full", 
                  activeStory === key 
                    ? "bg-brand-blue shadow-[0_0_8px_hsl(var(--brand-blue)/0.8)]" 
                    : "bg-muted-foreground"
                )} />
                Episode: {key}
              </div>
              <div className={cn(
                "text-xl font-bold leading-tight mb-2 font-grotesk", 
                activeStory === key ? "text-foreground" : "text-muted-foreground"
              )}>
                {data.title}
              </div>
              {activeStory === key && (
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-blue to-brand-violet animate-loading-bar" style={{ width: '100%' }} />
              )}
            </button>
          ))}
        </div>

        <div className="animate-fade-in" key={activeStory}>
          {/* Hero image */}
          <div className="relative h-[65vh] rounded-[3rem] overflow-hidden mb-20 group border border-border/40 dark:border-border/10 shadow-2xl">
            <img 
              src={story.image} 
              alt={story.title}
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent dark:from-background dark:via-background/50 flex items-end p-8 md:p-16">
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 border border-brand-blue/50 backdrop-blur-md text-brand-blue font-mono text-xs rounded-full mb-8">
                  <Zap className="w-3 h-3" /> CASE STUDY 2024
                </div>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-4 leading-[0.9] text-primary-foreground drop-shadow-2xl font-grotesk">
                  {story.tagline}
                </h1>
              </div>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-32">
            {/* Sidebar nav */}
            <div className="lg:col-span-3 sticky top-32 hidden lg:flex flex-col gap-4">
              {['The Context', 'The Tech', 'The Grind', 'The Breakthru'].map((item, i) => (
                <div key={i} className="group flex items-center gap-4 py-2 cursor-default">
                  <div className="w-12 h-[1px] bg-border group-hover:bg-brand-blue group-hover:w-16 transition-all duration-300" />
                  <span className="text-sm font-mono text-muted-foreground group-hover:text-brand-blue uppercase tracking-widest transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="lg:col-span-9 space-y-20">
              {/* Section 01 - Context/Depth */}
              <GlassCard className="p-10 md:p-16" variant="dark">
                <div className="flex items-center gap-6 mb-8 border-b border-border pb-8">
                  <div className="text-5xl font-black text-muted/20 font-grotesk">01</div>
                  <h3 className="text-4xl font-bold text-brand-blue font-grotesk">{story.sections.depth.title}</h3>
                </div>
                <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light font-grotesk mb-8">
                  {story.sections.depth.text}
                </p>
                {'subsections' in story.sections.depth && story.sections.depth.subsections && (
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {story.sections.depth.subsections.map((sub, i) => (
                      <div key={i} className="p-4 bg-card/20 dark:bg-card/5 rounded-xl border border-border/40 dark:border-border/10">
                        <div className="font-bold text-foreground mb-1">{sub.title}</div>
                        <div className="text-sm text-muted-foreground">{sub.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>

              {/* Section 02 - Tech */}
              <GlassCard className="p-10 md:p-16" variant="dark">
                <div className="flex items-center gap-6 mb-8 border-b border-border pb-8">
                  <div className="text-5xl font-black text-muted/20 font-grotesk">02</div>
                  <h3 className="text-4xl font-bold text-brand-violet font-grotesk">{story.sections.tech.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-grotesk text-xl">
                  {story.sections.tech.text}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {story.sections.tech.tags.map(tag => (
                    <div key={tag} className="group relative px-6 py-3 rounded-xl bg-card/40 dark:bg-card/5 border border-border/60 dark:border-border/10 overflow-hidden cursor-default transition-all hover:bg-card/60 dark:hover:bg-card/10">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-violet/10 dark:from-brand-blue/20 dark:to-brand-violet/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10 text-sm font-mono text-brand-blue flex items-center gap-2 uppercase tracking-wide">
                        <Code2 className="w-4 h-4" /> {tag}
                      </span>
                    </div>
                  ))}
                </div>
                {'extra' in story.sections.tech && story.sections.tech.extra && (
                  <div className="p-6 rounded-2xl bg-card/30 dark:bg-background/40 border border-border/50 dark:border-border/10">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-brand-emerald" /> {story.sections.tech.extra.title}
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {story.sections.tech.extra.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </GlassCard>

              {/* Section 03 - Ownership/Grind */}
              <GlassCard className="p-0 overflow-hidden" variant="default">
                <div className="grid md:grid-cols-2">
                  <div className="p-10 md:p-16 bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
                    <div className="text-5xl font-black text-muted/10 mb-4 font-grotesk">03</div>
                    <h3 className="text-4xl font-bold text-foreground mb-6 font-grotesk">{story.sections.ownership.title}</h3>
                    <div className="w-20 h-2 bg-gradient-to-r from-brand-blue to-brand-violet rounded-full" />
                  </div>
                  <div className="p-10 md:p-16 flex flex-col justify-center bg-card/20 dark:bg-background/40">
                    <p className="text-xl text-muted-foreground leading-relaxed font-grotesk mb-8">
                      {story.sections.ownership.text}
                    </p>
                    {'timeline' in story.sections.ownership && story.sections.ownership.timeline && (
                      <div className="space-y-6">
                        {story.sections.ownership.timeline.map((step, i) => (
                          <div key={i} className="relative pl-8 border-l-2 border-border last:border-0 pb-1">
                            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-brand-blue shadow-[0_0_10px_hsl(var(--brand-blue)/0.5)]" />
                            <div className="flex justify-between items-baseline mb-1">
                              <span className="font-bold text-foreground">{step.phase}</span>
                              <span className="text-xs font-mono text-brand-blue">{step.duration}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">{step.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>

              {/* Section 04 - Outcomes */}
              <section>
                <div className="flex items-center gap-6 mb-10">
                  <div className="text-5xl font-black text-muted/10 font-grotesk">04</div>
                  <h3 className="text-4xl font-bold text-brand-emerald font-grotesk">{story.sections.outcomes.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {story.sections.outcomes.stats.map((stat, i) => (
                    <GlassCard key={i} className="p-10 flex flex-col items-center justify-center text-center group" variant="light">
                      <div className="text-5xl md:text-6xl font-black text-foreground mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg font-grotesk">
                        {stat.val}
                      </div>
                      <div className="text-xs font-mono text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-4 py-2 rounded-full border border-brand-blue/30">
                        {stat.label}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
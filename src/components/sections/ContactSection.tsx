import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Send, MessageCircle, Building2, ArrowUpRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import BrandButton from '@/components/ui/BrandButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-32 min-h-screen px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading>Let's Build</SectionHeading>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <GlassCard className="p-8 md:p-12" variant="dark">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Identity
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-card/40 dark:bg-card/5 border border-border/60 dark:border-border/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-blue focus:bg-card/60 dark:focus:bg-card/10 transition-all text-xl font-grotesk"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Coordinates
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-card/40 dark:bg-card/5 border border-border/60 dark:border-border/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-blue focus:bg-card/60 dark:focus:bg-card/10 transition-all text-xl font-grotesk"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  The Mission
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl bg-card/40 dark:bg-card/5 border border-border/60 dark:border-border/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-blue focus:bg-card/60 dark:focus:bg-card/10 transition-all resize-none font-grotesk"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <BrandButton className="w-full justify-center">
                Initialize Sequence <Send className="w-4 h-4" />
              </BrandButton>
            </form>
          </GlassCard>

          {/* Contact info */}
          <div className="space-y-6">
            {/* WhatsApp Integration */}
            <GlassCard className="p-8 group cursor-pointer hover:border-[#25D366]/50" variant="gradient">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="w-8 h-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2 font-grotesk">Chat on WhatsApp</h4>
              <p className="text-muted-foreground mb-4">Direct line to our solutions team.</p>
              <span className="text-[#25D366] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Start Chat <ArrowUpRight className="w-4 h-4" />
              </span>
            </GlassCard>

            {/* Contact Details */}
            <GlassCard className="p-8" variant="dark">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-5 h-5 text-brand-blue mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Registered Office</h4>
                    <p className="text-sm text-muted-foreground">
                      Breakthru Enterprise Solutions Pvt Ltd.<br />
                      1292 - 1293, Trichy Rd, Nadar Colony,<br />
                      Race Course, Coimbatore, TN 641018
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-violet mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">+91 80 4567 8900</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-emerald mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">hello@breakthru.ai</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Social links */}
            <div className="pt-4">
              <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                ].map((social, i) => (
                  <button
                    key={i}
                    className="p-4 rounded-xl bg-card/40 dark:bg-card/10 border border-border/40 text-muted-foreground hover:text-foreground hover:bg-card/60 dark:hover:bg-card/20 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
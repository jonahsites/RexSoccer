import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Trophy, Flame } from 'lucide-react';
import { Builder } from '@builder.io/react';
import { SectionReveal } from './common';
import { Footer } from './Footer';

export const AboutPage = ({
  onBack = () => window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' })),
  backgroundColor = "bg-black",
}: {
  onBack?: () => void;
  backgroundColor?: string;
  key?: React.Key;
}) => {
  const handleLearnMore = () => {
    window.dispatchEvent(new CustomEvent('changePage', { detail: 'vision' }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${backgroundColor} overflow-hidden font-sans text-white selection:bg-ice-blue selection:text-black`}>
      {/* Background ambient lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-ice-blue/[0.04] blur-[170px] pointer-events-none rounded-full" />
      <div className="fixed bottom-1/3 right-0 w-[500px] h-[500px] bg-ice-blue/[0.03] blur-[150px] pointer-events-none rounded-full" />

      {/* Top Header & Navigation */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 md:pt-36 pb-12">
        <div className="flex items-center justify-between mb-10">
          <button 
            onClick={onBack} 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-white/50 hover:text-white transition-all group cursor-pointer bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-ice-blue" /> Back to Home
          </button>
          
          <span className="text-[11px] font-mono tracking-widest text-ice-blue uppercase font-bold hidden sm:inline-block">
            REX SOCCER TRAINING
          </span>
        </div>

        <SectionReveal>
          <div className="relative">
            {/* Ambient Background Watermark */}
            <h2 className="text-[6rem] md:text-[11rem] lg:text-[13rem] font-black leading-none tracking-tighter text-white uppercase opacity-[0.03] absolute -top-16 md:-top-24 left-0 w-full text-center pointer-events-none select-none overflow-hidden whitespace-nowrap">
              ABOUT
            </h2>

            {/* Main Headline (Scaled down as requested) */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight text-white uppercase text-center relative z-20 leading-tight">
              ABOUT <span className="text-ice-blue">REX.</span>
            </h2>

            <p className="text-center text-white/50 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto relative z-20">
              The philosophy, professional standards, and international experience shaping the next generation of soccer.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Section 1: Train With Purpose (Founder, Story, Metrics & Portrait) */}
      <section className="relative py-12 md:py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-blue/10 border border-ice-blue/30 text-ice-blue font-mono font-bold uppercase tracking-widest text-[11px] mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-ice-blue" />
                  THE FUTURE
                </div>
                
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-white uppercase mb-6">
                  TRAIN WITH <span className="text-ice-blue">PURPOSE.</span>
                </h3>

                <div className="space-y-6 text-white/70 text-base md:text-lg font-normal leading-relaxed">
                  <p className="border-l-2 border-ice-blue/40 pl-4 py-0.5 text-white/90">
                    REX Soccer was founded in 2025 by professional and NCAA Division I player, and Panama Youth National Team member, <span className="text-ice-blue font-semibold">Faqir Raza</span>. Built from top-level competition and international experience, REX Soccer is designed for players who don’t just need more practice—they need <span className="text-ice-blue font-semibold">specialized</span> training.
                  </p>
                  <p>
                    Every session at REX is laser-focused, built around game-specific demands and the exact weaknesses holding a player back. No wasted reps, no generic drills—everything we do directly elevates match performance.
                  </p>
                  <p>
                    We develop technical precision, faster decision-making, speed, and discipline—qualities that separate players over time. Most players train hard. Few train with <span className="text-ice-blue font-semibold">purpose</span>.
                  </p>
                </div>

                {/* Key Metrics / Stats Cards */}
                <div className="grid grid-cols-2 gap-4 pt-6 max-w-lg">
                  <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-5 hover:border-ice-blue/40 transition-colors backdrop-blur-sm">
                    <span className="block text-4xl md:text-5xl font-black text-white tracking-tight mb-1">
                      20+
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-ice-blue font-mono font-bold flex items-center gap-1.5">
                      <Trophy className="w-3 h-3" /> Years Experience
                    </span>
                  </div>
                  <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-5 hover:border-ice-blue/40 transition-colors backdrop-blur-sm">
                    <span className="block text-4xl md:text-5xl font-black text-white tracking-tight mb-1">
                      Elite
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-ice-blue font-mono font-bold flex items-center gap-1.5">
                      <Flame className="w-3 h-3" /> Standards
                    </span>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Right Media Column (5 cols) */}
            <div className="lg:col-span-5">
              <SectionReveal yOffset={40}>
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-950 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] group">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1jdej0iD9FEi54lTyWgxPqBndBoXH7nMa" 
                    alt="Coach Faqir Raza"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Atmospheric Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none" />

                  {/* Floating Mission Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-ice-blue animate-pulse" />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/60 font-bold">
                        The Mission
                      </span>
                    </div>
                    <p className="text-base md:text-lg font-medium text-white leading-snug">
                      Unlock your true potential through elite, intentional experience.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Modern Hairline Divider with Glow */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Section 2: Fixing the U.S. Youth System (Mission, Philosophy & Vision CTA) */}
      <section className="relative py-16 md:py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Media Column (5 cols) */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <SectionReveal yOffset={40}>
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-950 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] group">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1bIRqt6PKuxzBpde8q-EjC4HkoHzG7mQu" 
                    alt="Youth Development Training" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Ambient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none" />

                  {/* Corner Accent Badge */}
                  <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase text-ice-blue font-bold">
                    HIGH PERFORMANCE
                  </div>

                  {/* Bottom Strip */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Game-Speed Execution
                    </span>
                    <span className="text-[11px] font-mono text-ice-blue font-bold">
                      IQ & INTELLECT
                    </span>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Right Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-ice-blue font-mono font-bold uppercase tracking-widest text-[11px] mb-4">
                  Our Mission
                </div>

                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-white uppercase mb-6">
                  FIXING THE <span className="text-ice-blue">U.S.</span><br />YOUTH SYSTEM.
                </h3>

                <div className="space-y-6 text-white/70 text-base md:text-lg font-normal leading-relaxed">
                  <p>
                    At REX Soccer, our mission is to bring professional-level training to youth soccer, focusing on the details that make the difference between a good player and an elite one.
                  </p>
                  <p className="border-l-2 border-ice-blue/40 pl-4 py-0.5 text-white/90">
                    We believe that technical mastery is only half the battle. Our philosophy centers on improving &quot;Football IQ&quot;—teaching players how to read the game, anticipate movements, and make split-second decisions under pressure.
                  </p>
                  <p>
                    Whether it&apos;s field player development or specialized goalkeeper training, we foster a culture of discipline and a relentless passion for self-improvement.
                  </p>
                </div>

                {/* Interactive Action Button */}
                <div className="pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLearnMore}
                    className="bg-white text-black hover:bg-ice-blue px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-xl flex items-center gap-2.5 cursor-pointer group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Full Footer */}
      <Footer backgroundColor="bg-black" />
    </div>
  );
};

Builder.registerComponent(AboutPage, {
  name: 'AboutPage',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
  ],
});

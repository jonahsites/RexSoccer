import React from 'react';
import { Zap, Target, GitFork } from 'lucide-react';
import { Builder } from '@builder.io/react';
import { SectionReveal } from './SectionReveal';

interface FrameworkFeature {
  id: string;
  title: string;
  description: string;
}

interface FrameworkSectionProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  centerImage?: string;
  backgroundColor?: string;
  features?: FrameworkFeature[];
  key?: React.Key;
}

export const FrameworkSection = ({
  badgeText = "// THE DEVELOPMENT",
  title = "BUILT FOR THE ELITE GAME.",
  subtitle = "",
  centerImage = "https://lh3.googleusercontent.com/d/12DZSzJvEIHWLiaFVy76PR-nx2S35kGom",
  backgroundColor = "bg-black",
  features = [
    {
      id: "1",
      title: "Faster decision-making",
      description: "Players train under constant defensive pressure so they learn to scan, process, and execute faster, turning hesitation into instinct and smart, confident play."
    },
    {
      id: "2",
      title: "Technical precision under pressure",
      description: "By training in tight, high-intensity environments, athletes develop clean technique that holds up when the game speeds up, not just in isolated drills."
    },
    {
      id: "3",
      title: "Tactical adaptability",
      description: "Players are exposed to multiple positional functions, building true game intelligence and the ability to adapt seamlessly to different systems and match situations."
    },
    {
      id: "4",
      title: "Real-game application",
      description: "Every session is built around how the game actually flows, ensuring skills transfer directly into matches, not just training environments."
    }
  ]
}: FrameworkSectionProps) => {
  const feat1 = features[0] || {
    id: "1",
    title: "Faster decision-making",
    description: "Players train under constant defensive pressure so they learn to scan, process, and execute faster, turning hesitation into instinct and smart, confident play."
  };
  const feat2 = features[1] || {
    id: "2",
    title: "Technical precision under pressure",
    description: "By training in tight, high-intensity environments, athletes develop clean technique that holds up when the game speeds up, not just in isolated drills."
  };
  const feat3 = features[2] || {
    id: "3",
    title: "Tactical adaptability",
    description: "Players are exposed to multiple positional functions, building true game intelligence and the ability to adapt seamlessly to different systems and match situations."
  };
  const feat4 = features[3] || {
    id: "4",
    title: "Real-game application",
    description: "Every session is built around how the game actually flows, ensuring skills transfer directly into matches, not just training environments."
  };

  return (
    <section id="framework" className={`py-20 md:py-28 px-6 ${backgroundColor} relative overflow-hidden`}>
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-ice-blue/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-ice-blue font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
            {badgeText}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-[1.05]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/50 text-base md:text-lg font-light mt-4 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </SectionReveal>

        {/* 3-Column Layout: Left Features | Center Photo Card | Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Faster decision-making & Technical precision */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-10 md:space-y-16">
            <SectionReveal yOffset={30}>
              <div className="group">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-ice-blue shadow-[0_0_20px_rgba(202,234,250,0.06)] group-hover:border-ice-blue/50 group-hover:bg-zinc-800 transition-all duration-300 mb-5">
                  <Zap className="w-5 h-5 text-ice-blue transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                  {feat1.title}
                </h3>
                <p className="text-white/60 font-normal text-sm md:text-base leading-relaxed">
                  {feat1.description}
                </p>
              </div>
            </SectionReveal>

            <SectionReveal yOffset={30}>
              <div className="group">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-ice-blue shadow-[0_0_20px_rgba(202,234,250,0.06)] group-hover:border-ice-blue/50 group-hover:bg-zinc-800 transition-all duration-300 mb-5">
                  <Target className="w-5 h-5 text-ice-blue transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                  {feat2.title}
                </h3>
                <p className="text-white/60 font-normal text-sm md:text-base leading-relaxed">
                  {feat2.description}
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Center Column: Facility Drill Showcase */}
          <div className="lg:col-span-4 flex justify-center order-first lg:order-none">
            <SectionReveal yOffset={40} className="w-full max-w-[420px]">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
                <img 
                  src={centerImage}
                  alt="High Intensity Training Facility"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Shadows for atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

                {/* Subtle Floating Bottom Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-ice-blue animate-pulse" />
                    <span className="text-[11px] font-mono tracking-widest text-white/90 uppercase font-semibold">
                      IN-PERSON PRESSURE TRAINING
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-ice-blue font-bold">
                    REX LAB
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Tactical adaptability & Real-game application */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-10 md:space-y-16">
            <SectionReveal yOffset={30}>
              <div className="group">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-ice-blue shadow-[0_0_20px_rgba(202,234,250,0.06)] group-hover:border-ice-blue/50 group-hover:bg-zinc-800 transition-all duration-300 mb-5">
                  <GitFork className="w-5 h-5 text-ice-blue transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                  {feat3.title}
                </h3>
                <p className="text-white/60 font-normal text-sm md:text-base leading-relaxed">
                  {feat3.description}
                </p>
              </div>
            </SectionReveal>

            <SectionReveal yOffset={30}>
              <div className="group">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-ice-blue shadow-[0_0_20px_rgba(202,234,250,0.06)] group-hover:border-ice-blue/50 group-hover:bg-zinc-800 transition-all duration-300 mb-5">
                  {/* Soccer Pitch SVG icon */}
                  <svg className="w-5 h-5 text-ice-blue transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="2" width="18" height="20" rx="2" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M8 2v3.5h8V2" />
                    <path d="M8 22v-3.5h8V22" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                  {feat4.title}
                </h3>
                <p className="text-white/60 font-normal text-sm md:text-base leading-relaxed">
                  {feat4.description}
                </p>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

Builder.registerComponent(FrameworkSection, {
  name: 'FrameworkSection',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'badgeText', type: 'string', defaultValue: '// THE DEVELOPMENT' },
    { name: 'title', type: 'string', defaultValue: 'BUILT FOR THE ELITE GAME.' },
    { name: 'subtitle', type: 'string', defaultValue: '' },
    { name: 'centerImage', type: 'file', defaultValue: 'https://lh3.googleusercontent.com/d/12DZSzJvEIHWLiaFVy76PR-nx2S35kGom' },
    {
      name: 'features',
      type: 'list',
      subFields: [
        { name: 'id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' }
      ],
      defaultValue: [
        {
          id: '1',
          title: 'Faster decision-making',
          description: 'Players train under constant defensive pressure so they learn to scan, process, and execute faster, turning hesitation into instinct and smart, confident play.'
        },
        {
          id: '2',
          title: 'Technical precision under pressure',
          description: 'By training in tight, high-intensity environments, athletes develop clean technique that holds up when the game speeds up, not just in isolated drills.'
        },
        {
          id: '3',
          title: 'Tactical adaptability',
          description: 'Players are exposed to multiple positional functions, building true game intelligence and the ability to adapt seamlessly to different systems and match situations.'
        },
        {
          id: '4',
          title: 'Real-game application',
          description: 'Every session is built around how the game actually flows, ensuring skills transfer directly into matches, not just training environments.'
        }
      ]
    }
  ]
});

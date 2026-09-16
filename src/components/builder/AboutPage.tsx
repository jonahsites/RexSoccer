import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Builder } from '@builder.io/react';
import { SectionReveal } from './common';
import { AboutSection } from './AboutSection';
import { MissionSection } from './MissionSection';
import { Footer } from './Footer';

export const AboutPage = ({
  onBack = () => window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' })),
  backgroundColor = "bg-black",
}: {
  onBack?: () => void;
  backgroundColor?: string;
  key?: React.Key;
}) => {
  return (
    <div className={`min-h-screen ${backgroundColor} overflow-hidden font-sans`}>
      {/* Top Header & Back to Home button */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-36 md:pt-40 pb-6">
        <button 
          onClick={onBack} 
          className="mb-8 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all group cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <SectionReveal>
          <div className="relative">
            <h2 className="text-[9rem] md:text-[16rem] font-black leading-none tracking-tighter text-white uppercase opacity-5 absolute -top-28 md:-top-36 left-0 w-full text-center pointer-events-none select-none overflow-hidden whitespace-nowrap">
              ABOUT
            </h2>
            <h2 className="text-5xl md:text-[6.5rem] font-black mb-4 tracking-tighter text-white uppercase text-center relative z-20 leading-none">
              ABOUT <span className="text-ice-blue">REX.</span>
            </h2>
          </div>
        </SectionReveal>
      </div>

      {/* Train with Purpose (Founder Story, Experience & Standards) */}
      <AboutSection backgroundColor="bg-black" />

      {/* Fixing the U.S. Youth System (Mission & Player Development) */}
      <MissionSection backgroundColor="bg-black" />

      {/* Full Footer with navigation, contact info & socials */}
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

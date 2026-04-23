import React from 'react';
import { motion } from 'motion/react';
import { Builder } from '@builder.io/react';
import { SectionReveal } from './common';

export const MissionSection = ({
  badgeText = "Our Mission",
  title = "Fixing the U.S.<br />Youth System.",
  paragraphs = [
    "At REX Soccer, our mission is to bring professional-level training to youth soccer, focusing on the details that make the difference between a good player and an elite one.",
    "We believe that technical mastery is only half the battle. Our philosophy centers on improving \"Football IQ\"—teaching players how to read the game, anticipate movements, and make split-second decisions under pressure.",
    "Whether it's field player development or specialized goalkeeper training, we foster a culture of discipline and a relentless passion for self-improvement."
  ],
  ctaText = "Learn More",
  image = "https://lh3.googleusercontent.com/d/1gzQX9jBQTAhaBYWETX9h_j8th411HmCH",
  backgroundColor = "bg-black",
}: {
  badgeText?: string;
  title?: string;
  paragraphs?: string[];
  ctaText?: string;
  image?: string;
  backgroundColor?: string;
}) => {
  return (
    <section className={`py-32 px-6 ${backgroundColor} relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-ice-blue/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
            <SectionReveal>
              <span className="text-ice-blue font-black uppercase tracking-widest text-xs mb-6 block">{badgeText}</span>
              <h2 
                className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter text-white uppercase"
              >
                FIXING THE <span className="text-ice-blue">U.S.</span><br />YOUTH SYSTEM.
              </h2>
              <div className="space-y-8 text-white/60 text-lg font-medium leading-relaxed">
                {paragraphs.map((p, i) => (
                   <p key={i}>{p}</p>
                ))}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.dispatchEvent(new CustomEvent('changePage', { detail: 'vision' }))}
                  className="bg-white text-black hover:bg-ice-blue px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-xl"
                >
                  {ctaText}
                </motion.button>
              </div>
            </SectionReveal>
          <SectionReveal>
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img 
                src={image} 
                alt="Mission" 
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 90%' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

Builder.registerComponent(MissionSection, {
  name: 'MissionSection',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-zinc-200' },
    { name: 'badgeText', type: 'string', defaultValue: "Our Mission" },
    { name: 'title', type: 'string', defaultValue: "Fixing the U.S.<br />Youth System." },
    { name: 'paragraphs', type: 'list', subFields: [{ name: 'p', type: 'string' }], defaultValue: [
      { p: "At REX Soccer, our mission is to bring professional-level training to youth soccer, focusing on the details that make the difference between a good player and an elite one." },
      { p: "We believe that technical mastery is only half the battle. Our philosophy centers on improving \"Football IQ\"—teaching players how to read the game, anticipate movements, and make split-second decisions under pressure." },
      { p: "Whether it's field player development or specialized goalkeeper training, we foster a culture of discipline and a relentless passion for self-improvement." }
    ] },
    { name: 'ctaText', type: 'string', defaultValue: "Learn More" },
    { name: 'image', type: 'file', defaultValue: "https://lh3.googleusercontent.com/d/1gzQX9jBQTAhaBYWETX9h_j8th411HmCH" },
  ],
});
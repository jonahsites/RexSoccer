import React from 'react';
import { Builder } from '@builder.io/react';
import { SectionReveal } from './common';
import { cn } from '../../lib/utils';

export const AboutSection = ({
  badgeText = "THE FUTURE",
  title = "TRAIN WITH<br />PURPOSE.",
  paragraphs = [
    "REX Soccer was founded in 2025 by professional and NCAA Division I player, and Panama Youth National Team member, Faqir Raza. Built from top-level competition and international experience, REX Soccer is designed for players who don’t just need more practice—they need specialized training.",
    "Every session at REX is laser-focused, built around game-specific demands and the exact weaknesses holding a player back. No wasted reps, no generic drills—everything we do directly elevates match performance.",
    "We develop technical precision, faster decision-making, speed, and discipline—qualities that separate players over time. Most players train hard. Few train with purpose."
  ],
  stats = [
    { value: "20+", label: "Years Experience" },
    { value: "Elite", label: "Standards" }
  ],
  image = "https://lh3.googleusercontent.com/d/1SgcDXgRvVYVn-qgWq7FIhqcHqOI-EqJU",
  missionBadge = "The Mission",
  missionText = "Unlock your true potential through elite, intentional experience.",
  backgroundColor = "bg-black",
}: {
  badgeText?: string;
  title?: string;
  paragraphs?: string[];
  stats?: { value: string, label: string }[];
  image?: string;
  missionBadge?: string;
  missionText?: string;
  backgroundColor?: string;
}) => {
  return (
    <section id="about" className={`relative py-20 px-6 overflow-hidden ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <SectionReveal>
              <div className="relative">
                <span className="text-ice-blue font-black uppercase tracking-widest text-xs mb-6 block">{badgeText}</span>
                <h2 
                   className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter text-white uppercase"
                   dangerouslySetInnerHTML={{ __html: title.replace('PURPOSE.', '<span class="text-ice-blue">PURPOSE.</span>') }}
                />
            <div className="space-y-8 text-white/60 text-lg font-medium leading-relaxed max-w-xl">
              {paragraphs.map((p, i) => (
                  <p 
                    key={i} 
                    dangerouslySetInnerHTML={{ 
                      __html: p
                        .replace(/Faqir/g, '<span class="text-ice-blue">Faqir</span>')
                        .replace(/Raza/g, '<span class="text-ice-blue">Raza</span>')
                        .replace(/specialized/g, '<span class="text-ice-blue">specialized</span>')
                        .replace(/purpose/g, '<span class="text-ice-blue">purpose</span>') 
                    }} 
                  />
              ))}
            </div>
            
            <div className="mt-16 flex gap-12">
              {stats.map((stat, i) => (
                <div key={i}>
                   <span className="block text-5xl font-black text-white mb-1">{stat.value}</span>
                   <span className="text-[10px] uppercase tracking-widest text-ice-blue font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="relative">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-sm">
            <img 
              src={image} 
              alt="Coach Raza"
              className="w-full h-full object-cover transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-12 left-12 right-12 z-20">
              <div className="bg-black/80 px-8 py-6 rounded-[2rem] backdrop-blur-md border border-white/5 shadow-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-2">{missionBadge}</p>
                <p className="text-lg font-medium leading-snug text-white">{missionText}</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

Builder.registerComponent(AboutSection, {
  name: 'AboutSection',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'badgeText', type: 'string', defaultValue: "THE FUTURE" },
    { name: 'title', type: 'string', defaultValue: "TRAIN WITH<br />PURPOSE." },
    { name: 'paragraphs', type: 'list', subFields: [{ name: 'p', type: 'string' }], defaultValue: [
      { p: "REX Soccer was founded in 2025 by professional and NCAA Division I player, and Panama Youth National Team member, Faqir Raza. Built from top-level competition and international experience, REX Soccer is designed for players who don’t just need more practice—they need specialized training." },
      { p: "Every session at REX is laser-focused, built around game-specific demands and the exact weaknesses holding a player back. No wasted reps, no generic drills—everything we do directly elevates match performance." },
      { p: "We develop technical precision, faster decision-making, speed, and discipline—qualities that separate players over time. Most players train hard. Few train with purpose." }
    ] },
    { name: 'stats', type: 'list', subFields: [{ name: 'value', type: 'string' }, { name: 'label', type: 'string' }], defaultValue: [
      { value: "20+", label: "Years Experience" },
      { value: "Elite", label: "Standards" }
    ] },
    { name: 'image', type: 'file', defaultValue: "https://image2url.com/r2/default/images/1775340151620-ba0c3990-4c1f-4679-a792-4d264c26de05.jpg" },
    { name: 'missionBadge', type: 'string', defaultValue: "The Mission" },
    { name: 'missionText', type: 'string', defaultValue: "Unlock your true potential through elite, intentional experience." },
  ],
});
import React from 'react';
import { Builder } from '@builder.io/react';
import { SectionReveal } from './common';
import { cn } from '../../lib/utils';

export const AboutSection = ({
  badgeText = "Coach Raza",
  title = "TRAIN WITH<br />PURPOSE.",
  paragraphs = [
    "I’m Faqir Raza, founder of REX Soccer. Soccer has been my environment since the age of 4. The game has taken me through high-level competition, including NCAA Division I soccer and long-term experience training within the Panama Youth National Team system.",
    "That experience shapes how I develop players.",
    "REX Soccer is built for players who want to separate themselves. This is specialized, high-level training — not beginner sessions, not generic drills.",
    "Every session is structured with a clear objective. No wasted reps. No random work. Everything we do shows up in real matches.",
    "We develop:",
    "- Technical precision under pressure",
    "- Game intelligence and faster decision-making",
    "- Speed, conditioning, and explosiveness",
    "- Discipline and consistency that separates players over time",
    "Most players train hard. Very few train with purpose.",
    "REX is where serious players train."
  ],
  stats = [
    { value: "20+", label: "Years Experience" },
    { value: "Elite", label: "Standards" }
  ],
  image = "https://image2url.com/r2/default/images/1775340151620-ba0c3990-4c1f-4679-a792-4d264c26de05.jpg",
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
            <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed max-w-xl">
              {paragraphs.map((p, i) => {
                const isBullet = p.startsWith('- ');
                const prevIsBullet = i > 0 && paragraphs[i-1].startsWith('- ');
                
                if (isBullet) {
                  return (
                    <div key={i} className={cn("flex items-start gap-3 pl-4", prevIsBullet ? "-mt-4" : "")}>
                      <div className="w-1.5 h-1.5 bg-ice-blue mt-2.5 shrink-0 rotate-45" />
                      <p className="text-white/80 font-medium">{p.substring(2)}</p>
                    </div>
                  );
                }
                return (
                  <p 
                    key={i}
                    className={cn(
                      i === 0 ? "text-white text-xl font-medium" : "",
                      i === 1 ? "text-white/80 font-medium" : "",
                      (i === 2 || i === 3 || i === 4 || i === 9) ? "text-white/90 font-medium" : "",
                      p === "REX is where serious players train." ? "text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mt-12 leading-[0.85]" : ""
                    )}
                  >
                    {p === "REX is where serious players train." ? (
                      <>
                        REX IS WHERE <span className="text-white/20">SERIOUS</span> PLAYERS TRAIN.
                      </>
                    ) : p}
                  </p>
                );
              })}
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
              <div className="bg-black/80 px-8 py-6 rounded-[2rem] backdrop-blur-3xl border border-white/5 shadow-xl">
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
    { name: 'badgeText', type: 'string', defaultValue: "Coach Raza" },
    { name: 'title', type: 'string', defaultValue: "TRAIN WITH<br />PURPOSE." },
    { name: 'paragraphs', type: 'list', subFields: [{ name: 'p', type: 'string' }], defaultValue: [
      { p: "I’m Faqir Raza, founder of REX Soccer. Soccer has been my environment since the age of 4. The game has taken me through high-level competition, including NCAA Division I soccer and long-term experience training within the Panama Youth National Team system." },
      { p: "That experience shapes how I develop players." },
      { p: "REX Soccer is built for players who want to separate themselves. This is specialized, high-level training — not beginner sessions, not generic drills." },
      { p: "Every session is structured with a clear objective. No wasted reps. No random work. Everything we do shows up in real matches." },
      { p: "We develop:" },
      { p: "- Technical precision under pressure" },
      { p: "- Game intelligence and faster decision-making" },
      { p: "- Speed, conditioning, and explosiveness" },
      { p: "- Discipline and consistency that separates players over time" },
      { p: "Most players train hard. Very few train with purpose." },
      { p: "REX is where serious players train." }
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

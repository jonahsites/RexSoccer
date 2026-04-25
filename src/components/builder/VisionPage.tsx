import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Builder } from '@builder.io/react';
import { SectionReveal } from './common';

export const VisionPage = ({
  onBack = () => window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' })),
  title = "Vision.",
  sections = [
    { title: "<span class=\"text-oxford-blue\">The Future</span> of REX.", content: "Our vision is to become the premier destination for youth soccer development in the United States. We aren't just training players; we are building a community of elite athletes." },
    { title: "Expansion & Facilities.", content: "In the coming years, REX Soccer aims to open a state-of-the-art training facility, equipped with the latest technology in performance analysis and recovery. We plan to expand our reach across Florida and eventually nationwide." },
    { title: "Pro Pathway.", content: "We are committed to creating direct pathways for our players to reach professional levels, attracting scouts and professional partners who recognize the REX standard of excellence." }
  ],
  visionImages = [
    { image: "/Screenshot 2026-04-25 at 6.43.24 PM.png" },
    { image: "/Screenshot 2026-04-25 at 6.43.59 PM.png" },
    { image: "/Screenshot 2026-04-25 at 6.45.04 PM.png" },
    { image: "/Screenshot 2026-04-25 at 6.45.28 PM.png" }
  ],
  backgroundColor = "bg-black",
}: {
  onBack?: () => void;
  title?: string;
  sections?: { title: string, content: string }[];
  visionImages?: { image: string }[];
  backgroundColor?: string;
  key?: React.Key;
}) => {
  return (
    <div 
      className={`min-h-screen ${backgroundColor} pt-40 pb-20 px-6`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-ice-blue transition-all">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </button>

        <SectionReveal>
          <h2 className="text-6xl md:text-9xl font-black mb-20 tracking-tighter text-white uppercase text-center">{title}</h2>
        </SectionReveal>
        
        {/* Vertical Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-32">
          {visionImages.map((item, i) => (
            <SectionReveal key={i} className="h-full">
              <div className="aspect-[1/2] overflow-hidden border border-white/5 bg-zinc-900 group">
                <img 
                  src={item.image} 
                  alt={`Vision ${i + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {sections.map((section, i) => (
            <SectionReveal key={i}>
              <h3 
                className="text-2xl font-black text-white mb-6 uppercase tracking-tighter"
                dangerouslySetInnerHTML={{ __html: section.title.replace('text-oxford-blue', 'text-ice-blue') }}
              />
              <p className="text-white/50 text-base font-medium leading-relaxed">
                {section.content}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

Builder.registerComponent(VisionPage, {
  name: 'VisionPage',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'title', type: 'string', defaultValue: "Vision." },
    {
      name: 'sections',
      type: 'list',
      subFields: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'string' },
      ],
      defaultValue: [
        { title: "<span class=\"text-oxford-blue\">The Future</span> of REX.", content: "Our vision is to become the premier destination for youth soccer development in the United States. We aren't just training players; we are building a community of elite athletes." },
        { title: "Expansion & Facilities.", content: "In the coming years, REX Soccer aims to open a state-of-the-art training facility, equipped with the latest technology in performance analysis and recovery. We plan to expand our reach across Florida and eventually nationwide." },
        { title: "Pro Pathway.", content: "We are committed to creating direct pathways for our players to reach professional levels, attracting scouts and professional partners who recognize the REX standard of excellence." }
      ],
    },
    {
      name: 'visionImages',
      type: 'list',
      subFields: [{ name: 'image', type: 'file' }],
      defaultValue: [
        { image: "/Screenshot 2026-04-25 at 6.43.24 PM.png" },
        { image: "/Screenshot 2026-04-25 at 6.43.59 PM.png" },
        { image: "/Screenshot 2026-04-25 at 6.45.04 PM.png" },
        { image: "/Screenshot 2026-04-25 at 6.45.28 PM.png" }
      ]
    },
  ],
});
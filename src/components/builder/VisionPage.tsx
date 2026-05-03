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
    { image: "https://lh3.googleusercontent.com/d/17LSOlQkMb1ABuoEvGZuBMmBjRVfqpP74", chapter: "", title: "" },
    { image: "https://lh3.googleusercontent.com/d/1CYoCpZPtLkJZVi9IyWjvgh7MGi7UyEzD", chapter: "", title: "" },
    { image: "https://lh3.googleusercontent.com/d/1IS35oPaRpGRR5qIca0PS4PDNd3YdBJ9b", chapter: "", title: "" }
  ],
  backgroundColor = "bg-black",
}: {
  onBack: () => void;
  title?: string;
  sections?: { title: string, content: string }[];
  visionImages?: { image: string, chapter: string, title: string }[];
  backgroundColor?: string;
  key?: React.Key;
}) => {
  return (
    <div 
      className={`min-h-screen ${backgroundColor} pb-20 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-40 mb-20">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-ice-blue transition-all">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </button>
        <SectionReveal>
          <div className="relative">
            <h2 className="text-[12rem] md:text-[24rem] font-black leading-none tracking-tighter text-white uppercase opacity-10 absolute -top-40 left-0 w-full text-center pointer-events-none select-none">
              {title}
            </h2>
            <h2 className="text-6xl md:text-9xl font-black mb-20 tracking-tighter text-white uppercase text-center relative z-20">
              {title}
            </h2>
          </div>
        </SectionReveal>
      </div>
      
      {/* Layout Inspired by Annotation (Seamless Edge-to-Edge) */}
      <div className="relative w-full mb-32 border-t border-white/5">
        {/* Image Grid (Seamless Edge-to-Edge) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
          {visionImages.map((item, i) => (
            <SectionReveal key={i} className={i === 2 && visionImages.length === 3 ? "md:col-span-2" : ""}>
              <div className="group relative overflow-hidden bg-zinc-900 border-none">
                <img 
                  src={item.image} 
                  alt={item.title || `Vision ${i}`} 
                  className="w-full h-auto block transition-transform duration-[3000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {sections.map((section, i) => (
            <SectionReveal key={i}>
              <h3 
                className="text-2xl font-black text-white mb-6 uppercase tracking-tighter border-b border-white/10 pb-4"
                dangerouslySetInnerHTML={{ __html: section.title.replace('text-oxford-blue', 'text-ice-blue') }}
              />
              <p className="text-white/50 text-xl font-medium leading-relaxed">
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
    { name: 'title', type: 'string', defaultValue: "The Vision." },
    {
      name: 'sections',
      type: 'list',
      subFields: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'string' },
      ],
      defaultValue: [
        { title: "The Next Era.", content: "Rex Soccer was created to bridge the gap between youth development and professional realization. Our vision is to empower the next generation of American talent with the mindset, discipline, and technical foundation required at the highest levels." },
        { title: "Expansion & Facilities.", content: "In the coming years, REX Soccer aims to open a state-of-the-art training facility, equipped with the latest technology in performance analysis and recovery. We plan to expand our reach across Florida and eventually nationwide." },
        { title: "Pro Pathway.", content: "We are committed to creating direct pathways for our players to reach professional levels, attracting scouts and professional partners who recognize the REX standard of excellence." }
      ],
    },
    {
      name: 'visionImages',
      type: 'list',
      subFields: [
        { name: 'image', type: 'file' },
        { name: 'chapter', type: 'string' },
        { name: 'title', type: 'string' }
      ],
      defaultValue: [
        { image: "https://lh3.googleusercontent.com/d/17LSOlQkMb1ABuoEvGZuBMmBjRVfqpP74", chapter: "", title: "" },
        { image: "https://lh3.googleusercontent.com/d/1CYoCpZPtLkJZVi9IyWjvgh7MGi7UyEzD", chapter: "", title: "" },
        { image: "https://lh3.googleusercontent.com/d/1IS35oPaRpGRR5qIca0PS4PDNd3YdBJ9b", chapter: "", title: "" }
      ]
    },
  ],
});

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
    { image: "https://lh3.googleusercontent.com/d/1wq393XSpzGDJwD_wDCCfRVcvrIR-l8Ok", chapter: "01", title: "Technical Excellence" },
    { image: "https://lh3.googleusercontent.com/d/1MBbifo3jdiiC_r0S6PwjjBmYffXdjCvp", chapter: "02", title: "Mental Resilience" },
    { image: "https://lh3.googleusercontent.com/d/1w1HQPsKHTUyIpw-64IaLcfobBhZXEFVw", chapter: "03", title: "Tactical Intelligence" },
    { image: "https://lh3.googleusercontent.com/d/1sym1BTIrZ3WeADjo8PRIhQeg8XznG6yy", chapter: "04", title: "Elite Community" },
    { image: "https://lh3.googleusercontent.com/d/1UaLpG07ug_amLGvpDOFzGbSuoZIIQQ3M", chapter: "05", title: "Performance Analysis" },
    { image: "https://lh3.googleusercontent.com/d/1wa-PSlepm-6-MdVl0NrfiINPCOZpQ83J", chapter: "06", title: "Global Expansion" }
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
      className={`min-h-screen ${backgroundColor} pb-20 overflow-hidden font-sans`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-40 mb-12">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all group">
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
        <SectionReveal>
          <div className="relative">
            <h2 className="text-[10rem] md:text-[18rem] font-black leading-none tracking-tighter text-white uppercase opacity-10 absolute -top-40 left-0 w-full text-center pointer-events-none select-none overflow-hidden whitespace-nowrap">
              {title}
            </h2>
            <h2 className="text-6xl md:text-[8rem] font-black mb-20 tracking-tighter text-ice-blue uppercase text-center relative z-20 leading-none">
              {title}
            </h2>
          </div>
        </SectionReveal>
      </div>
      
      {/* Vision Image Grid */}
      <div className="w-full mb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {visionImages.map((item, i) => (
            <SectionReveal key={i}>
              <div className="group relative overflow-hidden bg-zinc-900 aspect-[16/10]">
                <img 
                  src={item.image} 
                  alt={item.title || `Vision ${i}`} 
                  className="w-full h-full object-cover block transition-transform duration-[3000ms] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-700" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Modern Text Carousel */}
      <div className="relative w-full py-4 overflow-hidden bg-white mb-16">
        <motion.div 
          className="flex whitespace-nowrap will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mx-8">
                THE FUTURE OF REX
              </span>
            </div>
          ))}
        </motion.div>
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
        { image: "https://lh3.googleusercontent.com/d/1wq393XSpzGDJwD_wDCCfRVcvrIR-l8Ok", chapter: "01", title: "Technical Excellence" },
        { image: "https://lh3.googleusercontent.com/d/1MBbifo3jdiiC_r0S6PwjjBmYffXdjCvp", chapter: "02", title: "Mental Resilience" },
        { image: "https://lh3.googleusercontent.com/d/1w1HQPsKHTUyIpw-64IaLcfobBhZXEFVw", chapter: "03", title: "Tactical Intelligence" },
        { image: "https://lh3.googleusercontent.com/d/1pcaVYD6kx-Vtv0-YX_BiZFkylNTTDMPo", chapter: "04", title: "Elite Community" },
        { image: "https://lh3.googleusercontent.com/d/1UaLpG07ug_amLGvpDOFzGbSuoZIIQQ3M", chapter: "05", title: "Performance Analysis" },
        { image: "https://lh3.googleusercontent.com/d/1wa-PSlepm-6-MdVl0NrfiINPCOZpQ83J", chapter: "06", title: "Global Expansion" }
      ]
    },
  ],
});
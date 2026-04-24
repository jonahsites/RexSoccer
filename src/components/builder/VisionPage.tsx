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
  videoUrl = "/make_it_rotate_202604161205.mp4",
  backgroundColor = "bg-black",
}: {
  onBack?: () => void;
  title?: string;
  sections?: { title: string, content: string }[];
  videoUrl?: string;
  backgroundColor?: string;
  key?: React.Key;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error("Video play failed:", err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className={`min-h-screen ${backgroundColor} pt-40 pb-20 px-6`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-ice-blue transition-all">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </button>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <div>
            <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tighter text-white uppercase">{title}</h2>
            
            <div className="space-y-12">
              {sections.map((section, i) => (
                <SectionReveal key={i}>
                  <h3 
                    className="text-3xl font-black text-white mb-6 uppercase"
                    dangerouslySetInnerHTML={{ __html: section.title.replace('text-oxford-blue', 'text-ice-blue') }}
                  />
                  <p className="text-white/60 text-xl font-medium leading-relaxed">
                    {section.content}
                  </p>
                </SectionReveal>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-40">
            <div 
              className="relative group cursor-pointer w-full border border-white/5 rounded-[3rem] p-20"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <video 
                ref={videoRef}
                src={videoUrl}
                className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-105"
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          </div>
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
    { name: 'videoUrl', type: 'string', defaultValue: "/make_it_rotate_202604161205.mp4" },
  ],
});
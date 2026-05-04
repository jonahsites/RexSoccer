import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { SectionReveal } from './common';

interface ProcessItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const ParallaxCardEffect = ({
  id,
  item,
  progress,
  itemCount,
}: {
  id: number;
  item: ProcessItem;
  progress: any;
  itemCount: number;
  key?: React.Key;
}) => {
  // Each card "arrives" at a specific point in the scroll
  // id 0-4 arrives at 0.1, 0.25, 0.4, 0.55, 0.7
  const start = 0.08 + (id * 0.16);
  const nextStart = 0.08 + ((id + 1) * 0.16);
  
  // Unified arrival window - slightly longer for more visible flip
  const arrivalStart = start;
  const arrivalEnd = start + 0.15;

  // y position: comes from bottom and settles at its stacked position
  const y = useTransform(
    progress, 
    [arrivalStart, arrivalEnd], 
    [1000, 0]
  );

  // Rotation: Dramatically increased for a clear "flip-up" effect
  const rotateX = useTransform(
    progress,
    [arrivalStart, arrivalEnd],
    [90, 0]
  );
  
  // Scale down as subsequent cards arrive
  const scale = useTransform(
    progress, 
    [arrivalEnd + 0.05, nextStart + 0.05], 
    [1, 0.98 - (itemCount - id - 1) * 0.015]
  );
  
  // Fade in - slightly slower to let the flip be seen as it arrives
  const opacity = useTransform(
    progress, 
    [arrivalStart, arrivalStart + 0.05], 
    [0, 1]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        rotateX,
        zIndex: id,
        top: `${id * 12}px`, // Tighter stack for depth
        perspective: 3000,
      }}
      className="absolute inset-x-0 bg-black border border-white/10 rounded-[2.5rem] p-10 md:p-14 w-full shadow-[0_80px_150px_rgba(0,0,0,1)] origin-top group transition-colors hover:bg-zinc-950 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 relative z-10">
        {/* Step Number */}
        <div className="text-ice-blue font-black text-6xl md:text-8xl tracking-tighter leading-none opacity-100 group-hover:scale-105 transition-transform duration-700">
          {item.number}
        </div>

        <div className="flex-1 pt-2">
          <h3 className="text-white font-black text-3xl md:text-5xl tracking-tighter uppercase mb-4 group-hover:text-ice-blue transition-colors leading-none">
            {item.title}
          </h3>
          <p className="text-white text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-colors max-w-2xl">
            {item.description}
          </p>
        </div>

        <div className="hidden md:flex items-center self-end pb-4">
          <ArrowRight className="text-white/40 group-hover:text-ice-blue group-hover:translate-x-4 transition-all w-12 h-12" />
        </div>
      </div>
      {/* Glossy overlay removed for total opacity */}
    </motion.div>
  );
};

export const ProcessSection = ({
  backgroundColor = "bg-black",
  title = "HOW WE BUILD PLAYERS.",
  description = "No two players are the same — so no two programs look the same. Every athlete moves through the REX framework, customized to where you are and where you're going.",
  items = [
    { id: '1', number: '01', title: 'ASSESS', description: 'Every player starts with a full evaluation — technical, tactical, physical, mental. We find the gaps before we touch them.' },
    { id: '2', number: '02', title: 'SPECIALIZE', description: 'A custom training plan built around your position, your weaknesses, and the exact game situations you face every week.' },
    { id: '3', number: '03', title: 'EXECUTE', description: 'Game-related drills with real intensity. No filler, no fluff. Every rep designed to translate directly to the field.' },
    { id: '4', number: '04', title: 'ELEVATE', description: "You return to your team more valuable than the day you left. That's the only metric that matters." }
  ]
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      id="process" 
      ref={containerRef}
      className={cn("relative z-10", backgroundColor)}
    >
      {/* Increased height for smoother, longer "pin" phase */}
      <div className="h-[800vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto mb-16 px-4">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
              <div className="max-w-2xl">
                <span className="text-ice-blue font-black uppercase tracking-widest text-[11px] mb-4 block">THE METHOD</span>
                <h2 className="text-6xl md:text-[8rem] font-black leading-[0.75] tracking-tighter text-white uppercase">
                  {title}
                </h2>
              </div>
              <p className="max-w-md text-white/80 text-lg md:text-2xl font-light leading-relaxed lg:mt-32">
                {description}
              </p>
            </div>
          </div>

          {/* Cards Stack Area - Perfectly rectangular width */}
          <div className="relative w-full max-w-5xl mx-auto h-[600px] mt-8">
            {items.map((item, i) => (
              <ParallaxCardEffect 
                key={item.id}
                id={i}
                item={item}
                progress={scrollYProgress}
                itemCount={items.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

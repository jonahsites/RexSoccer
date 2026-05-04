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
  key?: any;
}) => {
  // Each card arrives and stays pinned
  // Compressed top range for the post-scroll delay (0.8 max)
  const start = id * (0.8 / itemCount);
  const end = (id + 1) * (0.8 / itemCount);
  
  // Slide up arrival
  const arrivalStart = Math.max(0, start - 0.12);
  const y = useTransform(progress, [arrivalStart, start], [800, 0]);
  
  // Scale logic: Scales down as later cards arrive
  // We scale from the moment it finishes arriving until the end of the set
  const scale = useTransform(
    progress, 
    [start, 0.85], 
    [1, 1 - (itemCount - id) * 0.04]
  );

  // Opacity: Solid cards, no see-through
  const opacity = useTransform(progress, [arrivalStart, start], [0, 1]);
  
  return (
    <div className="absolute inset-0 flex items-center justify-center p-0">
      <motion.div
        style={{
          scale,
          y,
          opacity,
          zIndex: id,
          top: `${id * 20}px`,
          perspective: 2000,
        }}
        className="relative bg-[#080808] border border-white/10 rounded-[2.5rem] p-10 md:p-14 w-full h-[450px] md:h-[550px] shadow-[0_50px_100px_rgba(0,0,0,1)] origin-top overflow-hidden flex flex-col justify-center"
      >
        <div className="flex flex-col gap-4 md:gap-8 relative z-10">
          <div className="text-ice-blue font-black text-6xl md:text-8xl tracking-tighter leading-none opacity-90">
            {item.number}
          </div>
          
          <div className="flex-1">
            <h3 className="text-white font-black text-3xl md:text-5xl tracking-tighter uppercase mb-4 leading-none">
              {item.title}
            </h3>
            <p className="text-white/70 text-base md:text-xl font-light leading-relaxed max-w-xl">
              {item.description}
            </p>
          </div>

          <div className="flex items-center self-end opacity-20">
            <ArrowRight className="text-white w-12 h-12" />
          </div>
        </div>
      </motion.div>
    </div>
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
      <div className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 overflow-hidden">
          <div className="w-full max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              {/* Left Column: Title & Description */}
              <div className="lg:col-span-5">
                <span className="text-ice-blue font-black uppercase tracking-widest text-[11px] mb-6 block">THE METHOD</span>
                <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white uppercase mb-10">
                  {title}
                </h2>
                <p className="max-w-md text-white/40 text-lg md:text-xl font-light leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Right Column: Cards Stack Area */}
              <div className="lg:col-span-7 relative w-full h-[500px] md:h-[600px] mt-12 lg:mt-0">
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
        </div>
      </div>
    </section>
  );
};

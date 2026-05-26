import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StackingCardProps {
  item: { number: string; title: string; description: string; id: string };
  index: number;
  total: number;
  scrollYProgress: any;
  key?: React.Key;
}

// Individual Stacking Card Component
const StackingCard = ({ 
  item, 
  index, 
  total, 
  scrollYProgress 
}: StackingCardProps) => {
  // Scale decreases slightly as subsequent cards arrive to create depth
  const start = index / total;
  const scale = useTransform(scrollYProgress, [start, 1], [1, 1 - (total - index) * 0.04]);
  
  // Stack with a slight vertical offset so edges peek out nicely
  const topOffset = 40 + index * 12;

  return (
    <div 
      className="sticky w-full mb-[3vh] last:mb-0" 
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        style={{ scale }}
        className="bg-zinc-900/90 border border-white/10 rounded-[1.2rem] md:rounded-[1.8rem] p-5 md:p-7 h-[260px] md:h-[340px] flex flex-col justify-between shadow-[0_40px_80px_rgba(0,0,0,0.8)] backdrop-blur-md origin-top"
      >
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-zinc-700 border border-white/10 rounded-xl text-ice-blue font-black text-xl md:text-4xl tracking-tighter shadow-inner">
            {item.number}
          </div>
          <div>
            <h3 className="text-white font-black text-2xl md:text-3xl tracking-tighter uppercase mb-2 leading-none">
              {item.title}
            </h3>
            <p className="text-white/40 text-xs md:text-lg font-light leading-relaxed max-w-2xl italic">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProcessSection = ({
  backgroundColor = "bg-black",
  title = "THE REX METHODOLOGY.",
  description = "A structured, progressive architecture designed to decode elite performance. We don't just train; we build athletes according to a specific DNA of excellence.",
  items = [
    { id: '1', number: '01', title: 'TECHNICAL MASTERY', description: 'Precision at speed. We break down world-class mechanics, ensuring elite ball control and execution under the highest levels of pressure.' },
    { id: '2', number: '02', title: 'TACTICAL IQ', description: 'Field awareness and spatial intelligence. We develop players who don’t just see the game, but command it with multi-dimensional strategic vision.' },
    { id: '3', number: '03', title: 'PHYSICAL ELITE', description: 'Soccer-specific explosiveness. Every movement pattern is optimized for maximum power, speed, and durability in elite environments.' },
    { id: '4', number: '04', title: 'PRO PATHWAY', description: 'The final translation. We bridge the gap between youth potential and the professional reality of the modern global game.' }
  ]
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire section
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
      <div className="max-w-[1600px] mx-auto px-6 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Sticky Header info */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
            <div className="mb-16">
              <span className="text-ice-blue font-black uppercase tracking-[0.6em] text-[11px] mb-8 block">Development Architecture</span>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white uppercase mb-12">
                {title}
              </h2>
              <div className="h-[2px] w-24 bg-ice-blue/40 mb-12" />
              <p className="max-w-md text-white/40 text-xl md:text-2xl font-light leading-relaxed">
                {description}
              </p>
            </div>
            

          </div>

          {/* Right Column: The Stacking Collection */}
          <div className="lg:col-span-7 flex flex-col pt-[10vh]">
            {items.map((item, i) => (
               <StackingCard 
                 key={item.id}
                 item={item}
                 index={i}
                 total={items.length}
                 scrollYProgress={scrollYProgress}
               />
            ))}
            
            {/* Buffer bottom space to allow final card to stay in view */}
            <div className="h-[40vh]" />
          </div>
        </div>
      </div>
    </section>
  );
};

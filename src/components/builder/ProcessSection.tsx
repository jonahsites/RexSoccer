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
  const topOffset = 100 + index * 32;

  return (
    <div 
      className="sticky w-full mb-[20vh] last:mb-0" 
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        style={{ scale }}
        className="bg-[#080808] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 h-[380px] md:h-[480px] flex flex-col justify-between shadow-[0_50px_100px_rgba(0,0,0,0.9)] backdrop-blur-3xl origin-top"
      >
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="text-ice-blue font-black text-5xl md:text-8xl tracking-tighter opacity-10 leading-none">
            {item.number}
          </div>
          <div>
            <h3 className="text-white font-black text-2xl md:text-5xl tracking-tighter uppercase mb-4 leading-none">
              {item.title}
            </h3>
            <p className="text-white/40 text-base md:text-xl font-light leading-relaxed max-w-2xl italic">
              {item.description}
            </p>
          </div>
        </div>
        
        <div className="flex justify-end items-center gap-4 group cursor-pointer">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-ice-blue transition-colors">
            Evolution Stage {item.number}
          </span>
          <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-ice-blue/30 transition-all">
            <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-ice-blue group-hover:translate-x-1 transition-all" />
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
              <h2 className="text-6xl md:text-[7.5rem] font-black leading-[0.8] tracking-tighter text-white uppercase mb-12">
                {title}
              </h2>
              <div className="h-[2px] w-24 bg-ice-blue/40 mb-12" />
              <p className="max-w-md text-white/40 text-xl md:text-2xl font-light leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* Visual Scroll Progress Sidebar */}
            <div className="hidden lg:flex items-center gap-6">
               <div className="h-[300px] w-[1px] bg-white/5 relative overflow-hidden">
                 <motion.div 
                   style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                   className="absolute inset-0 bg-ice-blue shadow-[0_0_20px_rgba(165,243,252,0.4)]"
                 />
               </div>
               <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 [writing-mode:vertical-lr]">
                 Scroll to evolve
               </div>
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

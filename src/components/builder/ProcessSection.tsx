import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '../../lib/utils';
import { SectionReveal } from './common';

interface StackingCardProps {
  item: { id: string; number: string; title: string; description: string };
  index: number;
  total: number;
  scrollYProgress: any;
  key?: React.Key;
}

const StackingCard = ({ 
  item, 
  index, 
  total, 
  scrollYProgress 
}: StackingCardProps) => {
  // Scale decreases slightly as subsequent cards arrive to create depth
  const start = index / total;
  const scale = useTransform(scrollYProgress, [start, 1], [1, 1 - (total - index) * 0.03]);
  
  // Stack with a vertical offset so each card's top peeks out cleanly
  const topOffset = 130 + index * 18;

  return (
    <div 
      className="sticky w-full mb-[5vh] last:mb-0" 
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        style={{ scale }}
        className="bg-zinc-900/95 border border-white/10 rounded-[1.6rem] md:rounded-[2rem] p-6 md:p-10 lg:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.85)] backdrop-blur-xl origin-top transition-colors hover:border-white/20"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
          <div className="flex items-center gap-5 md:gap-7">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-zinc-800 border border-white/10 rounded-2xl text-ice-blue font-black text-2xl md:text-4xl tracking-tighter shadow-inner">
              {item.number}
            </div>
            <div>
              <span className="block text-[11px] font-bold text-ice-blue uppercase tracking-[0.25em] mb-1">
                Step {item.number}
              </span>
              <h3 className="text-white font-black text-2xl md:text-3xl lg:text-4xl tracking-tighter uppercase leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
          <div className="md:max-w-md lg:max-w-lg border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 lg:pl-10">
            <p className="text-white/60 text-sm md:text-base lg:text-lg font-light leading-relaxed">
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
  title = "HOW IT WORKS.",
  description = "A proven four-step pathway designed to evaluate, develop, and elevate every athlete.",
  items = [
    { 
      id: '1', 
      number: '01', 
      title: 'BOOK YOUR SESSION', 
      description: 'Schedule your initial evaluation or training session through our platform to lock in your training slot.' 
    },
    { 
      id: '2', 
      number: '02', 
      title: 'COME TRAIN', 
      description: 'Step onto the pitch for an intense, high-standard technical assessment and competitive evaluation.' 
    },
    { 
      id: '3', 
      number: '03', 
      title: 'DEVELOPMENT PLAN', 
      description: 'Receive a tailored, comprehensive roadmap addressing your technical, tactical, and athletic milestones.' 
    },
    { 
      id: '4', 
      number: '04', 
      title: 'START TRAINING', 
      description: 'Execute the plan with dedicated high-performance reps, continuous feedback, and elite progression.' 
    }
  ]
}: {
  backgroundColor?: string;
  title?: string;
  description?: string;
  items?: { id: string; number: string; title: string; description: string }[];
  key?: React.Key;
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
      className={cn("py-28 md:py-36 px-6 relative z-10", backgroundColor)}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header directly above the cards */}
        <SectionReveal className="mb-14 md:mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-white uppercase mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-white/40 text-base md:text-xl font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </SectionReveal>

        {/* Horizontal Stacking Cards */}
        <div className="flex flex-col relative pb-[25vh]">
          {items.map((item, i) => (
            <StackingCard
              key={item.id}
              item={item}
              index={i}
              total={items.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

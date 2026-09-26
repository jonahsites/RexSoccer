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
        className="bg-[#18181b]/95 border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.85)] backdrop-blur-xl origin-top transition-colors hover:border-white/20 flex flex-col items-start text-left"
      >
        {/* Number at the top */}
        <div className="text-ice-blue font-black text-3xl md:text-5xl tracking-tight mb-4 md:mb-6 select-none">
          {item.number}
        </div>

        {/* Header beneath */}
        <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tight leading-snug mb-2 md:mb-3">
          {item.title}
        </h3>

        {/* Small text underneath */}
        <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-4xl">
          {item.description}
        </p>
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
      title: 'Book your session', 
      description: 'Schedule your initial evaluation or training session through our platform to lock in your training slot.' 
    },
    { 
      id: '2', 
      number: '02', 
      title: 'Come train', 
      description: 'Step onto the pitch for an intense, high-standard technical assessment and competitive evaluation.' 
    },
    { 
      id: '3', 
      number: '03', 
      title: 'Development plan', 
      description: 'Receive a tailored, comprehensive roadmap addressing your technical, tactical, and athletic milestones.' 
    },
    { 
      id: '4', 
      number: '04', 
      title: 'Start training', 
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
      <div className="max-w-7xl mx-auto">
        {/* Header directly above the cards */}
        <SectionReveal className="mb-14 md:mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-white uppercase mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-none md:whitespace-nowrap">
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

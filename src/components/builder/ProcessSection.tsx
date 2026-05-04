import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionReveal } from './common';

interface ProcessItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const ProcessSection = ({
  backgroundColor = "bg-black",
  title = "HOW WE BUILD PLAYERS.",
  description = "No two players are the same — so no two programs look the same. Every athlete moves through the REX framework, customized to where you are and where you're going.",
  items = [
    {
      id: '1',
      number: '01',
      title: 'ASSESS',
      description: 'Every player starts with a full evaluation — technical, tactical, physical, mental. We find the gaps before we touch them.'
    },
    {
      id: '2',
      number: '02',
      title: 'SPECIALIZE',
      description: 'A custom training plan built around your position, your weaknesses, and the exact game situations you face every week.'
    },
    {
      id: '3',
      number: '03',
      title: 'EXECUTE',
      description: 'Game-related drills with real intensity. No filler, no fluff. Every rep designed to translate directly to the field.'
    },
    {
      id: '4', // This is item #5 from your original list, but numbered 04
      number: '04',
      title: 'ELEVATE',
      description: "You return to your team more valuable than the day you left. That's the only metric that matters."
    }
  ]
}) => {
  return (
    <section id="process" className={`py-32 px-6 ${backgroundColor} border-t border-white/5`}>
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="flex flex-col lg:flex-row lg:items-start justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-ice-blue font-black uppercase tracking-widest text-xs mb-6 block">THE DIFFERENCE</span>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white uppercase break-words">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-white/40 text-xl font-light leading-relaxed lg:mt-32">
            {description}
          </p>
        </SectionReveal>

        <div className="border-t border-white/10">
          {items.map((item, index) => (
            <SectionReveal key={item.id}>
              <div 
                className="group border-b border-white/10 py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 hover:bg-white/[0.02] transition-colors px-4 -mx-4"
              >
                {/* Number */}
                <div className="text-ice-blue font-black text-5xl md:text-6xl tracking-tighter w-24">
                  {item.number}
                </div>

                {/* Title */}
                <div className="md:w-1/4">
                  <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight uppercase group-hover:text-ice-blue transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex-1 max-w-xl">
                  <p className="text-white/40 text-lg leading-relaxed group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:block">
                  <ArrowRight className="text-white/20 group-hover:text-ice-blue group-hover:translate-x-2 transition-all w-6 h-6" />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
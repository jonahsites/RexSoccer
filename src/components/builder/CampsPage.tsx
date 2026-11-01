import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Tent } from 'lucide-react';
import { Builder } from '@builder.io/react';

export const CampsPage = ({
  onBack = () => window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' })),
  title = "Coming Soon.",
  subtitle = "REX Soccer Elite Camps",
  description = "Intensive summer & seasonal development camps designed for elite players.",
  backgroundColor = "bg-black",
}: {
  onBack?: () => void;
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${backgroundColor} flex items-center justify-center px-6 relative overflow-hidden`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ice-blue/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="text-center relative z-10 max-w-2xl mx-auto">
        <button 
          onClick={onBack} 
          className="mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-white/50 hover:text-white transition-all group cursor-pointer bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform text-ice-blue" /> Back to Home
        </button>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-blue/10 border border-ice-blue/30 text-ice-blue font-mono font-bold uppercase tracking-widest text-[11px] mb-6">
          <Tent className="w-3.5 h-3.5 text-ice-blue" />
          {subtitle}
        </div>

        <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase mb-6 leading-none">
          {title}
        </h2>

        <p className="text-white/60 text-base md:text-lg font-normal leading-relaxed max-w-lg mx-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

Builder.registerComponent(CampsPage, {
  name: 'CampsPage',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'title', type: 'string', defaultValue: "Coming Soon." },
    { name: 'subtitle', type: 'string', defaultValue: "REX Soccer Elite Camps" },
    { name: 'description', type: 'string', defaultValue: "Intensive summer & seasonal development camps designed for elite players." },
  ],
});

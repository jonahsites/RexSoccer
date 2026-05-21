// Trigger Vercel build redeployment
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Builder } from '@builder.io/react';

export const TeamPage = ({
  onBack = () => window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' })),
  title = "The <span class=\"text-ice-blue\">Team.</span>",
  team = [
    { name: "Faiqr Raza", role: "CEO/Trainer", bio: "Former NCAA D1 player with international experience.", img: "https://lh3.googleusercontent.com/d/1JADQ3XN7kdFJjcRGfB7Mo8X2Qp3m0-1S" },
    { name: "Santiago Pedraza", role: "Creative Strategist / Operations Manager", bio: "Driving REX's creative vision and operational excellence.", img: "https://lh3.googleusercontent.com/d/1etZ43OxAu9o0txlet_IVg5o2SBpjEl1I" },
    { name: "Robin Amritt Jr", role: "Photographer", bio: "Capturing the intensity and passion of every REX session.", img: "https://lh3.googleusercontent.com/d/1IIry7hEJtJuvOzPFOXIRZWcI4AkBLUpE" },
  ],
  backgroundColor = "bg-black",
}: {
  onBack?: () => void;
  title?: string;
  team?: { name: string, role: string, bio: string, img: string }[];
  backgroundColor?: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${backgroundColor} pt-40 pb-32`}
    >
      <div className="max-w-[1600px] mx-auto px-6">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all group">
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
        
        <h2 
          className="text-4xl md:text-8xl font-black mb-16 tracking-tighter text-white uppercase"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img 
                src={member.img} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-between items-baseline gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-black text-white leading-none">
                    {member.name}
                  </h3>
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-tighter whitespace-nowrap">
                    {member.role}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-white/50 font-medium leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

Builder.registerComponent(TeamPage, {
  name: 'TeamPage',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'title', type: 'string', defaultValue: "The <span class=\"text-ice-blue\">Team.</span>" },
    {
      name: 'team',
      type: 'list',
      subFields: [
        { name: 'name', type: 'string' },
        { name: 'role', type: 'string' },
        { name: 'bio', type: 'string' },
        { name: 'img', type: 'file' },
      ],
      defaultValue: [
        { name: "Faiqr Raza", role: "CEO/Trainer", bio: "Former NCAA D1 player with international experience.", img: "https://lh3.googleusercontent.com/d/1JADQ3XN7kdFJjcRGfB7Mo8X2Qp3m0-1S" },
        { name: "Santiago Pedraza", role: "Creative Strategist / Operations Manager", bio: "Driving REX's creative vision and operational excellence.", img: "https://lh3.googleusercontent.com/d/1etZ43OxAu9o0txlet_IVg5o2SBpjEl1I" },
        { name: "Robin Amritt Jr", role: "Media Specialist", bio: "Capturing the intensity and passion of every REX session.", img: "https://lh3.googleusercontent.com/d/1IIry7hEJtJuvOzPFOXIRZWcI4AkBLUpE" },
      ],
    },
  ],
});
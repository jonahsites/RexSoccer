// Trigger Vercel build redeployment
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Builder } from '@builder.io/react';

export const TeamPage = ({
  onBack = () => window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' })),
  title = "The <span class=\"text-ice-blue\">Team.</span>",
  team = [
    { name: "Faqir Raza", role: "CEO/Trainer", bio: "Former NCAA D1 player with professional international experience.", img: "https://lh3.googleusercontent.com/d/1xmV6bXMQPDeDCGxdxBDsZh-Au6IHe__N" },
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
      <div className="w-full px-6 md:px-12 lg:px-20">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all group">
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
        
        <h2 
          className="text-4xl md:text-8xl font-black mb-16 tracking-tighter text-white uppercase"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 xl:gap-24">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group bg-zinc-900"
            >
              <img 
                src={member.img} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-12% via-black/90 via-24% to-transparent to-38% flex flex-col justify-end p-6 md:p-7">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs text-white/70 font-normal shrink-0">
                    {member.role}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed line-clamp-3">
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
        { name: "Faqir Raza", role: "CEO/Trainer", bio: "Former NCAA D1 player with international experience.", img: "https://lh3.googleusercontent.com/d/1xmV6bXMQPDeDCGxdxBDsZh-Au6IHe__N" },
      ],
    },
  ],
});
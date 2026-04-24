import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Builder } from '@builder.io/react';

export const TeamPage = ({
  onBack = () => window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' })),
  title = "The <span class=\"text-ice-blue\">Team</span>.",
  team = [
    { name: "Faiqr Raza", role: "CEO/Trainer", bio: "Former NCAA D1 player with international experience.", img: "https://lh3.googleusercontent.com/d/1rToMtbq6zUqA-3ojUoM974XEX5Cro1Er" },
    { name: "Santiago Pedraza", role: "Creative Strategist / Operations Manager", bio: "Driving REX's creative vision and operational excellence.", img: "https://lh3.googleusercontent.com/d/1etZ43OxAu9o0txlet_IVg5o2SBpjEl1I" },
    { name: "Robin Amritt Jr", role: "Photographer", bio: "Capturing the intensity and passion of every REX session.", img: "https://lh3.googleusercontent.com/d/1IIry7hEJtJuvOzPFOXIRZWcI4AkBLUpE" },
    { name: "Elena Rodriguez", role: "Goalkeeper Coach", bio: "Expert in shot-stopping and distribution techniques.", img: "https://lh3.googleusercontent.com/d/1Q-Wdxqnsb0L1ZVPvi7GXYIbdZQCf--GU" },
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
      className={`min-h-screen ${backgroundColor} pt-40 pb-20 px-6`}
    >
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-ice-blue transition-all">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </button>
        <h2 
          className="text-6xl md:text-9xl font-black mb-16 tracking-tighter text-white uppercase"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 rounded-[3rem] p-8 border border-white/5 group hover:bg-zinc-800 transition-all duration-500"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-8 transition-all duration-700">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{member.name}</h3>
              <p className="text-ice-blue text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-white/40 text-sm font-medium leading-relaxed">{member.bio}</p>
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
    { name: 'title', type: 'string', defaultValue: "The <span class=\"text-oxford-blue\">Team</span>." },
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
        { name: "Faqir Raza", role: "CEO/Trainer", bio: "Former NCAA D1 player with international experience.", img: "https://lh3.googleusercontent.com/d/1rToMtbq6zUqA-3ojUoM974XEX5Cro1Er" },
        { name: "Santiago Pedraza", role: "Creative Strategist / Operations Manager", bio: "Driving REX's creative vision and operational excellence.", img: "https://lh3.googleusercontent.com/d/1etZ43OxAu9o0txlet_IVg5o2SBpjEl1I" },
        { name: "Robin Amritt Jr", role: "Media Specialist", bio: "Capturing the intensity and passion of every REX session.", img: "https://lh3.googleusercontent.com/d/1IIry7hEJtJuvOzPFOXIRZWcI4AkBLUpE" },
        { name: "Elena Rodriguez", role: "Goalkeeper Coach", bio: "Expert in shot-stopping and distribution techniques.", img: "https://lh3.googleusercontent.com/d/1Q-Wdxqnsb0L1ZVPvi7GXYIbdZQCf--GU" },
      ],
    },
  ],
});

import React from 'react';
import { motion } from 'motion/react';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/UMass_Amherst_athletics_logo.svg/1280px-UMass_Amherst_athletics_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/250px-Getafe_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1280px-Sevilla_FC_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/22/FCW_Wappen_NEU.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rwdmolenbeek.svg/1920px-Rwdmolenbeek.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1280px-Botafogo_de_Futebol_e_Regatas_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/f/f6/Nova_Southeastern_Sharks_primary_logo.svg",
  "https://drexel.edu/identity/~/media/Drexel/UMaC-Site-Group/Identity/Images/pageLogos/DragonIcon_Blue_HEX.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/United_States_Soccer_Federation_logo.svg/960px-United_States_Soccer_Federation_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Orlando_City_2014.svg/1280px-Orlando_City_2014.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/1280px-Inter_Miami_CF_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Notre_Dame_Fighting_Irish_logo.svg/250px-Notre_Dame_Fighting_Irish_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Florida_Atlantic_Owls_logo.svg/1280px-Florida_Atlantic_Owls_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/UNCG_Spartans_logo.svg/1280px-UNCG_Spartans_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Utah_Valley_Wolverines_logo.svg/250px-Utah_Valley_Wolverines_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Fort_Lauderdale_United_FC_logo_2024.png/1280px-Fort_Lauderdale_United_FC_logo_2024.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Miami_FC_logo.svg/960px-Miami_FC_logo.svg.png",
  "https://ballerleague.uk/uploads/teams/logo_4.svg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Longwood_Lancers_logo.svg/1280px-Longwood_Lancers_logo.svg.png"
];

// Double the logos for seamless infinite scroll
const scrollingLogos = [...logos, ...logos];

export const LogoCarousel: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-zinc-900 text-2xl md:text-4xl font-black tracking-tighter uppercase leading-tight max-w-4xl mx-auto">
          Rex Soccer has developed players from more than <span className="text-zinc-400">15+ universities</span> and <span className="text-zinc-400">professional teams</span>
        </h2>
      </div>

      <div className="relative flex">
        {/* Continuous scrolling container */}
        <motion.div 
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {scrollingLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center transition-all duration-500 opacity-90 hover:opacity-100"
            >
              <img 
                src={logo} 
                alt={`Partner Logo ${index}`} 
                className="h-12 md:h-16 w-auto object-contain max-w-[120px] md:max-w-[160px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for fade effects on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

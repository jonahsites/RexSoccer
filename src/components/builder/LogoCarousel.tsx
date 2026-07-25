import React, { useState } from 'react';
import { motion } from 'motion/react';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/23/UMass_Amherst_athletics_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/4/46/Getafe_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/22/FCW_Wappen_NEU.png",
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Rwdmolenbeek.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/f/f6/Nova_Southeastern_Sharks_primary_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/1/16/Drexel_Dragons_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/United_States_Soccer_Federation_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/6/6a/Orlando_City_2014.svg",
  "https://upload.wikimedia.org/wikipedia/en/5/5c/Inter_Miami_CF_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/Notre_Dame_Fighting_Irish_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/4/40/Florida_Atlantic_Owls_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/7/70/UNCG_Spartans_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/c/c8/Utah_Valley_Wolverines_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Fort_Lauderdale_United_FC_logo_2024.png",
  "https://upload.wikimedia.org/wikipedia/en/7/76/Miami_FC_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/6/61/Stetson_Hatters_current_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/68/FC_Zurich_Logo_2022.svg",
  "https://upload.wikimedia.org/wikipedia/en/2/2f/Tampa_Bay_Rowdies_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Charlotte_FC_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/1/1c/Olympique_Lyonnais_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/eb/VfB_Stuttgart_1893_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/81/Hertha_BSC_Logo_2012.svg",
  "https://upload.wikimedia.org/wikipedia/en/5/5f/Longwood_Lancers_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/c/c0/Sporting_San_Miguelito.svg",
  "https://upload.wikimedia.org/wikipedia/en/5/52/Palm_Beach_Atlantic_Sailfish_primary_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/9/96/Boston_College_Eagles_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Fgcu_athletics_wmark.png",
  "https://upload.wikimedia.org/wikipedia/en/d/d5/Florida_State_Seminoles_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/1/18/Flagler_Saints_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/1/1b/Lynn_Fighting_Knights_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/35/Portland_Timbers_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/a/a2/Crystal_Palace_FC_logo_%282022%29.svg",
  "https://upload.wikimedia.org/wikipedia/en/b/b8/Club_Deportivo_Legan%C3%A9s_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9f/Georgetown_Hoyas_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Saint_Mary%27s_M.png",
  "https://upload.wikimedia.org/wikipedia/en/2/20/Manhattan_Jaspers_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/Costa_Rica_national_football_team_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/11/Honduras_football_crest.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/62/St._John%27s_Red_Storm_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/e/ee/Panamanian_Football_Federation_logo_2024.svg",
  "https://upload.wikimedia.org/wikipedia/en/d/d5/Austin_FC_II_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bc/Nashville_SC_logo%2C_2020.svg"
];

// Double the logos for seamless infinite scroll
const scrollingLogos = [...logos, ...logos];

const LogoItem: React.FC<{ logo: string; index: number }> = ({ logo, index }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    <div className="flex-shrink-0 flex items-center justify-center transition-all duration-500 opacity-90 hover:opacity-100 px-6 md:px-10">
      <img 
        src={logo} 
        alt={`Partner Logo ${index}`} 
        className="h-10 md:h-14 w-auto object-contain max-w-[100px] md:max-w-[140px] select-none"
        draggable={false}
        referrerPolicy="no-referrer"
        loading="eager"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export const LogoCarousel: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-zinc-900 text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight max-w-4xl mx-auto">
          Rex Soccer has developed players from more than <span className="text-zinc-400">40+ universities</span> and <span className="text-zinc-400">professional teams</span>
        </h2>
      </div>

      <div className="relative flex">
        {/* Continuous scrolling container */}
        <motion.div 
          className="flex items-center whitespace-nowrap will-change-transform"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {scrollingLogos.map((logo, index) => (
            <LogoItem key={`${logo}-${index}`} logo={logo} index={index} />
          ))}
        </motion.div>
        
        {/* Gradient overlays for fade effects on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

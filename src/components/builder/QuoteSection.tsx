import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Builder } from '@builder.io/react';

export const QuoteSection = ({
  quote = '"1% BETTER EVERYDAY."',
  backgroundColor = "bg-black",
}: {
  quote?: string;
  backgroundColor?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={ref} className={`py-32 flex items-center justify-center ${backgroundColor} px-6 relative overflow-hidden`}>
      <motion.div 
        style={{ scale, opacity }}
        className="max-w-5xl text-center"
      >
        <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8 italic text-ice-blue">
          {quote}
        </h2>
      </motion.div>
    </section>
  );
};

Builder.registerComponent(QuoteSection, {
  name: 'QuoteSection',
  inputs: [
    { name: 'quote', type: 'string', defaultValue: '"1% BETTER EVERYDAY."' },
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-white' },
  ],
});

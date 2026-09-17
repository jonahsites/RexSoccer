import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Builder } from '@builder.io/react';

export const StepSection = ({
  steps = [
    {
      id: "01",
      title: "Technical Mastery",
      desc: "Precision ball control and elite technique development.",
      img: "https://lh3.googleusercontent.com/d/1mNbQIFWPv9rLsYoQwPwFn5qF8zWdS2uD",
      objectPosition: "center"
    },
    {
      id: "02",
      title: "Tactical Intelligence",
      desc: "Game awareness, positioning, and strategic decision making.",
      img: "https://lh3.googleusercontent.com/d/14ySCDlB6spbjp9_gPPMU3WF5GTVxoRh8",
      objectPosition: "center 60%"
    },
    {
      id: "03",
      title: "Elite Conditioning",
      desc: "High-performance speed, strength, and agility training.",
      img: "https://lh3.googleusercontent.com/d/15dCTNWht0Wemw468HjB3RnwJo5eA2YCm",
      objectPosition: "center 25%"
    }
  ],
  backgroundColor = "bg-zinc-900",
}: {
  steps?: { id: string, title: string, desc: string, img: string, objectPosition?: string }[];
  backgroundColor?: string;
}) => {
  return (
    <section id="steps" className={`pt-12 md:pt-16 pb-20 px-6 ${backgroundColor} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative group"
            >
              <div className="relative z-10 bg-white/5 border border-white/5 shadow-sm rounded-[1.5rem] overflow-hidden p-8 hover:bg-black hover:shadow-xl hover:border-ice-blue/20 transition-all duration-500">
                <h3 className="text-2xl font-black mb-4 tracking-tight text-white uppercase">{step.title}</h3>
                <p className="text-white/50 text-base leading-relaxed mb-8">{step.desc}</p>
                <div className="aspect-video rounded-2xl overflow-hidden transition-all duration-700">
                  <img 
                    id={`step-img-${step.id}`}
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover" 
                    style={{ objectPosition: step.objectPosition || 'center' }}
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

Builder.registerComponent(StepSection, {
  name: 'StepSection',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-zinc-950' },
    {
      name: 'steps',
      type: 'list',
      subFields: [
        { name: 'id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'desc', type: 'string' },
        { name: 'img', type: 'file' },
        { name: 'objectPosition', type: 'string', defaultValue: 'center' },
      ],
      defaultValue: [
        {
          id: "01",
          title: "Technical Mastery",
          desc: "Precision ball control and elite technique development.",
          img: "https://lh3.googleusercontent.com/d/1mNbQIFWPv9rLsYoQwPwFn5qF8zWdS2uD",
          objectPosition: "center"
        },
        {
          id: "02",
          title: "Tactical Intelligence",
          desc: "Game awareness, positioning, and strategic decision making.",
          img: "https://lh3.googleusercontent.com/d/14ySCDlB6spbjp9_gPPMU3WF5GTVxoRh8",
          objectPosition: "center 60%"
        },
        {
          id: "03",
          title: "Elite Conditioning",
          desc: "High-performance speed, strength, and agility training.",
          img: "https://lh3.googleusercontent.com/d/15dCTNWht0Wemw468HjB3RnwJo5eA2YCm",
          objectPosition: "center 25%"
        }
      ],
    },
  ],
});
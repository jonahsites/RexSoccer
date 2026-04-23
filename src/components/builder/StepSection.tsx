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
      img: "https://lh3.googleusercontent.com/d/1fwb7_Nt2bdLfJk9KF5fC-LudUNgnC5sV"
    },
    {
      id: "02",
      title: "Tactical Intelligence",
      desc: "Game awareness, positioning, and strategic decision making.",
      img: "https://lh3.googleusercontent.com/d/1_JP4BQ8__LohbkshWVxePcg4gaQNx0KR"
    },
    {
      id: "03",
      title: "Elite Conditioning",
      desc: "High-performance speed, strength, and agility training.",
      img: "https://image2url.com/r2/default/files/1775315003673-d45660e4-c5d9-470b-a5db-c795786b88c2.png"
    }
  ],
  backgroundColor = "bg-zinc-900",
}: {
  steps?: { id: string, title: string, desc: string, img: string }[];
  backgroundColor?: string;
}) => {
  return (
    <section className={`py-20 px-6 ${backgroundColor} relative overflow-hidden`}>
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
              <div className="relative z-10 bg-white/5 border border-white/5 shadow-sm rounded-[2rem] overflow-hidden p-10 hover:bg-black hover:shadow-xl hover:border-ice-blue/20 transition-all duration-500">
                <h3 className="text-3xl font-black mb-6 tracking-tight text-white uppercase">{step.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed mb-10">{step.desc}</p>
                <div className="aspect-video rounded-2xl overflow-hidden transition-all duration-700">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-light-grey' },
    {
      name: 'steps',
      type: 'list',
      subFields: [
        { name: 'id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'desc', type: 'string' },
        { name: 'img', type: 'file' },
      ],
      defaultValue: [
        {
          id: "01",
          title: "Technical Mastery",
          desc: "Precision ball control and elite technique development.",
          img: "https://lh3.googleusercontent.com/d/1fwb7_Nt2bdLfJk9KF5fC-LudUNgnC5sV"
        },
        {
          id: "02",
          title: "Tactical Intelligence",
          desc: "Game awareness, positioning, and strategic decision making.",
          img: "https://lh3.googleusercontent.com/d/1_JP4BQ8__LohbkshWVxePcg4gaQNx0KR"
        },
        {
          id: "03",
          title: "Elite Conditioning",
          desc: "High-performance speed, strength, and agility training.",
          img: "https://image2url.com/r2/default/files/1775314994755-dc8bd00d-a4e1-4f66-afaf-17b8ee8d6670.png"
        }
      ],
    },
  ],
});

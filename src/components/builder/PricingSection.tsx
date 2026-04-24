import React, { useState } from 'react';
import { Builder } from '@builder.io/react';
import { Camera, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { SectionReveal } from './common';

export const PricingSection = ({
  badgeText = "Investment",
  title = "PRICING.",
  description = "Elite soccer training designed to accelerate your development. Join the academy and start your journey today.",
  plans = [
    {
      name: "4 Private Training Package",
      price: "300",
      features: ["Includes four private training sessions. 1-2 Players."],
      popular: false
    },
    {
      name: "8 Private Training Package",
      price: "550",
      features: ["Includes eight private training sessions. 1-2 Players."],
      popular: false
    },
    {
      name: "Private Training",
      price: "80",
      features: ["1-2 Players"],
      popular: false
    },
    {
      name: "Group Session / Drop-in",
      price: "65",
      features: ["3+ Players"],
      popular: false
    }
  ],
  policies = [
    "Packages must be used within the time limit",
    "24-hour cancellation required or session is counted",
    "No refunds or rollovers",
    "Sessions must be scheduled in advance"
  ],
  backgroundColor = "bg-black",
  bookingUrl = "https://app.squareup.com/appointments/book/ibabx2iuj3new7/L1XWM8KT5DEM0/start",
}: {
  badgeText?: string;
  title?: string;
  description?: string;
  plans?: { name: string, price: string, note?: string, features: string[], popular: boolean }[];
  policies?: string[];
  backgroundColor?: string;
  bookingUrl?: string;
  key?: React.Key;
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBook = () => {
    setShowCalendar(true);
  };

  return (
    <section id="pricing" className={`relative py-32 px-6 ${backgroundColor} overflow-hidden`}>
      <div className="max-w-6xl mx-auto relative z-10">
            <SectionReveal className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-white">DEVELOPMENT</h2>
          <p className="text-white/60 text-xl font-medium tracking-tight">
            Packages & Drop-in Rates.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {plans.map((plan, i) => (
            <SectionReveal key={i}>
              <div className="relative p-10 rounded-2xl transition-all duration-300 hover:scale-[1.02] bg-zinc-900/50 backdrop-blur-sm text-white border border-white/5 h-full flex flex-col shadow-2xl">
                <span className="text-ice-blue font-medium mb-4 block uppercase tracking-widest text-xs font-display">{plan.name}</span>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-7xl font-black tracking-tighter text-white font-display">${plan.price}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-white/60 text-sm font-medium leading-relaxed font-sans">
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleBook()}
                  className="w-full max-w-xs py-4 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-300 flex items-center justify-center gap-2 bg-ice-blue text-black hover:bg-white hover:scale-105 active:scale-95 font-sans"
                >
                  Book Now {">"}
                </button>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="max-w-4xl mx-auto bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8 md:p-16 flex flex-col gap-12 shadow-sm">
            <div className="text-center">
              <span className="text-ice-blue font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Academy Rules</span>
              <h3 className="text-4xl font-black tracking-tighter text-white mb-6 uppercase">POLICIES.</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {policies.map((policy, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-ice-blue mt-2 shrink-0" />
                    <p className="text-white/60 text-sm font-medium leading-relaxed">{policy}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 text-center">
              <p className="text-xl italic font-display text-white opacity-80">
                Train More. Improve Faster. ⚽️
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showCalendar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCalendar(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col border border-white/5"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900">
                <h3 className="text-xl font-black uppercase tracking-tight text-white">Book Your Session</h3>
                <button 
                  onClick={() => setShowCalendar(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-grow w-full h-full bg-white">
                <iframe 
                  src={bookingUrl} 
                  className="w-full h-full border-none"
                  title="Square Appointment Booking"
                />
              </div>
              <div className="p-4 bg-zinc-900 border-t border-white/5 text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
                  Secure booking via Square Appointments
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

Builder.registerComponent(PricingSection, {
  name: 'PricingSection',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'badgeText', type: 'string', defaultValue: "Investment" },
    { name: 'title', type: 'string', defaultValue: "PRICING." },
    { name: 'description', type: 'string', defaultValue: "Elite training for players who are serious about their development. Choose the path that fits your ambition." },
    {
      name: 'plans',
      type: 'list',
      subFields: [
        { name: 'name', type: 'string' },
        { name: 'price', type: 'string' },
        { name: 'features', type: 'list', subFields: [{ name: 'f', type: 'string' }] },
      ],
      defaultValue: [
        {
          name: "4 Private Training Package",
          price: "300",
          features: [{ f: "Includes four private training sessions. 1-2 Players." }],
        },
        {
          name: "8 Private Training Package",
          price: "550",
          features: [{ f: "Includes eight private training sessions. 1-2 Players." }],
        },
        {
          name: "Private Training",
          price: "80",
          features: [{ f: "1-2 Players" }],
        },
        {
          name: "Group Session / Drop-in",
          price: "65",
          features: [{ f: "3+ Players" }],
        }
      ],
    },
    { name: 'addonBadge', type: 'string', defaultValue: "Exclusive Add-on" },
    { name: 'addonTitle', type: 'string', defaultValue: "PHOTOSHOOT & VIDEO" },
    { name: 'addonDesc', type: 'string', defaultValue: "Capture your progress with professional media coverage of your session." },
    { name: 'addonPrice', type: 'string', defaultValue: "+$30" },
    { name: 'addonNote', type: 'string', defaultValue: "Per Session" },
    { name: 'bookingUrl', type: 'string', defaultValue: "https://app.squareup.com/appointments/book/ibabx2iuj3new7/L1XWM8KT5DEM0/start" },
  ],
});

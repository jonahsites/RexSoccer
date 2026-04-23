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
      name: "Private",
      price: "55",
      features: [
        "1-on-1 Focus", 
        "4 Sessions: $210 (1 month)", 
        "8 Sessions: $410 (2 months)",
        "Individual Game Film Analysis"
      ],
      popular: false
    },
    {
      name: "Duo",
      price: "40",
      note: "player",
      features: [
        "Competitive Pairs", 
        "4 Sessions: $150 (1 month)", 
        "8 Sessions: $300 (2 months)",
        "Positional Awareness"
      ],
      popular: true
    },
    {
      name: "Group",
      price: "30",
      note: "player",
      features: [
        "3+ Players", 
        "4 Sessions: $110 (1 month)", 
        "8 Sessions: $220 (2 months)",
        "High Intensity Match Play"
      ],
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
      <div className="max-w-7xl mx-auto relative z-10">
            <SectionReveal className="text-center mb-24">
              <span className="text-ice-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block">{badgeText}</span>
              <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-white">PRICING.</h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed font-sans">
            {description}
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <SectionReveal key={i}>
              <div className={cn(
                "relative p-10 rounded-[3rem] transition-all duration-500 group border h-full flex flex-col",
                plan.popular 
                  ? "bg-white text-black shadow-2xl shadow-white/5 border-transparent" 
                  : "bg-zinc-900 text-white border-white/5 hover:border-white/10"
              )}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ice-blue text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest border border-white/10">
                    Most Popular
                  </div>
                )}
                <h3 className={cn("text-2xl font-black mb-2 uppercase tracking-tight", plan.popular ? "text-black" : "text-white")}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                  <span className={cn("text-sm font-medium opacity-50")}>{plan.note ? `/${plan.note}` : "/session"}</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-medium">
                      <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", plan.popular ? "bg-black" : "bg-ice-blue")} />
                      <span className={plan.popular ? "text-black/70" : "text-white/70"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleBook()}
                  className={cn(
                    "w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2",
                    plan.popular 
                      ? "bg-black text-white hover:bg-zinc-800" 
                      : "bg-white text-black hover:bg-ice-blue"
                  )}
                >
                  Book Session
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
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-white' },
    { name: 'badgeText', type: 'string', defaultValue: "Investment" },
    { name: 'title', type: 'string', defaultValue: "PRICING." },
    { name: 'description', type: 'string', defaultValue: "Elite training for players who are serious about their development. Choose the path that fits your ambition." },
    {
      name: 'plans',
      type: 'list',
      subFields: [
        { name: 'name', type: 'string' },
        { name: 'price', type: 'string' },
        { name: 'note', type: 'string' },
        { name: 'features', type: 'list', subFields: [{ name: 'f', type: 'string' }] },
        { name: 'popular', type: 'boolean' },
      ],
      defaultValue: [
        {
          name: "Private",
          price: "55",
          features: [{ f: "1-on-1 Attention" }, { f: "Customized Drills" }, { f: "Performance Analysis" }, { f: "Flexible Scheduling" }],
          popular: false
        },
        {
          name: "Duo",
          price: "40",
          note: "each",
          features: [{ f: "2 Players" }, { f: "Competitive Drills" }, { f: "Tactical Focus" }, { f: "Group Synergy" }],
          popular: true
        },
        {
          name: "Small Group",
          price: "30",
          note: "each",
          features: [{ f: "3-5 Players" }, { f: "Game Scenarios" }, { f: "Team Dynamics" }, { f: "High Intensity" }],
          popular: false
        },
        {
          name: "Team Training",
          price: "20",
          note: "each",
          features: [{ f: "6-10 Players" }, { f: "Tactical Intelligence" }, { f: "Game Scenarios" }, { f: "Team Chemistry" }],
          popular: false
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

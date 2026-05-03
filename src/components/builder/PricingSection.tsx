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
      name: "Private Training",
      price: "55",
      description: "Elite 1-on-1 development tailored to your specific technical and tactical needs.",
      packages: [
        { name: "4 Sessions Package", price: "$210", note: "Expires in 1 month" },
        { name: "8 Sessions Package", price: "$410", note: "Expires in 2 months" }
      ]
    },
    {
      name: "Duo Training",
      price: "40",
      description: "Semi-private training for 2 players. Competition-driven and highly effective.",
      perPlayer: true,
      packages: [
        { name: "4 Sessions Package", price: "$150", note: "Expires in 1 month" },
        { name: "8 Sessions Package", price: "$300", note: "Expires in 2 months" }
      ]
    },
    {
      name: "Group Training",
      price: "30",
      description: "Small group environment (3+ players) for tactical awareness and game-speed drills.",
      perPlayer: true,
      packages: []
    }
  ],
  policies = [
    "All packages must be used within their time limit (no rollovers).",
    "24-hour notice is required for any cancellations. If canceled less than 24 hours before, the session will still be charged.",
    "If a duo session is canceled, it will proceed as a private session, and the price will adjust to $55.",
    "Group sessions are priced per player and will remain as booked.",
    "Sessions must be scheduled in advance, based on availability.",
    "Payment is required upfront before the first session of any package.",
    "No refunds or rollovers."
  ],
  backgroundColor = "bg-black",
  bookingUrl = "https://app.squareup.com/appointments/book/ibabx2iuj3new7/L1XWM8KT5DEM0/start",
}: {
  badgeText?: string;
  title?: string;
  description?: string;
  plans?: { name: string, price: string, description: string, perPlayer?: boolean, packages: { name: string, price: string, note: string }[] }[];
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
              <h2 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter text-white">THE INVESTMENT</h2>
          <p className="text-white/40 text-xl font-medium tracking-tight max-w-2xl mx-auto uppercase">
            Consistency is the only pathway to elite development. Choose your path.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <SectionReveal key={i}>
              <div className="group relative p-12 rounded-[2.5rem] bg-zinc-900 text-white border border-white/5 h-full flex flex-col shadow-2xl transition-all duration-500 hover:scale-[1.01]">
                <div className="mb-10">
                  <span className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">
                    {plan.name} {plan.perPlayer && "(Per Player)"}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-8xl font-black tracking-tighter text-white font-display leading-[0.8]">
                      <span className="text-4xl">$</span>{plan.price}
                    </span>
                  </div>
                  <p className="mt-6 text-white/30 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                    Single Session Rate
                  </p>
                </div>

                <div className="flex-grow space-y-8 mb-12">
                  <p className="text-white/60 text-sm font-medium leading-relaxed">
                    {plan.description}
                  </p>

                  {plan.packages && plan.packages.length > 0 && (
                    <div className="pt-8 border-t border-white/10">
                      <span className="text-white/20 font-black uppercase tracking-[0.2em] text-[9px] mb-6 block">Available Packages</span>
                      <div className="grid gap-4">
                        {plan.packages.map((pkg, j) => (
                          <button
                            key={j}
                            onClick={() => handleBook()}
                            className="w-full p-6 rounded-2xl bg-white/5 border border-white/5 text-left transition-all duration-300 hover:border-ice-blue/50 hover:bg-white/10 group/pkg"
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-black uppercase tracking-tight text-white">{pkg.name}</span>
                              <span className="text-xl font-black text-ice-blue">{pkg.price}</span>
                            </div>
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{pkg.note}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => handleBook()}
                  className="w-full py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-2 bg-ice-blue text-black hover:bg-white shadow-xl shadow-ice-blue/10"
                >
                  BOOK NOW {">"}
                </button>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="max-w-5xl mx-auto bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[3rem] p-12 md:p-20 flex flex-col gap-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-black tracking-tighter text-white mb-8 uppercase">DUO POLICY.</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed">
                  At Rex Soccer Training, we encourage players to bring their own duo partner for these sessions. In most cases, you should arrange your own partner. If you don’t have one, you can contact us, and we’ll add you to our Duo Request List. Once a match is found, both players must confirm the session.
                </p>
              </div>
              
              <div>
                <h3 className="text-3xl font-black tracking-tighter text-white mb-8 uppercase">ACADEMY RULES.</h3>
                <div className="space-y-6">
                  {policies.map((policy, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-ice-blue mt-2 shrink-0" />
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider leading-relaxed">{policy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-16 border-t border-white/10 text-center">
              <p className="text-3xl font-black tracking-widest uppercase text-white/10 italic">
                Train Consistently. Improve Faster.
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
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-zinc-950' },
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
          name: "Private Training",
          price: "55",
          features: [
            { f: "Single Session: $55" },
            { f: "4 Sessions Package: $210 (Expires in 1 month)" },
            { f: "8 Sessions Package: $410 (Expires in 2 months)" }
          ],
        },
        {
          name: "Duo Training",
          price: "40",
          features: [
            { f: "Price per player" },
            { f: "Single Session: $40" },
            { f: "4 Sessions Package: $150 (Expires in 1 month)" },
            { f: "8 Sessions Package: $300 (Expires in 2 months)" }
          ],
        },
        {
          name: "Group Training",
          price: "30",
          features: [
            { f: "3+ players, per player" },
            { f: "Single Session: $30" }
          ],
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

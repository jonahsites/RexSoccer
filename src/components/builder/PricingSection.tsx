import React, { useState } from 'react';
import { Builder } from '@builder.io/react';
import { X, ExternalLink, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionReveal } from './common';

export const PricingSection = ({
  badgeText = "PRICING",
  policies = [
    "All packages must be used within their time limit (4-session packages expire in 2 weeks, 8-session packages expire in 4 weeks; no rollovers).",
    "5-hour notice is required for any cancellations. If canceled less than 5 hours before, the session will still be charged.",
    "If a duo session is canceled, it will proceed as a private session, and the price will adjust to $60.",
    "Group sessions are priced per player and will remain as booked.",
    "Sessions must be scheduled in advance, based on availability.",
    "Payment is required upfront before the first session of any package.",
    "No refunds or rollovers."
  ],
  backgroundColor = "bg-black",
  bookingUrl = "https://app.squareup.com/appointments/book/ibabx2iuj3new7/L1XWM8KT5DEM0/start",
}: {
  badgeText?: string;
  policies?: string[];
  backgroundColor?: string;
  bookingUrl?: string;
  key?: React.Key;
}) => {
  const [activeTab, setActiveTab] = useState<'private' | 'duo' | 'group'>('private');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBook = () => {
    setShowCalendar(true);
  };

  return (
    <section id="pricing" className={`relative py-32 px-6 ${backgroundColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header & Tabs */}
        <SectionReveal className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-zinc-900 border border-white/10 mb-8 shadow-inner">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-ice-blue">{badgeText}</span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('private')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'private'
                  ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                  : 'bg-zinc-900/90 text-white/50 border border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              Private
            </button>
            <button
              onClick={() => setActiveTab('duo')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'duo'
                  ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                  : 'bg-zinc-900/90 text-white/50 border border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              Duo
            </button>
            <button
              onClick={() => setActiveTab('group')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'group'
                  ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                  : 'bg-zinc-900/90 text-white/50 border border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              Group
            </button>
          </div>

          {/* Dynamic Headline & Subtitle */}
          {activeTab === 'private' && (
            <motion.div
              key="private-header"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-white uppercase font-display">
                PRIVATE TRAINING
              </h2>
              <p className="text-white/60 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                Private sessions with only one player, tailored to exactly what you need. Whether that's an elite
                player sharpening technique and decision-making, or a beginner building the fundamentals. All ages
                welcome. Book a single session or save with a package.
              </p>
            </motion.div>
          )}

          {activeTab === 'duo' && (
            <motion.div
              key="duo-header"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-white uppercase font-display">
                DUO TRAINING
              </h2>
              <p className="text-white/60 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                Semi-private training for 2 players. Competition-driven, high-intensity, and highly effective. Book a single
                session with your training partner.
              </p>
            </motion.div>
          )}

          {activeTab === 'group' && (
            <motion.div
              key="group-header"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-white uppercase font-display">
                GROUP TRAINING
              </h2>
              <p className="text-white/60 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                Small group environment (3+ players) for tactical awareness, positional understanding, and game-speed drills.
              </p>
            </motion.div>
          )}
        </SectionReveal>

        {/* Pricing Cards */}
        {activeTab === 'private' && (
          <motion.div
            key="private-cards"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24"
          >
            {/* Card 1: 1 Private */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#f5f5f7] text-black shadow-2xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 min-h-[380px]">
              <span className="text-zinc-600 font-bold text-sm tracking-tight">1 private</span>
              <div className="my-6">
                <span className="text-6xl md:text-7xl font-black font-display tracking-tight text-black">$60</span>
                <span className="block text-[11px] font-bold text-zinc-500 uppercase tracking-widest mt-2">
                  Single Session
                </span>
              </div>
              <button
                onClick={handleBook}
                className="w-full py-4 px-6 rounded-full font-black text-xs uppercase tracking-widest bg-ice-blue text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md group"
              >
                BOOK NOW <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Card 2: 4 Privates */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#f5f5f7] text-black shadow-2xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 min-h-[380px]">
              <span className="text-zinc-600 font-bold text-sm tracking-tight">4 privates</span>
              <div className="my-6">
                <span className="text-6xl md:text-7xl font-black font-display tracking-tight text-black">$225</span>
                <span className="block text-[11px] font-bold text-zinc-500 uppercase tracking-widest mt-2">
                  Expires in 2 weeks
                </span>
              </div>
              <button
                onClick={handleBook}
                className="w-full py-4 px-6 rounded-full font-black text-xs uppercase tracking-widest bg-ice-blue text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md group"
              >
                BOOK NOW <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Card 3: 8 Privates (Featured Dark Card) */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#141416] text-white border border-white/15 shadow-2xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 min-h-[380px]">
              <span className="text-zinc-400 font-bold text-sm tracking-tight">8 privates</span>
              <div className="my-6">
                <span className="text-6xl md:text-7xl font-black font-display tracking-tight text-white">$400</span>
                <span className="block text-[11px] font-bold text-zinc-400 uppercase tracking-widest mt-2">
                  Expires in 4 weeks
                </span>
              </div>
              <button
                onClick={handleBook}
                className="w-full py-4 px-6 rounded-full font-black text-xs uppercase tracking-widest bg-ice-blue text-black hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-ice-blue/10 group"
              >
                BOOK NOW <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Duo Cards (Package deal removed as requested) */}
        {activeTab === 'duo' && (
          <motion.div
            key="duo-cards"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-md mx-auto mb-24"
          >
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#f5f5f7] text-black shadow-2xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 min-h-[380px]">
              <span className="text-zinc-600 font-bold text-sm tracking-tight">1 duo session</span>
              <div className="my-6">
                <span className="text-6xl md:text-7xl font-black font-display tracking-tight text-black">$40</span>
                <span className="block text-[11px] font-bold text-zinc-500 uppercase tracking-widest mt-2">
                  Per Player • $80 Total Session Rate
                </span>
              </div>
              <button
                onClick={handleBook}
                className="w-full py-4 px-6 rounded-full font-black text-xs uppercase tracking-widest bg-ice-blue text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md group"
              >
                BOOK NOW <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Group Cards */}
        {activeTab === 'group' && (
          <motion.div
            key="group-cards"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-md mx-auto mb-24"
          >
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#f5f5f7] text-black shadow-2xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 min-h-[380px]">
              <span className="text-zinc-600 font-bold text-sm tracking-tight">group session</span>
              <div className="my-6">
                <span className="text-6xl md:text-7xl font-black font-display tracking-tight text-black">$30</span>
                <span className="block text-[11px] font-bold text-zinc-500 uppercase tracking-widest mt-2">
                  Per Player • 3+ Players
                </span>
              </div>
              <button
                onClick={handleBook}
                className="w-full py-4 px-6 rounded-full font-black text-xs uppercase tracking-widest bg-ice-blue text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md group"
              >
                BOOK NOW <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Duo Policy & Academy Rules */}
        <SectionReveal>
          <div className="max-w-5xl mx-auto bg-zinc-900/50 backdrop-blur-[2px] border border-white/5 rounded-[3rem] p-12 md:p-20 flex flex-col gap-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-black tracking-tighter text-white mb-8 uppercase">DUO POLICY.</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed">
                  At Rex Soccer Training, we encourage players to bring their own duo partner for these sessions. In
                  most cases, you should arrange your own partner. If you don't have one, you can contact us, and we'll
                  add you to our Duo Request List. Once a match is found, both players must confirm the session.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black tracking-tighter text-white mb-8 uppercase">ACADEMY RULES.</h3>
                <div className="space-y-6">
                  {policies.map((policy, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-ice-blue mt-2 shrink-0" />
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider leading-relaxed">
                        {policy}
                      </p>
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
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col border border-white/5"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900">
                <h3 className="text-xl font-black uppercase tracking-tight text-white">Book Your Session</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 text-white/70 hover:text-white rounded-full transition-colors flex items-center gap-2 text-xs font-bold"
                    title="Open Square in new tab"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
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
    { name: 'badgeText', type: 'string', defaultValue: "PRICING" },
    { name: 'bookingUrl', type: 'string', defaultValue: "https://app.squareup.com/appointments/book/ibabx2iuj3new7/L1XWM8KT5DEM0/start" },
  ],
});
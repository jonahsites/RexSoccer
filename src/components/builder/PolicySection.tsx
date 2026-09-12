import React from 'react';
import { Builder } from '@builder.io/react';
import { SectionReveal } from './common';

export const PolicySection = ({
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
  backgroundImage = "https://lh3.googleusercontent.com/d/1ZXBGv_nDOk4sAUp7rPwcXHaNo_niAJwS",
}: {
  policies?: string[];
  backgroundColor?: string;
  backgroundImage?: string;
}) => {
  return (
    <section id="policy" className={`relative py-24 px-6 ${backgroundColor} overflow-hidden`}>
      {/* Background Graphic Accent on the side of the page and behind the div component */}
      {backgroundImage && (
        <img 
          src={backgroundImage}
          alt=""
          className="absolute -right-10 md:right-0 top-1/2 -translate-y-1/2 h-[110%] md:h-[130%] max-h-[750px] w-auto max-w-none opacity-30 md:opacity-40 pointer-events-none object-contain object-right select-none z-0"
          referrerPolicy="no-referrer"
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
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
    </section>
  );
};

Builder.registerComponent(PolicySection, {
  name: 'PolicySection',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'backgroundImage', type: 'file', defaultValue: "https://lh3.googleusercontent.com/d/1ZXBGv_nDOk4sAUp7rPwcXHaNo_niAJwS" },
    {
      name: 'policies',
      type: 'list',
      subFields: [{ name: 'rule', type: 'string' }],
      defaultValue: [
        "All packages must be used within their time limit (4-session packages expire in 2 weeks, 8-session packages expire in 4 weeks; no rollovers).",
        "5-hour notice is required for any cancellations. If canceled less than 5 hours before, the session will still be charged.",
        "If a duo session is canceled, it will proceed as a private session, and the price will adjust to $60.",
        "Group sessions are priced per player and will remain as booked.",
        "Sessions must be scheduled in advance, based on availability.",
        "Payment is required upfront before the first session of any package.",
        "No refunds or rollovers."
      ],
    },
  ],
});

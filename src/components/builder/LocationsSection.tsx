import React from 'react';
import { Builder } from '@builder.io/react';
import { ArrowRight } from 'lucide-react';
import { SectionReveal } from './common';

export const LocationsSection = ({
  badgeText = "Where We Train",
  title = "PORT ST.<br />LUCIE.",
  description = "Availability is open to the needs of the individual. Train at our elite facilities designed for high performance.",
  locations = [
    {
      id: 1,
      name: "Location 1",
      address: "1585 SW Cashmere Blvd",
      city: "Port St. Lucie, FL 34986",
      img: "https://image2url.com/r2/default/images/1775342660072-e8a552b4-ed8e-4a03-82d7-1fc0b708d302.png",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=1585+SW+Cashmere+Blvd+Port+St.+Lucie+FL+34986",
      objectPosition: "center 20%",
      zoom: 0.85
    },
    {
      id: 2,
      name: "Location 2",
      address: "12151 SW Community Blvd",
      city: "Port St. Lucie, FL 34987",
      img: "https://image2url.com/r2/default/images/1775342742359-a5cde3a0-1bb0-42f7-bfec-a9b31e743293.png",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=12151+SW+Community+Blvd+Port+St.+Lucie+FL+34987",
      objectPosition: "center",
      zoom: 0.85
    }
  ],
  mobileBadge = "Mobile Training",
  mobileTitle = "We Drive To You.",
  mobileDesc = "Can't make it to our locations? No problem. We bring the elite training experience to your local field or backyard.",
  travelFees = [
    { label: "Under 10 miles", price: "FREE" },
    { label: "10 - 20 miles", price: "+$15" },
    { label: "20+ miles", price: "+$25" }
  ],
  backgroundColor = "bg-black",
}: {
  badgeText?: string;
  title?: string;
  description?: string;
  locations?: { id: number, name: string, address: string, city: string, img: string, mapUrl: string, objectPosition?: string, zoom?: number }[];
  mobileBadge?: string;
  mobileTitle?: string;
  mobileDesc?: string;
  travelFees?: { label: string, price: string }[];
  backgroundColor?: string;
  key?: React.Key;
}) => {
  return (
    <section id="locations" className={`py-32 px-6 ${backgroundColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div>
              <span className="text-ice-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block">{badgeText}</span>
              <h2 
                className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter text-white"
                dangerouslySetInnerHTML={{ __html: title.replace('PORT ST.<br />LUCIE.', 'PORT ST.<br /><span class="text-ice-blue">LUCIE.</span>') }}
              />
          </div>
          <p className="max-w-md text-white/40 text-xl font-light leading-relaxed">
            {description}
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {locations.map((loc, i) => (
            <SectionReveal key={loc.id}>
              <div className="group relative h-[600px] rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 p-3 shadow-sm">
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden bg-zinc-800">
                  <img 
                    src={loc.img} 
                    alt={loc.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-all duration-1000 brightness-110"
                    style={{ 
                      objectPosition: loc.objectPosition || 'center',
                      transform: `scale(${loc.zoom || 1})`
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12">
                    <span className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">{loc.name}</span>
                    <h3 className="text-4xl font-black mb-4 tracking-tight text-white">{loc.address}</h3>
                    <p className="text-white/50 mb-10 text-lg font-medium">{loc.city}</p>
                    <a 
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-[10px] group-hover:text-ice-blue transition-all"
                    >
                      Open in Maps <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-ice-blue"><ArrowRight className="w-4 h-4" /></div>
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-24 bg-zinc-900 p-12 rounded-[3rem] border border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <span className="text-ice-blue font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">{mobileBadge}</span>
              <h3 className="text-4xl font-black tracking-tighter text-white mb-6 uppercase">{mobileTitle}</h3>
              <p className="text-white/60 font-medium leading-relaxed">
                {mobileDesc}
              </p>
            </div>
            <div className="bg-black p-8 rounded-[2rem] shadow-xl border border-white/5 min-w-[300px]">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-ice-blue mb-6">Travel Fees</h4>
              <ul className="space-y-4">
                {travelFees.map((fee, i) => (
                  <li key={i} className={`flex justify-between items-center ${i < travelFees.length - 1 ? 'pb-4 border-b border-white/5' : ''}`}>
                    <span className="text-sm font-bold text-white">{fee.label}</span>
                    <span className="text-lg font-black text-white">{fee.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

Builder.registerComponent(LocationsSection, {
  name: 'LocationsSection',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'badgeText', type: 'string', defaultValue: "Where We Train" },
    { name: 'title', type: 'string', defaultValue: "PORT ST.<br />LUCIE." },
    { name: 'description', type: 'string', defaultValue: "Availability is open to the needs of the individual. Train at our elite facilities designed for high performance." },
    {
      name: 'locations',
      type: 'list',
      subFields: [
        { name: 'id', type: 'number' },
        { name: 'name', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'img', type: 'file' },
        { name: 'mapUrl', type: 'string' },
        { name: 'objectPosition', type: 'string', defaultValue: 'center' },
        { name: 'zoom', type: 'number', defaultValue: 1 },
      ],
      defaultValue: [
        {
          id: 1,
          name: "Location 1",
          address: "1585 SW Cashmere Blvd",
          city: "Port St. Lucie, FL 34986",
          img: "https://image2url.com/r2/default/images/1775342660072-e8a552b4-ed8e-4a03-82d7-1fc0b708d302.png",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=1585+SW+Cashmere+Blvd+Port+St.+Lucie+FL+34986",
          objectPosition: "center 20%",
          zoom: 0.85
        },
        {
          id: 2,
          name: "Location 2",
          address: "12151 SW Community Blvd",
          city: "Port St. Lucie, FL 34987",
          img: "https://image2url.com/r2/default/images/1775342742359-a5cde3a0-1bb0-42f7-bfec-a9b31e743293.png",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=12151+SW+Community+Blvd+Port+St.+Lucie+FL+34987",
          objectPosition: "center",
          zoom: 0.85
        }
      ],
    },
    { name: 'mobileBadge', type: 'string', defaultValue: "Mobile Training" },
    { name: 'mobileTitle', type: 'string', defaultValue: "We Drive To You." },
    { name: 'mobileDesc', type: 'string', defaultValue: "Can't make it to our locations? No problem. We bring the elite training experience to your local field or backyard." },
    {
      name: 'travelFees',
      type: 'list',
      subFields: [
        { name: 'label', type: 'string' },
        { name: 'price', type: 'string' },
      ],
      defaultValue: [
        { label: "Under 10 miles", price: "FREE" },
        { label: "10 - 20 miles", price: "+$15" },
        { label: "20+ miles", price: "+$25" }
      ],
    },
  ],
});

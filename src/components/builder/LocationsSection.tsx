import React from 'react';
import { Builder } from '@builder.io/react';
import { SectionReveal } from './common';

export const LocationsSection = ({
  badgeText = "locations",
  title = "Come train with us in person",
  description = "Availability is open to the needs of the individual. Train at elite facilities designed for high performance.",
  locations = [
    {
      id: 1,
      name: "Location 1",
      address: "Port St. Lucie FL",
      city: "1585 SW Cashmere Blvd, Port St. Lucie, FL 34986",
      img: "https://lh3.googleusercontent.com/d/1NdipT27Mnet9X7WZB0o28-lVTMbNAp61",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=1585+SW+Cashmere+Blvd+Port+St.+Lucie+FL+34986",
      objectPosition: "center 20%",
      zoom: 0.85
    },
    {
      id: 2,
      name: "Location 2",
      address: "Port St. Lucie FL",
      city: "12151 SW Community Blvd, Port St. Lucie, FL 34987",
      img: "https://lh3.googleusercontent.com/d/16fQvw_EPauX9Sgr_0TaNVz1nmBChNYqa",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=12151+SW+Community+Blvd+Port+St.+Lucie+FL+34987",
      objectPosition: "center",
      zoom: 0.85
    },
    {
      id: 3,
      name: "Location 3",
      address: "Palm City",
      city: "1050 SW Prairie Ave, Palm City, FL 34990, United States",
      img: "https://lh3.googleusercontent.com/d/15Ye5MRvXJrODBozkzgzcYqPleTaA_x5h",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=1050+SW+Prairie+Ave+Palm+City+FL+34990",
      objectPosition: "center",
      zoom: 0.85
    }
  ],
  backgroundColor = "bg-black",
}: {
  badgeText?: string;
  title?: string;
  description?: string;
  locations?: { id: number, name: string, address: string, city: string, img: string, mapUrl: string, objectPosition?: string, zoom?: number }[];
  backgroundColor?: string;
  key?: React.Key;
}) => {
  return (
    <section id="locations" className={`py-32 px-6 ${backgroundColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="flex flex-col lg:flex-row lg:items-start justify-between mb-24 gap-12">
          <div className="max-w-2xl">
              <span className="text-ice-blue font-black uppercase tracking-widest text-xs mb-6 block">{badgeText}</span>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter text-white uppercase">
                {title}
              </h2>
          </div>
          <p className="max-w-md text-white/40 text-xl font-light leading-relaxed lg:mt-32">
            {description}
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {locations.map((loc) => (
            <SectionReveal key={loc.id}>
              <div className="group relative h-[600px] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl">
                <img 
                  src={loc.img} 
                  alt={loc.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] opacity-60"
                  style={{ objectPosition: loc.objectPosition || 'center' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-6">
                    <span className="text-ice-blue font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
                      // {loc.name}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white uppercase leading-none">
                      {loc.address}
                    </h3>
                    <div className="space-y-1 text-white/50 font-medium text-sm max-w-xs mb-8 leading-tight">
                      {loc.city.split(',').map((part, idx) => (
                        <p key={idx}>{part.trim()}</p>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ice-blue font-black uppercase tracking-[0.1em] text-[10px] hover:text-white transition-colors"
                  >
                    BOOK IN {loc.address.split(' ')[0]} <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

Builder.registerComponent(LocationsSection, {
  name: 'LocationsSection',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'badgeText', type: 'string', defaultValue: "locations" },
    { name: 'title', type: 'string', defaultValue: "TRAIN WITH US<br />IN PERSON." },
    { name: 'description', type: 'string', defaultValue: "Two flagship training environments — plus on-demand sessions through the SAT Plus app. Book the one closest to you." },
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
          address: "Port St. Lucie FL",
          city: "1585 SW Cashmere Blvd, Port St. Lucie, FL 34986",
          img: "https://lh3.googleusercontent.com/d/1NdipT27Mnet9X7WZB0o28-lVTMbNAp61",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=1585+SW+Cashmere+Blvd+Port+St.+Lucie+FL+34986",
          objectPosition: "center 20%",
          zoom: 0.85
        },
        {
          id: 2,
          name: "Location 2",
          address: "Port St. Lucie FL",
          city: "12151 SW Community Blvd, Port St. Lucie, FL 34987",
          img: "https://lh3.googleusercontent.com/d/16fQvw_EPauX9Sgr_0TaNVz1nmBChNYqa",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=12151+SW+Community+Blvd+Port+St.+Lucie+FL+34987",
          objectPosition: "center",
          zoom: 0.85
        },
        {
          id: 3,
          name: "Location 3",
          address: "Palm City",
          city: "1050 SW Prairie Ave, Palm City, FL 34990, United States",
          img: "https://lh3.googleusercontent.com/d/15Ye5MRvXJrODBozkzgzcYqPleTaA_x5h",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=1050+SW+Prairie+Ave+Palm+City+FL+34990",
          objectPosition: "center",
          zoom: 0.85
        }
      ],
    },
  ],
});
import React from 'react';
import { Builder } from '@builder.io/react';
import { Mail, Instagram, Facebook } from 'lucide-react';
import { SectionReveal } from './common';

export const ContactSection = ({
  badgeText = "Get Started",
  title = "THE TRAINING YOUR CLUB<br /><span class=\"text-oxford-blue\">DOESN’T HAVE TIME FOR.</span>",
  description = "Take the first step towards elite performance. Contact us to schedule your first session or ask any questions.",
  contactMethods = [
    { icon: 'mail', label: "Email Us", value: "info.rexsoccer@gmail.com", href: "mailto:info.rexsoccer@gmail.com" },
    { icon: 'instagram', label: "Follow Us", value: "@rex.soccer", href: "https://www.instagram.com/rex.soccer" },
    { icon: 'facebook', label: "Facebook", value: "REX Soccer", href: "https://www.facebook.com/profile.php?id=61578792965551" }
  ],
  backgroundColor = "bg-black",
}: {
  badgeText?: string;
  title?: string;
  description?: string;
  contactMethods?: { icon: string, label: string, value: string, href: string }[];
  backgroundColor?: string;
}) => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram': return <Instagram className="w-6 h-6 text-white group-hover:text-black" />;
      case 'facebook': return <Facebook className="w-6 h-6 text-white group-hover:text-black" />;
      default: return <Mail className="w-6 h-6 text-white group-hover:text-black" />;
    }
  };

  return (
    <section id="contact" className={`relative py-32 px-6 ${backgroundColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-16">
          <SectionReveal>
            <div className="text-center flex flex-col items-center max-w-4xl mx-auto">
              <span className="text-ice-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block">{badgeText}</span>
              <h2 
                className="text-4xl md:text-5xl font-black mb-10 leading-[0.8] tracking-tighter text-white uppercase break-words"
                dangerouslySetInnerHTML={{ __html: title.replace('text-oxford-blue', 'text-ice-blue').replace(/<br\s*\/?>/gi, ' ') }}
              />
              <p className="text-white/40 text-xl font-light mb-12 max-w-2xl leading-relaxed">
                {description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-12">
                {contactMethods.map((method, i) => (
                  <a 
                    key={i} 
                    href={method.href} 
                    target={method.icon === 'mail' ? undefined : "_blank"} 
                    rel={method.icon === 'mail' ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-ice-blue transition-colors duration-500">
                      {getIcon(method.icon)}
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-ice-blue mb-1">{method.label}</p>
                      <p className="text-xl font-bold text-white">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none uppercase leading-none translate-y-1/2">
        ELITE
      </div>
    </section>
  );
};

Builder.registerComponent(ContactSection, {
  name: 'ContactSection',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'badgeText', type: 'string', defaultValue: "Get Started" },
    { name: 'title', type: 'string', defaultValue: "“THE TRAINING YOUR CLUB DOESN’T HAVE TIME FOR.”" },
    { name: 'description', type: 'string', defaultValue: "Take the first step towards elite performance. Contact us to schedule your first session or ask any questions." },
    {
      name: 'contactMethods',
      type: 'list',
      subFields: [
        { name: 'icon', type: 'string', enum: ['mail', 'instagram', 'facebook'] },
        { name: 'label', type: 'string' },
        { name: 'value', type: 'string' },
        { name: 'href', type: 'string' },
      ],
      defaultValue: [
        { icon: 'mail', label: "Email Us", value: "info.rexsoccer@gmail.com", href: "mailto:info.rexsoccer@gmail.com" },
        { icon: 'instagram', label: "Follow Us", value: "@rex.soccer", href: "https://www.instagram.com/rex.soccer" },
        { icon: 'facebook', label: "Facebook", value: "REX Soccer", href: "https://www.facebook.com/profile.php?id=61578792965551" }
      ],
    },
  ],
});

import React from 'react';
import { Builder } from '@builder.io/react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer = ({
  logo = "https://image2url.com/r2/default/images/1774894049292-b9fe06c3-7e1a-4415-a0c6-1f107619d1bb.png",
  description = "Elite soccer training for the next generation of athletes. Built on discipline, technique, and tactical intelligence.",
  navTitle = "Navigation",
  navItems = [
    { label: "About", href: "#about" },
    { label: "Training", href: "#training" },
    { label: "Pricing", href: "#pricing" },
    { label: "Locations", href: "#locations" },
    { label: "Contact", href: "#contact" }
  ],
  socialTitle = "Social",
  socials = [
    { icon: "instagram", href: "https://www.instagram.com/rex.soccer" },
    { icon: "facebook", href: "https://www.facebook.com/profile.php?id=61578792965551" }
  ],
  copyright = "© 2025 REX Soccer Training. All rights reserved.",
  links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ],
  backgroundColor = "bg-black",
  backgroundImage = "/23eaaee6-1741-4d38-9e76-d97160c3033f.png",
}: {
  logo?: string;
  description?: string;
  navTitle?: string;
  navItems?: { label: string, href: string }[];
  socialTitle?: string;
  socials?: { icon: string, href: string }[];
  copyright?: string;
  links?: { label: string, href: string }[];
  backgroundColor?: string;
  backgroundImage?: string;
}) => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram': return <Instagram className="w-5 h-5 text-white/40 group-hover:text-black" />;
      case 'facebook': return <Facebook className="w-5 h-5 text-white/40 group-hover:text-black" />;
      default: return <Instagram className="w-5 h-5 text-white/40 group-hover:text-black" />;
    }
  };

  return (
    <footer className={`relative py-32 px-6 border-t border-white/5 ${backgroundColor} overflow-hidden`}>
      {/* Background Accent Image */}
      <img 
        src={backgroundImage}
        alt=""
        className="absolute bottom-0 right-0 w-[400px] md:w-[800px] opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4 brightness-0 invert"
        referrerPolicy="no-referrer"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src={logo} 
                alt="REX Logo" 
                className="h-10 md:h-12 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/30 text-lg font-light max-w-sm leading-relaxed">
              {description}
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white mb-8">{navTitle}</h4>
            <ul className="space-y-4">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href} 
                    className="text-sm text-white/40 hover:text-ice-blue transition-colors"
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' }));
                        
                        setTimeout(() => {
                          const element = document.getElementById(item.href.replace('#', ''));
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white mb-8">{socialTitle}</h4>
            <div className="flex gap-6">
              {socials.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-ice-blue transition-all group">
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-xs uppercase tracking-[0.3em]">{copyright}</p>
          <div className="flex gap-12">
            {links.map((link, i) => (
              <a key={i} href={link.href} className="text-white/20 text-xs uppercase tracking-[0.3em] hover:text-white transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [
    { name: 'backgroundColor', type: 'string', defaultValue: 'bg-black' },
    { name: 'backgroundImage', type: 'file', defaultValue: "/23eaaee6-1741-4d38-9e76-d97160c3033f.png" },
    { name: 'logo', type: 'file', defaultValue: "https://image2url.com/r2/default/images/1774894049292-b9fe06c3-7e1a-4415-a0c6-1f107619d1bb.png" },
    { name: 'description', type: 'string', defaultValue: "Elite soccer training for the next generation of athletes. Built on discipline, technique, and tactical intelligence." },
    { name: 'navTitle', type: 'string', defaultValue: "Navigation" },
    {
      name: 'navItems',
      type: 'list',
      subFields: [
        { name: 'label', type: 'string' },
        { name: 'href', type: 'string' },
      ],
      defaultValue: [
        { label: "About", href: "#about" },
        { label: "Training", href: "#training" },
        { label: "Pricing", href: "#pricing" },
        { label: "Locations", href: "#locations" },
        { label: "Contact", href: "#contact" }
      ],
    },
    { name: 'socialTitle', type: 'string', defaultValue: "Social" },
    {
      name: 'socials',
      type: 'list',
      subFields: [
        { name: 'icon', type: 'string', enum: ['instagram', 'facebook'] },
        { name: 'href', type: 'string' },
      ],
      defaultValue: [
        { icon: "instagram", href: "https://www.instagram.com/rex.soccer" },
        { icon: "facebook", href: "https://www.facebook.com/profile.php?id=61578792965551" }
      ],
    },
    { name: 'copyright', type: 'string', defaultValue: "© 2025 REX Soccer Training. All rights reserved." },
    {
      name: 'links',
      type: 'list',
      subFields: [
        { name: 'label', type: 'string' },
        { name: 'href', type: 'string' },
      ],
      defaultValue: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" }
      ],
    },
  ],
});

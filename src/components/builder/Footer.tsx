import React from 'react';
import { Builder } from '@builder.io/react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer = ({
  logo = "https://image2url.com/r2/default/images/1774894049292-b9fe06c3-7e1a-4415-a0c6-1f107619d1bb.png",
  brandName = "REX SOCCER TRAINING",
  phoneNumber = "+1 (772) 243-1339",
  email = "info.rexsoccer@gmail.com",
  address = "1585 SW Cashmere Blvd, Port St. Lucie, FL 34986",
  navTitle = "Navigation",
  navItems = [
    { label: "Home", href: "#", isPage: false },
    { label: "About", href: "#about", isPage: false },
    { label: "In-Person Training", href: "#pricing", isPage: false },
    { label: "Pricing", href: "#pricing", isPage: false },
    { label: "Locations", href: "#locations", isPage: false },
    { label: "Vision", href: "#vision", isPage: true, page: "vision" },
    { label: "Team", href: "#team", isPage: true, page: "team" },
    { label: "Merch", href: "#merch", isPage: true, page: "merch" }
  ],
  socials = [
    { icon: "instagram", name: "Instagram", href: "https://www.instagram.com/rex.soccer" },
    { icon: "facebook", name: "Facebook", href: "https://www.facebook.com/profile.php?id=61578792965551" }
  ],
  copyright = "© 2026 REX Soccer Training. All rights reserved.",
  links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ],
  backgroundColor = "bg-black",
  backgroundImage = "https://lh3.googleusercontent.com/d/1ZXBGv_nDOk4sAUp7rPwcXHaNo_niAJwS",
}: {
  logo?: string;
  brandName?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  navTitle?: string;
  navItems?: { label: string, href: string, isPage?: boolean, page?: string }[];
  socials?: { icon: string, name?: string, href: string }[];
  copyright?: string;
  links?: { label: string, href: string }[];
  backgroundColor?: string;
  backgroundImage?: string;
}) => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'facebook': return <Facebook className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />;
      case 'instagram':
      default: return <Instagram className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />;
    }
  };

  const handleNavClick = (item: { label: string, href: string, isPage?: boolean, page?: string }) => {
    if (item.isPage && item.page) {
      window.dispatchEvent(new CustomEvent('changePage', { detail: item.page }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.href === '#' || item.href === '') {
      window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.href.startsWith('#')) {
      window.dispatchEvent(new CustomEvent('changePage', { detail: 'home' }));
      setTimeout(() => {
        const element = document.getElementById(item.href.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer id="contact" className={`relative py-24 md:py-32 px-6 md:px-16 border-t border-white/10 ${backgroundColor} overflow-hidden`}>
      {/* Subtle Background Accent Image */}
      {backgroundImage && (
        <img 
          src={backgroundImage}
          alt=""
          className="absolute right-0 top-0 h-full w-auto opacity-15 pointer-events-none object-contain object-right"
          referrerPolicy="no-referrer"
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-20 md:mb-28">
          {/* Left Column: Brand, Phone, Email, Address, Socials */}
          <div className="md:col-span-8 flex flex-col items-start">
            {/* Logo Mark */}
            <div className="mb-8 cursor-pointer" onClick={() => handleNavClick({ label: 'Home', href: '#' })}>
              <img 
                src={logo} 
                alt="REX Logo" 
                className="h-12 md:h-14 brightness-0 invert object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Brand Title */}
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white font-display mb-8">
              {brandName}
            </h2>

            {/* Contact Details (Styled after image.png) */}
            <div className="flex flex-col items-start gap-3 mb-6">
              <a 
                href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`} 
                className="text-white/70 hover:text-white text-base md:text-lg underline underline-offset-8 decoration-white/30 hover:decoration-white transition-all"
              >
                {phoneNumber}
              </a>

              <a 
                href={`mailto:${email}`} 
                className="text-white/70 hover:text-white text-base md:text-lg underline underline-offset-8 decoration-white/30 hover:decoration-white transition-all"
              >
                {email}
              </a>
            </div>

            {/* Address */}
            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-sm mb-8">
              {address}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider group"
                >
                  {getIcon(social.icon)}
                  <span>{social.name || social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Navigation */}
          <div className="md:col-span-4 flex flex-col md:items-end">
            <div className="w-full md:max-w-xs text-left md:text-right">
              <h4 className="text-base md:text-lg font-medium text-white/90 mb-6 tracking-wide">
                {navTitle}
              </h4>
              <ul className="space-y-3">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => handleNavClick(item)}
                      className="text-white/50 hover:text-white text-sm md:text-base transition-colors py-1 cursor-pointer inline-block text-left md:text-right hover:translate-x-1 md:hover:-translate-x-1 duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs uppercase tracking-[0.25em]">
            {copyright}
          </p>
          <div className="flex gap-8">
            {links.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="text-white/30 text-xs uppercase tracking-[0.25em] hover:text-white transition-colors"
              >
                {link.label}
              </a>
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
    { name: 'backgroundImage', type: 'file', defaultValue: "https://lh3.googleusercontent.com/d/1ZXBGv_nDOk4sAUp7rPwcXHaNo_niAJwS" },
    { name: 'logo', type: 'file', defaultValue: "https://image2url.com/r2/default/images/1774894049292-b9fe06c3-7e1a-4415-a0c6-1f107619d1bb.png" },
    { name: 'brandName', type: 'string', defaultValue: "REX SOCCER TRAINING" },
    { name: 'phoneNumber', type: 'string', defaultValue: "+1 (772) 243-1339" },
    { name: 'email', type: 'string', defaultValue: "info.rexsoccer@gmail.com" },
    { name: 'address', type: 'string', defaultValue: "1585 SW Cashmere Blvd, Port St. Lucie, FL 34986" },
    { name: 'navTitle', type: 'string', defaultValue: "Navigation" },
    {
      name: 'navItems',
      type: 'list',
      subFields: [
        { name: 'label', type: 'string' },
        { name: 'href', type: 'string' },
        { name: 'isPage', type: 'boolean' },
        { name: 'page', type: 'string' },
      ],
      defaultValue: [
        { label: "Home", href: "#", isPage: false },
        { label: "About", href: "#about", isPage: false },
        { label: "In-Person Training", href: "#pricing", isPage: false },
        { label: "Pricing", href: "#pricing", isPage: false },
        { label: "Locations", href: "#locations", isPage: false },
        { label: "Vision", href: "#vision", isPage: true, page: "vision" },
        { label: "Team", href: "#team", isPage: true, page: "team" },
        { label: "Merch", href: "#merch", isPage: true, page: "merch" }
      ],
    },
    {
      name: 'socials',
      type: 'list',
      subFields: [
        { name: 'icon', type: 'string', enum: ['instagram', 'facebook'] },
        { name: 'name', type: 'string' },
        { name: 'href', type: 'string' },
      ],
      defaultValue: [
        { icon: "instagram", name: "Instagram", href: "https://www.instagram.com/rex.soccer" },
        { icon: "facebook", name: "Facebook", href: "https://www.facebook.com/profile.php?id=61578792965551" }
      ],
    },
    { name: 'copyright', type: 'string', defaultValue: "© 2026 REX Soccer Training. All rights reserved." },
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
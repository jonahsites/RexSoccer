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
    { label: "About", href: "#about", isPage: true, page: "about" },
    { label: "In-Person Training", href: "#pricing", isPage: false },
    { label: "Pricing", href: "#pricing", isPage: false },
    { label: "Locations", href: "#locations", isPage: false },
    { label: "Vision", href: "#vision", isPage: true, page: "vision" },
    { label: "Team", href: "#team", isPage: true, page: "team" },
    { label: "Merch", href: "#merch", isPage: true, page: "merch" }
  ],
  socials = [
    { icon: "instagram", href: "https://www.instagram.com/rex.soccer" },
    { icon: "facebook", href: "https://www.facebook.com/profile.php?id=61578792965551" }
  ],
  copyright = "© 2026 REX Soccer Training. All rights reserved.",
  links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ],
  backgroundColor = "bg-black",
}: {
  logo?: string;
  brandName?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  navTitle?: string;
  navItems?: { label: string, href: string, isPage?: boolean, page?: string }[];
  socials?: { icon: string, href: string }[];
  copyright?: string;
  links?: { label: string, href: string }[];
  backgroundColor?: string;
  backgroundImage?: string;
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'facebook':
        return <Facebook className="w-5 h-5 text-[#8c93a0] hover:text-white transition-colors" />;
      case 'instagram':
      default:
        return <Instagram className="w-5 h-5 text-[#8c93a0] hover:text-white transition-colors" />;
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
    <footer id="contact" className={`relative pt-12 md:pt-16 pb-8 px-8 md:px-16 lg:px-24 ${backgroundColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Grid lowered closer to the line */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 mb-6 md:mb-8">
          
          {/* Left Column: Brand & Details */}
          <div className="flex flex-col items-start max-w-xl">
            {/* White Monogram Logo */}
            <div 
              className="mb-8 md:mb-10 cursor-pointer" 
              onClick={() => handleNavClick({ label: 'Home', href: '#' })}
            >
              <img 
                src={logo} 
                alt="REX Logo" 
                className="h-12 md:h-14 brightness-0 invert object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Brand Title: Tall Condensed Bebas Neue with smaller size and squished kerning */}
            <h2 
              className="text-2xl md:text-3xl font-normal uppercase tracking-[-0.04em] leading-none mb-6 text-[#b4b9c2]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {brandName}
            </h2>

            {/* Contact Details with exact underline styling & slate-gray hue matching attached screenshot */}
            <div className="flex flex-col items-start space-y-3.5">
              {/* Phone Number */}
              <a 
                href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`} 
                className="text-[#5e6674] hover:text-[#9ea5b3] text-[15px] md:text-base font-sans underline underline-offset-[5px] decoration-[#454c5a] hover:decoration-[#858c9a] transition-all"
              >
                {phoneNumber}
              </a>

              {/* Email */}
              <a 
                href={`mailto:${email}`} 
                className="text-[#5e6674] hover:text-[#9ea5b3] text-[15px] md:text-base font-sans underline underline-offset-[5px] decoration-[#454c5a] hover:decoration-[#858c9a] transition-all"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Right Column: Navigation (Right Aligned matching attached reference) */}
          <div className="w-full md:w-auto flex flex-col md:items-end text-left md:text-right">
            {/* Section Header: Title Case "Navigation" in soft muted off-white/gray */}
            <h4 className="text-[15px] md:text-base font-normal text-[#8c93a0] mb-4 md:mb-5">
              {navTitle}
            </h4>

            {/* Nav Links: Title Case, right-aligned, muted grey, underlined */}
            <ul className="space-y-3 flex flex-col md:items-end">
              {navItems.map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => handleNavClick(item)}
                    className="text-[#5e6674] hover:text-[#9ea5b3] text-[14px] md:text-[15px] font-sans font-normal underline underline-offset-[5px] decoration-[#454c5a] hover:decoration-[#858c9a] transition-all cursor-pointer text-left md:text-right block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full-width Crisp White/Silver Divider Line */}
        <div className="w-full border-t border-white/60 mb-6 md:mb-7" />

        {/* Bottom Bar: Copyright on Left, Social Logos on Right */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#555c69] text-xs">
            {copyright}
          </p>

          {/* Social Icons on Right */}
          <div className="flex items-center gap-5">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:opacity-100 transition-opacity opacity-75"
                aria-label={social.icon}
              >
                {getIcon(social.icon)}
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
        { label: "About", href: "#about", isPage: true, page: "about" },
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
        { name: 'href', type: 'string' },
      ],
      defaultValue: [
        { icon: "instagram", href: "https://www.instagram.com/rex.soccer" },
        { icon: "facebook", href: "https://www.facebook.com/profile.php?id=61578792965551" }
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
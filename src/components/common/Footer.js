'use client';

import React from 'react';
import { Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { text: 'About Me', href: '#about' },
    { text: 'My Works', href: '#works' },
    // { text: 'Reviews', href: '#reviews' },
  ];

  const additionalLinks = [
    // { text: 'Blogs', href: '#blogs' },
    { text: 'Experience', href: '#experience' },
    { text: 'Contact', href: '#contact' },
    // { text: 'Licensing', href: '#licensing' },
  ];

  const socialIcons = [
    { icon: <Linkedin size={20} />, alt: 'LinkedIn', href: 'https://www.linkedin.com/in/yashwanth-r-99b402135' },
    { icon: <Facebook size={20} />, alt: 'Facebook', href: 'https://www.facebook.com/yeshwanth.rock1?mibextid=ZbWKwL' },
    { icon: <Instagram size={20} />, alt: 'Instagram', href: 'https://www.instagram.com/_yashwanth_royal/' },
  ];

  return (
    <footer className="w-full bg-[#0e1117] text-gray-300" id="contact" >
      <div className="max-w-[1336px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === Top: Brand + Get in Touch === */}
        <div className="flex flex-col lg:flex-row justify-between items-start pt-16 pb-12 gap-12">
          
          {/* === Brand Section === */}
          <div className="flex flex-col items-start max-w-[220px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xl font-bold shadow-md">
                YR
              </div>
              <div className="flex flex-col">
                <p className="text-white text-sm font-medium">Yashwanth</p>
                <p className="text-gray-400 text-xs">FullStack Developer</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Passionate about crafting seamless digital experiences that blend creativity and code. 
              Let's build something amazing together.
            </p>

            {/* === Email CTA === */}
            <a
              href="mailto:yashwanthraghu1997@gmail.com"
              className="flex items-center gap-2 text-[#075fe4] hover:underline transition text-sm"
            >
              <Mail size={18} /> yashwanthraghu1997@gmail.com
            </a>
            <p className='text-[#075fe4] text-sm'>(+91-) 7569592006</p>
          </div>

          {/* === Navigation Links === */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 lg:gap-[120px]">
            {/* Column 1 */}
            <ul className="flex flex-col gap-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 text-base"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="flex flex-col gap-3">
              {additionalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 text-base"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === Social Icons === */}
          <div className="flex flex-row md:flex-col items-center gap-3">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
                className="flex items-center justify-center w-10 h-10 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:bg-[#075fe4] hover:border-[#075fe4] transition-all duration-200"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Footer Bottom === */}
      <div className="w-full border-t border-gray-700">
        <div className="max-w-[1336px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between items-center py-5 gap-3 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Yashwanth. All Rights Reserved.</p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

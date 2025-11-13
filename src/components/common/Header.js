'use client';

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Portfolio', href: '#portfolio' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50">
      {/* Thin gradient line on top */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      <div className="max-w-[1372px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-5">
          {/* === Logo === */}
            <div className="flex items-center gap-3">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xl font-bold shadow-md">
                YR
                </div>
            </div>

          {/* === Mobile Menu Button === */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* === Navigation Menu === */}
          <nav
            className={`${menuOpen ? 'block' : 'hidden'} 
              absolute lg:relative top-full left-0 w-full lg:w-auto
              bg-gray-900 lg:bg-transparent border-t border-gray-700 lg:border-0
              lg:flex lg:items-center lg:space-x-8
              transition-all duration-200 ease-in-out`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-7 p-4 lg:p-0">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-lg text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

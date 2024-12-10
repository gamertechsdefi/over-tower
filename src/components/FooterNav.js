import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

import overLogo from "/public/images/overlogo.png";

const FooterNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Play",
      active: false
    },
    {
      name: "Tournaments",
      active: false
    },
    {
      name: "Profile",
      active: false
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden w-full flex items-center justify-between p-4 text-neutral-900"
        >
          <div className="relative w-8 h-8">
            <Image
              src={overLogo}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Items */}
        <nav className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex 
          flex-col 
          md:flex-row 
          justify-around 
          items-center
          bg-white
          border-t
          md:border-t-0
          `}
        >
          {/* Desktop Logo */}
          <div className="hidden md:block relative w-10 h-10">
            <Image
              src={overLogo}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Nav Items */}
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`
                w-full 
                md:w-auto 
                px-4 
                py-3 
                font-medium 
                text-center 
                transition-colors
                border-b
                md:border-b-0
                ${item.active 
                  ? 'text-neutral-800 bg-gray-50 md:bg-transparent' 
                  : 'text-neutral-500 hover:text-neutral-600 hover:bg-gray-50 md:hover:bg-transparent'
                }
              `}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default FooterNav;
import React, { useState } from 'react';
import { ActiveModal } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  openModal: (modal: ActiveModal) => void;
  onCopyEmail: () => void;
  onNavigate?: (path: string) => void;
  activeItem?: 'full-stack' | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  openModal,
  onCopyEmail,
  onNavigate,
  activeItem = null,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (modal: ActiveModal) => {
    openModal(modal);
    setMobileMenuOpen(false);
  };

  const handlePageClick = (path: string) => {
    onNavigate?.(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full px-6 sm:px-10 md:px-14 py-6 sm:py-8  flex items-center justify-between z-30 relative">
      {/* Brand Logo: Aman with interlocking rings */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group cursor-pointer flex flex-col items-start select-none"
        title="Aman — Full Stack Developer & Designer"
      >
        {/* Interlocking Rings above the logo */}
        <div className="pl-1 mb-0.5 transition-transform duration-300 group-hover:scale-110 origin-left">
          <svg 
            width="24" 
            height="13" 
            viewBox="0 0 26 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Two interlocking golden rings */}
            <circle cx="8" cy="7" r="5.5" stroke="#D97706" strokeWidth="1.6" />
            <circle cx="17" cy="7" r="5.5" stroke="#D97706" strokeWidth="1.6" />
          </svg>
        </div>

        {/* Wordmark "Aman." */}
        <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] font-black tracking-tight text-neutral-950 leading-none">
          Aman<span className="text-[#EF4444]">.</span>
        </h1>
      </div>

      {/* Navigation and Actions */}
      <nav className="flex items-center gap-4 sm:gap-7 md:gap-9 text-neutral-800 font-normal text-sm sm:text-base">
        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6 sm:gap-8 md:gap-10">
          <button
            onClick={() => handlePageClick('/full-stack')}
            className={`transition-colors focus:outline-none cursor-pointer ${activeItem === 'full-stack' ? 'font-bold text-neutral-950' : 'hover:text-black'}`}
          >
            Full stack
          </button>
          <button
            onClick={() => handleNavClick('design')}
            className="hover:text-black transition-colors focus:outline-none cursor-pointer"
          >
            Design
          </button>
          
          <button
            onClick={() => handleNavClick('photos')}
            className="hover:text-black transition-colors focus:outline-none cursor-pointer"
          >
            Photos
          </button>
          
          <button
            onClick={() => handleNavClick('lookbook')}
            className="hover:text-black transition-colors focus:outline-none cursor-pointer"
          >
            Look book
          </button>
        </div>

        {/* Contact Email CTA Button */}
        <button
          onClick={onCopyEmail}
          className="hidden xs:inline-flex bg-neutral-950 text-white hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-md cursor-pointer tracking-normal shadow-sm"
          title="Click to copy email"
        >
          hello@aman.fr
        </button>

        {/* Mobile menu toggle for small screens */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 text-neutral-800 hover:text-black"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200 py-4 px-6 flex flex-col gap-3 shadow-lg z-50">
          <button
            onClick={() => handlePageClick('/full-stack')}
            className={`text-left py-2 hover:text-black ${activeItem === 'full-stack' ? 'font-bold text-neutral-950' : 'font-medium text-neutral-800'}`}
          >
            Full stack
          </button>
          <button
            onClick={() => handleNavClick('design')}
            className="text-left py-2 font-medium text-neutral-800 hover:text-black"
          >
            Design
          </button>
          <button
            onClick={() => handleNavClick('photos')}
            className="text-left py-2 font-medium text-neutral-800 hover:text-black"
          >
            Photos
          </button>
          <button
            onClick={() => handleNavClick('lookbook')}
            className="text-left py-2 font-medium text-neutral-800 hover:text-black"
          >
            Look book
          </button>
          <button
            onClick={() => {
              onCopyEmail();
              setMobileMenuOpen(false);
            }}
            className="w-full text-center bg-black text-white py-2.5 rounded-md text-sm font-medium mt-2"
          >
            hello@aman.fr
          </button>
        </div>
      )}
    </header>
  );
};

import React from 'react';

interface ClientLogosProps {
  onSelectClient?: (clientName: string) => void;
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ onSelectClient }) => {
  return (
    <div className="flex flex-wrap items-center justify-start lg:justify-end gap-6 sm:gap-8 md:gap-10 text-neutral-900 select-none">
      {/* Audible */}
      <div 
        onClick={() => onSelectClient?.('Audible')}
        className="group flex items-center gap-1.5 cursor-pointer opacity-85 hover:opacity-100 transition-opacity"
        title="Audible (Amazon) — Creative Audio Experiences"
      >
        <span className="font-bold text-lg tracking-tight lowercase">audible</span>
        {/* Audible 3-arc soundwave in orange */}
        <svg 
          className="w-4 h-4 text-[#F59E0B] transition-transform duration-300 group-hover:scale-110" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round"
        >
          <path d="M4 18a9 9 0 0 1 0-12" />
          <path d="M8 15a5 5 0 0 1 0-6" strokeWidth="2.8" />
          <path d="M12 13a1.5 1.5 0 0 1 0-2" strokeWidth="3.2" />
        </svg>
      </div>

      {/* Tissot Swiss Watches */}
      <div 
        onClick={() => onSelectClient?.('Tissot')}
        className="group flex items-center gap-1.5 cursor-pointer opacity-85 hover:opacity-100 transition-opacity"
        title="Tissot — Swiss Watches Since 1853"
      >
        <div className="bg-black text-white px-1 py-0.5 rounded-[2px] font-black text-[10px] tracking-tighter flex items-center leading-none">
          <span>T</span>
          <span className="text-red-500 font-bold ml-0.5">+</span>
        </div>
        <span className="font-black text-base sm:text-lg tracking-wider uppercase">TISSOT</span>
      </div>

      {/* Olympia Productions */}
      <div 
        onClick={() => onSelectClient?.('Olympia Productions')}
        className="group flex items-center gap-2 cursor-pointer opacity-85 hover:opacity-100 transition-opacity"
        title="Olympia Productions — Live Shows & Culture"
      >
        <div className="w-4 h-4 rounded-full border-[2.2px] border-black flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-black rounded-full" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-black text-xs tracking-wider uppercase">OLYMPIA</span>
          <span className="font-semibold text-[8px] tracking-[0.2em] text-neutral-600 uppercase">PRODUCTIONS</span>
        </div>
      </div>

      {/* Veuve Clicquot */}
      <div 
        onClick={() => onSelectClient?.('Veuve Clicquot')}
        className="group cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
        title="Veuve Clicquot — Maison de Champagne Fondée en 1772"
      >
        <span className="font-medium italic text-base sm:text-lg tracking-wide text-neutral-900">
          Veuve Clicquot
        </span>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ActiveModal } from '../types';

interface FloatingDockProps {
  onOpenTechStack: (toolName: string) => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ onOpenTechStack }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const dockItems = [
    {
      id: 'copilot',
      name: 'GitHub Copilot / AI Tooling',
      icon: (
        // Copilot / Multi-color AI ribbon
        <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-sm" fill="none">
          <defs>
            <linearGradient id="copilotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="35%" stopColor="#8b5cf6" />
              <stop offset="70%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <path
            d="M6 5a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5zm7.5 7a2 2 0 0 1 2-2H18a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2V12zm-7.5 2a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V14z"
            fill="url(#copilotGrad)"
          />
        </svg>
      ),
    },
    {
      id: 'edge',
      name: 'Microsoft Edge / Chromium',
      icon: (
        // Microsoft Edge swirling wave
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <defs>
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0078D7" />
              <stop offset="50%" stopColor="#00C853" />
              <stop offset="100%" stopColor="#00B0FF" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="9.5" fill="url(#edgeGrad)" />
          <path
            d="M7 11c1-3 4-5 7-4s4 4 2 7-5 3-7 1c-1-1-1.5-2.5-2-4z"
            fill="#ffffff"
            opacity="0.85"
          />
        </svg>
      ),
    },
    {
      id: 'arc',
      name: 'Arc Browser / The Browser Company',
      icon: (
        // Arc circular ring
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="5" fill="#38BDF8" />
        </svg>
      ),
    },
    {
      id: 'chrome',
      name: 'Google Chrome / DevTools',
      icon: (
        // Google Chrome 4-color pinwheel
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <circle cx="12" cy="12" r="9" fill="#EA4335" />
          <path d="M12 3a9 9 0 0 1 7.8 4.5H12v9a4.5 4.5 0 0 1-4.5-4.5z" fill="#FBBC05" />
          <path d="M3.2 14.5A9 9 0 0 1 12 3v9H7.5A4.5 4.5 0 0 1 3.2 14.5z" fill="#34A853" />
          <circle cx="12" cy="12" r="4.2" fill="#ffffff" />
          <circle cx="12" cy="12" r="3.2" fill="#1A73E8" />
        </svg>
      ),
    },
    {
      id: 'cursor',
      name: 'Cursor AI & Raycast',
      icon: (
        // Developer Tooling Icon (Cursor / Terminal)
        <div className="w-5 h-5 rounded-md bg-linear-to-br from-amber-400 via-orange-500 to-rose-600 flex items-center justify-center p-0.5 shadow-sm">
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-white" fill="currentColor">
            <path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm2 2v2h2V5H4zm3 0v2h5V5H7zm-3 4v2h8V9H4z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <aside aria-label="Tooling Dock" className="fixed bottom-5 sm:bottom-6 right-5 sm:right-8 z-40">
      <div className="relative">
        {/* Floating Capsule Container */}
        <div className="bg-[#1e2025]/95 backdrop-blur-md text-white border border-white/10 rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 shadow-2xl flex items-center gap-2.5 sm:gap-3 transition-all duration-300 hover:border-white/20 hover:shadow-black/30">
          {dockItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onOpenTechStack(item.name)}
              onMouseEnter={() => setActiveTooltip(item.name)}
              onMouseLeave={() => setActiveTooltip(null)}
              className="relative p-1 rounded-lg hover:bg-white/10 transition-transform duration-200 hover:scale-115 active:scale-95 cursor-pointer focus:outline-none flex items-center justify-center"
              aria-label={item.name}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Dynamic Tooltip */}
        {activeTooltip && (
          <div className="absolute bottom-full right-0 mb-2.5 pointer-events-none transition-all duration-200 animate-in fade-in slide-in-from-bottom-1">
            <div className="bg-neutral-900 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-lg border border-neutral-700 whitespace-nowrap">
              {activeTooltip}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

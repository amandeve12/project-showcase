import React from 'react';
import { ActiveModal } from '../types';
import { ClientLogos } from './ClientLogos';
import Extra from './Extra';

interface HeroProps {
  openModal: (modal: ActiveModal) => void;
  onSelectClient?: (clientName: string) => void;
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  openModal,
  onSelectClient,
  onNavigate,
}) => {
  return (
    <section className="relative isolate w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14  pb-32 flex flex-col justify-center overflow-hidden">
      {/* Giant Main Display Typography */}
      <div className="relative z-10 flex flex-col items-center select-none justify-end ">
        {/* Full Stack - Solid Heavy Black */}
        <h2 className="headline-line2 glass-text relative z-20 text-[3.25rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] font-black tracking-[0.04em] text-neutral-950 leading-40 uppercase sm:normal-case">
          Full <span className="headline-line1 headline-st-glass">St</span>ack
        </h2>

        <img
          src="/assets/profile.png"
          alt=""
          aria-hidden="true"
          className="image-fade-bottom pointer-events-none absolute left-1/2 z-10 w-[min(64vw,14rem)] -translate-x-1/2 select-none sm:top-6 sm:w-[min(50vw,17rem)] md:w-[min(36vw,20rem)] lg:w-[min(27vw,22rem)]"
        />

        {/* Developer - Hollow Outline Black */}
        <h2 className="relative z-0 text-[3.25rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] font-black tracking-[0.04em] headline-line1 leading-[0.88] uppercase sm:normal-case select-none ">
          Developer
        </h2>
      </div>
{/* <Extra/> */}
      {/* Action Buttons: Centered */}
      <div className="relative z-10 w-full mt-32 flex flex-col sm:flex-row items-center justify-center h-full gap-4 sm:gap-5">
        {/* Button 1: Solid Black */}
        <button
          onClick={() => onNavigate?.('/full-stack')}
          className="w-full sm:w-auto bg-neutral-950 text-white hover:px-8 sm:hover:px-10 hover:bg-neutral-800 active:scale-[0.98] transition-[padding,background-color] duration-700 ease-out text-xs sm:text-sm font-normal px-5 sm:px-6 py-2.5 sm:py-3 rounded-md cursor-pointer shadow-sm text-center"
        >
          Do you need a full stack developer?
        </button>

        {/* Button 2: White with Crisp Black Border */}
        <button
          onClick={() => openModal('inquiry-dev')}
          className="w-full sm:w-auto bg-white text-neutral-950 border border-neutral-950 hover:px-8 sm:hover:px-10 hover:bg-neutral-50 active:scale-[0.98] transition-[padding,background-color] duration-700 ease-out text-xs sm:text-sm font-normal px-5 sm:px-6 py-2.5 sm:py-3 rounded-md cursor-pointer text-center"
        >
          Do you need a developer?
        </button>
      </div>
    </section>
  );
};

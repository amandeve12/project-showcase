/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ActiveModal } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FloatingDock } from './components/FloatingDock';
import { Toast } from './components/Toast';
import { FullStackPage } from './components/FullStackPage';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (nextPath: string) => {
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@aman.fr');
    showToast('Copied hello@aman.fr to clipboard');
  };

  const handleSelectClient = (clientName: string) => {
    setSelectedClient(clientName);
    setActiveModal('design');
  };

  const handleOpenTechStack = (toolName: string) => {
    setActiveTool(toolName);
    setActiveModal('techstack');
  };

  return (
    path === '/work' ? (
      <div className="min-h-screen w-full bg-[#f2f1ec] text-neutral-950">
        <Navbar
          openModal={setActiveModal}
          onCopyEmail={handleCopyEmail}
          onNavigate={navigate}
          activeItem="work"
        />
        <FullStackPage />
      </div>
    ) : (
    <div className="min-h-screen w-full bg-white text-neutral-950 flex flex-col justify-between selection:bg-black selection:text-white relative overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar
        openModal={setActiveModal}
        onCopyEmail={handleCopyEmail}
        onNavigate={navigate}
      />

      {/* Hero Section */}
      {/* <main className="flex-1 flex flex-col justify-center"> */}
      <main className="">
        <Hero
          openModal={setActiveModal}
          onSelectClient={handleSelectClient}
          onNavigate={navigate}
        />
      </main>

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
    )
  );
}

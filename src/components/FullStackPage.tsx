import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './FullStackPage.css';
import { MarqueeDemo } from './MarqueeDemo';
import { ProjectShowcase } from './ProjectShowcase';

export const FullStackPage: React.FC = () => {
  return (
    <main className="template-page min-h-screen overflow-hidden bg-[#f2f1ec] text-[#11110f]">
      <section className="template-intro mx-auto max-w-[80%] px-6 pb-14 text-center sm:pb-20 sm:pt-16">
        <p className="template-kicker">Full stack development</p>
        <h1>Work with a point of view
<span>.</span></h1>
        <div className="tech-stack" aria-label="Technology stack">
          {/* <p className="tech-stack-label">Tools I build with</p> */}
  <MarqueeDemo/>
        </div>
      </section>

      <ProjectShowcase />

      <footer className="template-footer mx-auto flex max-w-360 flex-col gap-5 px-6 pb-8 sm:flex-row sm:items-end sm:justify-between sm:px-10">
        <p>Built with curiosity, clarity, and a little edge.</p>
        <a href="mailto:hello@aman.fr">hello@aman.fr <ArrowUpRight aria-hidden="true" size={14} /></a>
      </footer>
    </main>
  );
};

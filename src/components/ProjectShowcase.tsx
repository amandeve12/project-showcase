import { ArrowUpRight } from 'lucide-react';
import './ProjectShowcase.css';
import reactNativeVideo from '../assets/chrome_ba8NNL2gcS.mp4';
import kindlesuiteImage from '../assets/kindlesuite.png';

type ProjectPreviewProps = {
  name: string;
  theme: string;
  media?: boolean;
  image?: string;
};

const ProjectPreview = ({ name, theme, media, image }: ProjectPreviewProps) => (
  <div className={`project-preview ${theme}`} aria-label={`${name} project preview`}>
    <div className="project-browser">
      <div className="project-browser-bar">
        <span className="project-brand">{name}</span>
        <span className="project-browser-dots"><i /><i /><i /></span>
      </div>
      <div className="project-browser-body">
        {/* <div className="project-preview-nav"><span>{type}</span><span>Menu +</span></div> */}
        {image ? (
          <img className="project-preview-image" src={image} alt={`${name} project interface`} />
        ) : media ? (
          <div className="project-media-stage">
            <video className="project-media-video" autoPlay muted loop playsInline src={reactNativeVideo} />
          </div>
        ) : (
          <>
            <div className="project-preview-heading" aria-hidden="true">{name}</div>
            <div className="project-preview-line" />
            <div className="project-preview-grid"><span /><span /><span /></div>
          </>
        )}
        {/* <div className="project-preview-badge">Explore <ArrowUpRight size={12} /></div> */}
      </div>
    </div>
  </div>
);

const ProjectDetails = ({
  category,
  title,
  description,
  projectName,
}: {
  category: string;
  title: string;
  description: string;
  projectName: string;
}) => (
  <div className="project-copy">
    <p className="project-category">{category}</p>
    <h3>{title}</h3>
    <p className="project-description">{description}</p>
    <a href={`mailto:amandeve19@gmail.com?subject=${encodeURIComponent(projectName)}`}>
      Discuss a similar project <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  </div>
);

export const ProjectShowcase = () => (
  <section className="project-showcase" aria-labelledby="selected-projects-title">
    <div className="project-showcase-heading">
      <p className="template-kicker">Selected projects</p>
      {/* <h2 id="selected-projects-title">Work with a point of view<span>.</span></h2> */}
    </div>
    <div className="project-list">
      <article className="project-row">
        <ProjectPreview name="Survey bite" theme="project-noire" media />
    <ProjectDetails
category="Full-stack web development"
title="built for smarter survey experiences."
description="A full-stack survey platform built with Next.js, Node.js, and TypeScript, using React Query for efficient server-state management and a fast, seamless user experience."
projectName="SurveyByte"
/>

      </article>

      <article className="project-row">
        <ProjectPreview name="KindleSuite" theme="project-field" image={kindlesuiteImage} />
        <ProjectDetails
          category="MERN stack development"
          title="A quieter way to make and keep notes."
          description="KindleSuite is a minimalist notes-making web app built with MongoDB, Express, React, and Node.js for focused writing and effortless organization."
          projectName="KindleSuite"
        />
      </article>

      <article className="project-row">
        <ProjectPreview name="Northstar" theme="project-northstar" />
        <ProjectDetails
          category="Full stack development"
          title="A reliable foundation for your next big idea."
          description="Modern React applications with thoughtful architecture, useful motion, and the flexibility to grow with your business."
          projectName="Northstar"
        />
      </article>
    </div>
  </section>
);
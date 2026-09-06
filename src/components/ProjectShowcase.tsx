import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ProjectShowcase.css';
import reactNativeVideo from '../assets/chrome_ba8NNL2gcS.mp4';
import kindlesuiteImage from '../assets/kindlesuite.png';
import auraCommerceVideo from '../assets/aura-commerce/8fba2c9f05ac72324da01a27b0a5df9c_0_75800000.mp4';
import craftRoadImageOne from '../assets/craft-road/chrome_cfUQj4kHBV.png';
import craftRoadImageTwo from '../assets/craft-road/chrome_EzUI1lRhHe.png';
import craftRoadImageThree from '../assets/craft-road/chrome_TfJrg7B4YA.png';
import craftRoadImageFour from '../assets/craft-road/chrome_cfUQj4kHBV.png';

type ProjectPreviewProps = {
  name: string;
  theme: string;
  media?: boolean;
  image?: string;
  video?: string;
  images?: string[];
};

const ProjectPreview = ({ name, theme, media, image, video, images }: ProjectPreviewProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % images.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [images]);

  const currentImage = images?.[activeImageIndex] ?? image;

  return (
    <div className={`project-preview ${theme}`} aria-label={`${name} project preview`}>
      <div className="project-browser">
        <div className="project-browser-bar">
          <span className="project-brand">{name}</span>
          <span className="project-browser-dots"><i /><i /><i /></span>
        </div>
        <div className="project-browser-body">
          {/* <div className="project-preview-nav"><span>{type}</span><span>Menu +</span></div> */}
          {video ? (
            <div className="project-media-stage">
              <video className="project-media-video" autoPlay muted loop playsInline src={video} />
            </div>
          ) : currentImage ? (
            <img className="project-preview-image" src={currentImage} alt={`${name} project interface`} />
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
};

const ProjectDetails = ({
  category,
  title,
  description,
  projectName,
  projectUrl,
}: {
  category: string;
  title: string;
  description: string;
  projectName: string;
  projectUrl?: string;
}) => (
  <div className="project-copy">
    <h3>{title}</h3>
    <p className="project-description">{description}</p>
    {projectUrl ? (
      <a href={projectUrl} target="_blank" rel="noreferrer">
        Project link <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    ) : (
      <a href={`mailto:amandeve19@gmail.com?subject=${encodeURIComponent(projectName)}`}>
        Discuss a similar project <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    )}
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
          category="https://in.surveybyte.com/?"
          title="built for smarter survey experiences."
          description="A full-stack survey platform built with Next.js, Node.js, and TypeScript, using React Query for efficient server-state management and a fast, seamless user experience."
          projectName="SurveyByte"
          projectUrl="https://in.surveybyte.com/?"
        />
      </article>

      <article className="project-row">
        <ProjectPreview name="KindleSuite" theme="project-field" image={kindlesuiteImage} />
        <ProjectDetails
          category="https://kindlesuite.app/"
          title="A quieter way to make and keep notes."
          description="KindleSuite is a minimalist notes-making web app built with MongoDB, Express, React, and Node.js for focused writing and effortless organization."
          projectName="KindleSuite"
          projectUrl="https://kindlesuite.app/"
        />
      </article>

      <article className="project-row">
        <ProjectPreview name="Aura Commerce" theme="project-northstar" video={auraCommerceVideo} />
        <ProjectDetails
          category="https://aura-commerce-swart.vercel.app/"
          title="A premium storefront with calm motion and clarity."
          description="Aura Commerce is a clean ecommerce concept focused on boutique product storytelling, polished motion, and a refined shopping experience that feels effortless on every screen."
          projectName="Aura Commerce"
          projectUrl="https://aura-commerce-swart.vercel.app/"
        />
      </article>

      <article className="project-row">
        <ProjectPreview
          name="CraftRoad"
          theme="project-noire"
          images={[
            craftRoadImageOne,
            craftRoadImageTwo,
            craftRoadImageThree,
            craftRoadImageFour,
          ]}
        />
        <ProjectDetails
          category="Full-stack marketplace"
          title="A creator-first digital storefront built for momentum."
          description="CraftRoad is a full-stack digital marketplace inspired by Gumroad, designed for creators to sell digital products, courses, and files with a smooth, modern buying experience."
          projectName="CraftRoad"
        />
      </article>
    </div>
  </section>
);
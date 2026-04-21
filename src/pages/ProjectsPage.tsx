import React, { useState } from "react";
import "./PageStyles.scss";
import "../styles/ProjectsPage.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectStatus from "../components/ProjectStatus";
import ChartNestHome from "../assets/images/ChartNestHome.png";
import ChartNestHome2 from "../assets/images/ChartNestHome2.png";
import ChartNestDashboard from "../assets/images/ChartNestDashboard.png";
import ChartNestFeatures from "../assets/images/ChartNestFeatures.png";
import ChartNestPricing from "../assets/images/ChartNestPricing.png";
import ChartNestFAQ from "../assets/images/ChartNestFAQ.png";
import ChartNestJournal from "../assets/images/ChartNestJournal.png";
import PathForgeHome from "../assets/images/PathforgeHome.png";
import PathForgeAll from "../assets/images/PathforgeAll.png";
import PathForgeRoadmap from "../assets/images/PathforgeRoadmap.png";
import PathForgeRoadmap2 from "../assets/images/PathforgeRoadmap2.png";
import PathForgeRoadmap3 from "../assets/images/PathforgeRoadmap3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const pathForgeImages = [
  { src: PathForgeHome, alt: "PathForge Home Page" },
  { src: PathForgeAll, alt: "PathForge All Roadmaps Page" },
  { src: PathForgeRoadmap, alt: "PathForge Roadmap Page" },
  { src: PathForgeRoadmap2, alt: "PathForge Roadmap Page 2" },
  { src: PathForgeRoadmap3, alt: "PathForge Roadmap Page 3" },
];

const chartNestImages = [
  { src: ChartNestHome, alt: "ChartNest Home Page" },
  { src: ChartNestHome2, alt: "ChartNest Home Page 2" },
  { src: ChartNestDashboard, alt: "ChartNest Dashboard" },
  { src: ChartNestJournal, alt: "ChartNest Journal" },
  { src: ChartNestFeatures, alt: "ChartNest Features Page" },
  { src: ChartNestPricing, alt: "ChartNest Pricing Page" },
  { src: ChartNestFAQ, alt: "ChartNest FAQ Page" },
];

const ProjectsPage: React.FC = () => {
  const [lightbox, setLightbox] = useState<{
    images: { src: string; alt: string }[];
    index: number;
  } | null>(null);

  return (
    <div className="page projects-page">
      <div className="container">
        <div className="page-header">
          <h1>Projects & Demos</h1>
          <p>Explore my portfolio of projects and live demos</p>
        </div>
        <div className="page-content">
          <div className="projects-grid">
            {/* PathForge.com*/}
            <div className="project-card">
              <div className="project-header">
                <div className="project-title">
                  <h2>PathForge.com</h2>
                  <ProjectStatus status="in-progress" />
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/DEV-AB51"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://pathforge-devdotdev.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="project-image">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                >
                  {pathForgeImages.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        onClick={() =>
                          setLightbox({
                            images: pathForgeImages,
                            index: i,
                          })
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="project-description">
                <h3>About this project</h3>
                <p>
                  PathForge is a career roadmap research platform where anyone,
                  not just techies, can search any job title and get a
                  structured, step-by-step roadmap into that career. Complete
                  with free resources, skill requirements, certifications and
                  salary expectations, it’s designed to help people make
                  informed decisions about their career paths and upskilling
                  journeys.
                </p>
                <p>
                  <strong>Technologies used:</strong> JavaScript, Next.js,
                  Tailwind CSS, Supabase, PostgreSQL, Claude API, Vercel
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-header">
                <div className="project-title">
                  <h2>Betslip Comparison Tool</h2>
                  <ProjectStatus status="in-progress" />
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/DEV-AB51"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://project2-demo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="project-image">
                <img src="/assets/project2.jpg" alt="SmartBet Screenshot" />
              </div>
              <div className="project-description">
                <h3>About this project</h3>
                <p>
                  A smart mobile app that helps users make better betting
                  decisions by comparing odds across major sportsbooks.
                </p>
                <p>
                  <strong>Technologies used:</strong> React Native, TypeScript,
                  Redux, Puppeteer, Redis, Stripe, PostgreSQL, Expo
                </p>
              </div>
            </div>

            {/* Project 3 - ChartNest */}
            <div className="project-card">
              <div className="project-header">
                <div className="project-title">
                  <h2>ChartNest.com</h2>
                  <ProjectStatus status="in-progress" />
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/DEV-AB51"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://project3-demo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="project-image">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                >
                  {chartNestImages.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        onClick={() =>
                          setLightbox({
                            images: chartNestImages,
                            index: i,
                          })
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="project-description">
                <h3>About this project</h3>
                <p>
                  ChartNest is a trade journaling and analytics platform built
                  for traders who want powerful insights without the premium
                  price tag. Inspired by tools like TradeZella, it allows users
                  to manually log trades, track performance over time, and
                  visualize metrics such as win rate, risk-to-reward, and
                  profitability by setup.
                </p>
                <p>
                  <strong>Technologies used:</strong> TypeScript, Next.js,
                  Supabase, PostgreSQL, Stripe Subscription Modeling, Vercel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) =>
                prev
                  ? {
                      ...prev,
                      index:
                        (prev.index - 1 + prev.images.length) %
                        prev.images.length,
                    }
                  : null
              );
            }}
          >
            &#8592;
          </button>

          <img
            src={lightbox.images[lightbox.index].src}
            alt={lightbox.images[lightbox.index].alt}
          />

          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) =>
                prev
                  ? {
                      ...prev,
                      index: (prev.index + 1) % prev.images.length,
                    }
                  : null
              );
            }}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;

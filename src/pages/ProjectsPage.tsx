import React, { useState } from "react";
import "./PageStyles.scss";
import "../styles/ProjectsPage.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ChartNestHome from "../assets/images/ChartNestHome.png";
import ChartNestHome2 from "../assets/images/ChartNestHome2.png";
import ChartNestDashboard from "../assets/images/ChartNestDashboard.png";
import ChartNestJournal from "../assets/images/ChartNestJournal.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const chartNestImages = [
  { src: ChartNestHome, alt: "ChartNest Home Page" },
  { src: ChartNestHome2, alt: "ChartNest Home Page 2" },
  { src: ChartNestDashboard, alt: "ChartNest Dashboard" },
  { src: ChartNestJournal, alt: "ChartNest Journal" },
];

const ProjectsPage: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="page projects-page">
      <div className="container">
        <div className="page-header">
          <h1>Projects & Demos</h1>
          <p>Explore my portfolio of projects and live demos</p>
        </div>
        <div className="page-content">
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-header">
                <h2>Appointment Booking & CRM Management System</h2>
                <div className="project-links">
                  <a
                    href="https://github.com/username/project1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://project1-demo.com"
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
                <img src="/assets/project1.jpg" alt="Project 1 Screenshot" />
              </div>
              <div className="project-description">
                <h3>About this project</h3>
                <p>
                  A versatile SaaS solution built to streamline appointment
                  scheduling and client management for businesses such as
                  doctor's offices, dentists, salons, mechanics, and other
                  service-based industries.
                </p>
                <p>
                  <strong>Technologies used:</strong> React, Node.js, MongoDB,
                  Express
                </p>
              </div>
              <div className="project-video">
                <h3>Video Demo</h3>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_1"
                    title="Project 1 Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-header">
                <h2>Betslip Comparison Tool</h2>
                <div className="project-links">
                  <a
                    href="https://github.com/yourusername/project2"
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
                <img src="/assets/project2.jpg" alt="Project 2 Screenshot" />
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
              <div className="project-video">
                <h3>Video Demo</h3>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_2"
                    title="Project 2 Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Project 3 - ChartNest */}
            <div className="project-card">
              <div className="project-header">
                <h2>ChartNest (FreeTradeZella Clone)</h2>
                <div className="project-links">
                  <a
                    href="https://github.com/yourusername/project3"
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
                        onClick={() => setLightboxIndex(i)}
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
                  <strong>Technologies used:</strong> Next.js, Supabase, SQL,
                  Stripe for Subscription Modeling
                </p>
              </div>
              <div className="project-video">
                <h3>Video Demo</h3>
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_3"
                    title="Project 3 Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + chartNestImages.length) %
                  chartNestImages.length
              );
            }}
          >
            &#8592;
          </button>
          <img
            src={chartNestImages[lightboxIndex].src}
            alt={chartNestImages[lightboxIndex].alt}
          />
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % chartNestImages.length);
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

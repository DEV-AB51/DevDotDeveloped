import React from 'react';
import './PageStyles.scss';
import '../styles/ProjectsPage.scss';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';

const ProjectsPage: React.FC = () => {
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
                  <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="project-link github">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a href="https://project1-demo.com" target="_blank" rel="noopener noreferrer" className="project-link live">
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
                A versatile SaaS solution built to streamline appointment scheduling and client management for businesses such as doctor's offices, dentists, salons, mechanics, and other service-based industries. This platform allows businesses to manage bookings, track client interactions, and improve operational efficiency. Developed as my first full-scale SaaS product using JavaScript, Express.js, Node.js, and MongoDB.
                </p>
                <p>
                  <strong>Technologies used:</strong> React, Node.js, MongoDB, Express
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
                  <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className="project-link github">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer" className="project-link live">
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
                A smart mobile app that helps users make better betting decisions by comparing odds across major sportsbooks. Users can create a dummy betslip by selecting teams, outcomes, and stake amounts. The app then automatically checks odds from multiple betting platforms and returns the best possible payout and sportsbook recommendation.

The goal is to save users time and money by providing fast, accurate odds comparisons — all in one place.
                </p>
                <p>
                  <strong>Technologies used:</strong> React Native, TypeScript, Redux, Puppeteer, Redis, Stripe, PostgreSQL, Expo
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

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-header">
                <h2>ChartNest (FreeTradeZella Clone)</h2>
                <div className="project-links">
                  <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer" className="project-link github">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a href="https://project3-demo.com" target="_blank" rel="noopener noreferrer" className="project-link live">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="project-image">
                <img src="/assets/project3.jpg" alt="Project 3 Screenshot" />
              </div>
              <div className="project-description">
                <h3>About this project</h3>
                <p>
                ChartNest is a trade journaling and analytics platform built for traders who want powerful insights without the premium price tag. Inspired by tools like TradeZella, it allows users to manually log trades, track performance over time, and visualize metrics such as win rate, risk-to-reward, and profitability by setup.

The app is designed with a freemium model — giving users full manual logging capabilities for free, with optional premium features like strategy tagging, advanced analytics, and automated trade import available via subscription.

Built using React, Node.js, MongoDB, and Stripe for subscription management.
                </p>
                <p>
                  <strong>Technologies used:</strong> Node.js, MongoDB, Stripe for Subscription Modeling
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
    </div>
  );
};

export default ProjectsPage; 
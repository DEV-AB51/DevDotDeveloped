import React from "react";
import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaSalesforce,
  FaMicrosoft,
  FaJava,
  FaShieldAlt,
  FaGoogle,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJira,
  SiTypescript,
  SiSpring,
  SiPostgresql,
  SiCisco,
  SiDotnet,
  SiGooglecloud,
} from "react-icons/si";
import "./TechStack.scss";

interface TechItem {
  name: string;
  icon: React.ReactElement;
  color: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "tools"
    | "other"
    | "learning"
    | "cybersecurity"
    | "cloud";
}

const TechStack: React.FC = () => {
  const techItems: TechItem[] = [
    // Frontend
    {
      name: "React",
      icon: <FaReact />,
      color: "#61DAFB",
      category: "frontend",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "#E34F26",
      category: "frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "#1572B6",
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "#F7DF1E",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
      category: "frontend",
    },

    // Backend
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#339933",
      category: "backend",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      color: "var(--icon-dark-color)",
      category: "backend",
    },

    // Database
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#47A248",
      category: "database",
    },
    { name: "SQL", icon: <SiMysql />, color: "#4479A1", category: "database" },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#336791",
      category: "database",
    },
    {
      name: "Database Design",
      icon: <FaDatabase />,
      color: "#FF6B6B",
      category: "database",
    },

    // Tools
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", category: "tools" },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "var(--icon-dark-color)",
      category: "tools",
    },
    { name: "Jira", icon: <SiJira />, color: "#0052CC", category: "tools" },

    // Other
    {
      name: "Microsoft Office",
      icon: <FaMicrosoft />,
      color: "#0078D4",
      category: "other",
    },
    {
      name: "Salesforce",
      icon: <FaSalesforce />,
      color: "#00A1E0",
      category: "other",
    },
    {
      name: "Google IT Support Certified",
      icon: <FaGoogle />,
      color: "#4285F4",
      category: "other",
    },

    // Currently Learning
    { name: "Java", icon: <FaJava />, color: "#007396", category: "learning" },
    {
      name: "Spring Boot",
      icon: <SiSpring />,
      color: "#6DB33F",
      category: "learning",
    },
    {
      name: "C#",
      icon: <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>C#</span>,
      color: "#239120",
      category: "learning",
    },
    {
      name: ".NET",
      icon: <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>.NET</span>,
      color: "#512BD4",
      category: "learning",
    },
    {
      name: "Microsoft Azure",
      icon: <FaMicrosoft />,
      color: "#0078D4",
      category: "learning",
    },

    // Cloud
    {
      name: "Google Cloud",
      icon: <SiGooglecloud />,
      color: "#4285F4",
      category: "cloud",
    },

    // Cybersecurity
    {
      name: "Introduction to Cybersecurity",
      icon: (
        <div className="combined-icon">
          <SiCisco />
          <FaShieldAlt className="shield-icon" />
        </div>
      ),
      color: "#1BA0D7",
      category: "cybersecurity",
    },
  ].filter(Boolean) as TechItem[];

  return (
    <section className="tech-stack section" id="tech-stack">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I'm proficient with
          </p>
        </div>

        <div className="tech-categories">
          <div className="tech-category">
            <h3>Frontend</h3>
            <div className="tech-items">
              {techItems
                .filter((item) => item.category === "frontend")
                .map((item, index) => (
                  <div className="tech-item" key={index}>
                    <div className="tech-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <span className="tech-name">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Backend</h3>
            <div className="tech-items">
              {techItems
                .filter((item) => item.category === "backend")
                .map((item, index) => (
                  <div className="tech-item" key={index}>
                    <div className="tech-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <span className="tech-name">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Database</h3>
            <div className="tech-items">
              {techItems
                .filter((item) => item.category === "database")
                .map((item, index) => (
                  <div className="tech-item" key={index}>
                    <div className="tech-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <span className="tech-name">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Other Tools</h3>
            <div className="tech-items">
              {techItems
                .filter(
                  (item) =>
                    item.category === "tools" || item.category === "other"
                )
                .map((item, index) => (
                  <div className="tech-item" key={index}>
                    <div className="tech-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <span className="tech-name">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Currently Learning</h3>
            <div className="tech-items">
              {techItems
                .filter((item) => item.category === "learning")
                .map((item, index) => (
                  <div className="tech-item" key={index}>
                    <div className="tech-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <span className="tech-name">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Cloud</h3>
            <div className="tech-items">
              {techItems
                .filter((item) => item.category === "cloud")
                .map((item, index) => (
                  <div className="tech-item" key={index}>
                    <div className="tech-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <span className="tech-name">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Cybersecurity</h3>
            <div className="tech-items">
              {techItems
                .filter((item) => item.category === "cybersecurity")
                .map((item, index) => (
                  <div className="tech-item" key={index}>
                    <div className="tech-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <span className="tech-name">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

import React from "react";
import {
  FaBriefcase,
  FaUserTie,
  FaHeadset,
  FaClipboardList,
  FaLaptopCode,
} from "react-icons/fa";
import "./PageStyles.scss";
import "./AboutPage.scss";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const AboutPage: React.FC = () => {
  const careerTimeline: TimelineItem[] = [
    {
      id: 1,
      title: "Collections Agent",
      company: "The Foschini Group - Financial Services",
      period: "2018 - 2020",
      description:
        "Managed customer accounts and facilitated payment arrangements. Developed strong negotiation and communication skills while working with diverse clients.",
      icon: <FaClipboardList />,
    },
    {
      id: 2,
      title: "Client Support Agent",
      company: "Capitec Bank",
      period: "2020 - 2022",
      description:
        "Provided exceptional customer service and resolved complex issues. Improved customer satisfaction rates and developed deep product knowledge.",
      icon: <FaHeadset />,
    },
    {
      id: 3,
      title: "Complaints Management Officer",
      company: "Capitec Bank",
      period: "2022 - 2024",
      description:
        "Handled escalated customer complaints and implemented process improvements. Collaborated with cross-functional teams to resolve systemic issues.",
      icon: <FaUserTie />,
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2024 - Present",
      description:
        "Developing web applications using the MERN stack. Using design tools and frameworks to create responsive, user-friendly interfaces and robust backend systems.",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <div className="page about-page">
      <div className="container">
        <div className="page-header">
          <h1>About Me</h1>
          <p>Learn more about who I am and what I do</p>
        </div>

        <div className="page-content">
          {/* Biography Section */}
          <section className="bio-section">
            <h2>Biography</h2>
            <div className="bio-content">
              <p>
                I am a full stack developer with a background in banking and
                customer service. After four years at Capitec Bank—where I
                specialized in complaint resolution, fraud investigations, and
                working with regulators—I made the leap into tech to build
                smarter, more user-friendly digital solutions. My tech stack
                includes JavaScript, TypeScript, React, Node.js, and Express.js,
                and I’m currently learning Java to deepen my backend skills.
                I’ve built a CRM/appointment system and a sports betting app
                that compares odds across major platforms—projects that reflect
                both my technical ability and user-focused mindset. What makes
                me unique as a developer is my understanding of both the user
                and business sides of digital products, especially in finance.
                That’s why I’m drawn to fintech—where I can merge my background
                with my passion for problem-solving and innovation. I approach
                development with curiosity and structure, aiming to build clean,
                scalable systems that make people’s lives easier. Whether it’s
                simplifying workflows or debugging a tricky feature, I love
                turning ideas into real, functional tools.
              </p>
            </div>
          </section>

          {/* Career Timeline Section */}
          <section className="timeline-section">
            <h2>My Professional Journey</h2>
            <div className="timeline">
              {careerTimeline.map((item) => (
                <div className="timeline-item" key={item.id}>
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <span className="timeline-date">
                      {item.period} | {item.company}
                    </span>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

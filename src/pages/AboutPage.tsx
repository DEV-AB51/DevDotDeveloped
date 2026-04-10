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
          <p>A brief summary of my professional background</p>
        </div>

        <div className="page-content">
          {/* Biography Section */}
          <section className="bio-section">
            <h2>Profile</h2>
            <div className="bio-content">
              <p>
                I'm a full stack developer, based in Cape Town. I have strong
                background in banking and customer service. After four years at
                Capitec Bank, I made a transition into tech to build solutions
                that enhance user-experiences. My stack includes JavaScript,
                TypeScript, React, Node.js and Express. I have experience
                working with Python, having obtained a certificate in Full Stack
                Development through the FNB App Academy, building a strong
                foundation in Python fundamentals. I am also expanding my
                knowledge in cloud technologies, with a focus on AWS and Azure
                services. I am drawn to fintech as its where my banking and
                technical skills converge. I approach every project with
                structure and curiousity, aiming to build scalable systems that
                solve real world problems experiened by real people.
              </p>
              <p>
                My goal is to grow as a developer, and to contribute to
                meaningful projects. My background in high pressure support
                environments has sharpened my communication, problem solving and
                user empathy. Skills that I bring directly into how I think
                about building software.
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

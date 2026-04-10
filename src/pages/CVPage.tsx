import React from "react";

const CVPage: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Page Header */}
        <div
          className="section-header"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <h2
            style={{
              color: "var(--text-color)",
              marginBottom: "0.5rem",
              fontSize: "2rem",
            }}
          >
            Curriculum Vitae
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "var(--primary-color)",
              margin: "0 auto",
            }}
          ></div>
          <p style={{ color: "var(--text-color)", marginTop: "1rem" }}>
            My professional background and skills
          </p>
        </div>

        {/* Download Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        ></div>

        {/* CV Document */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "var(--card-bg-color)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--border-radius)",
            padding: "3rem",
          }}
        >
          {/* CV Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: "2px solid var(--primary-color)",
            }}
          >
            <h1
              style={{
                color: "var(--text-color)",
                fontSize: "2.2rem",
                marginBottom: "0.25rem",
              }}
            >
              Devan Bailey
            </h1>
            <p
              style={{
                color: "var(--primary-color)",
                fontSize: "1rem",
                fontWeight: 500,
                marginBottom: "0.75rem",
              }}
            >
              Full Stack Developer
            </p>
            <p style={{ color: "var(--text-color)", fontSize: "0.9rem" }}>
              devanab51@gmail.com &nbsp;|&nbsp; Cape Town, South Africa
            </p>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                color: "var(--primary-color)",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}
            >
              Experience
            </h3>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "var(--border-color)",
                marginBottom: "1.5rem",
              }}
            ></div>

            {/* Job 1 */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.25rem",
                }}
              >
                <h4
                  style={{
                    color: "var(--text-color)",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Complaints Officer
                </h4>
                <span
                  style={{
                    color: "var(--text-color)",
                    fontSize: "0.85rem",
                    opacity: 0.7,
                  }}
                >
                  2022 – 2024
                </span>
              </div>
              <p
                style={{
                  color: "var(--primary-color)",
                  fontSize: "0.9rem",
                  marginBottom: "0.75rem",
                }}
              >
                Capitec Bank
              </p>
              <ul
                style={{
                  color: "var(--text-color)",
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  paddingLeft: "1.25rem",
                }}
              >
                <li>
                  Resolved 700+ complaints annually while adhering to strict SLA
                  requirements and escalation procedures.
                </li>
                <li>
                  Investigated 200+ security related cases, including internal
                  fraud, analyzing logs, user activity and system data.
                </li>
                <li>
                  Provided evidence-based feedback to the Insurance and Banking
                  Ombudsman.
                </li>
                <li>
                  Maintained accurate case notes and documentation within CRM
                  and ticketing systems.
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.25rem",
                }}
              >
                <h4
                  style={{
                    color: "var(--text-color)",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Client Support Agent
                </h4>
                <span
                  style={{
                    color: "var(--text-color)",
                    fontSize: "0.85rem",
                    opacity: 0.7,
                  }}
                >
                  2020 – 2022
                </span>
              </div>
              <p
                style={{
                  color: "var(--primary-color)",
                  fontSize: "0.9rem",
                  marginBottom: "0.75rem",
                }}
              >
                Capitec Bank
              </p>
              <ul
                style={{
                  color: "var(--text-color)",
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  paddingLeft: "1.25rem",
                }}
              >
                <li>
                  Managed 100+ daily inbound inquiries, logging fraud disputes,
                  lost card claims and app-related issues.
                </li>
                <li>
                  Provided first-contact resolution for 90%+ of support queries
                  received, reducing escalations to second-line teams.
                </li>
                <li>
                  Assisted clients in identifying fraudulent activities and
                  advising on secure banking measures.
                </li>
                <li>
                  Guided users through application troubleshooting and secure
                  system usage.
                </li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                color: "var(--primary-color)",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}
            >
              Skills
            </h3>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "var(--border-color)",
                marginBottom: "1.5rem",
              }}
            ></div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "C#",
                "ASP.NET",
                "Python",
                "PostgreSQL",
                "SQL",
                "Git",
                "GitHub",
                "Jira",
                "Salesforce",
                "Microsoft 365",
                "Tier 1 IT support",
                "Network troubleshooting",
                "Windows & macOS support",
                "Security & Networking fundamentals",
                "DNS, DHCP, VPNs, TCP/IP",
                "CRM & Ticketing Systems",
                "Incident Logging & Escalation",
                "First-Contact Resolution",
                "Fraud Detection & Prevention",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "var(--hover-bg-color)",
                    color: "var(--primary-color)",
                    border: "1px solid var(--primary-color)",
                    borderRadius: "var(--border-radius)",
                    padding: "0.3rem 0.75rem",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: "1rem" }}>
            <h3
              style={{
                color: "var(--primary-color)",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}
            >
              Certifications & Education
            </h3>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "var(--border-color)",
                marginBottom: "1.5rem",
              }}
            ></div>

            {[
              {
                title: "Google IT Support Professional Certificate",
                issuer: "Google / Coursera",
                year: "2025",
              },

              {
                title: "Certificate in Full Stack Development",
                issuer: "FNB App Academy",
                year: "2025",
              },
              {
                title: "The Web Development Bootcamp",
                issuer: "Colt Steele / Udemy",
                year: "2024",
              },
              {
                title: "National Senior Certificate",
                year: "2017",
              },
            ].map((cert) => (
              <div
                key={cert.title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "var(--text-color)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      marginBottom: "0.15rem",
                    }}
                  >
                    {cert.title}
                  </p>
                  <p
                    style={{
                      color: "var(--primary-color)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {cert.issuer}
                  </p>
                </div>
                <span
                  style={{
                    color: "var(--text-color)",
                    fontSize: "0.85rem",
                    opacity: 0.7,
                    whiteSpace: "nowrap",
                    marginLeft: "1rem",
                  }}
                >
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
          <a
            href="/DevanCV.pdf"
            download="DevanCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVPage;

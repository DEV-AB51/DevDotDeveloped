import React from "react";

const CVPage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Curriculum Vitae</h1>
      <p>This is where you can download my CV.</p>
      <a href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer">
        Download CV
      </a>
    </div>
  );
};

export default CVPage;

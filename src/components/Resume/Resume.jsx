import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <p>Download my resume: <a href={process.env.PUBLIC_URL + '/components/Resume/Raymond_Lacrouts_Resume.PDF'} download="Raymond_Lacrouts_Resume.PDF" target="_blank" rel="noopener noreferrer">Resume.pdf</a></p>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>Web Development</li>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5, CSS3</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      {/* Add more sections like Education, Experience, etc. */}
    </div>
  );
};

export default Resume;

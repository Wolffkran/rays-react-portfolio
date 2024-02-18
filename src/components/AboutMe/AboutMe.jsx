import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="profile-image">
        {/* Add your photo or avatar here */}
        <img src="/images/profile-photo.jpg" alt="Ray" />
      </div>
      <p>
        Hi, I'm Ray! I am a passionate web developer with experience in building
        interactive and user-friendly websites. My skills include React.js, JavaScript,
        HTML5, and CSS3. I enjoy turning ideas into reality through coding and creating
        engaging user experiences.
      </p>
    </div>
  );
};

export default AboutMe;

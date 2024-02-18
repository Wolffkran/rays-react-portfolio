import React from 'react';

const AboutMe = () => {
  return (
<div className="about-me" style={{ textAlign: 'center' }}>
  <h2>About Me</h2>
      <div className="profile-image" style={{ textAlign: 'center' }}>
  {/* Add your photo or avatar here */}
  <img src="/images/profile-photo.jpg" alt="Ray" style={{ width: '10%', height: 'auto', margin: '0 auto' }} />
</div>


<p style={{ width: '100%', maxWidth: '30%', margin: '0 auto' }}>
    Hi, I'm Ray! I am a passionate web developer with experience in building
    interactive and user-friendly websites. My skills include React.js, JavaScript,
    HTML5, and CSS3. I enjoy turning ideas into reality through coding and creating
    engaging user experiences.
  </p>
    </div>
  );
};

export default AboutMe;

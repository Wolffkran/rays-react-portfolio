// AboutMe.jsx

import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me text-center p-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="profile-image">
        {/* Add your photo or avatar here */}
        <img
          src="/images/profile-photo.jpg"
          alt="Ray"
          style={{ width: '150px', height: 'auto', borderRadius: '50%', marginBottom: '20px' }}
        />
      </div>

      <p className="max-w-2xl mx-auto text-lg">
        Hi, I'm Ray! I am a passionate web developer with experience in building interactive and
        user-friendly websites. My skills include React.js, JavaScript, HTML5, and CSS3. I enjoy
        turning ideas into reality through coding and creating engaging user experiences.
      </p>
    </div>
  );
};

export default AboutMe;

import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  // Sample data for projects
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liveLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      liveLink: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

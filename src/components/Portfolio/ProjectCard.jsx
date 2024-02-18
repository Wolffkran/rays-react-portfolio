const ProjectCard = ({ project }) => {
    const { title, description, liveLink, githubLink } = project;
  
    return (
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    );
  };
  
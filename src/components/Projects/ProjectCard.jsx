import React from "react";
import "./Project.css";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <button>View Project</button>
      </div>
    </div>
  );
};

export default ProjectCard;
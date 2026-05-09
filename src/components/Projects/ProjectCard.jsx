import React from "react";
import "./Project.css";

const ProjectCard = ({ image, title, description, button }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>

        <p>{description}</p>
        {button}
        {/* <button>
              View Project
              <span className="arrow">→</span>
        </button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
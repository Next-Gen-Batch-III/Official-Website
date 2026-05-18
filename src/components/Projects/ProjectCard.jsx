import { Link } from "react-router-dom";
import "./Project.css";
import React from "react";

const ProjectCard = ({
  title,
  description,
  image,
  slug,
}) => {
  return (
    <div className="project-card ">
      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <Link to={`/projects/${slug}`} className="project-btn">
          View Project
          <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import CoppsaryImg from "../assets/student_project_image/Coppsary.png";
import KomplexImg from "../assets/student_project_image/Komplex.png";
import DomraImg from "../assets/student_project_image/Domra.png";

const Projects = () => {
  return (
    <div style={{ padding: "40px"}}>
      
      <h1 style={{ textAlign: "left", fontSize: "40px", fontFamily: "Niradei", fontWeight: "bold",marginLeft:"30px" }}>
        Student Project <span style={{ color: "#dd5c0b" }}>Showcase</span>
      </h1>
      <p style={{textAlign:"left", marginBottom:"60px", marginLeft:"30px"}}>Explore innovative projects created by students during the Next-Gen Engagement Program.</p>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ProjectCard
          image={CoppsaryImg}
          title="PhsarDesign"
          description="A platform that connects Cambodian artists and designers with clients through professional profiles, service listings, and a rating-based credibility system."
        />

        <ProjectCard
          image={KomplexImg}
          title="KOMPLEX"
          description="A collaborative STEM education system featuring interactive Khmer lessons, AI tutoring, community forums, and exercises, built to make quality education accessible to all students nationwide."
        />

        <ProjectCard
          image={DomraImg}
          title="DOMRA"
          description="A multilingual dictionary system bridging Khmer, English, and French terminology for Computer Science and AI, built for Cambodian students and researchers."
        />
      </div>
    </div>
  );
};

export default Projects;
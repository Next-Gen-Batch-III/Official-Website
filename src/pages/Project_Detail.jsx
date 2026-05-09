import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
// import React from "react";
import "../components/Projects/Project.css";
import HighlightCard from "../components/Projects/HighlightsCard";
import ProblemImg from "../assets/icon_image/problem-icon.png";
import ImpactImg from "../assets/icon_image/impact-icon.png";
import AchievementImg from "../assets/icon_image/achievement-icon.png";

const Project_Detail = () => {
    const { slug } = useParams();

    const project = projects.find(
        (p) => p.slug === slug
    );

    if (!project) {
        return (
            <div style={{ padding: "80px 0", maxWidth: "1200px", margin: "0 auto" }}>
                Project not found
            </div>
        );
    }

    return (
        <div style={{ padding: "80px 0", maxWidth: "1200px", margin: "0 auto" }}>
            <img src={project.image} alt={project.title} style={{ width: "100%", height: "auto", marginBottom: "20px" }} />
            <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>{project.title}</h1>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{project.article}</p>

            <div className="container-1">
                <div>
                    <h1 style={{fontSize:"36px", fontWeight:"bold", color:"#f18f2d"}}>Project Overview</h1>
                    <p>{project.description}</p>
                </div>

                <div>
                    <h1 style={{fontSize:"36px", fontWeight:"bold", color:"#f18f2d"}}>QR Code</h1>

                </div>
            </div>
            <div className="container-2">
                <div>
                    <h1 style={{fontSize:"36px", fontWeight:"bold", color:"#f18f2d", padding:"40px"}}>Project Highlights</h1>
                </div>
                <div className="box-content">
                    <HighlightCard
                        title="Problem"
                        color="bg-red-500"
                        icon={ProblemImg}
                        description="Description of the problem addressed by the project."
                    />
                    <HighlightCard
                        title="Impact"
                        color="bg-blue-500"
                        icon={ImpactImg}
                        description="Description of the impact of the project."
                    />
                    <HighlightCard
                        title="Achivement"
                        color="bg-green-500"
                        icon={AchievementImg}
                        description="Description of the achievements of the project."
                    />
                </div>
            </div>
        </div>
    )
};

export default Project_Detail;
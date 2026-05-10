import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
// import React from "react";
import "../components/Projects/Project.css";
import HighlightCard from "../components/Projects/HighlightsCard";
import ProblemImg from "../assets/icon_image/problem-icon.png";
import ImpactImg from "../assets/icon_image/impact-icon.png";
import AchievementImg from "../assets/icon_image/achievement-icon.png";
import ProjectDetailCard from "../components/Projects/ProjectDetailCard";

const Project_Detail = () => {
    const { slug } = useParams();

    const project = projects.find(
        (p) => p.slug === slug
    );

    if (!project) {
        return (
            <div className="px-4 sm:px-6 lg:px-8 max-w-full mx-auto" style={{ padding: "80px 0" }}>
                Project not found
            </div>
        );
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
            <ProjectDetailCard
            title={project.title}
            description={project.description}
            image={project.image}
            />

            <div className="container-1">
                <div>
                    <h1 style={{fontSize:"36px", fontWeight:"bold", color:"#f18f2d"}}>Project Overview</h1>
                    <p
                    className="text-[18px] leading-relaxed whitespace-pre-line"
                    >
                    {project.article}
                    </p>
                
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

            <div className="container-3">
                <h1 style={{fontSize:"36px",fontWeight:"bold", color:"#f18f2d", padding:"40px"}}>
                    Gallery
                </h1>

                <div className="gallery">

                    {/* LEFT SIDE */}
                    <div className="left-section">
                    <img src={project.projectImages[0]} alt="" />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="right-section">

                        <div className="right-img-1">
                            <div>
                            <img src={project.projectImages[1]} alt="" />
                            </div>
                        </div>

                        <div className="right-img-2" >
                             <img src={project.projectImages[2]} alt=""/>
                            
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
};

export default Project_Detail;
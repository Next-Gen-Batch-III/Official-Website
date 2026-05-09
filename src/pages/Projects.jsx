import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import CoppsaryImg from "../assets/student_project_image/Coppsary.png";
import KomplexImg from "../assets/student_project_image/Komplex.png";
import DomraImg from "../assets/student_project_image/Domra.png";
import CatagangImg from "../assets/student_project_image/Catagang.png";
import BayCanteenImg from "../assets/student_project_image/Bay-Canteen.png";
import Y5Img from "../assets/student_project_image/Y-5.png";
import ContractwiseImg from "../assets/student_project_image/Contractwise.png";
import LifverseImg from "../assets/student_project_image/Lifverse.png";
import Bithero6Img from "../assets/student_project_image/Bithero6.png";
import AkharaImg from "../assets/student_project_image/Akhara.png";
import SastraImg from "../assets/student_project_image/Sastra.png";
import EduquestImg from "../assets/student_project_image/Eduquest.png";

const Projects = () => {
  return (
    <div style={{ padding: "80px 0", maxWidth: "1200px", margin: "0 auto" }}>
      <div className="container">
          <div className="left">
              <h1 style={{ textAlign: "left", fontSize: "40px", fontFamily: "Niradei", fontWeight: "bold", marginLeft:"30px"}}>
                Student Project <span style={{ color: "#dd5c0b" }}>Showcase</span>
              </h1>
              <p style={{textAlign:"left", marginBottom:"60px" , marginLeft:"30px"}}>Explore innovative projects created by students during the Next-Gen Engagement Program.</p>
          </div>

          <div className="right">
            <div class="search-box">
              <input type="text" placeholder=" Search Project" />
            </div>
          </div>

      </div>

      <div>
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
          slug="coppsary"
        />

        <ProjectCard
          image={KomplexImg}
          title="KOMPLEX"
          description="A collaborative STEM education system featuring interactive Khmer lessons, AI tutoring, community forums, and exercises, built to make quality education accessible to all students nationwide."
          slug="komplex"
        />

        <ProjectCard
          image={DomraImg}
          title="DOMRA"
          description="A multilingual dictionary system bridging Khmer, English, and French terminology for Computer Science and AI, built for Cambodian students and researchers."
          slug="domra"
        />
        <ProjectCard
          image={CatagangImg}
          title="GATABLOC"
          description="A gamified learning system that teaches algorithms and logic through visual puzzles, making coding fundamentals fun for beginners."
          slug="gatabloc"
        />
        <ProjectCard
          image={BayCanteenImg}
          title="BAY-CANTEEN"
          description="A student-facing voting system that helps the CADT canteen prepare daily meals based on real student preferences, reducing waste and improving satisfaction."
          slug="bay-canteen"
        />
        <ProjectCard
          image={Y5Img}
          title="ACET"
          description="A digital conference management system connecting researchers, reviewers, and organizers to streamline paper submissions, peer reviews, and event management."
          slug="acet"
        />
        <ProjectCard
          image={ContractwiseImg}
          title="Contract-Generation"
          description="A digital administration system that centralizes lecturer course assignments, workload tracking, and contract generation with e-signature across role-based dashboards."
          slug="contract-generation"
        />
        <ProjectCard
          image={LifverseImg}
          title="FINEWISE"
          description=" A personal finance tracking system that helps Cambodians manage daily expenses, plan budgets, scan receipts, and import bank transactions all in one place."
          slug="finewise"
        />
        <ProjectCard
          image={Bithero6Img}
          title="BITCAMPUS"
          description=" An online learning system that offers structured coding lessons, a built-in IDE, and video tutorials to help first-time learners start programming with confidence."
          slug="bitcampus"
        />
        <ProjectCard
          image={AkharaImg} 
          title="Khmer Data Annotation Tool"
          description=" A data annotation system that lets researchers upload Khmer datasets, label text regions, and use semi-automated OCR suggestions to build high-quality training data faster."
          slug="khmer-data-annotation-tool"
        />
        <ProjectCard
          image={SastraImg}
          title="SASTRA"
          description=" A Khmer-language e-learning system where users can browse, purchase, and complete courses entirely in Khmer and earn verifiable certificates upon completion."
          slug="sasttra"
        />
        <ProjectCard
          image={EduquestImg}
          title="QuizKH"
          description="An interactive quiz hosting system where educators can create, host, and analyze quizzes in minutes, with PDF import, team play, and Excel performance reports."
          slug="quizkh"
        />
      </div>
      </div>
    </div>
  );
};

export default Projects;
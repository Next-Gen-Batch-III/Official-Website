import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/Projects/ProjectCard";
import PhsarDesignImg from "../assets/student_project_image/PhsarDesign.webp";
import KomplexImg from "../assets/student_project_image/Komplex.webp";
import DomraImg from "../assets/student_project_image/Domra.webp";
import CatagangImg from "../assets/student_project_image/Catagang.webp";
import BayCanteenImg from "../assets/student_project_image/Bay-Canteen.webp";
import Y5Img from "../assets/student_project_image/Y-5.webp";
import ContractwiseImg from "../assets/student_project_image/Contractwise.webp";
import LifverseImg from "../assets/student_project_image/Lifverse.webp";
import Bithero6Img from "../assets/student_project_image/Bithero6.webp";
import AkharaImg from "../assets/student_project_image/Akhara.webp";
import SastraImg from "../assets/student_project_image/Sastra.webp";
import EduquestImg from "../assets/student_project_image/Eduquest.webp";

const Projects = () => {
const [search, setSearch] = useState("");
const navigate = useNavigate();
const [suggestions, setSuggestions] = useState([]);
const projectList = [
  { title: "PhsarDesign", slug: "phsar-design" },
  { title: "KOMPLEX", slug: "komplex" },
  { title: "DOMRA", slug: "domra" },
  { title: "GATABLOC", slug: "gatabloc" },
  { title: "BAY-CANTEEN", slug: "bay-canteen" },
  { title: "ACET", slug: "acet" },
  { title: "Contract-Generation", slug: "contract-generation" },
  { title: "FINEWISE", slug: "finewise" },
  { title: "BITCAMPUS", slug: "bitcampus" },
  { title: "Khmer Data Annotation Tool", slug: "khmer-data-annotation-tool" },
  { title: "SASTRA", slug: "sastra" },
  { title: "QuizKH", slug: "quizkh" },
];
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-14 md:gap-28 py-2 sm:py-14 md:py-16">
          <div className="flex-1 min-w-[300px] content-center">
              <h1 className="text-left text-[40px] font-bold ml-[30px] mt-[30px]">
                Student Project <span style={{ color: "#dd5c0b" }}>Showcase</span>
              </h1>
              <p className="text-left mb-[60px] ml-[30px]">Explore innovative projects created by students during the Next-Gen Engagement Program.</p>
          </div>

          <div className="flex-1 min-w-[300px] content-center">
            <div className="search-box">
              <label className="search-icon" htmlFor="search">
                <svg className="w-6 h-6 text-neutral-400 ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
              </label>
              <input
                type="text"
                placeholder=" Search Project"
                value={search}
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);

                if (value.trim() === "") {
                  setSuggestions([]);
                  return;
                }

                const filtered = projectList.filter((project) =>
                  project.title.toLowerCase().startsWith(value.toLowerCase())
                );

                setSuggestions(filtered);
              }}
              />
              {suggestions.length > 0 && (
                <div className="suggestion-box">
                  {suggestions.map((project, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => navigate(`/projects/${project.slug}`)}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: project.title.replace(
                            new RegExp(search, "gi"),
                            (match) => `<mark>${match}</mark>`
                          ),
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

      </div>

      <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mb-[40px]">
        {"PhsarDesign".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={PhsarDesignImg}
            title="PhsarDesign"
            description="A platform that connects Cambodian artists and designers with clients through professional profiles, service listings, and a rating-based credibility system."
            slug="phsar-design"
          />
        )}
        
        {"KOMPLEX".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={KomplexImg}
            title="KOMPLEX"
            description="A collaborative STEM education system featuring interactive Khmer lessons, AI tutoring, community forums, and exercises, built to make quality education accessible to all students nationwide."
            slug="komplex"
          />
        )}
        {"DOMRA".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={DomraImg}
            title="DOMRA"
            description="A multilingual dictionary system bridging Khmer, English, and French terminology for Computer Science and AI, built for Cambodian students and researchers."
            slug="domra"
          />
        )}
        
        {"GATABLOC".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={CatagangImg}
            title="GATABLOC"
            description="A gamified learning system that teaches algorithms and logic through visual puzzles, making coding fundamentals fun for beginners."
            slug="gatabloc"
          />
        )}
        
        {"BAY-CANTEEN".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={BayCanteenImg}
            title="BAY-CANTEEN"
            description="A student-facing voting system that helps the CADT canteen prepare daily meals based on real student preferences, reducing waste and improving satisfaction."
            slug="bay-canteen"
          />
        )}
        {"ACET".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={Y5Img}
            title="ACET"
            description="A digital conference management system connecting researchers, reviewers, and organizers to streamline paper submissions, peer reviews, and event management."
            slug="acet"
          />
        )}
        {"Contract-Generation".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={ContractwiseImg}
            title="Contract-Generation"
            description="A digital administration system that centralizes lecturer course assignments, workload tracking, and contract generation with e-signature across role-based dashboards."
            slug="contract-generation"
          />
        )}
        {"FINEWISE".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={LifverseImg}
            title="FINEWISE"
            description=" A personal finance tracking system that helps Cambodians manage daily expenses, plan budgets, scan receipts, and import bank transactions all in one place."
            slug="finewise"
          />
        )}
        {"BITCAMPUS".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={Bithero6Img}
            title="BITCAMPUS"
            description=" An online learning system that offers structured coding lessons, a built-in IDE, and video tutorials to help first-time learners start programming with confidence."
            slug="bitcampus"
          />
        )}  
        {"Khmer Data Annotation Tool".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={AkharaImg} 
            title="Khmer Data Annotation Tool"
            description=" A data annotation system that lets researchers upload Khmer datasets, label text regions, and use semi-automated OCR suggestions to build high-quality training data faster."
            slug="khmer-data-annotation-tool"
          />
        )}
        {"SASTRA".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={SastraImg}
            title="SASTRA"
            description=" A Khmer-language e-learning system where users can browse, purchase, and complete courses entirely in Khmer and earn verifiable certificates upon completion."
            slug="sastra"
          />
        )}
        {"QuizKH".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={EduquestImg}
            title="QuizKH"
            description="An interactive quiz hosting system where educators can create, host, and analyze quizzes in minutes, with PDF import, team play, and Excel performance reports."
            slug="quizkh"
        />
        )}
      </div>
      </div>
    </div>
  );
};

export default Projects;

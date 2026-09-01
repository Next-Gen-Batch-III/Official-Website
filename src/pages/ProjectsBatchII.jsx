import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/Projects/ProjectCard";

import PhsarDesignImg from "../assets/student_project_image/phsarDesign.webp";
import KomplexImg from "../assets/student_project_image/komplex.webp";
import DomraImg from "../assets/student_project_image/domra.webp";
import CatagangImg from "../assets/student_project_image/catagang.webp";
import BayCanteenImg from "../assets/student_project_image/bayCanteen.webp";
import Y5Img from "../assets/student_project_image/y5.webp";
import ContractwiseImg from "../assets/student_project_image/contractwise.webp";
import LifverseImg from "../assets/student_project_image/lifverse.webp";
import Bithero6Img from "../assets/student_project_image/bithero6.webp";
import AkharaImg from "../assets/student_project_image/akhara.webp";
import SastraImg from "../assets/student_project_image/sastra.webp";
import EduquestImg from "../assets/student_project_image/eduquest.webp";

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
    {
      title: "Khmer Data Annotation Tool",
      slug: "khmer-data-annotation-tool",
    },
    { title: "SASTRA", slug: "sastra" },
    { title: "QuizKH", slug: "quizkh" },
  ];

  return (
    <div className="px-8 sm:px-12 lg:px-16 max-w-full mx-auto">

      {/* ================= HEADER ================= */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 py-2 sm:py-14 md:py-16 lg:py-20">

        {/* Title */}
        <div className="flex-1 min-w-0 content-top">
          <h1 className="text-left md:mt-0 mt-6 text-[24px] md:text-[36px] lg:text-[40px] font-bold whitespace-nowrap">
            Student Project{" "}
            <span style={{ color: "#dd5c0b" }}>Showcase</span>
          </h1>

          <p className="text-left text-[12px] md:text-[16px] md:whitespace-nowrap">
            Explore innovative projects created by students during the Next-Gen Engagement Program.
          </p>
        </div>

        {/* Search */}
        <div className="flex-1 min-w-0 content-center">
          <div className="search-box mb-10 md:mb-0 lg:ml-28">

            <label className="search-icon" htmlFor="search">
              <svg
                className="w-6 h-6 text-neutral-400 ml-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </label>

            <input
              id="search"
              type="text"
              placeholder=" search projects..."
              value={search}
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);

                if (value.trim() === "") {
                  setSuggestions([]);
                  return;
                }

                const filtered = projectList.filter((project) =>
                  project.title
                    .toLowerCase()
                    .startsWith(value.toLowerCase())
                );

                setSuggestions(filtered);
              }}
            />

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="suggestion-box">
                {suggestions.map((project, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() =>
                      navigate(`/projects/${project.slug}`)
                    }
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

      {/* ================= PROJECT GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-[40px]">

        {/* PhsarDesign */}
        {"PhsarDesign".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={PhsarDesignImg}
            title="PhsarDesign"
            description="A platform that connects Cambodian artists and designers with clients through professional profiles, service listings, and a rating-based credibility system."
            slug="phsar-design"
          />
        )}

        {/* KOMPLEX */}
        {"KOMPLEX".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={KomplexImg}
            title="KOMPLEX"
            description="A collaborative STEM education system featuring interactive Khmer lessons, AI tutoring, community forums, and exercises, built to make quality education accessible to all students nationwide."
            slug="komplex"
          />
        )}

        {/* DOMRA */}
        {"DOMRA".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={DomraImg}
            title="DOMRA"
            description="A multilingual dictionary system bridging Khmer, English, and French terminology for Computer Science and AI, built for Cambodian students and researchers."
            slug="domra"
          />
        )}

        {/* GATABLOC */}
        {"GATABLOC".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={CatagangImg}
            title="GATABLOC"
            description="A gamified learning system that teaches algorithms and logic through visual puzzles, making coding fundamentals fun for beginners."
            slug="gatabloc"
          />
        )}

        {/* BAY-CANTEEN */}
        {"BAY-CANTEEN".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={BayCanteenImg}
            title="BAY-CANTEEN"
            description="A student-facing voting system that helps the CADT canteen prepare daily meals based on real student preferences, reducing waste and improving satisfaction."
            slug="bay-canteen"
          />
        )}

        {/* ACET */}
        {"ACET".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={Y5Img}
            title="ACET"
            description="A digital conference management system connecting researchers, reviewers, and organizers to streamline paper submissions, peer reviews, and event management."
            slug="acet"
          />
        )}

        {/* Contract Generation */}
        {"Contract-Generation".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={ContractwiseImg}
            title="Contract-Generation"
            description="A digital administration system that centralizes lecturer course assignments, workload tracking, and contract generation with e-signature across role-based dashboards."
            slug="contract-generation"
          />
        )}

        {/* FINEWISE */}
        {"FINEWISE".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={LifverseImg}
            title="FINEWISE"
            description="A personal finance tracking system that helps Cambodians manage daily expenses, plan budgets, scan receipts, and import bank transactions all in one place."
            slug="finewise"
          />
        )}

        {/* BITCAMPUS */}
        {"BITCAMPUS".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={Bithero6Img}
            title="BITCAMPUS"
            description="An online learning system that offers structured coding lessons, a built-in IDE, and video tutorials to help first-time learners start programming with confidence."
            slug="bitcampus"
          />
        )}

        {/* Khmer Data Annotation Tool */}
        {"Khmer Data Annotation Tool"
          .toLowerCase()
          .includes(search.toLowerCase()) && (
          <ProjectCard
            image={AkharaImg}
            title="Khmer Data Annotation Tool"
            description="A data annotation system that lets researchers upload Khmer datasets, label text regions, and use semi-automated OCR suggestions to build high-quality training data faster."
            slug="khmer-data-annotation-tool"
          />
        )}

        {/* SASTRA */}
        {"SASTRA".toLowerCase().includes(search.toLowerCase()) && (
          <ProjectCard
            image={SastraImg}
            title="SASTRA"
            description="A Khmer-language e-learning system where users can browse, purchase, and complete courses entirely in Khmer and earn verifiable certificates upon completion."
            slug="sastra"
          />
        )}

        {/* QuizKH */}
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
  );
};

export default Projects;
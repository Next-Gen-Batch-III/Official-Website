import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import HighlightCard from "../components/Projects/HighlightsCard";
import ProblemImg from "../assets/icon_image/problem-icon.png";
import ImpactImg from "../assets/icon_image/impact-icon.png";
import AchievementImg from "../assets/icon_image/achievement-icon.png";
import ProjectDetailHero from "../components/Projects/ProjectDetailHero";
import QRImg from "../assets/student_project_image/QR_bay-canteen.png";

const Project_Detail = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 max-w-full mx-auto py-20 text-center text-gray-600">
        Project not found
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-full mx-auto">

      {/* HERO */}
      <ProjectDetailHero
        title={project.title}
        description={project.description}
        image={project.image}
      />

      {/* PROJECT OVERVIEW + QR */}
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-10 sm:gap-14 md:gap-28 py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16">

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#f18f2d] mb-4">
            Project Overview
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line text-gray-700">
            {project.article}
          </p>
        </div>

        <div className="flex flex-col items-center">

          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center w-full max-w-[280px] mt-[50px]">

            <img
              src={project.qrCode || QRImg}
              alt="QR Code"
              className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] object-contain"
            />

            <button
              onClick={() => project.link && window.open(project.link, "_blank")}
              className="mt-5 w-full bg-[#F88D2A] text-white py-3 rounded-xl font-semibold hover:bg-[#0a3a85] transition"
            >
              Open URL
            </button>

          </div>
        </div>

      </div>

      {/* HIGHLIGHTS */}
      <section className="bg-[#0B2341] text-white py-12 md:py-16 px-4 sm:px-8 md:px-16">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#f18f2d] text-left mb-10">
          Project Highlights
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-22 justify-center">

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
            title="Achievement"
            color="bg-green-500"
            icon={AchievementImg}
            description="Description of the achievements of the project."
          />

        </div>
      </section>

      {/* GALLERY */}
      <section className="space-y-10 mb-28 px-4 sm:px-6 md:px-16 mt-[30px]">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#f18f2d] text-left ">
          Gallery
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-auto md:h-[700px]">

          <div className="w-full md:w-[70%]">
            <img
              src={project.projectImages[0]}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-[30%] flex flex-col gap-4">

            <img
              src={project.projectImages[1]}
              className="w-full h-1/2 object-cover "
            />

            <img
              src={project.projectImages[2]}
              className="w-full h-1/2 object-cover"
            />

          </div>

        </div>
      </section>

    </div>
  );
};

export default Project_Detail;
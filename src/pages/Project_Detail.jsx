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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-gray-600">
        Project not found
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO */}
      <ProjectDetailHero
        title={project.title}
        description={project.description}
        image={project.image}
      />
      <div className="w-full">
        {/* PROJECT OVERVIEW + QR */}
        <section className="grid grid-cols-1 md:grid-cols-[70%_30%] sm:grid-cols-1 gap-10 sm:gap-14 md:gap-20 py-10 sm:py-14 md:py-16 px-2 sm:px-4 md:px-8">

          {/* Overview */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#f18f2d] mb-4">
              Project Overview
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line text-gray-700">
              {project.article}
            </p>
          </div>

          {/* QR */}
          <div className="flex justify-center md:justify-center ">

            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center w-full max-w-[280px] h-fit mt-2 md:mt-10">

              <img
                src={project.qrCode || QRImg}
                alt="QR Code"
                className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] object-contain"
              />

              <button
                onClick={() => project.link && window.open(project.link, "_blank")}
                className="mt-5 w-full bg-[#F88D2A] text-white py-3 rounded-xl font-semibold hover:bg-[#0a3a85] transition duration-300"
              >
                Open URL
              </button>

            </div>

          </div>

        </section>

        {/* HIGHLIGHTS */}
        <section className="bg-[#0B2341] text-white py-12 md:py-16 px-4 sm:px-8 md:px-16 rounded-2xl">

          <h1 className="text-3xl sm:text-4xl font-bold text-[#f18f2d] text-left mb-10">
            Project Highlights
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

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
        <section className="space-y-10 mb-28 px-2 sm:px-4 md:px-8 mt-10">

          <h1 className="text-3xl sm:text-4xl font-bold text-[#f18f2d] text-left">
            Gallery
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-3 md:gap-4">

            {/* Main Image */}
            <div>
              {project.projectImages?.[0] ? (
                <img
                  src={project.projectImages[0]}
                  alt="Project"
                  className="w-full h-full min-h-[250px] md:h-[531px] object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full min-h-[250px] md:h-[531px] border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center text-gray-500 bg-gray-100">
                  Image
                </div>
              )}
            </div>

            {/* Side Images */}
            <div className="grid grid-rows-2 gap-3 md:gap-4">

              {project.projectImages?.[1] ? (
                <img
                  src={project.projectImages[1]}
                  alt="Project"
                  className="w-full h-full min-h-[180px] md:h-[255px] object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full min-h-[180px] md:h-[255px] border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center text-gray-500 bg-gray-100">
                  Image
                </div>
              )}

              {project.projectImages?.[2] ? (
                <img
                  src={project.projectImages[2]}
                  alt="Project"
                  className="w-full h-full min-h-[180px] md:h-[255px] object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full min-h-[180px] md:h-[255px] border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center text-gray-500 bg-gray-100">
                  Image
                </div>
              )}

            </div>

          </div>

        </section>

      </div>
    </div>
  );
};

export default Project_Detail;
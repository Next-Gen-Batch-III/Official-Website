import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import HighlightCard from "../components/Projects/HighlightsCard";
import ProblemImg from "../assets/icon_image/problemIcon.png";
import ImpactImg from "../assets/icon_image/impactIcon.png";
import AchievementImg from "../assets/icon_image/achievementIcon.png";
import ProjectDetailHero from "../components/Projects/ProjectDetailHero";


const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const showQR = Boolean(project.qrCode);
  const showImageProject = Boolean(project.projectImages);

  if (!project) {
    return (
      <div className="max-w-[1600px] mx-auto px-4 py-20 text-center text-gray-600">
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

      {/* PROJECT OVERVIEW + QR */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-20 py-10 sm:py-14 lg:py-16 px-4 lg:px-8">

        {/* Overview */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#f18f2d] mb-4">
            Project Overview
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line text-gray-700">
            {project.article}
          </p>
        </div>

        {/* QR */}
        {showQR && (
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center w-full max-w-[280px] h-fit">

            <img
              src={project.qrCode?.src || project.qrCode}
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
        )}

      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#0B2341] text-white py-12 md:py-16 px-4 sm:px-8 md:px-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-[#f18f2d] mb-20">
          Project Highlights
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <HighlightCard
            title="Problem"
            color="bg-red-500"
            icon={ProblemImg}
            description={project.problem}
          />

          <HighlightCard
            title="Impact"
            color="bg-blue-500"
            icon={ImpactImg}
            description={project.impact}
          />

          <HighlightCard
            title="Achievement"
            color="bg-green-500"
            icon={AchievementImg}
            description={project.achievement}
          />

        </div>

      </section>

      {/* GALLERY */}

      {showImageProject &&(
      <section className="space-y-10 mb-28 px-4 md:px-8 mt-10">

        <h1 className="text-2xl sm:text-3xl font-bold text-[#f18f2d]">
          Gallery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Main Image */}
          <div className="md:col-span-2">
            {project.projectImages?.[0] ? (
              <img
                src={project.projectImages[0]}
                alt="Project"
                className="w-full h-[250px] md:h-[531px] object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-[250px] md:h-[531px] border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center text-gray-500 bg-gray-100">
                Image
              </div>
            )}
          </div>

          {/* Side Images */}
          <div className="grid grid-rows-2 gap-4">

            {project.projectImages?.[1] ? (
              <img
                src={project.projectImages[1]}
                alt="Project"
                className="w-full h-[255px] object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-[255px] border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center text-gray-500 bg-gray-100">
                Image
              </div>
            )}

            {project.projectImages?.[2] ? (
              <img
                src={project.projectImages[2]}
                alt="Project"
                className="w-full h-[255px] object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-[255px] border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center text-gray-500 bg-gray-100">
                Image
              </div>
            )}

          </div>

        </div>

      </section>
      )}

    </div>
  );
};

export default ProjectDetail;

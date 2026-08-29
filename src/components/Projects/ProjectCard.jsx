
import { Link } from "react-router-dom";
import "./Project.css";
import React from "react";
import LazyImage from "@/components/ui/LazyImage";

const ProjectCard = ({
  title,
  description,
  image,
  slug,
}) => {
  return (
    <div className="w-full max-w-[420px] bg-black/10 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition duration-300 ease-in-out flex flex-col">

      {/* Image */}
      <div
        className="m-4 aspect-[1.6/1] sm:aspect-[1.7/1] md:aspect-[1.8/1] overflow-hidden"
        style={{
          clipPath:
            "polygon(0 0, 92% 0, 100% 8%, 100% 100%, 0 100%)",
        }}
      >
        <LazyImage
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 flex flex-col flex-1">

        <h2 className="text-2xl font-semibold mb-2 text-[#F88D2A]">
          {title}
        </h2>

        <p className="text-gray-600">
          {description}
        </p>

        {/* Divider */}
        <div className="mt-5 mb-4 h-px w-full bg-gray-400" />

        {/* Button */}
        <Link
          to={`/projects/${slug}`}
          className="group flex justify-center items-center w-full px-4 py-3 bg-[#12284C] text-white font-medium transition duration-300"
        >
          <span>View Project</span>

          {/* Arrow only shows on hover */}
          <span className="text-xl opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            →
          </span>
        </Link>

      </div>
    </div>
  );
};

export default ProjectCard;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/Projects/ProjectCard";
import { projectsBatch3 } from "../data/projectsBatch3";

const ProjectsBatchIII = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const updateSearch = (value) => {
    setSearch(value);
    if (!value.trim()) {
      setSuggestions([]);
      return;
    }
    setSuggestions(projectsBatch3.filter((project) => project.title.toLowerCase().startsWith(value.toLowerCase())));
  };

  const visibleProjects = projectsBatch3.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-8 sm:px-12 lg:px-16 max-w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 py-2 sm:py-14 md:py-16 lg:py-20">
        <div className="flex-1 min-w-0 content-top">
          <h1 className="text-left md:mt-0 mt-6 text-[24px] md:text-[36px] lg:text-[40px] font-bold whitespace-nowrap">
            Student Project <span style={{ color: "#dd5c0b" }}>Showcase</span>
          </h1>
          <p className="text-left text-[12px] md:text-[16px] md:whitespace-nowrap">
            Explore innovative projects created by students during the Next-Gen Engagement Program.
          </p>
        </div>

        <div className="flex-1 min-w-0 content-center">
          <div className="search-box mb-10 md:mb-0 lg:ml-28">
            <label className="search-icon" htmlFor="batch-iii-search">
              <svg className="w-6 h-6 text-neutral-400 ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </label>
            <input
              id="batch-iii-search"
              type="text"
              placeholder=" search projects..."
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
            />

            {suggestions.length > 0 && (
              <div className="suggestion-box">
                {suggestions.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    className="suggestion-item w-full text-left"
                    onClick={() => navigate(`/projects/${project.slug}`)}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-[40px]">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
            hideImageWhenMissing
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsBatchIII;

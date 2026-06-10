import { useNavigate } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";

const ProjectCard = ({project}) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md font-sans overflow-hidden">
            <div className="img-container">
                <LazyImage src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className=" px-4.5 py-2.5 flex flex-col h-full justify-between gap-3">
                <div className="project-info">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p>{project.description}</p>
                </div>
                <div className="button-container group">
                    <button className="bg-brand-primary rounded-2xl text-white w-full p-4 flex items-center justify-center gap-0 group-hover:gap-2 transition-all duration-300 overflow-hidden" onClick={() => navigate(`/projects/${project.slug}`)}>
                        View Project 
                        <span className="max-w-0 opacity-0 group-hover:max-w-10 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 ease-out flex items-center">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;

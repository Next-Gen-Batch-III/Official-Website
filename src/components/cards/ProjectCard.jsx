

const ProjectCard = ({project}) => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
            <div className="img-container">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
            </div>
            <div className=" px-4.5 py-2.5 flex flex-col gap-3">
                <div className="project-info">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p>{project.description}</p>
                </div>
                <div className="button-container">
                    <button className="bg-brand-primary rounded-2xl text-white w-full p-4">View Project</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
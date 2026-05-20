

import EdgeContainer from "../ui/EdgeContainer";


const PeopleCard = ({ name, role, image, className = "" }) => {
    return (
        <div className={`flex flex-col items-center gap-4 group relative font-sans ${className}`}>
            <EdgeContainer  edges={["bottom-right"]} edgesSize="40px">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </EdgeContainer>
            <div className="w-full h-full opacity-0 group-hover:opacity-100 absolute transition-opacity duration-300 bg-transparent">
                <EdgeContainer edges={["bottom-right"]} edgesSize="40px" className="bg-transparent" borderColor="transparent" borders={[]} bordersWidth={0}>
                    <div className="text-white opacity-100 absolute transition-opacity duration-300 flex flex-col justify-end items-start h-full w-full bg-brand-primary/60 to-transparent p-4 gap-2">
                        <h3 className="text-xl font-bold">{name}</h3>
                        <div>
                            {(role instanceof Array) ? role.map((r, index) => (
                                <ul key={index} className="list-disc list-inside text-sm">
                                    <li>{r}</li>
                                </ul>
                            )) : <p className="text-sm">{role}</p>}
                        </div>
                    </div>
                </EdgeContainer>
            </div>
        </div>
    );
}

export default PeopleCard;

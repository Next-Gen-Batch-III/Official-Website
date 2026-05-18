import { useNavigate } from "react-router-dom";


import Button from "../ui/Button";
import PeopleCard from "../cards/PeopleCard";

const PeopleSection = ({ title, link ,people }) => {
    const navigate = useNavigate();


    return (
        <section className="flex flex-col gap-10 px-5 py-10 lg:px-20">
            <div className="flex justify-between">
                <h2 className="text-[2rem] font-bold">{title}</h2>
                <div className="hidden md:block">
                    <Button onClick={() => navigate(link)} variant="brand" shadowColor="#666666">View All</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15">
                {people.map((person, index) => (
                    <PeopleCard key={index} name={person.name} role={person.role} image={person.image} />
                ))}
            </div>
            <div className="md:hidden flex justify-end w-full">
                <Button onClick={() => navigate(`/people/${link}`)} variant="brand" shadowColor="#666666">View All</Button>
            </div>
        </section>
    );
}

export default PeopleSection;
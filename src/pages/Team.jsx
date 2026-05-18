import { useParams } from "react-router-dom"
import { organizers } from "@/data/team";

import PeopleCard from "@/components/cards/PeopleCard"

const Team = () => {
    const { teamId } = useParams();
    const teams = organizers.find(t => t.name === teamId);
    if (!teams) {
        return <div>Team not found</div>
    }
    return (
        <section className="px-5 py-10 lg:px-20 flex flex-col gap-10">
            <div>
                <h1 className="text-[2.5rem] font-bold">{teams.title}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15">
                {teams.people.map((person, index) => (
                    <PeopleCard key={index} name={person.name} role={person.role} image={person.image} />
                ))}
            </div>
        </section>
    )
}

export default Team;
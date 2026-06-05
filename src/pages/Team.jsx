import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PeopleCard from "@/components/cards/PeopleCard";
import Spinner from "@/components/ui/Spinner";

const Team = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTeam(null);
        setError(false);
        import(`@/data/teams/${teamId}.js`)
            .then((mod) => setTeam(mod.default))
            .catch(() => setError(true));
    }, [teamId]);

    if (error) {
        return (
            <div className="flex justify-center pt-30 text-lg text-gray-500">
                Team not found
            </div>
        );
    }
    if (!team) {
        return (
            <div className="flex justify-center pt-30">
                <Spinner />
            </div>
        );
    }

    return (
        <section className="section-padding flex flex-col gap-10">
            <div>
                <h1 className="text-[2.5rem] font-bold">{team.title}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15">
                {team.people.map((person, index) => (
                    <PeopleCard key={index} name={person.name} role={person.role} image={person.image} />
                ))}
            </div>
        </section>
    );
};

export default Team;

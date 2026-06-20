import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PeopleCard from "@/components/cards/PeopleCard";
import PeopleCardSkeleton from "@/components/cards/PeopleCardSkeleton";

const Team = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTeam(null);
        setError(false);
        import(`@/data/${teamId}.js`)
            .then((mod) => setTeam(mod.default))
            .catch(() => setError(true));        
    }, [teamId]);
    if (error) {
        return (
            <div className="flex justify-center p-30 text-lg grow text-brand-primary">
                <span className="text-brand-secondary-red bold">404</span>Team not found
            </div>
        );
    }
    if (!team) {
        return (
            <section className="section-padding flex flex-col gap-10">
                <div>
                    <div className="h-10 w-80 animate-pulse rounded bg-gray-200" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <PeopleCardSkeleton key={i} />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="section-padding flex flex-col gap-10 min-h-[80vh]">
            <div>
                <h1 className="text-[2.5rem] font-bold">{team.title}</h1>
                <p className="mt-4 text-gray-600">{team.description}</p>
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

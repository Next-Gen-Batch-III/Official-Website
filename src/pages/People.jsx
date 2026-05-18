import React from 'react';

import PeopleCard from '@/components/cards/PeopleCard';
import PeopleSection from '@/components/layout/PeopleSection';

import { people } from '@/data/people';
import { organizers, management } from '@/data/team';


const People = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const organizersList = organizers.filter(organizer => organizer.people.some(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))).map(organizer => organizer.people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))).flat();
    const ManagerList = management.filter(manager => manager.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const peopleList = [...ManagerList, ...organizersList];
    console.log(peopleList);
    return (
        <div className="min-h-screen">
            <div className="flex justify-between flex-col lg:flex-row px-5 py-10 lg:px-20 gap-10">
                <div className="flex flex-col text-wrap md:w-1/2">
                    <h1 className="text-[2.5rem] font-bold">Meet Our <span className="text-brand-secondary-orange">People</span></h1>
                    <p>Behind every project is a great team. Our people are creative, motivated and always ready to learn. From designers to developers, we collaborate and support each other and turn idea into real impact.</p>
                </div>
                <div className="searching rounded-2xl border border-neutral-400 px-4 py-2 flex items-center gap-4 max-w-[512px] grow h-12">
                    <label className="search-icon" htmlFor="search">
                        <svg className="w-6 h-6 text-neutral-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                        </svg>
                    </label>
                    <input type="text" id="search" name="search" placeholder="Search people..." className="bg-transparent border-none focus:outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            </div>

            { (searchTerm === "") &&
                people.map((team, index) => (
                    <PeopleSection
                        key={index}
                        title={team.team}
                        link={team.link}
                        people={team.people}
                    />
                ))
            }
            { (searchTerm !== "") &&
                peopleList.length === 0 && (
                    <div className="flex flex-col items-center gap-4 py-20">
                        <h2 className="text-[1.5rem] font-bold">No people found</h2>
                        <p>Try searching for something else.</p>
                    </div>
                )
            }
            { (searchTerm !== "" && peopleList.length > 0) &&
                    <div className="flex flex-col gap-10 px-5 py-10 lg:px-20">
                        <h2 className="text-[2rem] font-bold">Search Results</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15'>
                        {peopleList.map((person, index) => (
                            (index < 15) && <PeopleCard key={index} name={person.name} role={person.role} image={person.image} />
                        ))}
                        </div>
                    </div>
            }
            
        </div>
    );
}

export default People;
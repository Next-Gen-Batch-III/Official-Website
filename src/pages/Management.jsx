import React from "react";

import PeopleCard from "@/components/cards/PeopleCard";

import { management } from "@/data/management";

const Management = () => {
  return (
    <div className="min-h-screen">

      {/* ================= OUR PEOPLE ================= */}
      <section className="our-people flex flex-col gap-5 section-padding">

        <h1 className="text-3xl md:text-4xl font-bold">Meet Management Members</h1>
         <p className="text-[12px] md:text-lg text-gray-800">The Management Team oversees the program, ensuring effective collaboration, clear direction, and successful project execution</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {management.people.map((person, index) => (
            <PeopleCard
              key={index}
              name={person.name}
              role={person.role}
              image={person.image}
            />
          ))}

        </div>

      </section>

    </div>
  );
};

export default Management;
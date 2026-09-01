import React from "react";

import PeopleCard from "@/components/cards/PeopleCard";

import { advisors } from "@/data/advisor";

const Advisor = () => {
  return (
    <div className="min-h-screen">

      {/* ================= OUR ADVISORS ================= */}
      <section className="our-mentors flex flex-col gap-5 section-padding">

        <h1 className="text-3xl md:text-4xl font-bold">Meet Our Advisors</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {advisors.people.map((person, index) => (
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

export default Advisor;
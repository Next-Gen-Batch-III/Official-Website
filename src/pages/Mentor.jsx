import React from "react";

import PeopleCard from "@/components/cards/PeopleCard";

import { mentors } from "@/data/mentor";

const Mentors = () => {
  // Group mentors by major
  const mentorsByMajor = mentors.people.reduce((groups, person) => {
    const major = person.major || "Other";

    if (!groups[major]) {
      groups[major] = [];
    }

    groups[major].push(person);

    return groups;
  }, {});

  return (
    <div className="min-h-screen">

      {/* ================= OUR MENTORS ================= */}
      <section className="our-people flex flex-col gap-4 section-padding">

        <h1 className="text-3xl md:text-4xl font-bold">
          Meet Our Mentor
        </h1>

        <p className="text-[12px] md:text-lg text-gray-800">
          Our Mentor Team provides guidance and support, helping students
          and team members improve their skills and achieve project goals.
        </p>

        {/* ================= MENTOR CATEGORIES ================= */}
        <div className="flex flex-col gap-12 mt-5">

          {Object.entries(mentorsByMajor).map(([major, people]) => (
            <div key={major} className="w-full">

                {/* Category Title — appears ONLY once */}
                <h2 className="text-3xl font-bold mb-6 hidden sm:block">
                {major}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {people.map((person, index) => (
                    <PeopleCard
                    key={index}
                    name={person.name}
                    role={person.major}
                    image={person.image}
                    />
                ))}
                </div>

            </div>
            ))}

        </div>

      </section>

    </div>
  );
};

export default Mentors;
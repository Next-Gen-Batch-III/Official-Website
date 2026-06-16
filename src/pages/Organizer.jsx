import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Sreylenn from "@/assets/participants/Sreylenn.webp";
import Sindy from "@/assets/participants/Sindy.webp";
import Ponharoth from "@/assets/participants/Ponharoth.webp";
import Chanchessika from "@/assets/participants/Chanchessika.webp";
import PeopleCard from "@/components/cards/PeopleCard";

const PRELOAD_SLUGS = [
    "developers", "designers", "proposal", "media", "logistics",
    "db-project", "cs-project", "tn-project",
    "db-trainer", "cs-trainer", "tn-trainer",
];

const organizerColumns = [
  {
    name: "Hong Sindy",
    title: "Event Program lead",
    image: Sindy,
    links: [
      { label: "Web Developer", slug: "developers" },
      { label: "UX/UI Design", slug: "designers" },
      { label: "Proposal Writer", slug: "proposal" },
      { label: "Media", slug: "media" },
      { label: "Logistic", slug: "logistics" },
    ],
  },
  {
    name: "Nin Ponharoth",
    title: "Project Program lead",
    image: Ponharoth,
    links: [
      { label: "DB Project lead", slug: "db-project" },
      { label: "CS Project lead", slug: "cs-project" },
      { label: "TN Project lead", slug: "tn-project" },
    ],
  },
  {
    name: "Kue Chanchessika",
    title: "Trainer Program lead",
    image: Chanchessika,
    links: [
      { label: "DB Trainer lead", slug: "db-trainer" },
      { label: "CS Trainer lead", slug: "cs-trainer" },
      { label: "TN Trainer lead", slug: "tn-trainer" },
    ],
  },
];

const Organizer = () => {
  const navigate = useNavigate();

  const preloadTeamImages = useCallback((slug) => {
    import(`@/data/teams/${slug}.js`).then((mod) => {
      mod.default.people.forEach((p) => {
        const img = new Image();
        img.src = p.image;
      });
    });
  }, []);

  useEffect(() => {
    PRELOAD_SLUGS.forEach((slug) => {
      import(`@/data/teams/${slug}.js`);
    });
  }, []);

  const goToOrganizer = (slug) => {
    navigate(`/people/organizers/${slug}`);
  };

  return (
    <div className="section-padding">
      <div className="flex flex-col text-wrap md:w-1/2">
        <h1 className="text-[2.5rem] font-bold">
          Meet Our <span className="text-brand-secondary-orange">People</span>
        </h1>
        <p>
          The Organizer Team is responsible for planning and coordinating events
          ensuring everything runs smoothly and on time.
        </p>
      </div>

      <div className="mt-14 flex flex-col items-center">
        <div className="relative flex flex-col items-center ">
          <PeopleCard
            className="max-w-[min(78vw,18rem)] md:max-w-[clamp(13rem,20vw,17rem)]"
            name="Seat Sreylenn"
            role="Next-Gen Program Head"
            image={Sreylenn}
          ></PeopleCard>
          <div className="h-10 mb-6 w-0.75 bg-black md:block md:mb-0" />
        </div>

        <div className="relative hidden h-12 w-[calc(100%-(100%-160px)/3)] md:block">
          <div className="absolute w-full top-0 h-6 rounded-t-3xl border-x-3 border-t-3 border-black" />
          <div className="absolute left-1/2 top-0 h-6 w-0.75 -translate-x-px bg-black" />
        </div>

        <div className="grid w-full grid-cols-1 gap-14 md:grid-cols-3 md:gap-20">
          {organizerColumns.map((column) => (
            <div key={column.title} className="flex flex-col items-center">
              <h2 className="mb-5 text-center text-lg font-bold">
                {column.title}
              </h2>

              <PeopleCard
                className="max-w-[min(78vw,18rem)] md:max-w-[clamp(13rem,20vw,17rem)]"
                name={column.name}
                role={column.title}
                image={column.image}
              ></PeopleCard>

              <div className="h-8 w-px bg-black tran" />

              <div className="flex w-full max-w-[220px] flex-col gap-3 items-center">
                {column.links.map((link) => (
                  <Button
                    key={link.slug}
                    type="button"
                    onClick={() => goToOrganizer(link.slug)}
                    onMouseEnter={() => preloadTeamImages(link.slug)}
                    variant="brand"
                    className="text-[13px] font-medium w-50"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizer;

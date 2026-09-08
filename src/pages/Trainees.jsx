
import TraineesHero from "./../components/layout/JourneyHero";
import traineesImage from "../assets/journey/trainees.jpg";
import graduate from "../assets/icon_image/graduateO.png"

import start from "../assets/icon_image/start.png"
import group from "../assets/icon_image/group.png"
import exchange from "../assets/icon_image/exchange.png"

import laptop from "../assets/icon_image/laptop.png"
import menubook from "../assets/icon_image/menubook.png"
import active from "../assets/icon_image/active.png"

import graduateblue from "../assets/icon_image/graduateblue.png"
import skill from "../assets/icon_image/skill.png"
import team2 from "../assets/icon_image/team.png"


import clock from "../assets/icon_image/clock.png"
import note from "../assets/icon_image/note.png"

import TrackCard from "./../components/cards/TrackCard";

import InfoCard from "@/components/cards/InfoCard";



/* ================= ICON SETS ================= */
const whyIcons = [start,group,exchange];

const requirementIcons = [graduate, laptop, menubook, active];

const trackIcons = {
  schedule: clock,
  note: note,
};

const benefitIcons = [skill, graduateblue, team2];

/* ================= WHY JOIN ================= */
const why = [
  {
    head: "Start With Confident",
    text: "Prepare for Year 2 with a strong foundation and greater confidence.",
  },
  {
    head: "Learn from Experienced Seniors",
    text: "Gain valuable insights and guidance from students who completed Year 2.",
  },
  {
    head: "Connect & Grow",
    text: "Biuld connections, share knowledge, and grow alongside your peers.",
  },
];

/* ================= REQUIREMENT ================= */
const requirement = [
  {
    head: "University Student",
    text: "Recently completed Year 1 and preparing to enter Year 2.",
  },
  {
    head: "Related Major",
    text: "Computer Science, IT, Digital Business, Networking, Cybersecurity.",
  },
  {
    head: "Willing to Learn",
    text: "Motivated to learn new skills and knowledge.",
  },
  {
    head: "Active Participation",
    text: "Ready to attend training sessions and participate in activities.",
  },
];
/* ================= BENEFITS ================= */
const benefit = [
  {
    head: "Skill Development",
    text: "Build new knowledge and strengthen your technical skills.",
  },
  {
    head: "Year 2 Preparation",
    text: "Gain skill and confidence to prepare for year 2.",
  },
  {
    head: "Learning Community",
    text: "Explore with Classmates & Biuld Connections with Seniors.",
  },
];

/* ================= TRACKS ================= */

const tracks = [
  {
    title: "University Tracks",
    headerColor: "bg-brand-primary",
    schedule: {
      label: "Schedule",
      day: "Monday - Thursday",
      time: "8:00 AM - 11:00 AM",
    },
    options: [
      "Computer Science",
      "Digital Business",
      "Telecommunication & Networking",
    ],
    note: "Students choose 1 program with 4 courses: 2 Core course and 2 Elective courses of their choice.",
  },
  {
    title: "High School Tracks",
    headerColor: "bg-brand-secondary-orange",
    schedule: {
      label: "Schedule",
      day: "Monday - Friday",
      time: "8:00 AM - 11:00 AM",
    },
    options: ["Technology Starter"],
    note: "Students choose 1 program with 4 courses: 2 Core course and 2 Elective courses of their choice.",
  },
];

export default function Trainees() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <TraineesHero
        headline={{
          normal: "Become a Trainee for the",
          highlight: "Next-Gen Engagement Program",
        }}
        subtitle="Join a learning community designed to help you build new skills, explore your interests, and prepare for Year 2. As a trainee, you will learn from experienced senior students, take part in engaging activities, and connect with classmates while gaining knowledge and confidence for your next academic year."
        img={traineesImage}
      />

      {/* WHY */}
      <Section
        title={
          <>
            <span className="text-brand-secondary-orange text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Why Become a</span>{" "}
            <span className="text-brand-primary text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Trainee ?</span>
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-6">
          {why.map((item, i) => {
            const icon = whyIcons[i];
            return (
              <InfoCard
                key={i}
                iconImg={icon}
                title={item.head}
                text={item.text}
                size="lg"
                bg="bg-[#F88D2A1A]"
              />
            );
          })}
        </div>
      </Section>

      {/* REQUIREMENTS */}
      <Section
        bg="bg-white"
        title={
          <>
            <span className="text-brand-secondary-orange text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Trainee</span>{" "}
            <span className="text-brand-primary text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Requirements</span>
          </>
        }
      >
        <div className="grid md:grid-cols-4 divide-x divide-gray-200">
          {requirement.map((item, i) => {
            const icon = requirementIcons[i];
            return (  
              <div key={i} className="px-6 text-center">
                <InfoCard
                  iconImg={icon}
                  title={item.head}
                  text={item.text}
                  size="lg"
                  bg="bg-white"
                />
              </div>
            );
          })}
        </div>
      </Section>

      {/* Track */}
      <Section
        bg="bg-white"
        title={
          <>
            <span className="text-brand-secondary-orange text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Learning</span>{" "}
            <span className="text-brand-primary text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Tracks</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {tracks.map((track, i) => (
            <TrackCard key={i} track={track} icon={trackIcons} />
          ))}
        </div>
      </Section>

      {/* BENEFITS */}
      <Section
        bg="bg-white"
        title={
          <>
            <span className="text-brand-secondary-orange text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Benefits</span>{" "}
            <span className="text-brand-primary text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">You’ll Receive</span>
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-6">
          {benefit.map((item, i) => {
            const icon = benefitIcons[i];
            return (
              <InfoCard
                iconImg={icon}
                title={item.head}
                text={item.text}
                size="lg"
                bg="bg-gray-100"
                iconBg="bg-transparent"
                iconColor="text-branc-primary"
              />
            );
          })}
        </div>
      </Section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, bg = "bg-white", children }) {
  return (
    <section className={`${bg} px-6 md:px-16 py-14`}>
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      {children}
    </section>
  );
}

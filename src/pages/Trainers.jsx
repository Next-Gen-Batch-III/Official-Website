import JourneyHero from "../components/layout/JourneyHero";

import trainerJourneyImage from "../assets/journey/trainerJourney.png";

import graduate from "../assets/icon_image/graduateO.png"
import book from "../assets/icon_image/book.png"
import trendingUp from "../assets/icon_image/diagram.png"
import team from "../assets/icon_image/user.png"

import laptop from "../assets/icon_image/laptop.png"
import chat from "../assets/icon_image/chat.png"
import handshake from "../assets/icon_image/handshake.png"

import diploma from "../assets/icon_image/diploma.png"
import global from "../assets/icon_image/global.png"
import team2 from "../assets/icon_image/team.png"

import clock from "../assets/icon_image/clock.png"
import note from "../assets/icon_image/note.png"

import { Users, MessageCircle, Target } from "lucide-react";

import InfoCard from "@/components/cards/InfoCard";

const whyIcons = [book, trendingUp, team];

const requirementIcons = [graduate, laptop, chat, handshake];

const benefitIcons = [diploma, global, team2];

const scheduleIcon = clock;
const optionsIcon = book; 
const noteIconImg = note;

const why = [
  {
    head: "Share Your Knowledge",
    text: "Teach what you love and help learners gain practical skills.",
  },
  {
    head: "Grow Professionally",
    text: "Enhance your profile, experience, and career opportunities.",
  },
  {
    head: "Inspire The Future",
    text: "Mentor and motivate the next generation of talent.",
  },
];

const requirement = [
  {
    head: "University Student",
    text: "Year2 - Year3",
  },
  {
    head: "Related Major",
    text: "Computer Science, IT, Digital Business, Networking, Cybersecurity",
  },
  {
    head: "Communication Skills",
    text: "Comfortable presenting and interacting with students",
  },
  {
    head: "Team Player",
    text: "Able to collaborate and support fellow trainers",
  },
];

const benefit = [
  {
    head: "Certificate of Appreciation",
    text: "Receive official recognition for your contribution",
  },
  {
    head: "Network Building",
    text: "Connect with students, trainer and industry professionals.",
  },
  {
    head: "Teamwork & Trainer Experience",
    text: "Collaborate with a passionate and supportive team.",
  },
];

const track = {
  schedule: {
    day: "Monday - Thursday",
    time: "9:00 AM - 12:15 PM",
  },
  options: [
    "Computer Science",
    "Digital Business",
    "Telecommunication & Networking",
  ],
  note: "Trainer only teaches one course per week, the other three days are for assisting other trainers.",
};

const activities = [
  {
    step: "01",
    icon: Users,
    head: "Work on Project",
    sub: "Work with your team",
    text: "Trainer work together with their team in the assigned room to develop and complete their project.",
  },
  {
    step: "02",
    icon: MessageCircle,
    head: "Weekly Progress Update",
    sub: "Discuss and update",
    text: "Meet with your mentor to discuss the project and provide a weekly progress update.",
  },
  {
    step: "03",
    icon: Target,
    head: "Advisor Meeting",
    sub: "Get feedback and advice",
    text: "Meet your advisor before Pitching Day to receive feedback, guidance, and advice to improve their project.",
  },
];

function Section({ title, bg = "bg-white", children }) {
  return (
    <section className={`${bg} px-6 md:px-16 py-14`}>
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      {children}
    </section>
  );
}

function ActivityCard({ step, icon: Icon, head, sub, text }) {
  return (
    <div className="bg-gray-100 rounded-xl p-6 h-full">
      <div className="flex items-center mb-4">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-white text-sm font-semibold shrink-0">
          {step}
        </span>
        <span className="w-6 h-[2px] bg-brand-secondary-orange shrink-0" />
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 shrink-0">
          <Icon className="w-4 h-4 text-slate-800" strokeWidth={2} />
        </span>
      </div>
      <h3 className="font-semibold text-slate-900 mb-1">{head}</h3>
      <p className="text-sm text-slate-500 mb-2">{sub}</p>
      <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
    </div>
  );
}

export default function Trainers() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <JourneyHero
        headline={{
          normal: "Become a Trainer for the",
          highlight: "Next-Gen Engagement Program",
        }}
        subtitle=" Empower the next generation of technology learners by sharing your 
              knowledge and expertise. As a trainer, you will develop
              valuable leadership, communication, and mentoring skills while
              contributing to a meaningful learning experience for students.
              Join a community dedicated to education, innovation, and
              professional growth."
        img={trainerJourneyImage}
      />

      <Section
        title={
          <>
            <span className="text-brand-secondary-orange text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Why Become a</span>{" "}
            <span className="text-brand-primary text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Trainer ?</span>
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

      <Section
        bg="bg-white"
        title={
          <>
            <span className="text-brand-secondary-orange text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Trainer</span>{" "}
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

      <Section
        bg="bg-white"
        title={
          <>
            <span className="text-brand-secondary-orange text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Training</span>{" "}
            <span className="text-brand-primary text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Tracks</span>
          </>
        }
      >
        <div className="grid md:grid-cols-4 divide-x divide-gray-200">
          <div className="px-6">
            <div className="flex items-center gap-2 mb-2">
              <img src={scheduleIcon} alt="" className="w-5 h-5" />
              <h3 className="font-semibold text-slate-900">Schedule</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              {track.schedule.day}
              <br />
              {track.schedule.time}
            </p>
          </div>

          <div className="px-6">
            <div className="flex items-center gap-2 mb-2">
              <img src={optionsIcon} alt="" className="w-5 h-5" />
              <h3 className="font-semibold text-slate-900">Options</h3>
            </div>
            <ul className="text-sm text-slate-500 leading-relaxed list-disc list-inside">
              {track.options.map((opt, i) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>
          </div>

          <div className="px-6 col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <img src={noteIconImg} alt="" className="w-5 h-5" />
              <h3 className="font-semibold text-slate-900">Note</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              {track.note}
            </p>
          </div>
        </div>
      </Section>

      <Section
        bg="bg-white"
        title={
          <>
            <span className="text-brand-secondary-orange text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Trainer</span>{" "}
            <span className="text-brand-primary text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">Project Activities</span>
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((item, i) => (
            <ActivityCard
              key={i}
              step={item.step}
              icon={item.icon}
              head={item.head}
              sub={item.sub}
              text={item.text}
            />
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


import React from "react";
import RegisterCard from "@/components/cards/RegisterCard";
import JourneyHero from "./../components/layout/JourneyHero";

import trainerJourneyImage from "../assets/journey/trainer_journey.png";
import qrImage from "../assets/journey/trainerRegisterQR.jpg";

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

import addIcon from "../assets/icon_image/add.png";
import smartphoneIcon from "../assets/icon_image/smartphone.png";
import phoneIcon from "../assets/icon_image/phone.png";
import list from "../assets/icon_image/list.png"
import checked from "../assets/icon_image/checked.png"


import TrackCard from "./../components/cards/TrackCard";

import InfoCard from "@/components/cards/InfoCard";



/* ================= ICON SETS ================= */
const whyIcons = [book, trendingUp, team];

const requirementIcons = [graduate, laptop, chat, handshake];

const trackIcons = {
  schedule: clock,
  note: note,
};

const benefitIcons = [diploma, global, team2];

/* ================= WHY JOIN ================= */
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

/* ================= REQUIREMENT ================= */
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
/* ================= REQUIREMENT ================= */
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
/* ================= REGISTER FEATURES ================= */
const feature = [
  {
    icon: smartphoneIcon,
    text: "Quick and easy registration.",
  },
  {
    icon: list,
    text: "Fill out the trainer application form.",
  },
  {
    icon: checked,
    text: "Our team will review your application.",
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
    note: "Trainer only teaches one course per week, the other three days are for assisting other trainers.",
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
    note: "Trainer only teaches one course per week, the other three days are for assisting other trainers.",
  },
];

export default function TrainerJourney() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <JourneyHero
        headline={{
          normal: "Become a Trainer for the",
          highlight: "Next-Gen Engagement Program",
        }}
        subtitle="Empower the next generation of technology learners by sharing your knowledge and expertise."
        img={trainerJourneyImage}
      />

      {/* WHY */}
      <Section
        title={
          <>
            <span className="text-brand-secondary-orange">Why Become a</span>{" "}
            <span className="text-brand-primary">Trainer ?</span>
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
            <span className="text-brand-secondary-orange">Trainer</span>{" "}
            <span className="text-brand-primary">Requirements</span>
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
            <span className="text-brand-secondary-orange">Training</span>{" "}
            <span className="text-brand-primary">Tracks</span>
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
            <span className="text-brand-secondary-orange">Benefits</span>{" "}
            <span className="text-brand-primary">You’ll Receive</span>
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

      {/* REGISTER */}
      <RegisterCard
        title="Ready To Join?"
        subtitle="Scan the QR code to start your trainer registration."
        features={feature}
        qrTitle="Register as a Trainer"
        qrDesc="Scan the QR code below to register"
        qrImage={qrImage}
        icons={{
          main: addIcon,
          phone: phoneIcon,
        }}
      />
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

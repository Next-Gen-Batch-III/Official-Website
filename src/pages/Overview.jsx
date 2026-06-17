import { useNavigate } from "react-router-dom";

import EdgeContainer from "../components/ui/EdgeContainer";
import Button from "../components/ui/Button";
import RegisterModal from "../components/ui/RegisterModal";



import heroBg from "../assets/overview/hero-img.webp";
import Logo from "../assets/logo/logoBlueNobg2.png";
import codeImg from "../assets/overview/code-reason.webp";
import connectivityImg from "../assets/overview/connectivity-reason.webp";
import commerceImg from "../assets/overview/commerce-reason.webp";
import missionIcon from "../assets/overview/mission.png";
import visionIcon from "../assets/overview/vision.png";
import { useState } from "react";

const Overview = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  return (
    <div className="font-family text-brand-primary bg-white flex flex-col gap-20 w-full">

      {/* HERO */}
      <section
        className="relative min-h-100 lg:min-h-162.5 flex items-center bg-cover bg-center section-padding"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h1 className="text-white font-bold text-xl lg:text-4xl leading-tight mb-3">
            Next-Gen Engagement Program<br />Batch 3 - 3 Departments
          </h1>
          <p className="text-white/80 text-sm max-w-md mb-6">
            Empowering students through innovation, collaboration, and real-world project experience.
          </p>
          <div className="flex flex-row gap-3">
            <Button onClick={() => setIsRegisterModalOpen(true)}>Join the Program</Button>

            <Button variant="primary" onClick={() => open("https://next-gen-registration.vercel.app/")}>
              Register for Events
            </Button>
          </div>
          <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
        </div>
      </section>

      {/* WHAT IS NEXT-GEN-3? */}
      <section className="section-padding bg-white">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 w-full">
          <div className="shrink-0 leading-none lg:text-left">
            <p className="text-brand-primary text-[2.5rem] font-bold">What is</p>
            <div className="flex items-end gap-5">
              <img src={Logo} alt="Next Gen Logo" className="w-80"/>
              <p className="text-brand-primary text-[4.75rem] font-bold font-cadt">?</p>
            </div>
          </div>
          <div className="max-w-200">
            <EdgeContainer
              edges={["top-right", "bottom-left"]}
              edgesSize="80px"
            >
              <div className="bg-brand-secondary-orange font-semibold px-6 lg:px-8 py-8 leading-relaxed flex flex-col gap-0">
                <div className="px-[40px]">
                  <p className="justify-content text-lg lg:text-2xl border-t-3 border-b-3 border-white py-5">
                    A semester-break engagement program for aspired digital students aims to promote
                    knowledge sharing between senior and junior cohorts, support academic readiness
                    through mentoring and coaching, and provides a platform for students to develop
                    innovative ideas that address real-world challenges.
                  </p>
                </div>
              </div>
            </EdgeContainer>
          </div>

        </div>
      </section>

      {/* WHY JOIN */}
      <section className="flex flex-col gap-5 section-padding">
        <div>
          <h2 className="text-[2.5rem] font-bold text-brand-secondary-orange border-b border-black pb-4">Why join Next-Gen engagement?</h2>
          <p className="text-lg pt-4">Step into a next-generation ecosystem that redefines learning through collaboration, innovation, and real-world experience.</p>
        </div>
        <div className="flex flex-col gap-20 mt-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between md:gap-20">
            <div className="w-fit h-fit">
              <EdgeContainer edges={["top-right"]} edgesSize="60px">
                <img src={codeImg} alt="Code" className="w-full h-full object-cover"/>
              </EdgeContainer>
            </div>
            <div className="flex gap-12">
              <div className="hidden md:flex items-center">
                <svg 
                    width="100%"
                    height="100%" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    className="min-w-20 max-w-25 md:block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="48" fill="currentColor" className="text-brand-secondary-orange" />
                    <path d="M38 35L23 50L38 65" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M62 35L77 50L62 65" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M55 30L45 70" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-bold text-brand-secondary-orange">Code</h2>
                <p className="text-[1.25rem] ">Developing technical expertise and problem-solving skills</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-5 md:flex-row md:items-center justify-between md:gap-20">
            <div className="flex gap-12">
              <div className="hidden md:flex items-center">
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 200 200" 
                  fill="none" 
                  className="min-w-20 max-w-25 md:block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="90" fill="#F58A27"/>

                  <circle 
                    cx="100" 
                    cy="100" 
                    r="55" 
                    stroke="white" 
                    strokeWidth="6" 
                    strokeDasharray="0 15" 
                    strokeLinecap="round" 
                    opacity="0.8"
                  />

                  <circle cx="100" cy="100" r="8" stroke="white" strokeWidth="3" className="text-brand-secondary-orange"/>

                  <path 
                    d="M100 92V72M94 104L80 115M106 104L120 115" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />

                  <g transform="translate(100, 52)">
                    <circle cx="0" cy="0" r="20" stroke="white" strokeWidth="3" fill="#f88d2a" className="text-brand-secondary-orange"/>
                    <circle cx="0" cy="-4" r="6" stroke="white" strokeWidth="3"/>
                    <path d="M-10 10C-10 5 -5 3 0 3C5 3 10 5 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </g>

                  <g transform="translate(62, 118)">
                    <circle cx="0" cy="0" r="20" stroke="white" strokeWidth="3" fill="#f88d2a" className="text-brand-secondary-orange"/>
                    <circle cx="0" cy="-4" r="6" stroke="white" strokeWidth="3"/>
                    <path d="M-10 10C-10 5 -5 3 0 3C5 3 10 5 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </g>

                  <g transform="translate(138, 118)">
                    <circle cx="0" cy="0" r="20" stroke="white" strokeWidth="3" fill="#f88d2a" className="text-brand-secondary-orange"/>
                    <circle cx="0" cy="-4" r="6" stroke="white" strokeWidth="3"/>
                    <path d="M-10 10C-10 5 -5 3 0 3C5 3 10 5 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </g>
                </svg>

              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-bold text-brand-secondary-orange">Connectivity</h2>
                <p className="text-[1.25rem]">Building networks, collaboration and knowledge sharing</p>
              </div>
            </div>
            <div className="w-fit h-fit">
              <EdgeContainer edges={["top-right"]} edgesSize="60px">
                <img src={connectivityImg} alt="Connectivity" className="w-full h-full object-cover"/>
              </EdgeContainer>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between md:gap-20">
            <div className="w-fit h-fit">
              <EdgeContainer edges={["top-right"]} edgesSize="60px">
                <img src={commerceImg} alt="Commerce" className="w-full h-full object-cover"/>
              </EdgeContainer>
            </div>
            <div className="flex gap-12">
              <div className="hidden md:flex items-center">
                <svg 
                  width="100%" 
                  height="100%"
                  viewBox="0 0 200 200" 
                  fill="none" 
                  className="min-w-20 max-w-25 md:block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="90" fill="#f88d2a"/>

                  <rect x="55" y="150" width="90" height="4" rx="2" fill="white"/>             
                  <rect x="65" y="130" width="12" height="20" rx="2" fill="white"/>
                  <rect x="83" y="115" width="12" height="35" rx="2" fill="white"/>
                  <rect x="101" y="105" width="12" height="45" rx="2" fill="white"/>
                  <rect x="119" y="90" width="12" height="60" rx="2" fill="white"/>

                  <path 
                    d="M55 125C75 125 95 110 135 65" 
                    stroke="white" 
                    strokeWidth="6" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M115 68L138 62L135 85" 
                    stroke="white" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-5 grow-0">
                <h2 className="text-4xl font-bold text-brand-secondary-orange">Commerce</h2>
                <p className="text-[1.25rem]">Encourage innovation, entrepreneurship and real-world application</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 lg:px-20 pt-6 pb-24 lg:pt-6 lg:pb-24 bg-white">
        <div className="border-b-2 border-gray-300 pb-2 mb-24">
     
          <h2 className="font-bold text-2xl lg:text-4xl text-brand-secondary-orange uppercase">
            Mission & Vision
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-25">

          <div className="bg-brand-primary text-white flex flex-col items-center py-14 lg:py-20 px-8 gap-6 text-center w-full">
            <p className="font-bold text-xl lg:text-2xl tracking-widest uppercase">Our Mission</p>
            <div className="bg-brand-secondary-orange p-6 lg:p-8">
              <img src={missionIcon} alt="Mission" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
            </div>
            <p className="text-sm lg:text-base text-white/85 leading-relaxed max-w-xs">
              To connect scholars and foster collaboration on real-world projects,
              enabling them to create and showcase impactful innovations.
            </p>
          </div>

          <div className="bg-brand-primary text-white flex flex-col items-center py-14 lg:py-20 px-8 gap-6 text-center w-full">
            <p className="font-bold text-xl lg:text-2xl tracking-widest uppercase">Our Vision</p>
            <div className="bg-brand-secondary-orange p-6 lg:p-8">
              <img src={visionIcon} alt="Vision" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
            </div>
            <p className="text-sm lg:text-base text-white/85 leading-relaxed max-w-xs">
              To empower future technology leaders through collaborative learning,
              innovation, leadership, and advanced ICT skills.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Overview;

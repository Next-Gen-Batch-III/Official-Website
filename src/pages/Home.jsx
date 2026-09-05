import { useNavigate } from "react-router-dom";
import { useState } from "react";

import EdgeContainer from "@/components/ui/EdgeContainer";
import Button from "@/components/ui/Button";
import PeopleCard from "@/components/cards/PeopleCard";
import RegisterModal from "@/components/ui/RegisterModal";
import CountdownCard from "@/components/cards/CountdownCard";

// import codeReason from "@/assets/overview/codeReason.webp";
// import connectivityReason from "@/assets/overview/connectivityReason.webp";
// import commerceReason from "@/assets/overview/commerceReason.webp";
import heroImage from "@/assets/images/home/heroImage.webp";
import orientationImage from "@/assets/images/home/orientationImage.png";
import trainingImage from "@/assets/images/home/trainingImage.png";
import nextGenDayImage from "@/assets/images/home/nextGenDayImage.jpg";

import { news } from "@/data/news";
import managementImg from "@/assets/icon_image/management.png";
import lightImg from "@/assets/icon_image/light.png";
import handshakeImg from "@/assets/icon_image/hand-shake.png";
import  advisorImg from "@/assets/icon_image/advisor.png";
import PeopleCategoryCard from "@/components/cards/PeopleCategoryCard";
import RegisterPopUp from "@/components/cards/RegisterPopUp";
import {
  FiMapPin,
  FiCheck,
} from "react-icons/fi";
import { Calendar } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const latestNews = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )[0] ?? news[0];

  const Title = ({ children, className = "" }) => {
  return (
    <div>
      <h2
        className={`font-bold text-brand-secondary-orange border-b border-black pb-4 ${className}`}
      >
        {children}
      </h2>
    </div>
  );
};
  return (
    <div className="home flex flex-col">

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="relative overflow-hidden text-white min-h-[600px] lg:min-h-[680px] flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-top sm:scale-100 scale-[1.4]"
            style={{
              transformOrigin: "center top",
            }}
          />
        </div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003B73]/100 via-[#003B73]/50 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 px-4 lg:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">

            {/* TEXT */}
            <div>
              <h1 className="font-semibold text-[1.4rem] lg:text-[2.8rem] leading-tight">
                Next-Gen Engagement Program
                <br />
                Batch 3 - 3 Departments
              </h1>

              <p className="mt-4 text-sm lg:text-xl max-w-xl">
                Get ready for the Next-Gen Event and be part of a meaningful
                learning and growth experience.
              </p>
            </div>

            {/* COUNTDOWN + BUTTONS */}
            <div className="flex flex-col items-center lg:items-end">

              <div className="w-full max-w-[420px] md:max-w-[720px]">
                <CountdownCard />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-5 w-full max-w-[520px]">

                <Button
                  className="flex-1 w-[240px]"
                   onClick={() =>
                    open("/journey")
                  }
                >
                  Explore
                </Button>

                <Button
                  variant="primary"
                  className="flex-1 w-[240px]"
                  onClick={() => setIsRegisterModalOpen(true)}
                  
                >
                  REGISTER FOR EVENTS
                </Button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="timeline flex flex-col gap-8 px-4 lg:px-20 py-10 w-full">

        <Title className="text-2xl md:text-4xl border-b-2">TIMELINE</Title>

        {/* TIMELINE */}
        <div className="relative mt-4">

          {/* MOBILE LINE */}
          <div className="absolute left-[10px] top-0 bottom-52 w-[1px] bg-brand-secondary-orange md:hidden" />

          {/* DESKTOP LINE */}
          <div className="absolute left-1/2 top-0 bottom-34 hidden md:block w-[1px] bg-brand-secondary-orange -translate-x-1/2" />


          {/* ================= ORIENTATION DAY ================= */}
          <div className="relative mb-16 flex flex-col md:grid md:grid-cols-2">

            {/* MOBILE ICON */}
            <div className="absolute left-0 bottom-52 md:hidden z-10">
              <div className="w-5 h-5 rounded-full bg-white border-3 border-[#F88D2A] shadow-md flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#12284C] flex items-center justify-center">
                </div>
              </div>
            </div>


            {/* IMAGE */}
            <div className="order-2 pl-8 mt-6 md:order-none md:pl-0 md:pr-12 md:mt-0">
              <div className="w-full max-h-[340px] max-w-[580px] overflow-hidden">
                <EdgeContainer
                  edges={["top-right"]}
                  edgesSize="var(--edge-size)"
                  borderColor="white"
                  className="[--edge-size:40px] md:[--edge-size:80px]"
                >
                  <img
                    src={orientationImage}
                    alt="Orientation Day"
                    className="block w-full h-full object-cover object-top scale-[1.2]"
                    style={{
                      transformOrigin: "center top",
                    }}
                  />
                </EdgeContainer>
              </div>
            </div>


            {/* DESKTOP ICON */}
            <div className="absolute left-1/2 bottom-34 -translate-x-1/2 z-10 hidden md:block">
              <div className="w-10 h-10 rounded-full bg-white border-3 border-[#F88D2A] shadow-md flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#12284C] flex items-center justify-center">
                  <FiCheck className="text-white w-6 h-6" />
                </div>
              </div>
            </div>


            {/* CONTENT */}
            <div className="order-1 pl-8 mt-0 md:order-none md:mt-0 md:pl-[100px] flex flex-col justify-top md:mt-4">

              <h3 className="text-2xl lg:text-4xl font-semibold text-brand-primary">
                ORIENTATION DAY
              </h3>

              <p className="text-brand-secondary-orange font-semibold text-xl md:text-2xl mt-1">
                Project Introduction
              </p>

              <ul className=" mt-1 space-y-1 text-l lg:text-2xl list-disc list-inside marker:text-[#F88D2A]">
                <p className="flex items-center justify-left gap-2">
                  <Calendar className="w-4 h-4 text-[#F88D2A]" />Date: July 30, 2026</p>
                <li className="ml-2 ">Program overview</li>
                <li className="ml-2 ">Team formation</li>
                <li className="ml-2 ">Meet mentors</li>
                <li className="ml-2 ">Project briefing</li>
              </ul>

            </div>

          </div>


          {/* ================= WEEK 1 - WEEK 5 ================= */}
          <div className="relative mb-16 flex flex-col md:grid md:grid-cols-2">

            {/* MOBILE ICON */}
            <div className="absolute left-0 bottom-52 md:hidden z-10">
              <div className="w-5 h-5 rounded-full bg-white border-3 border-[#F88D2A] shadow-md flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#12284C] flex items-center justify-center">
                </div>
              </div>
            </div>


            {/* DESKTOP CONTENT */}
            <div className="order-1 pl-8 mt-0 md:order-none md:pr-12 flex flex-col justify-top mt-4">

              <h3 className="text-2xl lg:text-4xl font-semibold text-brand-primary">
                WEEK 1 - WEEK 5
              </h3>

              <p className="text-brand-secondary-orange font-semibold mt-1 text-xl md:text-2xl">
                Training & Project Development
              </p>

              <ul className="mt-1 space-y-1 text-xl lg:text-2xl list-disc list-inside marker:text-[#F88D2A]">
                <p className="flex items-center justify-left gap-2">
                  <Calendar className="w-4 h-4 text-[#F88D2A]" />Date: Aug 17, 2026 - Sep 17, 2026</p>
                <li className="ml-2 ">Weekly training</li>
                <li className="ml-2 ">Skil development</li>
                <li className="ml-2 ">Team collaboration</li>
                <li className="ml-2 ">Project development</li>
                <li className="ml-2 ">Mentor feedback</li>
              </ul>

            </div>


            {/* DESKTOP ICON */}
            <div className="absolute left-1/2 bottom-34 -translate-x-1/2 z-10 hidden md:block">
              <div className="w-10 h-10 rounded-full bg-white border-3 border-[#F88D2A] shadow-md flex items-center justify-center">
                <FiMapPin className="text-[#12284C] w-6 h-6" />
              </div>
            </div>


            {/* IMAGE */}
            <div className="order-2 pl-8 mt-6 md:order-none md:pl-12 md:mt-0 flex justify-end">
              <div className="w-full max-h-[340px] max-w-[580px]">
                <EdgeContainer
                  edges={["bottom-left"]}
                  edgesSize="var(--edge-size)"
                  borderColor="white"
                  className="[--edge-size:40px] md:[--edge-size:80px]"
                >
                  <img
                    src={trainingImage}
                    alt="Training week 1 - week 5"
                    className="block w-full h-full aspect-[1.7/1] object-cover object-top"
                  />
                </EdgeContainer>
              </div>
            </div>

          </div>


          {/* ================= NEXT-GEN DAY ================= */}
          <div className="relative flex flex-col md:grid md:grid-cols-2">

            {/* MOBILE ICON */}
            <div className="absolute left-0 bottom-52 md:hidden z-10">
              <div className="w-5 h-5 rounded-full bg-white border-3 border-[#F88D2A] shadow-md flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#12284C] flex items-center justify-center">
                </div>
              </div>
            </div>


            {/* IMAGE */}
            <div className="order-2 pl-8 mt-6 md:order-none md:pl-0 md:pr-12 md:mt-0">
              <div className="w-full max-h-[340px] max-w-[580px]">
                <EdgeContainer
                  edges={["top-right"]}
                  edgesSize="var(--edge-size)"
                  borderColor="white"
                  className="[--edge-size:40px] md:[--edge-size:80px]"
                >
                  <img
                    src={nextGenDayImage}
                    alt="Next-Gen Day"
                    className="block w-full h-full aspect-[1.7/1] object-cover object-top"
                  />
                </EdgeContainer>
              </div>
            </div>


            {/* DESKTOP ICON */}
            <div className="absolute left-1/2 bottom-34 -translate-x-1/2 z-10 hidden md:block">
              <div className="w-10 h-10 rounded-full bg-white border-3 border-[#F88D2A] shadow-md flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#12284C] flex items-center justify-center">
                </div>
              </div>
            </div>


            {/* CONTENT */}
            <div className="order-1 pl-8 mt-0 md:order-none md:mt-0 md:pl-[100px] flex flex-col justify-top md:mt-4">

              <h3 className="text-2xl lg:text-4xl font-semibold text-brand-primary">
                NEXT-GEN DAY
              </h3>

              <p className="text-brand-secondary-orange font-semibold mt-1 text-xl md:text-2xl">
                Competition & Showcase
              </p>

              <ul className="mt-1 space-y-1 text-xl lg:text-2xl list-disc list-inside marker:text-[#F88D2A]">
                <p className="flex items-center justify-left gap-2">
                  <Calendar className="w-4 h-4 text-[#F88D2A]" />Date: 25-26th Sep, 2026</p>
                <li className="ml-2 ">Final presentation</li>
                <li className="ml-2 ">Pitch & live demo</li>
                <li className="ml-2 ">Judges'evaluation</li>
                <li className="ml-2 ">Awards & recognition</li>
              </ul>

            </div>

          </div>

        </div>
      </section>

      {/* ================= MEET OUR PEOPLE ================= */}
      <section className="meet-our-people flex flex-col gap-8 px-4 lg:px-20 py-10 w-full">

        <Title className="text-2xl md:text-4xl border-b-2">MEET OUR PEOPLE</Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <PeopleCategoryCard
            title="Managements"
            members="8"
            icon={managementImg}
            color="#F88D2A"
            iconBg="#FFF0E3"
            path="/people/management"
          />

          <PeopleCategoryCard
            title="Advisors"
            members="8"
            icon={advisorImg}
            color="#12284C"
            iconBg="#E9EDF3"
            path="/people/advisors"
          />

          <PeopleCategoryCard
            title="Mentors"
            members="16"
            icon={lightImg}
            color="#72BE22"
            iconBg="#F0F8E7"
            path="/people/mentors"
          />

          <PeopleCategoryCard
            title="Organizers"
            members="35"
            icon={handshakeImg}
            color="#C183D9"
            iconBg="#F7EFFA"
            path="/people/organizers"
          />
        </div>
      </section>


      {/* ================= NEWS ================= */}
      <section className="news flex flex-col gap-8 px-4 lg:px-20 py-10 w-full">

        <Title className="text-2xl md:text-4xl border-b-2">News & Updates</Title>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 lg:gap-30 items-center">

          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] order-1">

            <EdgeContainer
              edges={["bottom-right"]}
              edgesSize="40px"
              borders={["bottom", "right"]}
              bordersWidth="4"
            >

              <img
                src={latestNews?.thumbnail}
                alt=""
                className="w-full h-full object-cover object-top"
              />

            </EdgeContainer>

          </div>

          <div className="flex flex-col justify-between h-full order-2 md:order-2">

            <div className="mt-0 md:mt-5 lg:mt-18 flex flex-col gap-8">
              <h3 className="text-2xl font-bold mb-4">
                {latestNews?.headline}
              </h3>
              <p>
                {latestNews?.article?.slice(0, 207)}
              </p>
            </div>


            <div className="flex justify-end mt-5 lg:mt-18">

              <Button
                variant="primary"
                shadowColor="#666666"
                onClick={() => navigate(`/news`)}
              >
                All News
              </Button>

            </div>

          </div>

        </div>

      </section>
    {isRegisterModalOpen && (
      <RegisterPopUp
        onClose={() => setIsRegisterModalOpen(false)}
      />
    )}  
    </div>
  );
};


const Title = ({ children }) => {
  return (
    <div>
      <h2 className="text-[2.5rem] font-bold text-brand-secondary-orange border-b border-black pb-4">
        {children}
      </h2>
    </div>
  );
};

export default Home;
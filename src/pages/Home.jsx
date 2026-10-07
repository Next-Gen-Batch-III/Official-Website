import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import EdgeContainer from "@/components/ui/EdgeContainer";
import Button from "@/components/ui/Button";
import PeopleCard from "@/components/cards/PeopleCard";
import RegisterModal from "@/components/ui/RegisterModal";
import CountdownCard from "@/components/cards/CountdownCard";

// import codeReason from "@/assets/overview/codeReason.webp";
// import connectivityReason from "@/assets/overview/connectivityReason.webp";
// import commerceReason from "@/assets/overview/commerceReason.webp";


import { news } from "@/data/news";
import homeImage from "@/assets/images/home/homeImage.png";
import managementImg from "@/assets/icon_image/management.png";
import lightImg from "@/assets/icon_image/light.png";
import handshakeImg from "@/assets/icon_image/hand-shake.png";
import  advisorImg from "@/assets/icon_image/advisor.png";
import PeopleCategoryCard from "@/components/cards/PeopleCategoryCard";

import Phase11 from "@/assets/images/home/phase1-1.png";
import Phase12 from "@/assets/images/home/phase1-2.jpg";
import Phase13 from "@/assets/images/home/phase1-3.png";
import Phase21 from "@/assets/images/home/phase2-1.png";
import Phase22 from "@/assets/images/home/phase2-2.png";
import Phase23 from "@/assets/images/home/phase2-3.png";
import Phase31 from "@/assets/images/home/phase3-1.png";
import Phase32 from "@/assets/images/home/phase3-2.png";
import Phase33 from "@/assets/images/home/phase3-3.png";
import Phase41 from "@/assets/images/home/phase4-1.png";
import Phase42 from "@/assets/images/home/phase4-2.png";
import Phase43 from "@/assets/images/home/phase4-3.png";
import Phase51 from "@/assets/images/home/phase5-1.png";
import Phase52 from "@/assets/images/home/phase5-2.png";
import Phase53 from "@/assets/images/home/phase5-3.png";
import Phase61 from "@/assets/images/home/phase6-1.png";
import Phase62 from "@/assets/images/home/phase6-2.png";
import Phase63 from "@/assets/images/home/phase6-3.png";


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
        className="relative overflow-hidden text-white min-h-[400px] md:min-h-[500px] lg:min-h-[680px] flex items-top lg:items-center justify-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={homeImage}
            alt="Hero Image"
            className="w-full h-full object-cover object-top scale-110 md:scale-110 lg:scale-100"
            style={{
              transformOrigin: "center top",
            }}
          />
        </div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12284C]/80 via-[#12284C]/80 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 px-4 lg:px-20 w-full h-full">
            <div className="flex flex-col justify-between h-full py-10 lg:py-16 md:mb-10 lg:mb-5">

              {/* TEXT - TOP */}
              <div className="flex flex-col gap-4 lg:gap-6 items-start">
                <h1 className="font-semibold text-[1.4rem] md:text-[2.4rem] lg:text-[2.8rem] leading-tight">
                  Next-Gen Engagement Program
                  <br />
                  Batch 3 - 3 Departments
                </h1>

                <p className="text-sm md:text-xl lg:text-2xl max-w-xl">
                  Get ready for the Next-Gen Event and be part of a meaningful
                  learning and growth experience.
                </p>
              </div>

              {/* BUTTON - BOTTOM */}
              <div className="flex justify-end md:justify-end lg:justify-end mt-4 mt-40 md:mt-60 lg:mt-60 ">
                <Button
                  className="w-[200px] md:w-[300px] lg:w-[300px] h-[40px] md:h-[50px] lg:h-[50px] text-sm md:text-lg lg:text-lg font-semibold"
                  onClick={() => open("/journey")}
                >
                  Explore
                </Button>
              </div>

            </div>
          </div>
      </section>

      {/* ================= HIGHLIGHT ================= */}
      <section className="highlight flex flex-col gap-8 px-4 lg:px-20 py-10 w-full">
        <Title className="text-2xl md:text-4xl border-b-2">
          HIGHLIGHT
        </Title>
              {/* ================= PHASE 01 ================= */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_3fr] gap-8 lg:gap-2 mt-5 lg:mt-10 ">

              {/* Phase 1 */}
              <div className="flex flex-col gap-2 lg:gap-2 justify-start lg:justify-center items-start lg:items-start px-0 md:px-4 lg:px-0">
                <p className="text-[#12284C] font-semibold text-2xl md:text-4xl">
                  PHASE 01
                </p>

                <h3 className="text-brand-secondary-orange font-semibold text-xl md:text-2xl">
                Orientation Day
                </h3>

                <ul className="list-disc pl-8 space-y-1 text-xl md:text-2xl text-[#12284C] marker:text-brand-secondary-orange">
                  <li>Program overview</li>
                  <li>Team formation</li>
                  <li>Meet mentors</li>
                  <li>Project briefing</li>
                </ul>
              </div>

              {/* ================= IMAGES ================= */}
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 md:gap-2 lg:gap-3 ">

                {/* Main Image */}
                <div className="w-full h-[220px] md:h-[380px] lg:h-[380px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                  <img
                    src={Phase11}
                    alt="Example"
                    className="w-full h-full object-cover object-center scale-125"
                  />
                </div>

                {/* Two Side Images */}
                <div className=" h-[120px] md:h-[280px] lg:h-[380px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 items-center justify-center">
                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase12}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-140 md:scale-140 lg:scale-140"
                    />
                  </div>

                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase13}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-140 md:scale-130 lg:scale-125"
                    />
                  </div>
                </div>
              </div>
              </div>
            
          {/*===================== PHASE 02 =========================*/}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1.5fr] gap-8 lg:gap-2 mt-5 lg:mt-10">

              {/* ================= IMAGES ================= */}
              <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2 md:gap-2 lg:gap-3 ">

                {/* Two Side Images */}
                <div className="order-2 lg:order-1 h-[120px] md:h-[280px] lg:h-[380px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 items-center justify-center">
                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase22}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-140 md:scale-140 lg:scale-125"
                    />
                  </div>

                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase23}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-140 md:scale-125 lg:scale-125"
                    />
                  </div>
                </div>

                {/* Main Image */}
                <div className="order-1 lg:order-2 w-full h-[220px] md:h-[380px] lg:h-[380px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                  <img
                    src={Phase21}
                    alt="Example"
                    className="w-full h-full object-cover object-center scale-125"
                  />
                </div>

              </div>

              {/* ======= Text ======== */}
              <div className="order-1 lg:order-2 flex flex-col gap-2 lg:gap-2 justify-start lg:justify-center items-start lg:items-startq px-0 md:px-4 lg:px-0 ml-0 md:ml-0 lg:ml-16">
                <p className="text-[#12284C] font-semibold text-2xl md:text-4xl">
                  PHASE 02
                </p>

                <h3 className="text-brand-secondary-orange font-semibold text-xl md:text-2xl">
                Training
                </h3>

                <ul className="list-disc pl-8 space-y-1 text-xl md:text-2xl text-[#12284C] marker:text-brand-secondary-orange">
                  <li >Weekly training</li>
                  <li>Technical knowledge sharing</li>
                  <li>Hands-on training activities</li>
                  <li>Trainee skills development</li>
                </ul>
              </div>
            </div>

            {/* ================= PHASE 03================= */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_3fr] gap-8 lg:gap-2 mt-5 lg:mt-10">

              {/* Phase 3 */}
              <div className="flex flex-col gap-2 lg:gap-2 justify-start lg:justify-center items-start lg:items-start px-0 md:px-4 lg:px-0">
                <p className="text-[#12284C] font-semibold text-2xl md:text-4xl">
                  PHASE 03
                </p>

                <h3 className="text-brand-secondary-orange font-semibold text-xl md:text-2xl">
                Project Development
                </h3>

                <ul className="list-disc pl-8 space-y-1 text-xl md:text-2xl text-[#12284C] marker:text-brand-secondary-orange">
                  <li>Brainstorm ideas</li>
                  <li>Define problems</li>
                  <li>Design and develop team projects</li>
                  <li>Receive mentor feedback</li>
                  <li>Test and improve project solutions</li>
                </ul>
              </div>

              {/* ================= IMAGES ================= */}
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 md:gap-2 lg:gap-3">

                {/* Main Image */}
                <div className="w-full h-[220px] md:h-[380px] lg:h-[380px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                  <img
                    src={Phase31}
                    alt="Example"
                    className="w-full h-full object-cover object-center scale-125 md:scale-140 lg:scale-125"
                  />
                </div>

                {/* Two Side Images */}
                <div className=" h-[120px] md:h-[280px] lg:h-[380px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 items-center justify-center">
                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase32}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-140 md:scale-140 lg:scale-125"
                    />
                  </div>

                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase33}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-140 md:scale-115 lg:scale-110"
                    />
                  </div>
                </div>
              </div>
              </div>

          {/*===================== PHASE 04 =========================*/}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1.5fr] gap-8 lg:gap-2 mt-5 lg:mt-10 ">

              {/* ================= IMAGES ================= */}
              <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2 md:gap-2 lg:gap-3 ">

                {/* Two Side Images */}
                <div className="order-2 lg:order-1 h-[120px] md:h-[280px] lg:h-[380px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 items-center justify-center">
                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase42}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-145 md:scale-150 lg:scale-140"
                    />
                  </div>

                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase43}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-125 md:scale-125 lg:scale-130"
                    />
                  </div>
                </div>

                {/* Main Image */}
                <div className="order-1 lg:order-2 w-full h-[220px] md:h-[380px] lg:h-[380px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                  <img
                    src={Phase41}
                    alt="Example"
                    className="w-full h-full object-cover object-center scale-150 md:scale-140 lg:scale-140"
                  />
                </div>

              </div>

              {/* Phase 4 */}
              <div className="order-1 lg:order-2 flex flex-col gap-2 lg:gap-2 justify-start lg:justify-center items-start lg:items-start px-0 md:px-4 lg:px-0 ml-0 md:ml-0 lg:ml-16">
                <p className="text-[#12284C] font-semibold text-2xl md:text-4xl">
                  PHASE 04
                </p>

                <h3 className="text-brand-secondary-orange font-semibold text-xl md:text-2xl">
                Pitching Day
                </h3>

                <ul className="list-disc pl-8 space-y-1 text-xl md:text-2xl text-[#12284C] marker:text-brand-secondary-orange">
                  <li>Present project ideas</li>
                  <li>Demonstrate key features</li>
                  <li>Answer judges' questions</li>
                  <li>Receive feedback</li>
                </ul>
              </div>
            </div>


              {/* ================= PHASE 05================= */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_3fr] gap-8 lg:gap-2 mt-5 lg:mt-10 ">

              {/* Phase 5 */}
              <div className="flex flex-col gap-2 lg:gap-2 justify-start lg:justify-center items-start lg:items-start px-0 md:px-4 lg:px-0">
                <p className="text-[#12284C] font-semibold text-2xl md:text-4xl">
                  PHASE 05
                </p>

                <h3 className="text-brand-secondary-orange font-semibold text-xl md:text-2xl">
                Showcase
                </h3>

                <ul className="list-disc pl-8 space-y-1 text-xl md:text-2xl text-[#12284C] marker:text-brand-secondary-orange">
                  <li>Showcase completed projects</li>
                  <li>Live project demonstrations</li>
                  <li>Interact with visitors and guests</li>
                  <li>Share ideas and innovations</li>
                </ul>
              </div>

              {/* ================= IMAGES ================= */}
               <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 md:gap-2 lg:gap-3">

                {/* Main Image */}
                <div className="w-full h-[220px] md:h-[380px] lg:h-[380px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                  <img
                    src={Phase51}
                    alt="Example"
                    className="w-full h-full object-cover object-center scale-125 md:scale-140 lg:scale-125"
                  />
                </div>

                {/* Two Side Images */}
                <div className=" h-[120px] md:h-[280px] lg:h-[380px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 lg:gap-3 items-center justify-center">
                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase52}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-145 md:scale-145 lg:scale-140"
                    />
                  </div>

                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase53}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-145 md:scale-145 lg:scale-140"
                    />
                  </div>
                </div>
              </div>
              </div>
            
          {/*===================== PHASE 06 =========================*/}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[3fr_1.5fr] gap-8 lg:gap-2 lg:mt-10">

              {/* ================= IMAGES ================= */}
              <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2 md:gap-2 lg:gap-3 ">

                
                {/* Two Side Images */}
                <div className="order-2 lg:order-1 h-[120px] md:h-[280px] lg:h-[380px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 lg:gap-3 items-center justify-center">
                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase62}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-140 md:scale-145 lg:scale-125"
                    />
                  </div>

                  <div className="min-h-0 h-[120px] md:h-[240px] lg:h-[180px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                    <img
                      src={Phase63}
                      alt="Example"
                      className="w-full h-full object-cover object-center scale-140 md:scale-145 lg:scale-125"
                    />
                  </div>
                </div>

                {/* Main Image */}
                <div className="order-1 lg:order-2 w-full h-[220px] md:h-[380px] lg:h-[380px] overflow-hidden rounded-[10px] md:rounded-[20px]">
                  <img
                    src={Phase61}
                    alt="Example"
                    className="w-full h-full object-cover object-center scale-125 md:scale-145 lg:scale-125"
                  />
                </div>

              </div>

              {/* Phase 6 */}
              <div className="order-1 lg:order-2 flex flex-col gap-2 lg:gap-2 justify-start lg:justify-center items-start lg:items-start px-0 md:px-4 lg:px-0 ml-0 md:ml-0 lg:ml-16">
                <p className="text-[#12284C] font-semibold text-2xl md:text-4xl">
                  PHASE 06
                </p>

                <h3 className="text-brand-secondary-orange font-semibold text-xl md:text-2xl">
                Awards & Closing Ceremony
                </h3>

                <ul className="list-disc pl-8 space-y-1 text-xl md:text-2xl text-[#12284C] marker:text-brand-secondary-orange">
                  <li >Awards presentation</li>
                  <li>Certificate distribution</li>
                  <li>Achievements recognition</li>
                  <li>Closing remarks</li>
                  <li>Group photos</li>
                </ul>
              </div>
            </div>
      </section>

      {/* ================= MEET OUR PEOPLE ================= */}
      <section className="meet-our-people flex flex-col gap-8 px-4 lg:px-20 py-10 w-full">

        <Title className="text-2xl md:text-4xl border-b-2">MEET OUR PEOPLE</Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
         
          <Link to="/people/management" className="w-full">
            <PeopleCategoryCard
              title="Managements"
              members="8"
              icon={managementImg}
              color="#F88D2A"
              iconBg="#FFF0E3"
              path="/people/management"
            />
          </Link>
          {/*
          <Link to="/people/advisors" className="w-full">
          
            <PeopleCategoryCard
              title="Advisors"
              members="8"
              icon={advisorImg}
              color="#12284C"
              iconBg="#E9EDF3"
              path="/people/advisors"
            />
          </Link>
          */}

          <Link to="/people/mentors" className="w-full">
            <PeopleCategoryCard
              title="Mentors"
              members="16"
              icon={lightImg}
              color="#72BE22"
              iconBg="#F0F8E7"
              path="/people/mentors"
            />
          </Link>

          <Link to="/people/organizers" className="w-full">
            <PeopleCategoryCard
              title="Organizers"
              members="35"
              icon={handshakeImg}
              color="#C183D9"
              iconBg="#F7EFFA"
              path="/people/organizers"
            />
          </Link>
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
              <Link to={latestNews?.slug ? `/news/${latestNews.slug}` : "/news"} className="block h-full w-full">
                <img
                  src={latestNews?.thumbnail}
                  alt={latestNews?.headline || "Latest news"}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                />
              </Link>
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
    {/* {isRegisterModalOpen && (
      <RegisterPopUp
        onClose={() => setIsRegisterModalOpen(false)}
      />
    )}   */}
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
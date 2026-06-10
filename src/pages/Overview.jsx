import EdgeContainer from "../components/ui/EdgeContainer";
import heroBg from "../assets/overview/hero-img.png";
import codeImg from "../assets/overview/code-reason.png";
import connectivityImg from "../assets/overview/connectivity-reason.png";
import commerceImg from "../assets/overview/commerce-reason.png";
import codeIcon from "../assets/overview/code.png";
import connectivityIcon from "../assets/overview/connectivity.png";
import commerceIcon from "../assets/overview/commerce.png";
import missionIcon from "../assets/overview/mission.png";
import visionIcon from "../assets/overview/vision.png";

const Overview = () => {
  return (
    <div className="font-family text-brand-primary bg-white">

      {/* HERO */}
      <section
        className="relative min-h-100 lg:min-h-162.5 flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 px-6 lg:px-20 py-14 lg:py-28">
          <h1 className="text-white font-bold text-xl lg:text-4xl leading-tight mb-3">
            Next-Gen Engagement Program<br />Batch 3 - 3 Departments
          </h1>
          <p className="text-white/80 text-sm max-w-md mb-6">
            Empowering students through innovation, collaboration, and real-world project experience.
          </p>
          <div className="flex flex-row gap-3">
            <div className="w-fit">
              <EdgeContainer
                edges={["bottom-right"]}
                edgesSize="10px"
                borders={[]}
                bordersWidth={0}
                borderColor="transparent"
              >
                <button className="text-brand-secondary-orange text-xs font-bold px-5 py-2 uppercase tracking-wider bg-white hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                  Join the Program
                </button>
              </EdgeContainer>
            </div>

            <div className="w-fit">
              <EdgeContainer
                edges={["bottom-right"]}
                edgesSize="10px"
                borders={[]}
                bordersWidth={0}
                borderColor="transparent"
              >
                <button className="bg-brand-secondary-orange text-white text-xs font-bold px-5 py-2 uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
                  Register for Events
                </button>
              </EdgeContainer>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS NEXT-GEN-3? */}
      <section className="bg-white min-h-screen flex items-center justify-center px-20  pt-20 pb-5">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mx-auto">

          <div className="shrink-0 leading-none text-center lg:text-left ">
            <p className="text-brand-primary text-3xl font-bold mb-1">What is</p>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-brand-secondary-orange font-extrabold text-7xl">NEXT</span>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-brand-primary font-extrabold text-7xl">GEN</span>
                <span className="text-brand-secondary-orange font-extrabold text-5xl">-3</span>
                <span className="text-gray-700 font-extrabold text-6xl">?</span>
              </div>
            </div>
          </div>

          <EdgeContainer
            edges={["top-right", "bottom-left"]}
            edgesSize="43px"
            borders={[]}
            bordersWidth={0}
            borderColor="transparent"
          >
            <div className="bg-brand-secondary-orange font-semibold px-6 lg:px-8 py-5 leading-relaxed flex flex-col gap-0 w-[90vw] lg:w-[600px]">
              <div className="w-full h-px bg-white/60 mb-4" />
              <p className="text-justify text-base lg:text-2xl">
                A semester-break engagement program for aspired digital students aims to promote
                knowledge sharing between senior and junior cohorts, support academic readiness
                through mentoring and coaching, and provides a platform for students to develop
                innovative ideas that address real-world challenges.
              </p>
              <div className="w-full h-px bg-white/60 mt-4" />
            </div>
          </EdgeContainer>

        </div>
      </section>

      {/* WHY JOIN */}
      <section className="px-6 lg:px-20 py-10 bg-white">
        <div className="border-b-2 border-gray-300 pb-2 mb-4">
          <h2 className="font-bold text-2xl lg:text-4xl text-brand-secondary-orange uppercase">
            Why Join Next-Gen Engagement?
          </h2>
        </div>
        <p className="text-base lg:text-lg mb-10">
          Step into a next-generation ecosystem that combines learning through collaboration, innovation, and real-world experience.
        </p>

        <div className="flex flex-col gap-10">

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:items-center">
            <div className="h-52 lg:h-72 w-full">
              <EdgeContainer edges={["top-right"]} edgesSize="40px" borders={[]} bordersWidth={0} borderColor="transparent" className="h-full">
                <img src={codeImg} alt="Coding session" className="w-full h-52 lg:h-72 object-cover" />
              </EdgeContainer>
            </div>
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4">
              <div className="bg-brand-secondary-orange text-white p-3 mt-0.5 shrink-0 rounded-full">
                <img src={codeIcon} alt="Code" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-2xl lg:text-3xl mb-1 text-brand-secondary-orange">Code</h3>
                <p className="text-base lg:text-lg leading-relaxed">
                  Developing technical expertise and problem-solving skills.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:items-center">
            <div className="h-52 lg:h-72 w-full lg:order-2">
              <EdgeContainer edges={["bottom-left"]} edgesSize="40px" borders={[]} bordersWidth={0} borderColor="transparent" className="h-full">
                <img src={connectivityImg} alt="Connectivity" className="w-full h-52 lg:h-72 object-cover" />
              </EdgeContainer>
            </div>
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4 lg:order-1">
              <div className="bg-brand-secondary-orange text-white p-3 mt-0.5 shrink-0 rounded-full">
                <img src={connectivityIcon} alt="Connectivity" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-2xl lg:text-3xl mb-1 text-brand-secondary-orange">Connectivity</h3>
                <p className="text-base lg:text-lg leading-relaxed">
                  Building networks, collaboration, and knowledge sharing.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:items-center">
            <div className="h-52 lg:h-72 overflow-hidden w-full">
              <EdgeContainer edges={["top-right"]} edgesSize="110px" borders={[]} bordersWidth={0} borderColor="transparent" className="h-full">
                <img src={commerceImg} alt="Commerce activity" className="w-full h-52 lg:h-72 object-cover" />
              </EdgeContainer>
            </div>
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4">
              <div className="bg-brand-secondary-orange text-white p-3 mt-0.5 shrink-0 rounded-full">
                <img src={commerceIcon} alt="Commerce" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-2xl lg:text-3xl mb-1 text-brand-secondary-orange">Commerce</h3>
                <p className="text-base lg:text-lg leading-relaxed">
                  Encouraging innovation, entrepreneurship, and real-world application.
                </p>
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
import EdgeContainer from "../components/ui/EdgeContainer";
import heroImg from "../assets/pitchingday/heroImg.png";

import team1 from "../assets/pitchingday/domner.png";
import team2 from "../assets/pitchingday/invos.png";
import team3 from "../assets/pitchingday/songket.png";
import team4 from "../assets/pitchingday/lifegood.png";
import team5 from "../assets/pitchingday/kotchomnol.png";
import team6 from "../assets/pitchingday/passkru.png";
import team7 from "../assets/pitchingday/veaja.png";
import team8 from "../assets/pitchingday/angket.png";

import {
  UserCircle,
  ClipboardCheck,
  Trophy,
  MonitorPlay,
  FileQuestion,
  Camera,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

const aboutCards = [
  {
    icon: UserCircle,
    title: "Semi Round",
    description:
      "Each of the 16 teams has to pitch their project to the judges, sharing their problem, solution, key features, and the value their project aims to create.",
  },
  {
    icon: ClipboardCheck,
    title: "Judge Evaluation",
    description:
      "The judges review and assess each team's project and presentation, considering how clearly the idea is communicated and how effectively the proposed solution addresses the problem.",
  },
  {
    icon: Trophy,
    title: "Final Round",
    description:
      "8 teams advance to the Final Round, where they have the opportunity to further showcase and defend their projects.",
  },
];

const finalists = [
  { name: "DOMNER", image: team1, tag: "Team 01" },
  { name: "INVOS", image: team2, tag: "Team04" },
  { name: "Songket", image: team3, tag: "Team6" },
  { name: "LifeGood", image: team4, tag: "Team8" },
  { name: "KotChomnol", image: team5, tag: "Team9" },
  { name: "PassKru", image: team6, tag: "Team11" },
  { name: "VEAJA", image: team7, tag: "Team12" },
  { name: "Angket", image: team8, tag: "Team13" },
];

// Pitching Day Activities data
const activities = [
  {
    icon: MonitorPlay,
    title: "Project Presentation",
    description: "Each team has 5 minutes to present their project.",
  },
  {
    icon: FileQuestion,
    title: "Q&A Session",
    description:
      "Judges has 10 minutes to ask questions and teams explain their ideas and decisions.",
  },
  {
    icon: Camera,
    title: "Group Photo Session",
    description:
      "A special moment to thank and appreciate our judges, followed by a group photo with all participants and judges.",
  },
];

// What to Expect data
const expectations = [
  {
    icon: Lightbulb,
    title: "Share Ideas",
    description: "Explain the problem, solution, and impact behind your project.",
  },
  {
    icon: Rocket,
    title: "Show Your Innovation",
    description: "Teams demonstrate their ideas, solutions, and project impact.",
  },
  {
    icon: Users,
    title: "Meet & Connect",
    description:
      "Connect with other finalist teams, judges, and participants.",
  },
];

const PeachCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#FFF4EA] rounded-xl px-6 py-8 flex flex-col items-center text-center h-full">
    <div className="w-16 h-16 rounded-full bg-[#FBDFC4] flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-brand-secondary-orange" strokeWidth={1.75} />
    </div>
    <h3 className="font-bold text-[#0E2A57] text-base sm:text-lg mb-2">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
      {description}
    </p>
  </div>
);

const GrayCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#EEF0F2] rounded-xl px-6 py-8 flex flex-col items-center text-center h-full">
    <Icon className="w-9 h-9 text-[#0E2A57] mb-4" strokeWidth={1.75} />
    <h3 className="font-bold text-[#0E2A57] text-sm sm:text-base mb-2">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
      {description}
    </p>
  </div>
);

const FinalistCard = ({ finalist }) => (
  <div className="bg-[#FFF4EA] overflow-hidden rounded-md h-full flex flex-col">
    <img
      src={finalist.image}
      alt={finalist.name}
      className="w-full h-28 sm:h-32 md:h-36 object-cover"
    />
    <div className="px-3 py-2 flex items-center justify-between">
      <span className="font-bold text-xs sm:text-sm text-[#0E2A57]">
        {finalist.name}
      </span>
      <span className="text-[10px] text-gray-400">{finalist.tag}</span>
    </div>
  </div>
);

const SectionHeading = ({ orange, navy }) => (
  <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
    <span className="text-brand-secondary-orange">{orange}</span>{" "}
    <span className="text-[#0E2A57]">{navy}</span>
  </h2>
);

const PitchingDay = () => {
  return (
    <main className="bg-white text-brand-primary">
      <section className="bg-[#0E2A57] px-5 sm:px-8 md:px-10 py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Pitching Day
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-secondary-orange mb-4">
              Top 8 Finalists
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-lg">
              Meet the Top 8 Project Teams selected to compete in the Final Round and present 
              their innovative solutions to the judges.
            </p>
          </div>

          <div className="relative p-2">
            <EdgeContainer
              borders={["top", "right", "bottom", "left"]}
              bordersWidth={2}
              borderColor="#0E2A57"
              edges={["top-right"]}
              edgesSize="24px"
              className="overflow-hidden bg-white">
              <img
                src={heroImg}
                alt="Pitching Day"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </EdgeContainer>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16">
        <SectionHeading orange="About" navy="Pitching Day" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          {aboutCards.map((card) => (
            <PeachCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 pb-10 sm:pb-14 md:pb-16">
        <SectionHeading orange="Top 8" navy="Finalists" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto items-stretch">
          {finalists.map((finalist) => (
            <FinalistCard key={finalist.name} finalist={finalist} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16">
        <SectionHeading orange="Pitching Day" navy="Activities" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          {activities.map((card) => (
            <GrayCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 pb-10 sm:pb-14 md:pb-16">
        <SectionHeading orange="What to" navy="Expect" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          {expectations.map((card) => (
            <GrayCard key={card.title} {...card} />
          ))}
        </div>
      </section>
      
      <section className="border-t border-gray-200 px-4 sm:px-6 md:px-10 py-6 sm:py-8">
        <p className="text-center text-brand-secondary-orange font-bold text-3xl tracking-wide mb-6">
          BATCH III
        </p>
      </section>

    </main>
  );
};

export default PitchingDay;
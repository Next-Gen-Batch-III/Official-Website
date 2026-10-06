import EdgeContainer from "../components/ui/EdgeContainer";
import heroImg from "../assets/awardDay/heroImg.png";

import songket from "../assets/pitchingday/songket.png";
import passkru from "../assets/pitchingday/passkru.png";
import veaja from "../assets/pitchingday/veaja.png";
import jakkho from "../assets/pitchingDay/jakkho.png";
import angket from "../assets/pitchingday/angket.png";
import domner from "../assets/pitchingday/domner.png";

import {
  Scan,
  Trophy,
  Handshake,
  MousePointerClick,
  HeartHandshake,
  BookOpen,
  HandHeart,
  Compass,
  Gamepad2,
  Medal,
} from "lucide-react";

const aboutCards = [
  {
    icon: Scan,
    title: "Project Showcase",
    description:
      "All 16 team showcase their projects through interactive booths, where participants can explore, test, and ask questions about their work.",
  },
  {
    icon: Trophy,
    title: "Award Ceremony",
    description:
      "The organization celebrates the program community by presenting certificates to trainers, mentors, advisors, organizers, and winning teams.",
  },
];

const certificates = [
  {
    icon: Handshake,
    title: "Sponsors",
    description:
      "Appreciating sponsors for their generous support and contribution to the success of the program.",
  },
  {
    icon: MousePointerClick,
    title: "Advisors",
    description: "Appreciating advisors for their valuable guidance and expertise.",
  },
  {
    icon: HeartHandshake,
    title: "Mentors",
    description:
      "Celebrating mentors who supported and guided students throughout the program.",
  },
  {
    icon: BookOpen,
    title: "Trainers",
    description:
      "Recognizing trainers for their dedication and contribution to student learning.",
  },
  {
    icon: HandHeart,
    title: "Organizers",
    description:
      "Recognizing organizers for their effort in planning and making the program possible.",
  },
];

const competitionAwards = [
  { rank: "Top2", name: "SongKet", image: songket, tag: "team6" },
  { rank: "Top1", name: "PassKru", image: passkru, tag: "team11", first: true },
  { rank: "Top3", name: "VEAJA", image: veaja, tag: "team12" },
];

const specialAwards = [
  { award: "Best Audience Favorite Award", name: "JAKKHO", image: jakkho, tag: "team5" },
  { award: "Best Innovation Award", name: "AngKet", image: angket, tag: "team13" },
  { award: "Best Social Impact Award", name: "DOMNER", image: domner, tag: "team1" },
];

const expectations = [
  {
    icon: Compass,
    title: "Explore Projects",
    description: "Discover and experience what students have created.",
  },
  {
    icon: Gamepad2,
    title: "Play & Connect",
    description: "Join booth games, interact with teams, and collect gifts.",
  },
  {
    icon: Medal,
    title: "Celebrate Together",
    description:
      "Celebrate the achievements and contributions of the entire program community.",
  },
];

// ── SHARED COMPONENTS ──
const SectionHeading = ({ orange, navy }) => (
  <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
    <span className="text-brand-secondary-orange">{orange}</span>{" "}
    <span className="text-[#0E2A57]">{navy}</span>
  </h2>
);

const PeachCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#FFF4EA] rounded-2xl px-6 sm:px-10 py-8 flex flex-col items-center text-center h-full">
    <div className="w-16 h-16 rounded-full bg-[#FBDFC4] flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-brand-secondary-orange" strokeWidth={1.75} />
    </div>
    <h3 className="font-bold text-[#0E2A57] text-base sm:text-lg mb-2">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const GrayCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#EEF0F2] rounded-2xl px-6 py-10 flex flex-col items-center text-center h-full">
    <Icon className="w-9 h-9 text-[#0E2A57] mb-6" strokeWidth={1.75} />
    <h3 className="font-bold text-[#0E2A57] text-sm sm:text-base mb-2">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const CertificateItem = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center px-4 py-2">
    <div className="w-16 h-16 rounded-full bg-[#FBDFC4] flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-brand-secondary-orange" strokeWidth={1.75} />
    </div>
    <h3 className="font-bold text-[#0E2A57] text-sm sm:text-base mb-2">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const TeamCard = ({ image, name, tag, imageClass = "h-44 md:h-[185px]" }) => (
  <div className="bg-[#FFF4EA] overflow-hidden rounded-md shadow-sm">
    <img
      src={image}
      alt={name}
      className={`w-full object-cover ${imageClass}`}
    />
    <div className="px-4 py-3 flex items-center justify-between">
      <span className="font-bold text-sm sm:text-base text-[#0E2A57]">{name}</span>
      <span className="text-[10px] text-gray-400">{tag}</span>
    </div>
  </div>
);

const AwardDay = () => {
  return (
    <main className="bg-white text-brand-primary">
      <section className="bg-[#0E2A57] px-5 sm:px-8 md:px-10 py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Award Day
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-brand-secondary-orange mb-4">
              Celebrating Excellence
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-lg">
              A special day to celebrate the achievements, creativity, and
              dedication of the teams throughout the program.
            </p>
          </div>

          <div className="relative p-2">
            <EdgeContainer
              borders={["top", "right", "bottom", "left"]}
              bordersWidth={2}
              borderColor="#0E2A57"
              edges={["bottom-right"]}
              edgesSize="24px"
              className="overflow-hidden bg-white"
            >
              <img
                src={heroImg}
                alt="Award Day"
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </EdgeContainer>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16">
        <SectionHeading orange="About" navy="Award Day" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-7xl mx-auto items-stretch">
          {aboutCards.map((card) => (
            <PeachCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 pb-10 sm:pb-14 md:pb-16">
        <SectionHeading orange="Certificate" navy="Recognition" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 max-w-7xl mx-auto md:divide-x md:divide-gray-300">
          {certificates.map((item) => (
            <CertificateItem key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 pb-10 sm:pb-14 md:pb-16">
        <SectionHeading orange="Competition" navy="Awards" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto items-end">
          {competitionAwards.map((t) => (
            <div key={t.rank}>
              <h3 className="text-center text-brand-secondary-orange font-bold text-3xl sm:text-4xl mb-4 md:mb-6">
                {t.rank}
              </h3>
              <TeamCard
                image={t.image}
                name={t.name}
                tag={t.tag}
                imageClass={t.first ? "h-52 md:h-[220px]" : "h-44 md:h-[185px]"}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 pb-10 sm:pb-14 md:pb-16">
        <SectionHeading orange="Special" navy="Awards" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-start">
          {specialAwards.map((t) => (
            <div key={t.award}>
              <h3 className="text-center text-[#0E2A57] font-bold text-sm sm:text-base mb-4">
                {t.award}
              </h3>
              <TeamCard image={t.image} name={t.name} tag={t.tag} />
            </div>
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
        <p className="text-center text-brand-secondary-orange font-bold text-lg sm:text-xl tracking-wide mb-6">
          BATCH III
        </p>
      </section>
    </main>
  );
};

export default AwardDay;
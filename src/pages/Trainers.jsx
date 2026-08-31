import EdgeContainer from "../components/ui/EdgeContainer";
import {
  BookOpenText,
  TrendingUp,
  Users,
  GraduationCap,
  Laptop,
  MessageCircle,
  Handshake,
  Clock,
  ScrollText,
  Award,
  Globe2,
} from "lucide-react";
import heroImg from "../assets/journey/trainerJourney.png";

const whyCards = [
  {
    icon: BookOpenText,
    title: "Share Your Knowledge",
    description:
      "Teach what you love and help learners gain practical skills.",
  },
  {
    icon: TrendingUp,
    title: "Grow Professionally",
    description:
      "Enhance your profile, experience, and career opportunities.",
  },
  {
    icon: Users,
    title: "Inspire The Future",
    description: "Mentor and motivate the next generation of talent.",
  },
];

const requirements = [
  {
    icon: GraduationCap,
    title: "University Student",
    description: "Year 2 - Year 3",
  },
  {
    icon: Laptop,
    title: "Related Major",
    description: "Computer Science, IT, Digital Business, Networking, Cybersecurity",
  },
  {
    icon: MessageCircle,
    title: "Communication Skills",
    description: "Comfortable presenting and interacting with students",
  },
  {
    icon: Handshake,
    title: "Team Player",
    description: "Able to collaborate and support fellow trainers",
  },
];

const tracks = [
  {
    title: "University Tracks",
    headerColor: "bg-[#0E2A57]",
    schedule: ["Monday - Thursday", "8:00 AM - 11:00 AM"],
    options: [
      "Computer Science",
      "Digital Business",
      "Telecommunication & Networking",
    ],
    note: "Trainer only teaches one course per week, the other three days are for  assisting other trainers.",
  },
  {
    title: "High School Tracks",
    headerColor: "bg-brand-secondary-orange",
    schedule: ["Monday - Friday", "8:00 AM - 11:00 AM"],
    options: ["Technology Starter"],
    note: "Trainer only teaches one course per week, the other three days are for  assisting other trainers.",
  },
];

const benefits = [
  {
    icon: ScrollText,
    title: "Certificate of Appreciation",
    description: "Receive official recognition for your contribution.",
  },
  {
    icon: Globe2,
    title: "Network Building",
    description: "Connect with students, trainer and industry professionals.",
  },
  {
    icon: Award,
    title: "Teamwork & Trainer Experience",
    description: "Collaborate with a passionate and supportive team.",
  },
];

const WhyCard = ({ card }) => {
  const Icon = card.icon;
  return (
    <div className="bg-orange-50 rounded-xl p-6 sm:p-8 text-center h-full flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-100 flex items-center justify-center mb-4 sm:mb-5">
        <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-brand-secondary-orange" />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-brand-primary mb-2">
        {card.title}
      </h3>
      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
        {card.description}
      </p>
    </div>
  );
};

const RequirementItem = ({ item, isLast }) => {
  const Icon = item.icon;
  return (
    <div className="relative flex-1 flex flex-col items-center text-center px-4 sm:px-6">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-secondary-orange" />
      </div>
      <h3 className="text-sm sm:text-base font-bold text-brand-primary mb-1.5">
        {item.title}
      </h3>
      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-50">
        {item.description}
      </p>

      {!isLast && (
        <span className="hidden md:block absolute right-0 top-4 bottom-4 w-px bg-neutral-200" />
      )}
    </div>
  );
};

const TrackCard = ({ track }) => (
  <div className="bg-white shadow-lg overflow-hidden rounded-2xl h-full flex flex-col">
    <div
      className={`${track.headerColor} text-white text-center font-bold text-sm sm:text-base py-4 rounded-t-2xl`}
    >
      {track.title}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-5 sm:p-6">
      <div>
        <div className="flex items-center gap-2 text-brand-primary font-bold text-sm mb-2">
          <Clock className="w-4 h-4 text-brand-secondary-orange shrink-0" />
          Schedule
        </div>
        {track.schedule.map((line) => (
          <p key={line} className="text-xs sm:text-sm text-neutral-500">
            {line}
          </p>
        ))}
      </div>

      <div className="sm:border-l sm:border-neutral-100 sm:pl-4 md:pl-6">
        <p className="font-bold text-sm text-brand-primary mb-2">Options</p>
        <ul className="space-y-1">
          {track.options.map((option) => (
            <li
              key={option}
              className="text-xs sm:text-sm text-neutral-500 flex items-start gap-1.5"
            >
              <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-auto">
      <div className="border-t border-neutral-100" />

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4">
        <div className="flex items-center gap-2 text-brand-primary font-bold text-sm mb-2">
          <ScrollText className="w-4 h-4 text-brand-secondary-orange shrink-0" />
          Note
        </div>
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
          {track.note}
        </p>
      </div>
    </div>
  </div>
);

const BenefitCard = ({ benefit }) => {
  const Icon = benefit.icon;
  return (
    <div className="bg-neutral-100 rounded-lg p-6 sm:p-8 text-center h-full flex flex-col items-center">
      <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-brand-primary mb-4" />
      <h3 className="text-sm sm:text-base font-bold text-brand-primary mb-2">
        {benefit.title}
      </h3>
      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
        {benefit.description}
      </p>
    </div>
  );
};

const Trainer = () => {
  return (
    <main className="bg-white text-brand-primary">
      <section className="bg-[#0E2A57] px-5 sm:px-8 md:px-10 py-20 sm:py-32 md:py-54">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-10 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
              Become a Trainer for the{" "}
              <span className="text-brand-secondary-orange">
                Next-Gen Engagement Program
              </span>
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mt-5 max-w-xl">
              Empower the next generation of technology learners by sharing your 
              knowledge and expertise. As a trainer, you will develop
              valuable leadership, communication, and mentoring skills while
              contributing to a meaningful learning experience for students.
              Join a community dedicated to education, innovation, and
              professional growth.
            </p>
          </div>

          <EdgeContainer
            borders={["top", "right", "bottom", "left"]}
            bordersWidth={2}
            borderColor="#0E2A57"
            edges={["top-right"]}
            edgesSize="24px"
            className="overflow-hidden bg-white/5"
          >
            <img
              src={heroImg}
              alt="Trainer session"
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />
          </EdgeContainer>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-2">
          Why Become a <span className="text-brand-secondary-orange">Trainer</span> ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mt-8 sm:mt-10 md:mt-12 items-stretch">
          {whyCards.map((card) => (
            <WhyCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16 bg-neutral-50">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
          <span className="text-brand-secondary-orange">Trainer</span> Requirements
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8 md:gap-0">
          {requirements.map((item, i) => (
            <RequirementItem
              key={item.title}
              item={item}
              isLast={i === requirements.length - 1}
            />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
          <span className="text-brand-secondary-orange">Training</span> Tracks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {tracks.map((track) => (
            <TrackCard key={track.title} track={track} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16 bg-neutral-50">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
          <span className="text-brand-secondary-orange">Benefits</span> You'll Receive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Trainer;
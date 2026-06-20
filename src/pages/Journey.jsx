import EdgeContainer from "../components/ui/EdgeContainer";
import heroImg from "../assets/journey/heroImg.webp";
import phase1 from "../assets/journey/phase1.png";
import phase2 from "../assets/journey/phase2.jpg";
import phase3 from "../assets/journey/phase3.jpg";

// ── Phase data
const phases = [
  {
    number: 1,
    image: phase1,
    title: "Phase 1 : Training",
    description:
      "Build your foundation with guided sessions and hands-on practice.",
    points: ["Weekly training", "Team formation", "Practical projects"],
  },
  {
    number: 2,
    image: phase2,
    title: "Phase 2 : Project Development",
    description:
      "Work in teams and apply your skills to create real solutions.",
    points: [
      "Idea development",
      "Team collaboration",
      "Mentor and advisor feedback",
    ],
  },
  {
    number: 3,
    image: phase3,
    title: "Phase 3 : Competition & Showcase",
    description:
      "Showcase your project through a presentation, receive feedback from judges, and compete for awards.",
    points: [
      "Final project presentation and live demo",
      "Pitching and evaluation by judges",
      "Awards and recognition",
    ],
  },
];

const PhaseBadge = ({ number }) => (
  <div
    className="
      absolute top-3 left-3 z-20
      bg-brand-secondary-orange text-white
      font-bold text-xs sm:text-sm
      w-8 h-8 sm:w-10 sm:h-10
      flex items-center justify-center rounded-md">
    {number}
  </div>
);

/** Phase Card */
const PhaseCard = ({ phase }) => (
  <div className="bg-[#0E2A57] shadow-lg overflow-hidden relative h-full flex flex-col">
    <PhaseBadge number={phase.number} />
    <div className="relative p-3 sm:p-4 pb-0">
      <EdgeContainer
        borders={["top", "right", "bottom", "left"]}
        bordersWidth={2}
        borderColor="#0E2A57"
        edges={["top-right"]}
        edgesSize="20px"
        className="overflow-hidden bg-white">
        <img
          src={phase.image}
          alt={phase.title}
          className="w-full h-40 sm:h-44 md:h-48 object-cover"
        />
      </EdgeContainer>
    </div>

    <div className="px-4 sm:px-5 py-5 flex flex-col flex-1">
      <h3
        className="
          text-lg sm:text-[22px]
          font-extrabold text-[#F7931E]
          leading-snug mb-3">
        {phase.title}
      </h3>

      <p
        className="
          text-xs sm:text-[13px]
          leading-relaxed text-white/80 mb-5">
        {phase.description}
      </p>

      <ul
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {phase.points.map((point) => (
          <li
            key={point}
            className="
              flex items-start gap-2
              text-xs sm:text-sm
              text-white/90 leading-relaxed">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F7931E] shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Journey = () => {
  return (
    <main className="bg-white text-brand-primary">
      {/* ── HERO ── */}
      <section className="relative w-full h-105 sm:h-130 md:h-150 overflow-hidden">
        <img
          src={heroImg}
          alt="Next-Gen's Day"
          className="w-full h-full object-cover"/>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,40,76,0.75) 35%, transparent 70%)",
          }}
        />

        <div
          className="
            absolute bottom-0 w-full
            bg-brand-secondary-orange
            px-5 sm:px-8 md:px-10
            py-4 sm:py-5 md:py-6">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100">
            Program Journey
          </p>

          <h1 className="text-base sm:text-lg md:text-xl text-neutral-100 font-semibold">
            Learn. Build. Showcase.
          </h1>

          <p className="text-[11px] sm:text-xs text-neutral-100 mt-1 max-w-3xl">
            A hands-on experience designed to take you from
            foundational skills to real project presentation.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16">
        <h2
          className="
            text-center
            text-2xl sm:text-3xl md:text-4xl
            font-bold uppercase
            text-brand-secondary-orange
            mb-8 sm:mb-10 md:mb-12">
          Program Structure
        </h2>

        <div
          className="
            grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
            gap-5 sm:gap-6 md:gap-8
            max-w-7xl mx-auto
            items-stretch">
          {phases.map((phase) => (
            <PhaseCard key={phase.number} phase={phase} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Journey;

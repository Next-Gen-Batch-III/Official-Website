import heroImg from "../assets/partner&sponsors/heroImg.png";

import smartLogo from "../assets/logo/partner/smart-logo.webp";
import daunpenhLogo from "../assets/logo/partner/dp.webp";
import amsLogo from "../assets/logo/partner/ams.webp";
import cctLogo from "../assets/logo/partner/theCambodiaChinaTimes.webp";
import coderisticLogo from "../assets/logo/partner/coderistic.webp";
import geologyLogo from "../assets/logo/partner/geologyClubCambodia.webp";
import bookmeLogo from "../assets/logo/partner/bookme.webp";

const sponsors = [
  {
    category: "Gold Sponsor",
    logo: smartLogo,
    alt: "Smart 5G",
    name: "Smart Axiata:",
    description:
      "Through generous financial funding, exclusive prize giveaways, and active involvement on the Final Stage Jury Panel to evaluate and provide essential feedback on youth projects.",
  },
  {
    category: "Silver Sponsor",
    logo: daunpenhLogo,
    alt: "Daun Penh Cloud",
    name: "DAUN PENH CLOUD:",
    description:
      "Through the provision of valuable cloud credits, service vouchers, and technical tools for trainers, along with dedicated mentorship on the Final Stage Jury Panel.",
  },
  {
    category: "Media Sponsor",
    logo: amsLogo,
    alt: "AMS",
    name: "AMS Education:",
    description:
      "Through comprehensive media coverage, expert guidance on responsible digital communication for trainers, and active participation on the Final Stage Jury Panel.",
  },
  {
    category: "Media Sponsor",
    logo: cctLogo,
    alt: "The Cambodia China Times",
    name: "CC-Times:",
    description:
      "Through extensive news coverage across digital platforms, expanding program awareness and reaching students and youth nationwide.",
  },
  {
    category: "Community Partner",
    logo: coderisticLogo,
    alt: "Coderistic",
    name: "Coderistic:",
    description:
      "Through active community promotion and strategic mentorship, serving as advisors to guide and evaluate student project teams.",
  },
  {
    category: "Community Partner",
    logo: geologyLogo,
    alt: "Geology Club Cambodia",
    name: "GEOLOGY CLUB:",
    description:
      "Through dedicated student outreach across academic networks, driving youth engagement and interest in the program.",
  },
  {
    category: "Ticket Partner",
    logo: bookmeLogo,
    alt: "BookMe+",
    name: "BookMe+:",
    description:
      "Through the deployment and management of a seamless digital ticketing and registration platform for all participating students and attendees.",
  },
];

const SponsorRow = ({ sponsor, reverse }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-20 lg:gap-x-28 items-center">
    <div
      className={`bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] px-6 py-6 min-h-[200px] md:min-h-[230px] flex flex-col items-center text-center ${
        reverse ? "md:order-2" : "md:order-1"
      }`}
    >
      <h3 className="text-brand-secondary-orange font-bold text-xl sm:text-2xl mb-4">
        {sponsor.category}
      </h3>
      <div className="flex-1 flex items-center justify-center w-full">
        <img
          src={sponsor.logo}
          alt={sponsor.alt}
          className="max-h-32 sm:max-h-40 w-auto max-w-full object-contain"
        />
      </div>
    </div>

    <div className={reverse ? "md:order-1" : "md:order-2"}>
      <p className="text-sm sm:text-base text-[#0E2A57] leading-relaxed pb-4 border-b border-gray-400">
        <span className="font-bold">{sponsor.name}</span> {sponsor.description}
      </p>
    </div>
  </div>
);

const SponsorsPartners = () => {
  return (
    <main className="bg-white text-brand-primary">
      <section>
        <img
          src={heroImg}
          alt="Final Stage Jury Panel"
          className="w-full h-72 sm:h-96 md:h-[480px] object-cover"
        />
      </section>

      <section className="px-4 sm:px-6 md:px-10 pt-10 sm:pt-14 md:pt-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0E2A57] mb-3">
            Our Sponsors &amp; Partners
          </h1>
          <p className="text-sm sm:text-base text-[#0E2A57] leading-relaxed pb-5 border-b border-gray-300">
            The Next-Gen Engagement Program (NGEP – Batch III) extends our
            heartfelt appreciation to all our sponsors and partners for their
            generous contributions, continuous guidance, and belief in youth
            empowerment.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-20">
          {sponsors.map((sponsor, i) => (
            <SponsorRow
              key={`${sponsor.name}-${i}`}
              sponsor={sponsor}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SponsorsPartners;
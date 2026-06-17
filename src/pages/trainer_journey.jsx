import trainerJourneyImage from "../assets/journey/trainer_journey.png";
import addIcon from "../assets/icon_image/add.png";
import checkIcon from "../assets/icon_image/checked.png";
import qrImage from "../assets/journey/trainerRegisterQR.jpg";
import listIcon from "../assets/icon_image/list.png";
import smartphoneIcon from "../assets/icon_image/smartphone.png";
import phoneIcon from "../assets/icon_image/phone.png";
import JourneyCard from "./../components/cards/JourneyCard";
import { positions } from "./../data/joining-roles";
import RegisterCard from "@/components/cards/RegisterCard";
import JourneyHero from "./../components/layout/JourneyHero";

const feature = [
  {
    icon: smartphoneIcon,
    text: "Quick and easy registration.",
  },
  {
    icon: listIcon,
    text: "Fill out the trainer application form.",
  },
  {
    icon: checkIcon,
    text: "Our team will review your application.",
  },
];

const TrainerJourney = () => {
  const pagePosition = positions[0];
  return (
    <div>
      {/*Trainer Hero Section*/}
      <JourneyHero
        headline={{
          normal: "Become a Trainer for the",
          highlight: "Next-Gen Engagement Program",
        }}
        subtitle="Empower the next generation of technology learners by sharing your
            knowledge and expertise. As a trainer, you will develop valuable
            leadership, communication, and mentoring skills while contributing
            to a meaningful learning experience for students. Join a community
            dedicated to education, innovation, and professional growth."
        img={trainerJourneyImage}
      />
      {/*Title Section*/}
      <section className="bg-white gap-4 px-4 md:px-16 items-center">
        <h1 className="text-[2rem] font-bold mb-12 mt-8 text-center">
          <span className="text-brand-secondary-orange">Why Become</span>{" "}
          <span className="text-brand-primary">a Trainer?</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pagePosition.items.map((item, index) => (
            <JourneyCard
              key={index}
              icon={item.icon}
              head={item.head}
              desc={item.desc}
            />
          ))}
        </div>
      </section>

      {/* form registration */}
      <RegisterCard
        //  Left
        title="Ready To Join?"
        subtitle="Scan the QR code to start your trainer registration."
        features={feature}
        //Right
        qrTitle="Register as a Trainer"
        qrDesc="Scan the QR code below to register"
        qrImage={qrImage}
        //Icons
        icons={{
          main: addIcon,
          phone: phoneIcon,
        }}
      />
    </div>
  );
};

export default TrainerJourney;

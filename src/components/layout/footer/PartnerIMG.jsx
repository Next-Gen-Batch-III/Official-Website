import img1 from "../../../assets/logo/partner/CADT-IDT.webp";
import img2 from "../../../assets/logo/partner/Midas.webp";
import img3 from "../../../assets/logo/partner/Geology Club, CAMBODIA.webp";
import img4 from "../../../assets/logo/partner/The Cambodia China Times.webp";
import img5 from "../../../assets/logo/partner/Green Bakery & Coffee.webp";

const partnerRows = [
  [
    {
      img: img1,
      name: "CADT-IDT",
      frameClassName: "h-14 w-[190px] sm:h-10 sm:w-[180px] md:h-15 md:w-[250px]",
      imageClassName: "object-contain p-1",
    },
    {
      img: img2,
      name: "Midas",
      frameClassName: "h-14 w-[100px] sm:h-10 sm:w-[110px] md:h-15 md:w-[150px]",
      imageClassName: "object-contain p-1",
    },
  ],
  [
    {
      img: img3,
      name: "Geology Club, CAMBODIA",
      frameClassName:
        "w-15 h-15 sm:w-14 sm:h-14 md:w-18 md:h-18 rounded-full bg-white",
      imageClassName: "rounded-full object-contain p-1",
    },
    {
      img: img4,
      name: "The Cambodia China Times",
      frameClassName:
        "w-15 h-15 sm:w-14 sm:h-14 md:w-18 md:h-18 rounded-full bg-white",
      imageClassName: "rounded-full object-contain p-1",
    },
    {
      img: img5,
      name: "Green Bakery & Coffee",
      frameClassName:
        "w-15 h-15 sm:w-14 sm:h-14 md:w-18 md:h-18 rounded-full bg-white",
      imageClassName: "rounded-full object-contain p-1",
    },
  ],
];

const PartnerIMG = () => {
  const renderPartnerLogo = (partner) => (
    <div
      key={partner.name}
      className={`
        flex items-center justify-center
        overflow-hidden
        ${partner.frameClassName}
      `}
    >
      <img
        className={`w-full h-full ${partner.imageClassName}`}
        src={partner.img}
        alt={partner.name}
      />
    </div>
  );

  return (
    <div className="mt-4 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 px-4">
      {partnerRows.map((partners, index) => (
        <div key={index} className="flex w-full justify-center">
          <div
            className={`flex flex-wrap items-center justify-center ${
              index === 0 ? "gap-5 sm:gap-8" : "gap-3 sm:gap-5"
            }`}
          >
            {partners.map(renderPartnerLogo)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerIMG;

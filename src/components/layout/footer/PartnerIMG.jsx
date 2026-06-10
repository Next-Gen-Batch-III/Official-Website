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
      frameClassName: "h-12 w-[250px] sm:h-[58px] sm:w-[270px]",
      imageClassName: "object-contain",
    },
    {
      img: img2,
      name: "Midas",
      frameClassName: "h-14 w-[104px] sm:h-[64px] sm:w-[120px]",
      imageClassName: "object-contain",
    },
  ],
  [
    {
      img: img3,
      name: "Geology Club, CAMBODIA",
      frameClassName: "size-[74px] rounded-full bg-white sm:size-[78px]",
      imageClassName: "rounded-full object-contain",
    },
    {
      img: img4,
      name: "The Cambodia China Times",
      frameClassName: "size-[74px] rounded-full bg-white sm:size-[78px]",
      imageClassName: "rounded-full object-contain",
    },
    {
      img: img5,
      name: "Green Bakery & Coffee",
      frameClassName: "size-[74px] rounded-full bg-white sm:size-[78px]",
      imageClassName: "rounded-full object-contain",
    },
  ],
];

const PartnerIMG = () => {
  const renderPartnerLogo = (partner) => (
    <div
      key={partner.name}
      className={`shrink-0 overflow-hidden ${partner.frameClassName}`}
    >
      <img
        className={`h-full w-full ${partner.imageClassName}`}
        src={partner.img}
        alt={partner.name}
      />
    </div>
  );

  return (
    <div className="mt-2 flex w-full max-w-[520px] flex-col items-center gap-6 px-4 sm:mt-3">
      {partnerRows.map((partners, index) => (
        <div
          key={index}
          className="flex w-full justify-center overflow-x-auto"
        >
          <div
            className={`flex min-w-max items-center justify-center ${
              index === 0 ? "gap-7 sm:gap-10" : "gap-4 sm:gap-6"
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

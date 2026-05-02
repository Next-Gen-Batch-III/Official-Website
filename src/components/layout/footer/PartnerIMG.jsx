import img1 from "../../../assets/logo/partner/CADT-IDT.webp";
import img2 from "../../../assets/logo/partner/Midas.webp";
import img3 from "../../../assets/logo/partner/Geology Club, CAMBODIA.webp";
import img4 from "../../../assets/logo/partner/The Cambodia China Times.webp";
import img5 from "../../../assets/logo/partner/Green Bakery & Coffee.webp";

const PartnerIMG = () => {
  const partnersRow1 = [
    {
      img: img1,
      name: "CADT-IDT",
    },
    {
      img: img2,
      name: "Midas",
    },
  ];

  const partnersRow2 = [
    {
      img: img3,
      name: "Geology Club, CAMBODIA",
    },
    {
      img: img4,
      name: "The Cambodia China Times",
    },
    {
      img: img5,
      name: "Green Bakery & Coffee",
    },
  ];

  return (
    <div className="mt-5 flex flex-col gap-4">
      {/* Row1 */}
      <div className="w-auto h-12 flex gap-10 justify-center">
        {partnersRow1.map((pr, i) => (
          <img className="w-full h-full" key={i} src={pr.img} alt={pr.name} />
        ))}
      </div>
      {/* Row2 */}
      <div className="flex gap-10 justify-center">
        {partnersRow2.map((pr, i) => (
          <img className="h-15 rounded-[100%]" key={i} src={pr.img} alt={pr.name} />
        ))}
      </div>
    </div>
  );
};

export default PartnerIMG;

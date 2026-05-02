const PartnerIMG = () => {
  const partnersRow1 = [
    {
      img: "img1",
      name: "img1",
    },
    {
      img: "img2",
      name: "img2",
    },
    {
      img: "img3",
      name: "img3",
    },
    {
      img: "img4",
      name: "img4",
    },
    {
      img: "img5",
      name: "img5",
    },
  ];

  const partnersRow2 = [
    {
      img: "img6",
      name: "img6",
    },
    {
      img: "img7",
      name: "img7",
    },
    {
      img: "img8",
      name: "img8",
    },
    {
      img: "img9",
      name: "img9",
    },
  ];

  return (
    <div className="mt-5 flex flex-col gap-4">
      {/* Row1 */}
      <div className="flex gap-10 justify-center">
        {partnersRow1.map((pr, i) => (
          <img
            className="w-12 h-12 rounded-full bg-gray-600"
            key={i}
            src={pr.img}
            alt={pr.name}
          />
        ))}
      </div>

      {/* Row2 */}
      <div className="flex gap-10 justify-center">
        {partnersRow2.map((pr, i) => (
          <img
            className="w-12 h-12 rounded-full bg-gray-600"
            key={i}
            src={pr.img}
            alt={pr.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerIMG

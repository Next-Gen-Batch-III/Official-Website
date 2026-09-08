const InfoCard = ({
  Icon,
  iconImg,
  title,
  text,
  size = "md",
  bg = "bg-white",
  iconBg = "bg-orange-100",
}) => {
  const circleSize = size === "lg" ? "w-24 h-24" : "w-14 h-14";


  return (
    <div
      className={`${bg} rounded-xl p-6 text-center flex flex-col items-center justify-center h-full`}
    >
      {/* WRAPPER */}
      <div
        className={`${circleSize} flex items-center justify-center rounded-full ${iconBg} mb-4`}
      >
        {/* IMG ICON */}
         {typeof iconImg === "string" ? (
          <img src={iconImg} alt="" className="w-12 h-12 object-contain" />
        ) : (
          iconImg
        )}
      </div>

      {/* TEXT */}
      <h3 className="font-semibold text-xl text-brand-primary mb-1">{title}</h3>

      <p className="text-sm text-gray-500 max-w-[220px]">{text}</p>
    </div>
  );
};

export default InfoCard;

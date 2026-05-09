import React from "react";
import "./Project.css";


const HighlightCard = ({
  title,
  color,
  icon,
  description,
}) => {
  return (
    <div className="relative bg-gray-100 p-6 pt-12 w-[400px] min-h-[350px]">

      {/* Cut Corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-[#0B2341]" />

      {/* Title Bar */}
      <div
        className={`absolute top-[-12px] left-1/2 -translate-x-1/2 ${color} text-white px-8 py-2 rounded-md font-bold text-2xl`}
      >
        {title}
      </div>

      {/* Icon */}
      <div className="flex justify-center mt-4">
        <img
          src={icon}
          alt=""
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Description */}
      <p className="text-center text-gray-700 mt-4 leading-7">
        {description}
      </p>
    </div>
  );
};

export default HighlightCard;
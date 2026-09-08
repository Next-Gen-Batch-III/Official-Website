// import { on } from "node:cluster";
// import { text } from "node:stream/consumers";
import { FiUsers, FiArrowRight } from "react-icons/fi";
import {useState} from "react";
// import { useNavigate } from "react-router-dom";
const PeopleCategoryCard = ({
  title,
  members,
  icon,
  color = "#F88D2A",
  iconBg = "#FFF0E3",
  path,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  return (
    <div
    onMouseEnter={()=> setIsHoveredCard(true)}
    onMouseLeave={()=> setIsHoveredCard(false)}
      className="
        w-full
        h-[320px]
        bg-white
        border
        border-[#E5E5E5]
        rounded-[10px]
        shadow-[0_2px_5px_rgba(0,0,0,0.12)]
        px-4
        py-5
        flex
        flex-col
        items-center
        justify-between
        transition
        hover:shadow-[0_4px_10px_rgba(0,0,0,0.4)]
      "
    >

      {/* ICON */}
      <div
        className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <img
          src={icon}
          alt=""
          className="w-[58px] h-[58px] object-contain"
        />
      </div>


      {/* TITLE */}
      <div className="flex flex-col">

        <h3 className="text-[28px] font-bold text-black">
          {title}
        </h3>

        {/* UNDERLINE */}
        <div
          
          className="h-[2px] mt-1 rounded-full justify-start transition-all"
          style={{ backgroundColor: color ,
            width: isHoveredCard ? "100%" : "50px",
          }}
        />

      </div>


      {/* BOTTOM */}
      <div className="w-full flex items-center justify-between">

        {/* MEMBERS */}
        <div className="flex items-center gap-2">
          <FiUsers
            className="w-8 h-8"
            style={{ color }}
            />
          <span className="text-[14px] text-black">
            {members} Members
          </span>
        </div>

        {/* ARROW */}
        <button
        onClick={() => navigate(path)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          w-[38px]
          h-[38px]
          rounded-full
          flex
          items-center
          justify-center
          transition
          hover:scale-110
        "
        style={{
          backgroundColor: isHovered || isHoveredCard ? "white" : color,
          border: `1px solid ${color}`,
        }}
      >
        <span
          className="text-[18px] transition"
          style={{
            color: isHovered || isHoveredCard ? color : "white",
          }}
        >
          →
        </span>
    </button>
      </div>

    </div>
  );
};

export default PeopleCategoryCard;
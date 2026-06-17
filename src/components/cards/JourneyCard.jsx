

const JourneyCard = ({ icon, head, desc }) => {
  return (
    <>
      <div className="bg-[#F88D2A]/10 p-10 md:p-20 rounded-lg shadow-md flex flex-col items-center">
        <div className="w-30 h-30 bg-[#F88D2A]/10 rounded-full flex items-center justify-center mb-6">
          <img
            src={icon}
            alt={head}
            className="w-16 h-16 mx-auto mb-4"
          />
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">
          {head}
        </h3>
        <p className="text-gray-600 text-center">
          {desc}
        </p>
      </div>
    </>
  );
};
export default JourneyCard;

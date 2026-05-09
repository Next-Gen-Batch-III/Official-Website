const ProjectDetailCard = ({ title, subtitle, description, image }) => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">

      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom Glass Rectangle */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-500/20 backdrop-blur-[2px]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6 text-white">

          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            {title}
          </h1>

          {/* Divider */}
          <div className="w-full h-[1px] bg-orange-400/80 my-3"></div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/90">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
};

export default ProjectDetailCard;
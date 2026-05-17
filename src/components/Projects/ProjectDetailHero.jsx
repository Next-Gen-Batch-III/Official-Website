const ProjectDetailHero = ({ title, subtitle, description, image }) => {
  return (
    <div className="relative w-full overflow-hidden">

      {/* IMAGE */}
      <div className="w-full h-[25vh] sm:h-[50vh] md:h-[50vh] lg:h-screen overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-[50%_10%]"
        />
      </div>

      {/* MOBILE CONTENT */}
      <div className="block md:hidden bg-blue-100 px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

        {subtitle && (
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        )}

        <div className="w-full h-[2px] bg-orange-400 my-3"></div>

        <p className="text-sm text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>

      {/* DESKTOP OVERLAY */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full bg-blue-500/40 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-5 text-white">

          <h1 className="text-3xl font-bold">{title}</h1>

          {subtitle && (
            <p className="text-sm md:text-base text-white/80 mt-1">
              {subtitle}
            </p>
          )}

          <div className="w-full h-[2px] bg-orange-400 my-3"></div>

          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            {description}
          </p>

        </div>
      </div>

    </div>
  );
};
export default ProjectDetailHero;
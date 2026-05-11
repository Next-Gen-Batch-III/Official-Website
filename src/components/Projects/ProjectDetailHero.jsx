const ProjectDetailHero = ({ title, subtitle, description, image }) => {
  return (
  <div className="relative w-full h-[50vh] sm:h-[95vh] md:h-[110vh] lg:h-[120vh] overflow-hidden">

      {/* Background Image */}
    <picture>
      <source srcSet={image} media="(max-width: 640px)" />
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </picture>
      

      {/* Bottom Glass Rectangle */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-500/20 backdrop-blur-[2px]">

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-12 py-4 sm:py-6 text-white">

          {/* Title */}
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-white/80 mt-1">
              {subtitle}
            </p>
          )}

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

export default ProjectDetailHero;
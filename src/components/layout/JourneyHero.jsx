const JourneyHero = ({ headline, subtitle, img }) => {
  return (
    <>
      <section className="bg-brand-primary grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-12 md:py-32 items-center">
        {/* Text Section */}
        <div className="flex flex-col gap-2 items-start items-center px-4 md:px-16">
          <h1 className="font-bold text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] text-white">
            {headline.normal}
            <span className="text-brand-secondary-orange">
              <br />
              {headline.highlight}
            </span>
          </h1>

          <p className="text-[1.1rem] text-white">{subtitle}</p>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0 px-4 md:px-16">
          <div className="w-full lg:w-full h-auto overflow-hidden">
            <img
              src={img}
              className="w-full h-full object-cover object-top"
              alt="Trainer Journey"
            />
          </div>

          <div
            className="absolute bottom-0 right-0 
                    border-l-[60px] md:border-l-[100px] lg:border-l-[120px] 
                    border-b-[60px] md:border-b-[100px] lg:border-b-[120px] 
                    border-l-transparent 
                    border-b-[#14284C]"
          ></div>
        </div>
      </section>
    </>
  );
};
export default JourneyHero;

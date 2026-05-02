const RecentNews = ({ thumbnail, headline, subtitle, date }) => {
  return (
    <>
        <div className="w-full flex flex-col gap-8 mt-10 mb-10 lg:flex-row">
          <div className="lg:w-[35%] cursor-pointer h-80">
            <img className="w-full h-full bg-gray-400" src={thumbnail} alt="Thumbnail" />
          </div>
          <div className="flex flex-col justify-center lg:w-[65%] lg:px-10">
            <h4 className="font-bold text-[24px] text-brand-primary">{headline}</h4>
            <p className="text-brand-secondary-gray mb-5">{date} | News</p>
            <p>{subtitle}</p>
          </div>
        </div>
    </>
  );
};
export default RecentNews;

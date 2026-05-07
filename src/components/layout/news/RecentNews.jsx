import EdgeContainer from "./../../ui/EdgeContainer";
import {  Link } from 'react-router-dom'

const RecentNews = ({ slug, thumbnail, headline, subtitle, date }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-8 mt-10 mb-10 lg:flex-row">
        <Link to={`/news/${slug}`} className="lg:w-[42%] cursor-pointer">
          <div>
            <EdgeContainer
              borders={["bottom", "right"]}
              borderColor="#14284C"
              bordersWidth={5}
              edges={["bottom-right"]}
              edgesSize="60px"
              className="w-full"
            >
              <img className="w-full md:h-150 lg:h-85" src={thumbnail} alt={headline} />
            </EdgeContainer>
          </div>
        </Link>

        <div className="flex flex-col lg:pt-10 lg:w-[58%] lg:px-10">
          <h4 className="font-bold text-[24px] text-brand-primary">
            {headline}
          </h4>
          <p className="text-brand-secondary-gray mb-5">{date} | News</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
};
export default RecentNews;

import { Link } from "react-router-dom";

const NewsCard = ({ slug, thumbnail, headline, date }) => {
  return (
    <>
      <Link to={`/news/${slug}`} className="block h-full">
        <div className="flex h-92 flex-col bg-[#D9D9D9] shadow-[4px_4px_0px_#14284C] cursor-pointer">
          <img
            className="w-full h-48.5 bg-gray-400 object-cover"
            src={thumbnail}
            alt={headline}
          />
          <div className="flex flex-col flex-1 justify-between px-4 py-4">
            <h4 className="line-clamp-4 overflow-hidden text-[16px] text-brand-primary font-bold">
              {headline}
            </h4>
            <p className="text-brand-secondary-gray">{date}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default NewsCard;

import { Link } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";

const NewsCard = ({ slug, thumbnail, headline, date }) => {
  const placeholderBg = "bg-gray-400";
  return (
    <>
      <Link to={`/news/${slug}`}>
        <div className="flex flex-col h-92 bg-[#D9D9D9] shadow-[4px_4px_0px_#14284C] cursor-pointer font-sans">
          <div className="w-full aspect-[16/9] overflow-hidden">
            <LazyImage
              className={`w-full h-full ${placeholderBg} object-cover`}
              src={thumbnail}
              alt={headline}
            />
          </div>
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

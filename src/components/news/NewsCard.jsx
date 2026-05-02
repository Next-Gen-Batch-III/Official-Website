import { news } from "@/data/news";

const NewsCard = ({ thumbnail, headline, date }) => {
  return (
    <>
      <div className="flex flex-col bg-[#D9D9D9] shadow-[4px_4px_0px_#14284C] cursor-pointer">
        <img className="w-full h-48.5 bg-gray-400" src={thumbnail} alt="Thumbnail" />
        <div className="flex flex-col flex-1 justify-between px-4 py-4">
          <h4 className="text-[16px] text-brand-primary font-bold">
            {headline}
          </h4>
          <p className="text-brand-secondary-gray">{date}</p>
        </div>
      </div>
    </>
  );
};
export default NewsCard;

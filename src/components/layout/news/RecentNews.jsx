import EdgeContainer from "./../../ui/EdgeContainer";
import LazyImage from "@/components/ui/LazyImage";
import { Link } from "react-router-dom";

const RecentNews = ({ slug, thumbnail, headline, article, date }) => {
  const getPreviewText = (article, maxLength = 180) => {
    if (!article) return "";

    // remove extra spaces
    const cleanText = article.replace(/\s+/g, " ").trim();

    if (cleanText.length <= maxLength) return cleanText;

    return cleanText.slice(0, maxLength) + "...";
  };
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
              <LazyImage
                className="w-full md:h-150 lg:h-85 object-cover"
                src={thumbnail}
                alt={headline}
              />
            </EdgeContainer>
          </div>
        </Link>

        <div className="flex flex-col lg:pt-10 lg:w-[58%] lg:px-10">
          <h4 className="font-bold text-[24px] text-brand-primary">
            {headline}
          </h4>
          <p className="text-brand-secondary-gray mb-5">{date} | News</p>
          <p>{getPreviewText(article)}</p>
        </div>
      </div>
    </>
  );
};
export default RecentNews;

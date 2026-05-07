import RecentNews from "@/components/layout/news/RecentNews";
import NewsCard from "@/components/layout/news/NewsCard";
import NewsSection from "../components/layout/news/NewsSection";
import { news } from "@/data/news";

const News = () => {
  return (
    <>
      <div className="px-8 lg:px-25 mt-8 mb-30">
        <NewsSection section="RECENT NEWS">
          <RecentNews
            key={0}
            thumbnail={news[0].thumbnail}
            headline={news[0].headline}
            subtitle={news[0].subtitle}
            slug={news[0].slug}
            date={news[0].date}
          />
        </NewsSection>
        <NewsSection section="ALL NEWS">
          <div className="grid mt-8 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-22 ">
            {news.map((n, index) => (
              <NewsCard key={n.id} {...n} />
            ))}
          </div>
        </NewsSection>
      </div>
    </>
  );
};
export default News;

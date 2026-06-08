import RecentNews from "@/components/layout/news/RecentNews";
import NewsCard from "@/components/layout/news/NewsCard";
import NewsSection from "../components/layout/news/NewsSection";
import { news } from "@/data/news";

const News = () => {
  const recentNews = news[0];
  const allNews = news;
  const showRecentNews = news.length > 1;

  return (
    <>
      <div className="px-8 lg:px-25 mt-8 mb-30">
        {showRecentNews && recentNews && (
          <NewsSection section="RECENT NEWS">
            <RecentNews
              thumbnail={recentNews.thumbnail}
              headline={recentNews.headline}
              subtitle={recentNews.subtitle}
              slug={recentNews.slug}
              date={recentNews.date}
            />
          </NewsSection>
        )}
        <NewsSection section="ALL NEWS">
          <div className="grid mt-8 h-auto gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-22 ">
            {allNews.map((n, index) => (
              <NewsCard key={`${n.slug ?? n.id}-${index}`} {...n} />
            ))}
          </div>
        </NewsSection>
      </div>
    </>
  );
};
export default News;

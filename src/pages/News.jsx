import RecentNews from "@/components/news/RecentNews";
import NewsCard from "@/components/news/NewsCard";
import Footer from "./../components/footer/Footer";
import NewsSection from "./../components/news/NewsSection";
import { news } from "@/data/news";

function randomizeNews() {
  return;
}
const News = () => {
  return (
    <>
      <div className="px-8 lg:px-25 mt-15 mb-30">
        <NewsSection section="RECENT NEWS">
          <RecentNews
            key={0}
            thumbnail={news[0].thumbnail}
            headline={news[0].headline}
            subtitle={news[0].subtitle}
            date={news[0].date}
          />
        </NewsSection>
        <NewsSection section="ALL NEWS">
          <div className="grid mt-8 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-22 ">
            {news.map((n, index) => (
              <NewsCard
                key={index}
                thumbnail={n.thumbnail}
                headline={n.headline}
                date={n.date}
              />
            ))}
          </div>
        </NewsSection>
      </div>
    </>
  );
};
export default News;

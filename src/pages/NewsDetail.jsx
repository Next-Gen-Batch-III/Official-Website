import { useParams } from "react-router-dom";
import { news } from "@/data/news";

const NewsDetail = () => {
  const { slug } = useParams();

  const article = news.find((n) => n.slug === slug);

  if (!article) {
    return <div className="p-10 text-red-500">News not found</div>;
  }

  return (
    <div className="px-8 lg:px-25 mt-10 mb-30">
      <div className="flex flex-col">
        <h1 className="text-[28px] lg:text-[36px] font-bold text-brand-primary mb-4">
          {article.headline}
        </h1>
        <p className="text-brand-secondary-gray mb-8">
          {article.publisher} | {article.date} | News
        </p>
        <p className="text-gray-800">{article.subtitle}</p>
      </div>

      <div className="flex flex-col mt-8 text-gray-800 lg:flex-row lg:gap-5">
        <img
          src={article.thumbnail || "/fallback.jpg"}
          alt={article.headline}
          className="w-full h-100 object-cover mb-10"
        />
        <p>{article.article}</p>
      </div>

      <div className="grid grid-cols-1 mt-4 gap-5 lg:grid-cols-3">
        {article.image.map((img, index) => (
          <img src={img}/>
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;

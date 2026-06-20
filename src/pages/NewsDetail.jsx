import { Navigate, useParams } from "react-router-dom";
import { news } from "@/data/news";

const splitStory = (story, fallbackText) => {
  if (!story) {
    return {
      lead: fallbackText ? [fallbackText] : [],
      body: null,
      closing: null,
    };
  }

  if (typeof story === "object" && !Array.isArray(story)) {
    return {
      lead: Array.isArray(story.top) ? story.top : [],
      body: story.middle ?? null,
      closing: story.bottom ?? null,
    };
  }

  if (typeof story !== "string") {
    return { lead: [], body: null, closing: null };
  }

  const parts = story
    .split(/(?<=[\u17D4.!?])\s+/)
    .map((text) => text.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    return { lead: parts, body: null, closing: null };
  }

  const chunkSize = Math.ceil(parts.length / 3);

  return {
    lead: parts.slice(0, chunkSize),
    body: parts.slice(chunkSize, chunkSize * 2).join(" ") || null,
    closing: parts.slice(chunkSize * 2).join(" ") || null,
  };
};

const NewsDetail = () => {
  const { slug } = useParams();
  const article = news.find(
    (item) => item.slug === slug || item.aliases?.includes(slug),
  );

  if (!article) {
    return <div className="p-10 text-red-500">News not found</div>;
  }

  if (slug !== article.slug) {
    return <Navigate to={`/news/${article.slug}`} replace />;
  }

  const { lead, body, closing } = splitStory(article.article, article.subtitle);
  const gallery = Array.isArray(article.image) ? article.image : [];

  return (
    <div className="px-6 lg:px-25 mt-10 mb-30">
      <h1 className="text-[30px] lg:text-[38px] font-bold text-brand-primary leading-tight mb-4">
        {article.headline}
      </h1>

      <p className="text-gray-500 mb-6 text-sm">
        By {article.publisher} | {article.date} | News
      </p>

      <p className="text-justify text-[15px] leading-relaxed text-gray-800 mb-6">
        {article.subtitle}
      </p>

      <div className="flex flex-col items-center lg:flex-row gap-6 mb-6">
        <img
          src={article.thumbnail || "/fallback.jpg"}
          alt={article.headline}
          className="w-full lg:w-[55%] aspect-[14/9] object-cover rounded"
        />

        {lead.length > 0 && (
          <div className="lg:w-[45%] space-y-4 text-justify text-[15px] leading-relaxed text-gray-800">
            {lead.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>

      {body && (
        <p className="text-justify text-[15px] leading-relaxed text-gray-800 mb-6">
          {body}
        </p>
      )}

      {gallery.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          {gallery.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${article.headline} ${index + 1}`}
              className="w-full aspect-[4/3] object-cover rounded"
            />
          ))}
        </div>
      )}

      {closing && (
        <p className="text-justify text-[15px] leading-relaxed text-gray-800">
          {closing}
        </p>
      )}
    </div>
  );
};

export default NewsDetail;

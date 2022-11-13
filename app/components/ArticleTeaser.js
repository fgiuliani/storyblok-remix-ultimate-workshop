import { Link } from "@remix-run/react";
import { render } from "storyblok-rich-text-react-renderer";

const ArticleTeaser = ({ article }) => {
  return (
    <div className="column feature">
      <div className="p-6">
        <Link to={`/blog/${article.slug}`}>
          <img
            className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
            src={article.image.filename}
            alt="blog"
          />
        </Link>

        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          {article.title}
        </h1>
        <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
          {render(article.content)}
        </div>

        <div className="mt-4">
          <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
          >
            Read More »
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleTeaser;

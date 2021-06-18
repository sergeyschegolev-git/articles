import { Article } from './components/Article';
import './Articles.scss';

export function Articles({ articles }) {
  return (
    <div className="articles">
      {articles.map((article) => (
        <Article
          key={article.articleId}
          title={article.title}
          description={article.description}
          author={article.author}
        />
      ))}
    </div>
  )
}
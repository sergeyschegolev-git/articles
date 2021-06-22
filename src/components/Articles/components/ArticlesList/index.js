import { Article } from '../Article';

export const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Article
          key={article.articleId}
          title={article.title}
          description={article.description}
          author={article.author}
          articleId={article.articleId}
        />
      ))}
    </>
  )
}
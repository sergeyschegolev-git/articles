import { useParams } from "react-router-dom";
import { articles } from '../../data';

export const ArticleDescription = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.articleId === Number(articleId));

  return (
    <p>{article?.description}</p>
  )
}
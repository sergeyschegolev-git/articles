import { useParams } from "react-router-dom";
import { articles } from '../../data';

export const ArticleDescription = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.articleId === articleId);

  return (
    <p>{article?.description}</p>
  )
}
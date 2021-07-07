import { StyledLink, StyledCard } from './styled';
import './Article.scss';

export function Article({ title, description, author, articleId }) {
  return (
    <StyledCard>
      <div className="article__header">
        <h3>{title}</h3>
      </div>
      <div className="article__description">
        {description}
      </div>
      <div className="article__footer">
        <div className="article__author">Author: {author}</div>
      </div>
      <StyledLink to={`/articles-info/${articleId}`}>Open full description</StyledLink>
    </StyledCard>
  )
}
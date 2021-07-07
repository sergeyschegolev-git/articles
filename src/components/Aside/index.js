import { StyledAside, ArticlesListStats, ArticlesStats, TagsStats } from './styled';

export const Aside = () => {
  return (
    <StyledAside>
      <ArticlesStats>
        3 most readable articles:
        <ArticlesListStats>
          <p>1. About HTML</p>
          <p>2. CSS</p>
          <p>3. JS</p>
        </ArticlesListStats>
      </ArticlesStats>

      <TagsStats>
        3 most usable tags:
        <ArticlesListStats>
          <p>1. JS - 10 usages</p>
          <p>2. React - 8 usages</p>
          <p>3. Redux - 5 usages</p>
        </ArticlesListStats>
      </TagsStats>
    </StyledAside>
  )
}
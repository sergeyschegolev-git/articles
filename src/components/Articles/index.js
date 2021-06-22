import { useState } from 'react';
import { compose } from '../../utils/compose';
import { Article } from './components/Article';
import { NewArticleForm } from './components/NewArticle';
import { Search } from './components/Search';
import { AuthorFilter } from './components/AuthorFilter';
import { filterByAuthor, filterByDescription } from './utils';
import './Articles.scss';

export function Articles({ articles: articlesMock }) {
  const [articles, setArticles] = useState(articlesMock);
  const [searchedValue, setSearchedValue] = useState('');
  const [searchedAuthor, setAuthor] = useState('');

  const searchHandler = (value) => {
    setSearchedValue(value);
  }

  const authorFilterHandler = (author) => {
    setAuthor(author);
  }

  const authors = articles.map((article) => article.author);

  const createArticleHandler = ({ author, description, title }) => {
    const newArticle = { author, description, title, articleId: articlesMock.length + 1 };
    setArticles([
      newArticle,
      ...articles
    ]);
  }

  const filteredArticles = compose(
    filterByAuthor(searchedAuthor),
    filterByDescription(searchedValue)
  )(articles);

  return (
    <div className="articles">
      <NewArticleForm onArticleCreate={createArticleHandler} />
      <div className="articles__controls">
        <Search onSearch={searchHandler} />
        <AuthorFilter authors={authors} onFilter={authorFilterHandler} />
      </div>
      {filteredArticles.map((article) => (
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
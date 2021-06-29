import { useState, useCallback, useMemo } from 'react';
import { compose } from '../../utils/compose';
import { Button } from '../UI/Button';
// import { NewArticleForm } from './components/NewArticle';
import { NewArticleForm } from './components/NewArticle/NewArticleFormClass';
import { Search } from './components/Search';
import { AuthorFilter } from './components/AuthorFilter';
import { ArticlesList } from './components/ArticlesList';
import { ArticlesNotFound } from './components/ArticlesNotFound';
import { filterByAuthor, filterByDescription } from './utils';
import './Articles.scss';

export function Articles({ articles: articlesMock }) {
  const [articles, setArticles] = useState(articlesMock);
  const [searchedValue, setSearchedValue] = useState('');
  const [searchedAuthor, setAuthor] = useState('');
  const [isFormOpened, setIsFormOpened] = useState(false);

  const searchHandler = (value) => {
    setSearchedValue(value);
  }

  const authorFilterHandler = useCallback((author) => {
    setAuthor(author);
  }, [setAuthor]);

  const authors = useMemo(() => {
    return articles.map((article) => article.author);
  }, [articles]);

  const createArticleHandler = useCallback(({ author, description, title }) => {
    const newArticle = { author, description, title, articleId: articlesMock.length + 1 };
    setArticles([
      newArticle,
      ...articles
    ]);
    setIsFormOpened(false);
  }, [setArticles, articles, setIsFormOpened]);

  const openFormHandler = () => {
    setIsFormOpened(true);
  }

  const closeFormHandler = useCallback(() => {
    setIsFormOpened(false);
  }, [setIsFormOpened]);

  const filteredArticles = compose(
    filterByAuthor(searchedAuthor),
    filterByDescription(searchedValue)
  )(articles);

  return (
    <div className="articles">
      <Button label="Open form" onClick={openFormHandler} />

      {isFormOpened && (
        <NewArticleForm
          onArticleCreate={createArticleHandler}
          onFormClose={closeFormHandler}
          customProps='props'
        />
      )}

      <div className="articles__controls">
        <Search onSearch={searchHandler} />
        <AuthorFilter authors={authors} onFilter={authorFilterHandler} />
      </div>

      {filteredArticles.length ? (
        <ArticlesList articles={filteredArticles} />
      ) : (
        <ArticlesNotFound />
      )}
    </div>
  )
}
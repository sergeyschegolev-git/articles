import { Route, Switch, Redirect } from "react-router-dom";
import { Header } from './components/Header';
import { About } from './pages/About';
import { ArticlesInfo } from './pages/ArticlesInfo';
import { ArticleDescription } from './pages/ArticleDescripion';
import { PageNotFound } from './pages/PageNotFound';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <div className="wrapper">
          <Route path="/" exact>
            <Redirect to="/articles-info" />
          </Route>
          <Route path="/articles-info" exact>
            <ArticlesInfo />
          </Route>
          <Route path="/articles-info/:articleId">
            <ArticleDescription />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </div>
      </Switch>
    </>
  );
}

export default App;

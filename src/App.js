import { Header } from './components/Header';
import { Articles } from './components/Articles';
import { articles } from './data';

function App() {
  return (
    <>
      <Header />
      <Articles articles={articles} />
    </>
  );
}

export default App;

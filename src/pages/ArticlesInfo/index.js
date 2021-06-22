import { articles } from '../../data';
import { Articles } from '../../components/Articles';

export const ArticlesInfo = () => {
  return (
    <Articles articles={articles} />
  )
}
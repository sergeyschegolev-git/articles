import { articles } from '../../data';
import { tagsMock } from '../../tags';
import { Articles } from '../../components/Articles';

export const ArticlesInfo = () => {
  return (
    <Articles articles={articles} tags={tagsMock} />
  )
}
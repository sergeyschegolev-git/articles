import { Tags } from '../../components/Tags';
import { tagsMock } from '../../tags';


export const TagsPage = ({ onClick }) => {
  return (
    <>
      <Tags tags={tagsMock} />
    </>
  )
}
import PropTypes from 'prop-types';
import { Tag } from '../../../Tag';
import { TagsPropType } from '../../propTypes';

export const TagsList = ({ tags, onTagRemove }) => {
  return (
    <>
      {tags.map((tag) => (
        <Tag
          tag={tag}
          onTagRemove={onTagRemove}
          key={tag.id}
        />
      ))}
    </>
  )
}

TagsList.propTypes = {
  tags: TagsPropType.isRequired,
  onTagRemove: PropTypes.func.isRequired,
}

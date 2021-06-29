import PropTypes from 'prop-types';
import { StyledTag } from './styled';
import cross from './cross.svg';
import { TagPropType } from '../../propTypes';

export const Tag = ({ tag, onTagRemove }) => {
  const clickHandler = () => {
    onTagRemove({ tagId: tag.id })
  }

  return (
    <StyledTag>
      {tag.label}
      <button onClick={clickHandler}>
        <img src={cross} />
      </button>
    </StyledTag>
  )
}

Tag.propTypes = {
  tag: TagPropType.isRequired,
  onTagRemove: PropTypes.func.isRequired,
}

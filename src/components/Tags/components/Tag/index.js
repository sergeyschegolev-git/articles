import PropTypes from 'prop-types';
import { StyledTag } from './styled';
import cross from './cross.svg';
import { TagPropType } from '../../propTypes';

export const Tag = ({ tag, onTagRemove }) => {

  const removeHandler = () => {
    onTagRemove(tag.id, tag.label);
  }

  return (
    <StyledTag>
      {tag.label}
      <button onClick={removeHandler}>
        <img src={cross} />
      </button>
    </StyledTag>
  )
}

Tag.propTypes = {
  tag: TagPropType.isRequired,
  onTagRemove: PropTypes.func.isRequired,
}

import { StyledTag } from './styled';
import cross from './cross.svg';

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

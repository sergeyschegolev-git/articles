import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Hint } from './styled';

export const AddTagForm = ({ onAddTag }) => {
  const [tag, setTag] = useState('');
  const [isValueInvalid,  setIsValueInvalid] = useState(false);

  const addTagHandler = (event) => {
    event.preventDefault();

    if (!tag) {
      return;
    }

    onAddTag({ tag });
    setTag('');
  }

  const inputHandler = (event) => {
    const { target: { value } } = event;

    if (value.length > 15) {
      setIsValueInvalid(true);
    } else {
      setIsValueInvalid(false);
    }

    setTag(event.target.value);
  }

  return (
    <Form onSubmit={addTagHandler}>
      <input value={tag} onChange={inputHandler} type="Tag" />
      <button disabled={isValueInvalid} type="submit">Add tag</button>
      {isValueInvalid && (
        <Hint>The length of tag should not be more than 15 symbols.</Hint>
      )}
    </Form>
  )
};

AddTagForm.propTypes = {
  onAddTag: PropTypes.func.isRequired,
}

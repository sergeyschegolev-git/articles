import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Hint } from './styled';

export const AddTagForm = ({ onAddTag }) => {
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [tag, setTag] = useState('');

  const inputChangeHandler = (event) => {
    if (event.target.value.length > 15) {
      setIsFormInvalid(true);
    } else {
      setIsFormInvalid(false);
    }

    setTag(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!tag) {
      return;
    }

    onAddTag(tag);
    setTag('');
  }

  return (
    <Form onSubmit={submitHandler}>
      <input value={tag} onChange={inputChangeHandler} type="Tag" />
      <button disabled={isFormInvalid} type="submit">Add tag</button>
      {isFormInvalid && (
        <Hint>The length of tag should not be more than 15 symbols.</Hint>
      )}
    </Form>
  )
};

AddTagForm.propTypes = {
  onAddTag: PropTypes.func.isRequired,
}

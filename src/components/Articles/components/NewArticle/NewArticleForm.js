import { useState } from 'react';
import './NewArticleForm.scss';

export const NewArticleForm = ({ onArticleCreate }) => {
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const addArticleHandler = (event) => {
    event.preventDefault();
    onArticleCreate({ author, title, description });
  }

  const authorInputHandler = (event) => {
    setAuthor(event.target.value);
  }

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  }

  const descriptionInputHandler = (event) => {
    setDescription(event.target.value);
  }


  return (
    <form onSubmit={addArticleHandler} className="add-new-article">
      <input
        type="text"
        placeholder="Author"
        onChange={authorInputHandler}
        value={author}
      />
      <input
        type="text"
        placeholder="Title"
        onChange={titleInputHandler}
        value={title}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
        onChange={descriptionInputHandler}
        value={description}
      >

      </textarea>
      <div className="add-new-article__buttons">
        {/*<button type="button">Close form</button>*/}
        <button type="submit">Create article</button>
      </div>
    </form>
  )
}
import { useState, memo } from 'react';
import { Modal } from '../../../UI/Modal';
import { Tag } from '../../../Tag';
import { SelectTagContainer, TagsContainer, TagChooser } from './styled';
import './NewArticleForm.scss';

const NewArticleFormComponent = ({ onArticleCreate, onFormClose, tags }) => {
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const removeTagHandler = (tagId) => {
    setSelectedTags(selectedTags.filter(({ id }) => id !== tagId));
  }

  const tagSelectHandler = (event) => {
    const isTagAlreadyPresented = selectedTags.some(({ id }) => id === event.target.value);

    if(isTagAlreadyPresented) {
      return;
    }

    setSelectedTags([
      tags.find(({ id }) => id === event.target.value),
      ...selectedTags,
    ])
  }

  const addArticleHandler = () => {
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
    <Modal
      title="Create new article"
      onSubmit={addArticleHandler}
      onClose={onFormClose}
    >
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

        <SelectTagContainer>
          <TagChooser>
            Add Tag: &nbsp;
            <select onChange={tagSelectHandler} name="tags" id="tags">
              {tags.map(({ id, label }) => (
                <option value={id} key={`option_${id}`}>{label}</option>
              ))}
            </select>
          </TagChooser>

          <TagsContainer>
            {selectedTags.map((tag) => (
              <Tag
                tag={tag}
                onTagRemove={removeTagHandler}
                key={`chips_${tag.id}`}
              />
            ))}
          </TagsContainer>
        </SelectTagContainer>

      </form>
    </Modal>
  )
}

export const NewArticleForm = memo(NewArticleFormComponent);

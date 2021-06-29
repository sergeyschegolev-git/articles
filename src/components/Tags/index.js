import { useState } from 'react';
import { v4 } from 'uuid';
import { TagsList } from './components/TagsList';
import { AddTagForm } from './components/AddTagForm';
import { Notification } from './components/Notification';
import { StyledTags } from './styled';

export const Tags = ({ tags: defaultTags }) => {
  const [tags, setTags] = useState(defaultTags);
  const [removedTag, setRemoveTag] = useState('');
  const [isTagCreated, setIsTagCreated] = useState(false);

  const addTagHandler = (tag) => {
    setTags([
      {label: tag, id: v4()},
      ...tags,
    ]);
    setIsTagCreated(true);
  }

  const tagRemoveHandler = (tagId, label) => {
    setTags(tags.filter(({ id }) => id !== tagId));
    setRemoveTag(label);
  }

  const closeNotificationHandler = () => {
    setRemoveTag('');
  };

  const closeAddTagNotificationHandler = () => {
    setIsTagCreated(false);
  }

  return (
    <StyledTags>
      <AddTagForm onAddTag={addTagHandler} />
      <TagsList tags={tags} onTagRemove={tagRemoveHandler} />

      {isTagCreated && (
        <Notification onClose={closeAddTagNotificationHandler}>
          <p><strong>NEW TAG WAS CREATED!!!!!</strong></p>
        </Notification>
      )}

      {removedTag && (
        <Notification onClose={closeNotificationHandler}>
          <p>You've just removed {removedTag}.</p>
        </Notification>
      )}
    </StyledTags>
  )
}
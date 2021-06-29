import { useState } from 'react';
import { v4 } from 'uuid';
import { TagsList } from './components/TagsList';
import { AddTagForm } from './components/AddTagForm';
import { Notification } from './components/Notification';

export const Tags = ({ tags: defaultTags }) => {
  const [tags, setTags] = useState(defaultTags);
  const [removedTag, setRemovedTag] = useState('');
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const addTagHandler = ({ tag }) => {
    setTags([
      { label: tag, id: v4() },
      ...tags,
    ])
  }

  const removeTagHandler = ({ tagId }) => {
    const tagToRemove = tags.find((tag) => tag.id === tagId);
    setTags(tags.filter((tag) => tag.id !== tagId));
    setIsNotificationShown(true);
    setRemovedTag(tagToRemove.label);
  }

  const closeNotificationHandler = () => {
    setIsNotificationShown(false);
    setRemovedTag('');
  }

  return (
    <>
      <AddTagForm onAddTag={addTagHandler} />
      <TagsList tags={tags} onTagRemove={removeTagHandler} />

      {isNotificationShown && (
        <Notification removedTag={removedTag} onClose={closeNotificationHandler} />
      )}
    </>
  )
}
import { useState } from 'react';
import { v4 } from 'uuid';
import { tagsMock } from '../../tags';
import { Modal } from '../UI/Modal';
import { TagsList } from './components/TagsList';
import { AddTagForm } from './components/AddTagForm';
import { Notification } from './components/Notification';
import { StyledTags } from './styled';

export const Tags = () => {
  const [tags, setTags] = useState(tagsMock);
  const [removedTag, setRemoveTag] = useState({ label: '', tagId: '' });
  const [isTagRemoved, setIsTagRemoved] = useState(false);
  const [isTagCreated, setIsTagCreated] = useState(false);
  const [isConfirmationModalOpened, setIsConfirmationModalOpened] = useState(false);

  const addTagHandler = (tag) => {
    const newTag = {label: tag, id: v4()};
    setTags([
      newTag,
      ...tags,
    ]);
    tagsMock.push(newTag);
    console.log(tagsMock);
    setIsTagCreated(true);
  }

  const tagRemoveHandler = (tagId, label) => {
    setIsConfirmationModalOpened(true);
    setRemoveTag({ label, tagId });
  }

  const closeNotificationHandler = () => {
    setIsTagRemoved(false);
    setRemoveTag({ label: '', tagId: '' });
  };

  const closeAddTagNotificationHandler = () => {
    setIsTagCreated(false);
  }

  const modalCloseHandler = () => {
    setIsConfirmationModalOpened(false);
    setRemoveTag({ label: '', tagId: '' });
  }

  const modalSubmitHandler = () => {
    setTags(tags.filter(({ id }) => id !== removedTag.tagId));
    setIsConfirmationModalOpened(false);
    setIsTagRemoved(true);
  }

  return (
    <StyledTags>
      <AddTagForm onAddTag={addTagHandler} />
      <TagsList tags={tags} onTagRemove={tagRemoveHandler} />

      {isConfirmationModalOpened && (
        <Modal title="Remove tag" onClose={modalCloseHandler} onSubmit={modalSubmitHandler}>
          <p>Are you sure to remove {removedTag.label}?</p>
        </Modal>
      )}

      {isTagCreated && (
        <Notification onClose={closeAddTagNotificationHandler}>
          <p><strong>NEW TAG WAS CREATED!!!!!</strong></p>
        </Notification>
      )}

      {isTagRemoved && (
        <Notification onClose={closeNotificationHandler}>
          <p>You've just removed {removedTag.label}.</p>
        </Notification>
      )}
    </StyledTags>
  )
}
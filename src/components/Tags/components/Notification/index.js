import PropTypes from 'prop-types';
import { StyledNotification } from './styled';
import cross from './cross.svg';

export const Notification = ({ removedTag, onClose }) => {
  return (
    <StyledNotification>
      You've just removed <strong>{removedTag}</strong>.
      <button onClick={onClose}>
        <img src={cross} />
      </button>
    </StyledNotification>
  )
}

Notification.propTypes = {
  removedTag: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

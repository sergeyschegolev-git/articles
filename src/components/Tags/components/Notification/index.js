import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withPortal } from '../../../../hocs/withPortal';
import { StyledNotification } from './styled';
import cross from './cross.svg';

export const NotificationComponent = (props) => {
  console.log(props);
  return (
    <StyledNotification>
      {props.children}
      <button onClick={props.onClose}>
        <img src={cross} />
      </button>
    </StyledNotification>
  )
}

NotificationComponent.propTypes = {
  removedTag: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export const Notification = withPortal(NotificationComponent);

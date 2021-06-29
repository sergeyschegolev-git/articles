import { Component } from 'react';
import { StyledNotification } from './styled';
import cross from './cross.svg';

export class NotificationClass extends Component {

  componentDidMount = () => {
    window.addEventListener('keydown', this.buttonClickHandler);
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.buttonClickHandler);
  }

  buttonClickHandler = () => {
    this.props.onClose();
  }

  render() {
    return (
      <StyledNotification>
        You've just removed <strong>{this.props.removedTag}</strong>.
        <button onClick={this.buttonClickHandler}>
          <img src={cross} />
        </button>
      </StyledNotification>
    )
  }
}
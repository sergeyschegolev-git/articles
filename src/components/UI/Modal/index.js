import { useEffect, useCallback, Component } from 'react';
import { withPortal } from '../../../hocs/withPortal';
import { Button} from '../Button';
import { Backdrop, Modal as ModalWrapper, Title, Content, Buttons, CloseButton } from './styled';
import cross from './cross.svg';

class ModalComponentClass extends Component {

  keydownHandler = (event) => {
    const { onSubmit, onClose } = this.props;

    if (event.code === 'Enter') {
      onSubmit();
    } else if (event.code === 'Escape') {
      onClose();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keydownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownHandler)
  }

  render() {
    return (
      <>
        <Backdrop />
        <ModalWrapper>
          <CloseButton onClick={this.props.onClose}>
            <img src={cross} />
          </CloseButton>
          <Title>
            {this.props.title}
          </Title>
          <Content>
            {this.props.children}
          </Content>
          <Buttons>
            <Button label="Cancel" onClick={this.props.onClose} />
            <Button label="Ok" onClick={this.props.onSubmit} />
          </Buttons>
        </ModalWrapper>
      </>
    )
  }
}

const ModalComponent = ({ title, children, onClose, onSubmit }) => {

  const keydownHandler = useCallback((event) => {
    if (event.code === 'Enter') {
      onSubmit();
    } else if (event.code === 'Escape') {
      onClose();
    }
  }, [onClose, onSubmit]);

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler); //componentDidMount

    return () => { //componentWillUnmount
      window.removeEventListener('keydown', keydownHandler);
    }
  }, []);

  return (
    <>
      <Backdrop />
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <img src={cross} />
        </CloseButton>
        <Title>
          {title}
        </Title>
        <Content>
          {children}
        </Content>
        <Buttons>
          <Button label="Cancel" onClick={onClose} />
          <Button label="Ok" onClick={onSubmit} />
        </Buttons>
      </ModalWrapper>
    </>
  )
}

export const Modal = withPortal(ModalComponentClass);

import { Button } from '../Button';
import { Backdrop, StyledModal, Buttons } from './styled';

export const Modal = ({ title, content, onSubmit, onCancel }) => {
  return (
    <>
      <Backdrop />
      <StyledModal>
        <h3>{title}</h3>
        <p>{content}</p>
        <Buttons>
          <Button label="Cancel" onClick={onSubmit} />
          <Button label="Ok" onClick={onCancel} />
        </Buttons>
      </StyledModal>
    </>
  )
}
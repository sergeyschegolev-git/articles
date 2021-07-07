import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 300px;
  padding: 12px 20px;
  background-color: #fff;
  box-sizing: border-box;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const Content = styled.div`

`

export const CloseButton = styled.button`
  padding: 0;
  margin-left: 4px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 12px;
  right: 12px;

  img {
    width: 16px;
    height: 16px;
  }
`;

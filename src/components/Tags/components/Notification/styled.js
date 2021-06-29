import styled from 'styled-components';

export const StyledNotification = styled.div`
  border: 1px solid gray;
  background-color: peachpuff;
  padding: 4px 12px 4px 8px;
  border-radius: 2px;
  max-width: 200px;
  margin-top: 12px;
  position: relative;

  button {
    padding: 0;
    margin-left: 4px;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    position: absolute;
    top: 4px;
    right: 4px;

    img {
      width: 10px;
      height: 10px;
    }
  }
`;

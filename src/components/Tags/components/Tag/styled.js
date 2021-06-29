import styled from 'styled-components';

export const StyledTag = styled.div`
  display: inline-block;
  border: 1px solid green;
  background-color: darkkhaki;
  border-radius: 3px;
  padding: 2px 4px;
  margin-right: 8px;
  
  button {
    padding: 0;
    margin-left: 4px;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    
    img {
      width: 10px;
      height: 10px;
    }
  }
`;

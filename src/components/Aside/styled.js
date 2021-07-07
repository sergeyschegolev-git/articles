import styled from 'styled-components';
import { Card } from '../UI/Card';

export const StyledAside = styled.aside`
  width: 300px;
  padding-left: 12px;
  margin-left: 12px;
  border-left: 1px solid #ededed;
  height: 100vh;
`;

export const ArticlesStats = styled(Card)`
  margin-top: 12px;
`;

export const TagsStats = styled(Card)`
  margin-top: 12px;
`;

export const ArticlesListStats = styled.div`
  margin: 12px 0 0;
  
  p {
    padding: 0;
    margin: 0;
  }
`

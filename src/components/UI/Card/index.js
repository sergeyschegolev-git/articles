import { StyledCard } from './styled';

export const Card = ({ children, className }) => {
  return (
    <StyledCard className={className}>
      {children}
    </StyledCard>
  )
}

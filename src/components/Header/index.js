import './Header.scss';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './StyledHeader';

export function Header() {
  return (
    <StyledHeader>
      <h3 >Articles Application</h3>
      <div>
        <NavLink className="articles" to="/articles-info">Articles</NavLink>
        <NavLink className="about" to="/about">About</NavLink>
      </div>
    </StyledHeader>
  )
}
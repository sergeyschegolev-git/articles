import { memo } from 'react';
import './index.scss';

export const AuthorFilterComponent = ({ authors, onFilter }) => {
  const handleSelect = (e) => {
    onFilter(e.target.value);
  }

  const uniqueAuthors = Array.from(new Set(authors));

  return (
    <div className="articles__author-filter">
      By author:
      <select onChange={handleSelect} name="authors" id="authors">
        <option value="">All</option>
        {uniqueAuthors.map((author) => {
          return (
            <option value={author} key={author}>{author}</option>
          )
        })}
      </select>
    </div>
  )
}

export const AuthorFilter = memo(AuthorFilterComponent);

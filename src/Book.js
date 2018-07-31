import React from 'react';
import './App.css';
import ShelfChange from './ShelfChange';

const Book = ({ book, changeShelf }) => {
  
  let hw ={ height: 193, width: 128 };
  let imageStyle=(book.imageLinks && book.imageLinks.thumbnail) ? 
    {backgroundImage: `url(${book.imageLinks.thumbnail})`} : 
    {backgroundImage: 'url("")'};
  let style = {...hw, ...imageStyle};

  return (
   <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={style}></div>
          <ShelfChange changeShelf={changeShelf} book={book}/>
      </div>
      <div className="book-title">{book.title ? book.title : 'No Title'}</div>
      <div className="book-authors">{book.authors ? book.authors : 'No Author'}</div>
    </div>
   </li>
  )
}

export default Book;
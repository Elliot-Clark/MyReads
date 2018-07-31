import React from 'react';
import Book from './Book';

const shelves = [
  { 
    shelf: "currentlyReading",
    header: "Currently Reading"
  },

  {
    shelf: "wantToRead",
    header: "Want to Read",
  },

  {
    shelf: "read",
    header: "Read"
  }
];


const BookShelf = ({ books, shelf, changeShelf }) => {
  return (    
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelves.filter(s => s.shelf === shelf)[0].header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.filter(book => book.shelf === shelf).map(b => 
            <Book book={b} changeShelf={changeShelf} key={b.id}/>
          )}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;
import React from 'react';
import Book from './Book';

const shelves = [{ shelf: "currentlyReading",
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


class BookShelf extends React.Component {
render () {
  return (
    <div className="list-books-content">    
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelves.filter(shelf => shelf.shelf === this.props.shelf)[0].header}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => book.shelf === this.props.shelf).map(b => 
              <Book book = {b} changeShelf = {this.props.changeShelf}/>
            )}
          </ol>
        </div>
      </div>
    </div>
  )
  }
}

export default BookShelf;
import React from 'react';

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


  
  handleChange = (event, book) => {
    this.props.changeShelf(event.target.value, book);
  };

  render () {
  const style = {backgroundImage: `url("${book.imageLinks.thumbnail}")`};
  return (
    <div className="list-books-content">    
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelves.filter(shelf => shelf.shelf === this.props.shelf)[0].header}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => book.shelf === this.props.shelf).map(book => 
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style = {style}></div>
                  <div className="book-shelf-changer">
                    <select onChange={(event) => {this.handleChange(event, book)}}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.author}</div>
              </div>
            )}
          </ol>
        </div>
      </div>
    </div>
  )
  }
}

export default BookShelf;
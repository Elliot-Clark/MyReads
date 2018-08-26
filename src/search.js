import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class Search extends Component {
  state = {
    SearchBooks: [] 
  }
  
  componentWillUnmount() {
    this.setState({
      SearchBooks: [], 
    });
  }

  searchString = (event) => {
    let searchText = event.target.value;

    if (searchText.length > 0) {
      BooksAPI.search(searchText).then(books => {
        if (books.length > 0 || searchText.length > 1) {
          books.forEach((book, index) => {
            const bookInMyList = this.props.books.find((b) => b.id === book.id);
            book.shelf = bookInMyList ? bookInMyList.shelf : 'none';
            books[index] = book;
          });
          this.setState({
            SearchBooks: books
          });
        }
      })
    } else {
      this.setState({SearchBooks: []});
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.searchString}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
             { this.state.SearchBooks.length > 0 ? 
                 this.state.SearchBooks.map(b => 
                 <Book book={b} changeShelf={this.props.changeShelf} key={b.id}/>
            ) : "No Search Results" }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
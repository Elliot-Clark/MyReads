import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class Search extends Component {
  state = {
    SearchBooks: [] 
  }

searchString = (event) => {
  let searchText = event.target.value;
  BooksAPI.search(searchText).then(data => {
    this.setState({SearchBooks: data});
      if(this.state.SearchBooks == []) {
        console.log("Empty Array");
      }
    console.log(data);
  }
)}

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
          
             {this.state.SearchBooks.map(b => 
              <Book book={b} changeShelf={this.props.changeShelf}/>
            )}
             
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
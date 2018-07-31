import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Search from './search'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [] 
  }
 
  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState(
        {books: data})
    }
  )}

  changeShelf = (shelf, book) => {  //Method to class, to change shelf. Send as prop.
    BooksAPI.update(book, shelf).then(() => {
      //Make a copy of this.state.books into copy
      let copy = [...this.state.books]; 
      //Finding the book in this.state with the same id
      let index = this.state.books.findIndex(b => b.id === book.id);
      if (index !== -1) {
        //Book is on a shelf
        copy[index].shelf = shelf;
        copy.push(copy.splice(index, 1)[0]);
      } else {
        //Add book to library
        book.shelf = shelf;
        copy.push(book);
      }
      this.setState({books: copy});
    })
  }

  render() {
    return (
     <BrowserRouter>
      <div className="app">
        <Route path="/search" render={() => (
          <Search changeShelf = {this.changeShelf}/>
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf books={this.state.books} shelf="currentlyReading" changeShelf = {this.changeShelf}/>
              <BookShelf books={this.state.books} shelf="wantToRead" changeShelf = {this.changeShelf}/>
              <BookShelf books={this.state.books} shelf="read" changeShelf = {this.changeShelf}/>
            </div>  
            </div>
              <Link
                className="open-search"
                to="/search"
                ><a>Add a book</a>
              </Link>  
            </div> 
           )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
import React from 'react';
import './App.css';

class Book extends React.Component {

  
  handleChange = (event, book) => {
    this.props.changeShelf(event.target.value, book);
  };


render () {
  let style={
    height: 193, 
    width: 128, 
    backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
  };
  return (
   <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={style}></div>
        <div className="book-shelf-changer">
          <select onChange={(event) => {this.handleChange(event, this.props.book)}}>
          <option value="none">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{this.props.book.title}</div>
      <div className="book-authors">{this.props.book.authors}</div>
    </div>
   </li>
  )
}
}

export default Book;
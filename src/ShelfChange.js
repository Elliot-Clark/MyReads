import React from 'react';

class ShelfChange extends React.Component {
  
  handleChange = (event) => {
    this.props.changeShelf(event.target.value, this.props.book);
  };
  
  render () {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.props.book.shelf}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChange;
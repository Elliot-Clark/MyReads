import React from 'react';

class ShelfChange extends React.Component {
  state = {
    currentShelf: this.props.book.shelf
  };
  
  handleChange = (event) => {
    this.props.changeShelf(event.target.value, this.props.book);
    this.setState({currentShelf: event.target.value});
  };
  
  render () {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.state.currentShelf}>
        <option value="move" disabled>Move to...</option>
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
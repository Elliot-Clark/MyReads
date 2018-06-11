import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BooksApp from './App'
import Search from './search'

class Web extends Component {
  render() {
    return (
        <div className="app">
          <Route exact path='/' render={() => 
            <BooksApp booksOnShelf={this.state.books} />} />
            
          <Route path="/search" component={Search}/>
        </div>
    );
  }
}

export default BooksApp;
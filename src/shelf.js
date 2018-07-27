import React from 'react'
import './App.css'
import ChangeShelf from './changeShelf'

  const bookshelf = () => {
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:{props.booklist.URL} }}></div>
                <ChangeShelf/>
              </div>
              <div className="book-title">To Kill a Mockingbird</div>
              <div className="book-authors">Harper Lee</div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                <ChangeShelf/>
              </div>
              <div className="book-title">Ender's Game</div>
              <div className="book-authors">Orson Scott Card</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  }
  
  export default bookshelf
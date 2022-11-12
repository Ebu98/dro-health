import React from 'react'
import "../bookList.scss"

const BookList = ({books}:any) => {
  console.log(books)
  return (
    <div>
      <div className="title">
    <h3>Authors</h3>
    <h3>Name</h3>
    <h3>Publisher</h3>
    <h3>ISBN</h3>
    <h3>Date</h3>
      </div>
      {books.map((book:any) =>{
        return(
          <div className="book-container">
            
            <h4>{book.authors}</h4>
            <h4>{book.name}</h4>
            <h4>{book.publisher}</h4>
            <h4>{book.isbn}</h4>
            <h4>{book.released}</h4>
            
            
          </div>
        )
      })}
    </div>
  )
}

export default BookList
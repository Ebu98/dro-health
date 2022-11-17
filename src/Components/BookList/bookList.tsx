import React from "react";
import "./bookList.scss";

const BookList = ({ books }: any) => {
  return (
    <div>
      <div className="title">
        <h3>Authors</h3>
        <h3>Name</h3>
        <h3>Publisher</h3>
        <h3>ISBN</h3>
        <h3>Date</h3>
      </div>
      {books && books.length > 0 ? (
        books.map((book: any) => (
          <div key={book.id} className="book-container">
            <p>{book.authors}</p>
            <p>{book.name}</p>
            <p>{book.publisher}</p>
            <p>{book.isbn}</p>
            <p>{book.released}</p>
          </div>
        ))
      ) : (
        <h2>No book</h2>
      )}
    </div>
  );
};

export default BookList;

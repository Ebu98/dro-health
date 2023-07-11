import React from "react";
import "./bookList.scss";

const BookList = ({ books, filter }: any) => {
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
        books
          .filter((book: any) =>
            filter.name ? book.name.startsWith(filter.name) : true
          )
          .filter((book: any) =>
            filter.authors ? book.authors.startsWith(filter.authors) : true
          )
          .filter((book: any) =>
            filter.publisher
              ? book.publisher.startsWith(filter.publisher)
              : true
          )
          .filter((book: any) =>
            filter.isbn ? book.isbn.startsWith(filter.isbn) : true
          )
          .filter((book: any) =>
            filter.released ? book.released.startsWith(filter.released) : true
          )
          .map((book: any) => (
            <div key={book.id} className="book-container">
              <p>{book.authors[0]}</p>
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
// https://meet.google.com/hfu-nibt-shg
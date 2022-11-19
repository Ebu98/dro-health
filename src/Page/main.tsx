import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "../Components/BookList/bookList";
import Search from "../Components/Search/search";

function Main() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState({
    publisher: '',
    name: '',
    isbn: '',
    authors: '',
    endDate: ''
  })

  const handleFilter = (name: string, value: string) => setFilter({ ...filter, [name]: value})

  const fetchBooksData = () => {
    axios
      .get("https://www.anapioficeandfire.com/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchBooksData();
  }, []);

  return (
    <div className="App">
      <Search books={books} handleFilter={handleFilter}/>
      <BookList books={books} filter={filter} />
    </div>
  );
}

export default Main;

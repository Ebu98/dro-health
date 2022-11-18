import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./Components/BookList/bookList";
import Fetch from "./Components/Search/fetchCharacter";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState<any[]>([]);
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

  const fetchCharactersData = () => {
    axios
      .get("https://www.anapioficeandfire.com/api/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchBooksData();
    fetchCharactersData();
  }, []);

  return (
    <div className="App">
      <Fetch books={books} handleFilter={handleFilter}/>
      <BookList books={books} filter={filter} />
    </div>
  );
}

export default App;

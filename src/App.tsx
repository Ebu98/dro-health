import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import BookList from './Components/BookList/bookList';
import Fetch from './Components/Search/fetchCharacter';

function App() {
  const [books, setBooks]= useState([]);

  const fetchData=()=>{
    axios.get("https://www.anapioficeandfire.com/api/books")
    .then((response) => {setBooks(response.data);
      console.log(response.data)})
  }
  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="App">
        {/* <BookList books={books}/> */}
        <Fetch/>
    </div>
  );
}

export default App;

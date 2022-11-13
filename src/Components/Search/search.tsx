import React, { useState } from "react";
import Header from "../Header/Header";
import "./search.scss"

function Search({ CHAR }:any) {
  const [name, setName] = useState("");
  const [foundCHAR, setFoundCHAR] = useState(CHAR);

  const filter = (e:any) => {
    const keyword = e.target.value;

    if (keyword !== '') {
        const results = CHAR.filter((character:any) => {
          return character.name?.toLowerCase().startsWith(keyword.toLowerCase()) ||
                    character.publisher?.toLowerCase().startsWith(keyword.toLowerCase()) ||
                    character.isbn?.toLowerCase().startsWith(keyword.toLowerCase()) ||
                    character.authors?.toLowerCase().startsWith(keyword.toLowerCase()) ||
                    character.released?.toLowerCase().startsWith(keyword.toLowerCase());
        });
        setFoundCHAR(results);
      } else {
        setFoundCHAR(CHAR);
      }
      setName(keyword);
    };
  

  return (
    <div className="container">
        <Header/>
      <h1 className="search-title">Serach for <span>Character</span></h1>
      <div>
      <input
        type="text"
        value={name}
        onChange={filter}
        className="input"
        placeholder="search"
      />

      </div>
      <div className="user-list">
        {foundCHAR && foundCHAR.length > 0 ? (
          foundCHAR.map((character: any) => (
            <li key={character.id} className="user">
              <table className="table-title-wraper">
                <thead className="table-title">
                  <tr className="title">
                    <th scope="col">Name</th>
                    <th scope="col">Date </th>
                    <th scope="col">Publishers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="user-id"></th>
                    <th scope="row" className="user-name">
                      {character.name}
                    </th>
                    <th scope="row" className="user-age">
                      {character.publisher}
                    </th>
                    <th scope="row" className="user-gender">
                      {character.authors}
                    </th>
                  </tr>
                </tbody>
              </table>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Search;

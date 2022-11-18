import React, { useState } from "react";
import Header from "../Header/Header";
import Select from "react-select";

import "./search.scss";

function Search({ books, handleFilter }: any) {

  const getData = (data: any, property: string) => {
    const arr =
      data?.map((item: any) =>
        Array.isArray(item[property]) ? item[property][0] : item[property]
      ) || [];

    return Array.from(new Set(arr));
  };

  const optionsAuthors = getData(books, "authors").map((author) => ({
    label: author,
    value: author,
  }));
  const optionsName = getData(books, "name").map((name) => ({
    label: name,
    value: name,
  }));
  const optionspublisher = getData(books, "publisher").map((publisher) => ({
    label: publisher,
    value: publisher,
  }));
  const optionsisbn = getData(books, "isbn").map((isbn) => ({
    label: isbn,
    value: isbn,
  }));

  const optionsReleased = getData(books, "released").map((released) => ({
    label: released,
    value: released,
  }))

  return (
    <div className="container">
      <Header />
      <h1 className="search-title">
        Search for <span>Book</span>
      </h1>
      <div className="input-container">
        <Select
          placeholder="Authors"
          options={optionsAuthors}
          onChange={(selected) => handleFilter('authors', selected?.value)}
          
        />
        
        <Select
          options={optionsisbn}
          placeholder="Isbn"
          onChange={(selected) => handleFilter('isbn', selected?.value)}
        />
        <Select
          options={optionsName}
          placeholder="Name"
          onChange={(selected) => handleFilter('name', selected?.value)}
        />
        <Select
          options={optionspublisher}
          placeholder="Publisher"
          onChange={(selected) => handleFilter('publisher', selected?.value)}
        />

        <Select
          options={optionsReleased}
          placeholder="End Date"
          onChange={(selected) => handleFilter('endDate', selected?.value)}
        />
      </div>
      {/* <button className="search-button" onClick={handleSubmit}>
        Search
      </button> */}
    </div>
  );
}

export default Search;

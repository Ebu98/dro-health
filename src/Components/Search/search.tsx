import React from "react";
import Header from "../Header/Header";
import Select from "react-select";

import "./search.scss";

function Search({ books }: any) {
  // const [name, setName] = useState("");
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [characters, setCharacters] = useState<any[]>([]);

  // const filter = (value: string) => {
  //   const keyword = value;

  //   if (keyword !== "") {
  //     const results = characters.filter((character: any) => {
  //       return (
  //         character.name?.toLowerCase().startsWith(keyword.toLowerCase()) ||
  //         character.publisher
  //           ?.toLowerCase()
  //           .startsWith(keyword.toLowerCase()) ||
  //         character.isbn?.toLowerCase().startsWith(keyword.toLowerCase()) ||
  //         character.authors?.toLowerCase().startsWith(keyword.toLowerCase()) ||
  //         character.released?.toLowerCase().startsWith(keyword.toLowerCase())
  //       );
  //     });
  //     // setCharacters(results);
  //   }
  //   setName(keyword);
  // };

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
  }));

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
          // onChange={(selected) => filter(selected?.value || "")}
        />
        <Select options={optionsisbn}  placeholder="Isbn"/>
        <Select options={optionsName}  placeholder="Name"/>
        <Select options={optionspublisher}  placeholder="Publisher"/>

        <Select options={optionsReleased}  placeholder="Released"/>
      </div>
      <button className="search-button">Search</button>
    </div>
  );
}

export default Search;

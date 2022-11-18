import React from "react";
import Search from "./search";

const Fetch = ({books, handleFilter}:any) => {

  return (
      <Search books={books} handleFilter={handleFilter}/>
  );
};

export default Fetch;

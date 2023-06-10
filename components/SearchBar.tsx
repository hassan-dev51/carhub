"use client";

import { useState } from "react";
import SearchMenufacture from "./SearchMenufacture";

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit} className="searchbar">
        <div className="searchbar__item">
          <SearchMenufacture
            manufacturer={manufacture}
            setManuFacturer={setManufacture}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

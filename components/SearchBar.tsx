"use client";

import { useState } from "react";
import SearchMenufacture from "./SearchMenufacture";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

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

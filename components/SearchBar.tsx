"use client";

import React, { useState } from "react";
import SearchMenufacture from "./SearchMenufacture";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacture.trim() === "" && model.trim() === "") {
      alert("Please fill in search bar");
    }
    updateSearchParams(model.toLowerCase(), manufacture.toLowerCase());
  };
  const updateSearchParams = (model: string, manufacture: string) => {
    //it will get the current path in the search of browser
    const searchParams = new URLSearchParams(window.location.search);

    //if no model and manufacture exists it will set or delete
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacture) {
      searchParams.set("manufacture", manufacture);
    } else {
      searchParams.delete("manufacture");
    }

    //now after checking all the conditions we will generate the new path
    const generateNewPath = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(generateNewPath);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="searchbar">
        <div className="searchbar__item">
          <SearchMenufacture
            manufacturer={manufacture}
            setManuFacturer={setManufacture}
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>

        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
            alt="car model"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan..."
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
      </form>
    </div>
  );
};

export default SearchBar;

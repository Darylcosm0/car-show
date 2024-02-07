"use client";

import React from "react";
import { useState } from "react";
import { SearchManufacture } from "./";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");

  const handleSearch = () => {}

  


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      
       
    </form>
  );
};

export default SearchBar;

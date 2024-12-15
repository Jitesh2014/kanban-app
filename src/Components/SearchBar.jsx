
import React, { useState } from 'react';

const SearchBar = () => {

  return (
    <form className=" hidden lg:flex">
      <input
        type="text"
        placeholder="Search for books"
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
        className="p-2 w-80 border dark:bg-[#2b2c37] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#635fc7]"
      />
      <button
        type="submit"
        className="p-2 bg-[#635fc7] text-white rounded-r-md hover:bg-[#605cd2]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

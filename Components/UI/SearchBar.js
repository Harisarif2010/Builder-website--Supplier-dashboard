import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="flex w-full max-w-2xl h-12 sm:h-14 items-center border border-[#BABABA] rounded-[41px] overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 px-4 h-full outline-none text-sm bg-white"
        />
        <button className=" bg-[var(--primary-blue)] h-full px-3 sm:px-4 flex items-center justify-center w-1/5 min-w-[50px]">
          <Search className="text-white w-5 h-5 sm:w-7 sm:h-7" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

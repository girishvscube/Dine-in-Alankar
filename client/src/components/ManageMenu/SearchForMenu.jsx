import React from "react";
import "../style.scss";

const SearchForMenu = () => {
  return (
    <div className="w-11/12 h-2/12 ml-14  flex justify-between">
      <div className="w-1/3 h-full flex  justify-between">
        <div className="w-5/12 h-full add text-center p-3 rounded text-white font-sans font-semibold">
          Add New Item
        </div>
        <div className="w-5/12 h-full border-2 border-orange p-3 pt-2 flex justify-between bg-pink rounded">
          <div className="h-5 w-5/12 pl-2 text-orange">
            <select className="bg-pink">
              <option value="all" className="font-sans">All</option>
              <option value="simply_south" className="font-sans">Simply south</option>
              <option value="simply_south" className="font-sans">All Day Bites</option>
              <option value="simply_south" className="font-sans">Chinese</option>
              <option value="simply_south" className="font-sans">Dosa Mela</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-2/4 h-full bg-search flex justify-between p-2 rounded">
        <div className="h-full w-10/12 pl-2  font-semibold">
          <input
            type="text"
            className="h-9 w-full text-lg bg-search font-semibold placeholder-orange outline-none"
            placeholder="Search"
          />
        </div>
        <div className="h-full w-1/12 bg-search">
          <img src="search_fill.png" alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchForMenu;

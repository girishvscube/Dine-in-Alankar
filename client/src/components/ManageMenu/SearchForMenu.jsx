import React from "react";
import "./style.scss";

const SearchForMenu = () => {
  return (
    <div className="w-11/12 h-2/12 ml-14  flex justify-between">
      <div className=" flex ">
        <button className=" h-full pl-9 pr-9 pt-4 pb-4 text-xs add text-center  rounded-lg text-white font-semibold font-sans">
          Add New Items
        </button>
        <div className=" text-xs  ">
          <select className=" border-2 pl-2 pr-3 mr-2 ml-6 border-button_border text-xs text-orange rounded-lg w-full h-full ">
            <option className="many">All</option>
            <option value="one">Simply South</option>
            <option value="two">Chinese</option>
            <option value="three">Japanese</option>
            <option value="four">Routine</option>
          </select>
        </div>
      </div>
      <div className="w-2/4 h-full bg-search text-orange flex justify-between p-2 rounded-lg focus-within:border-2 border-button_border ">
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

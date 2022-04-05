import React from "react";
import "./style.scss";
import search from "../../Images/ActiveOrder/Search_fill.png";

const SearchForMenu = () => {
  return (
    <div className="flex justify-between">
      <div className=" flex ">
        <button className=" pl-9 pr-9 pt-3 pb-3 text-xs add text-center  rounded-lg text-white font-semibold font-sans">
          Add New Items
        </button>
        <div className=" text-xs  ">
          <select className=" border-2 pl-3 pr-8 pt-4 pb-4  mr-2 ml-6 border-button_border text-xs text-orange rounded-lg ">
            <option className="many">All</option>
            <option value="one">Simply South</option>
            <option value="two">Chinese</option>
            <option value="three">Japanese</option>
            <option value="four">Routine</option>
          </select>
        </div>
      </div>
      <div className="w-1/2 bg-search focus-within:border-2 border-amber-200 text-orange  flex justify-between p-2 rounded-lg ">
        <div className=" pl-2  font-semibold">
          <input
            type="text"
            className=" text-lg pt-1 bg-search font-semibold placeholder-orange outline-none"
            placeholder="Search"
          />
        </div>
        <div className=" bg-search">
          <img src={search} alt="search_icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchForMenu;

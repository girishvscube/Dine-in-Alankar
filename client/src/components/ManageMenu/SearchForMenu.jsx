import React from "react";
import "./style.scss";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { TextField } from "../TextField";
import { SearchField } from "../SearchField";

const SearchForMenu = () => {
  return (
    <div className="flex justify-between">
      <div className=" flex ">
        <Link to="/menu/add-menu">
          <Button className="pl-6 pr-6">Add New Items</Button>
        </Link>
        <div className=" text-xs  ">
          <select className=" border-2 pl-3 pr-8 pt-4 pb-4  mr-2 ml-6 border-button_border text-base outline-none text-orange rounded-lg ">
            <option className="many">All</option>
            <option value="one">Simply South</option>
            <option value="two">Chinese</option>
            <option value="three">Japanese</option>
            <option value="four">Routine</option>
          </select>
        </div>
      </div>
      <div className="w-1/2 bg-search focus-within:border-2 border-button_border text-orange  flex justify-between  pr-2  rounded-lg ">
        <div className=" w-11/12 text-lg font-semibold">
          
          <SearchField className="w-11/12 pt-4"/>
        </div>
        <div className=" bg-search pt-2">
          <img src={search} alt="search_icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchForMenu;

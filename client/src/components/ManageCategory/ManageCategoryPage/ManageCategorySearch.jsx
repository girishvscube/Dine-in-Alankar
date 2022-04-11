import { border, borderColor, style } from "@mui/system";
import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import search from "../../../Images/ActiveOrder/Search_fill.png";

const ManageCategorySearch = () => {
  const [visible, isVisible] = useState(true);

  return (
    <div className="  flex justify-between">
      <div className="w-1/6 h-full flex justify-between">
        <Link to="/menu/add-new-category">
          <button className="w-full h-full text-base  mr-8 add text-center pt-3 pb-3 text-white font-semibold font-sans">
            Add New Category
          </button>
        </Link>
      </div>
      <div className="w-2/4 h-full bg-search flex justify-between pl-2 pr-2 pt-1.5 pb-1.5 rounded-lg focus-within:border-2 border-button_border text-orange">
        <div className="h-full w-10/12 pl-2  font-semibold">
          <input
            type="text"
            className="h-9 w-full text-lg bg-search font-semibold placeholder-orange outline-none"
            placeholder="Search"
          />
        </div>
        <div className="h-full w-1/12 bg-search">
          <img src={search} alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default ManageCategorySearch;

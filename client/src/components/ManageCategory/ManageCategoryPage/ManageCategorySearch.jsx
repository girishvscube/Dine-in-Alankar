import { border, borderColor, style } from "@mui/system";
import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import search from "../../../Images/ActiveOrder/Search_fill.png";
import { Button } from "../../Button"
import { SearchField } from "../../SearchField";

const ManageCategorySearch = () => {
  const [visible, isVisible] = useState(true);

  return (
    <div className="  flex justify-between">
      <div className="w-1/6 flex justify-between">
        <Link to="/menu/add-new-category">
         <Button text="Add New Category" className="pl-4 pr-4 mt-0.5"></Button>
        </Link>
      </div>
      <div className=" w-3/5 bg-search flex justify-between pl-2 pr-2  rounded-lg focus-within:border-2 border-button_border text-orange">
        
         <SearchField />
        
        <div className="pt-3 w-1/12  bg-search">
          <img src={search} alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default ManageCategorySearch;

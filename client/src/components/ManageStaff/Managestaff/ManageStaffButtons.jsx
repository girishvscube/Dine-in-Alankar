import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import search from "../../../Images/ActiveOrder/Search_fill.png";
import { Button } from "../../Button";
import { SearchField } from "../../SearchField";

const ManageStaffButtons = () => {
  return (
    <div className="  flex justify-between">
      <div className=" flex ">
        <Link to="/menu/addnewstaff">
          
         <Button className="pl-8 pr-8">Add New Staff</Button>
        </Link>
        <Link to="/menu/newrole">
          
          <Button className="pl-8 pr-8 ml-10">Add New Role</Button>
        </Link>
      </div>
      <div className="w-2/4 h-14 bg-search flex justify-between focus-within:border-2 border-button_border p-2 rounded-lg">
       <SearchField className="w-10/12"/>
        <div className="pt-1 pb-1 w-1/12 bg-search">
          <img src={search} alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default ManageStaffButtons;

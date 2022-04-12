import React, { useState } from "react";
import "./style.scss";
import search from "../../../Images/ActiveOrder/Search_fill.png";
import refresh from "../../../Images/TakeAway/Refresh.svg";
import { Link } from "react-router-dom";
import { SearchField } from "../../SearchField";
import { Button } from "../../Button";

const ManageOrderButtons = () => {
  return (
    <div className="">
      <div className="  flex justify-between">
        <div className="w-1/6">
          <input
            type="date"
            className="outline-none text-orange text-base  pl-6 pr-6 rounded-lg bg-search border-2 border-button_border pt-4 pb-4"
          />
        </div>
        <div className="w-3/4 flex flex-row justify-end items-end">
          <div className=" bg-search w-2/4 focus-within:border-2 border-button_border text-orange flex flex-row rounded-lg pt-2 pb-2 mr-8 ">
            
             <SearchField/>
           
            <div className="pt-2 bg-search ">
              <img src={search} alt="search_icon" />
            </div>
          </div>
          <Link to="/menu/take-away/customer-details">
            <Button className="pl-6 pr-6">Create New Order</Button>
          </Link>
        </div>
      </div>
      <div className="float-right flex flex-row">
        <p className="text-base font-sans text-orange mt-3">
          <u>Refresh Orders</u>
        </p>
        <img className="mt-2" src={refresh} alt="refresh_icon" />
      </div>
    </div>
  );
};

export default ManageOrderButtons;

import React, { useState } from "react";
import "./style.scss";
import search from "../../../Images/ActiveOrder/Search_fill.png";
import refresh from "../../../Images/TakeAway/Refresh.svg"
import {Link} from "react-router-dom"

const ManageOrderButtons = () => {
  return (
    <div>
      <div className="  flex justify-between">
        <div className="w-1/4">
          <input
            type="date"
            className="outline-none text-orange  pl-6 pr-6 rounded-lg bg-search border-2 border-button_border pt-4 pb-4"
          />
        </div>
        <div className="w-3/4 flex flex-row justify-between">
          <div className=" bg-search w-3/4 focus-within:border-2 border-button_border text-orange  flex justify-between pl-2 pr-2  rounded-lg ">
            <div className=" pl-2  font-semibold">
              <input
                type="text"
                className=" text-lg pt-3.5 bg-search font-semibold placeholder-orange outline-none"
                placeholder="Search"
              />
            </div>
            <div className=" bg-search pt-3">
              <img src={search} alt="search_icon" />
            </div>
          </div>
          <Link to="/menu/customerdetails"><button className="add pl-6 pr-6  pt-4 pb-4 font-sans font-semibold text-white">
            Create New Order
          </button></Link>
        </div>
      </div>
      <div className="float-right flex flex-row">
          <p className="text-base font-sans text-orange mt-3"><u>Refresh Orders</u></p>
            <img className="mt-2" src={refresh} alt="refresh_icon"/>
      </div>
    </div>
  );
};

export default ManageOrderButtons;

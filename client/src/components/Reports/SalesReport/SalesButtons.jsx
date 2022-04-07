import React from "react";
import "./style.scss";
import search from "../../../Images/ActiveOrder/Search_fill.png";

const SalesButtons = () => {
  return (
    <div className="flex justify-between">
      <div className=" flex ">
        <input type="date" className="text-orange outline-none border-2 border-button_border rounded-lg pl-5 pr-5"/>

        <div className=" text-xs  ">
          <select className=" border-2 pl-4 pr-20 pt-4 pb-4  mr-2 ml-6 border-button_border text-base outline-none text-orange rounded-lg ">
            <option value="one">Cook</option>
            <option value="two">Waiter</option>
          </select>
        </div>
      </div>
     
    </div>
  );
};

export default SalesButtons;

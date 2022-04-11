import React from "react";
import sales from "../../../Images/Reports/Sales.svg"
import totalsales from "../../../Images/Reports/TotalSales.svg";

const SalesButtons = () => {
  return (
  <div className="flex flex-row justify-between">
    <div className="w-1/2 flex gap-6  flex-row">
      <div className="w-1/5 bg-white pb-3 box flex items-center justify-center flex-col">
        <div className="h-14 rounded-full w-14  mt-3 bg-red-100">
          <img src={totalsales} alt="totalsales icon " className="ml-3 mt-3"/>
        </div>
        <p className="text-4xl text-center mt-4 font-sans font-semibold">11,000</p>
        <p className="text-center text-sm mt-1 font-sans">Total Sales</p>
      </div>
      <div className="w-1/5 bg-white pb-3 box  flex items-center justify-center  flex-col">
        <div className="h-14 rounded-full w-14  mt-3 bg-red-100">
          <img src={sales} alt="sales icon " className="ml-3 mt-3"/>
        </div>
        <p className="text-4xl text-center mt-4 font-sans font-semibold">500</p>
        <p className="text-center text-sm mt-1 font-sans">Items Sold</p>
      </div>
      <div className="w-1/5 bg-white pb-3 box flex items-center justify-center flex-col">
        <div className="h-14 rounded-full w-14  mt-3 bg-red-100">
          <img src={sales} alt="sales icon " className="ml-3 mt-3"/>
        </div>
        <p className="text-4xl text-center mt-4 font-sans font-semibold">50</p>
        <p className=" text-sm text-center mt-1 font-sans">Dine - in Items</p>
      </div>
    </div>
    <div className="w-1/2 h-1/2 flex  justify-end items-end pl-4 pt-2">
    <div className="w-11/12 flex flex-row gap-6" >
    <input type="date" className="outline-none pt-4 w-2/6 rounded-lg pb-4 border-2 border-button_border  text-orange text-base pl-4 pr-4"/>
      <select className="outline-none w-2/6 text-orange rounded-lg  border-2 border-button_border text-base pt-5 pb-5 pl-3 pr-16">
        <option value="dine-in">Dine-In</option>
        <option value="order">Party Order</option>
        <option value="away">Take Away</option>
      </select>
      <input type="date" className="outline-none w-2/6 rounded-lg pt-4 pb-4 border-2 border-button_border pl-4 pr-4 text-orange text-base"/>
    </div>
    </div>
  </div>
  );
};

export default SalesButtons;

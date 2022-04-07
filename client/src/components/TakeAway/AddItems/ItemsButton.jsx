import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const ItemsButton = () => {
  return (
    <div className="  flex justify-between">
      <div className=" flex ">
        <Link to="/menu/takeaway/customerdetails">
        <button className=" h-full pl-6 pr-6 pt-4 pb-4 text-lg button text-center  rounded-lg text-white font-semibold font-sans">
          Customer Details
        </button></Link>
        <button className="h-full text-lg ml-10 pl-12 pr-12 pt-4 pb-4 add text-center rounded-lg text-white font-semibold font-sans">
          Add Items
        </button>
        <Link to="/menu/takeaway/managepayment">
          <button className="h-full text-lg ml-10 pl-6 pr-6 pt-4 pb-4 button text-center rounded-lg text-white font-semibold font-sans">
            Manage Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemsButton;

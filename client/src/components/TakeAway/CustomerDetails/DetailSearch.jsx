import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const DetailSearch = () => {
  return (
    <div className="  flex justify-between">
      <div className=" flex ">
      <button className=" h-full pl-6 pr-6 pt-5 pb-5 text-lg add text-center  rounded-lg text-white font-semibold font-sans">
          Customer Details
        </button>

        <Link to="/menu/takeaway/itemdetails">
        <button className="h-full text-lg ml-10 pl-12 pr-12 pt-5 pb-5 button text-center rounded-lg text-white font-semibold font-sans">
          Add Items
        </button>
        </Link>
        <Link to="/menu/takeaway/managepayment">
        <button className="h-full text-lg ml-10 pl-6 pr-6 pt-5 pb-5 button text-center rounded-lg text-white font-semibold font-sans">
            Manage Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailSearch;

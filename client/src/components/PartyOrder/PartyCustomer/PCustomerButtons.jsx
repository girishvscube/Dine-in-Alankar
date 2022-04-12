import React from "react";
import "./style.scss";
import {Link} from "react-router-dom"
import { Button } from "../../Button";

const PCustomerButtons = () => {
  return (
    <div className="  flex justify-between">
      <div className=" flex ">
        <Button className="pl-6 pr-6">Customer Details</Button>

        <Link to="/menu/party-order/active-order/items">
        <button className="h-full text-base ml-10 pl-12 pr-12 pt-4 pb-4 button text-center rounded-lg text-white font-semibold font-sans">
          Add Items
        </button>
        </Link>

       <Link to="/menu/party-order/active-order/payment">
       <button className="h-full text-base ml-10 pl-6 pr-6 pt-4 pb-4 button text-center rounded-lg text-white font-semibold font-sans">
          Manage Payment
        </button>
       </Link>
      </div>
    </div>
  );
};

export default PCustomerButtons;

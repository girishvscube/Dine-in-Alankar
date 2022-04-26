import React from "react";
import sale from "../../../Images/Reports/Sales.svg";
import totalsales from "../../../Images/Reports/TotalSales.svg";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
const SalesButtons = () => {
  const [total, setTotal] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [type, setType] = useState(0);
  const [ordertype, setOrdertype] = useState(1);

  const { handleSales, sales, token, handleDate, datee } =
    useContext(AuthContext);
  useEffect(() => {
    getData();
    getRevenue();
  }, [ordertype]);

  useEffect(() => {
    fetchData();
  }, [datee]);

  const getData = async () => {
    const data = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/reports/total?order_type=${ordertype}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    setTotal(data.data.data.meta_order[0].quantity);
    setType(data.data.data1.meta_order[0].quantity);
  };

  const getRevenue = async () => {
    const data = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/orders/revenue?order_type=${ordertype}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    setRevenue(data.data.revenue[0].total);
  };

  const handleCetegory = (e) => {
    setOrdertype(e.target.value);
    getData();
    getRevenue();
  };

  const fetchData = async () => {
    const data = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/reports/itemsold?datee=${datee}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    handleSales(data.data.data);
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/2 flex gap-6  flex-row">
        <div className="w-1/5 bg-white pb-3 box flex items-center justify-center flex-col">
          <div className="h-14 rounded-full w-14  mt-3 bg-red-100">
            <img
              src={totalsales}
              alt="totalsales icon "
              className="ml-3 mt-3"
            />
            {console.log(datee)}
          </div>
          <p className="text-4xl text-center mt-4 font-sans font-semibold">
            {revenue}
          </p>
          <p className="text-center text-sm mt-1 font-sans">Total Sales</p>
        </div>
        <div className="w-1/5 bg-white pb-3 box  flex items-center justify-center  flex-col">
          <div className="h-14 rounded-full w-14  mt-3 bg-red-100">
            <img src={sale} alt="sales icon " className="ml-3 mt-3" />
          </div>
          <p className="text-4xl text-center mt-4 font-sans font-semibold">
            {total}
          </p>
          <p className="text-center text-sm mt-1 font-sans">Items Sold</p>
        </div>
        <div className="w-1/5 bg-white pb-3 box flex items-center justify-center flex-col">
          <div className="h-14 rounded-full w-14  mt-3 bg-red-100">
            <img src={sale} alt="sales icon " className="ml-3 mt-3" />
          </div>
          <p className="text-4xl text-center mt-4 font-sans font-semibold">
            {type}
          </p>
          <p className=" text-sm text-center mt-1 font-sans">Dine - in Items</p>
        </div>
      </div>
      <div className="w-1/2 h-1/2 flex  justify-end items-end pl-4 pt-2">
        <div className="w-11/12 flex flex-row gap-6">
          {/* <input
            type="date"
            className="outline-none pt-4 w-2/6 rounded-lg pb-4 border-2 border-button_border  text-orange text-base pl-4 pr-4" 
          /> */}
          <select
            className="outline-none w-2/6 text-orange rounded-lg  border-2 border-button_border text-base pt-5 pb-5 pl-3 pr-16"
            onChange={handleCetegory}
          >
            <option value="1">Dine-In</option>
            <option value="2">Take Away</option>
            <option value="3">Party Order</option>
          </select>
          <input
            type="date"
            className="outline-none w-2/6 rounded-lg pt-4 pb-4 border-2 border-button_border pl-4 pr-4 text-orange text-base"
            onChange={(e) => {
              handleDate(e.target.value);
            }}
            value={datee}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesButtons;

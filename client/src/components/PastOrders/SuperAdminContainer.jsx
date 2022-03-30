import "./pastorders.scss";
import calender from "../../Images/PastOrders/calender.svg";
import { useState } from "react";
import { Calender } from "../Dashboard/Calender";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { AllOrders } from "./AllOrders";

export const SuperAdminContainer = () => {
  const [showCalender, setShowCalender] = useState(false);

  const obj = {
    picture: require("../../Images/alan.png"),
    name: "Ramya",
    role: "Super Admin",
  };

  const handleClick = () => {
    setShowCalender(!showCalender);
  };
  return (
    <div className="w-screen">
      {/* Super Admin */}

      <div className="flex  h-20  justify-end pr-9 shadow-lg ">
        <div className="">
          <div className=" w-11 h-11 rounded-[22px] mr-4 bg-slate-600 relative top-3">
            {/* src={obj.picture}
           alt="profile" */}
          </div>
        </div>
        <div className=" relative top-1">
          <p className=" text-lg font-semibold mb-1">{obj.name}</p>
          <p className=" text-sm font-normal">{obj.role}</p>
        </div>
      </div>

      {/* Past Orders Container */}
      <div className="flex flex-col gap-4 pl-20 pr-11 mt-6">
        <p className=" font-bold text-2xl">Past Orders - 90</p>
        <p>
          Dine-in {">"} <span className=" text-darkyellow ">Past Orders</span>
        </p>
        <p className=" border-b-2 border-line mt-4"></p>
      </div>

      {/*Sorting & Search Bill No Container */}
      <div className="flex gap-8 ml-20 mt-10">
        <p className=" font-semibold text-xl relative top-4">Sort By</p>
        <p className=" text-darkyellow text-xl h-16 border-2 border-darkyellow w-2/12 rounded-lg">
          Time
        </p>
        <div className="pt-3 pl-3 text-darkyellow text-xl h-16 border-2 border-darkyellow w-2/12 rounded-lg flex justify-between ">
          <p>Today</p>
          <div>
            <img
              className="relative"
              onClick={handleClick}
              src={calender}
              alt="calender"
            />
            {showCalender ? <Calender /> : ""}
          </div>
        </div>
        <div className="w-2/6 ml-auto pr-11  ">
          <div className="  displayGrid bg-search border-2 border-darkyellow rounded-lg">
            <input
              className=" border-0 w-full  h-16  bg-search placeholder:text-darkyellow placeholder:font-semibold placeholder:pl-4"
              type="text"
              placeholder="Search for Bill No."
            />
            <img
              className=" justify-self-end mr-5 relative top-2"
              src={search}
              alt="search"
            />
          </div>
        </div>
      </div>
      {/* All Orders Container */}
      <AllOrders />
    </div>
  );
};

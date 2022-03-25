import { FoodItems } from "./FoodItems";
import { CurveLineChart } from "./CurveLineChart";

import dateimg from "../../Images/Sidenavbar/reports.png";
import { useState } from "react";
import { Calender } from "./Calender";

export const AdminContainer = () => {
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
    <>
      <div className="w-screen">
        <div className="flex h-20  justify-end pr-9 shadow-lg ">
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
        <div className="grid grid-flow-row gap-2 pl-11 mt-11">
          <p className=" text-[26px] font-bold text-darkyellow">Dashboard</p>
          <p className="text-2xl font-normal">Your Statistic Report</p>
          <p className="border-b-2 border-darkyellow mr-11 mt-4"></p>
        </div>
        <div className=" flex gap-10 mt-10 pl-11">
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/fooditem.png"),
              count: 45,
              type: "food items",
            }}
          />
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/customer.png"),
              count: 96,
              type: "Customers",
            }}
          />
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/feedback.png"),
              count: 100,
              type: "feedback",
            }}
          />
        </div>
        <div className="pl-11 max-w-[1366px]  border-2 border-red-500">
          <div>
            <p></p>
            <img
              onClick={handleClick}
              className=" cursor-pointer"
              src={dateimg}
              alt="calender"
            />
            <div>{showCalender ? <Calender /> : ""}</div>
          </div>
          <CurveLineChart />
        </div>
      </div>
    </>
  );
};

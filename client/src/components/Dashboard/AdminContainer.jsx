import { FoodItems } from "./FoodItems";
import { CurveLineChart } from "./CurveLineChart";
import { useState } from "react";
import { Calender } from "./Calender";

import dateimg from "../../Images/Sidenavbar/reports.png";

export const AdminContainer = () => {
  const [showCalender, setShowCalender] = useState(false);
  const handleClick = () => {
    setShowCalender(!showCalender);
  };

  return (
    <div className="w-screen">
      <div className="h-[88vh] overflow-y-scroll bg-darkwhite">
        <div className="grid grid-flow-row gap-2 pl-11 mt-11">
          <p className=" text-[26px] font-bold text-darkyellow">Dashboard</p>
          <p className="text-2xl font-normal">Your Statistic Report</p>
          <p className="border-b-2 headerBorder mr-11 mt-4"></p>
        </div>
        <div className=" flex gap-11 mt-10 pl-11 w-5/6 lg:w-8/12 2xl:w-1/2">
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
        <div className="mt-6 px-11">
          <div className="flex justify-between mb-11 ">
            <p className=" text-2xl font-semibold text-darkyellow">Date</p>
            <div className="  ">
              <img
                onClick={handleClick}
                className=" w-5 cursor-pointer mr-0"
                src={dateimg}
                alt="calender"
              />
              <div className="mt-4"> {showCalender ? <Calender /> : ""}</div>
            </div>
          </div>
          <CurveLineChart />
        </div>
      </div>
    </div>
  );
};

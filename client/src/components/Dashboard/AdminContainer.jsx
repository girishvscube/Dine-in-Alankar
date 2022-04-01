import { FoodItems } from "./FoodItems";
import { CurveLineChart } from "./CurveLineChart";
import { SuperAdminContainer } from "./SuperAdminContainer";

import dateimg from "../../Images/Sidenavbar/reports.png";
import { useState } from "react";
import { Calender } from "./Calender";

export const AdminContainer = () => {
  const [showCalender, setShowCalender] = useState(false);
  const handleClick = () => {
    setShowCalender(!showCalender);
  };
  return (
    <div className="w-screen">
      <SuperAdminContainer />
      <div className="grid grid-flow-row gap-2 pl-11 mt-11">
        <p className=" text-[26px] font-bold text-darkyellow">Dashboard</p>
        <p className="text-2xl font-normal">Your Statistic Report</p>
        <p className="border-b-2 border-darkyellow mr-11 mt-4"></p>
      </div>
      <div className=" flex gap-11 mt-10 pl-11 w-4/6 lg:w-1/2">
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
        <div className="grid grid-flow-col mb-11">
          <p className=" text-2xl font-semibold text-darkyellow">Date</p>
          <div className=" justify-self-center">
            <img
              onClick={handleClick}
              className=" cursor-pointer "
              src={dateimg}
              alt="calender"
            />
            {showCalender ? <Calender /> : ""}
          </div>
        </div>
        <CurveLineChart />
      </div>
    </div>
  );
};

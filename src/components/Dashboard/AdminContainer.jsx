import { FoodItems } from "./FoodItems";
import { CurveLineChart } from "./CurveLineChart";
import DatePickerMUI from "../DatePickerMUI/DatePickerMUI";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { AppContext } from "../../context/AppContext";

export const AdminContainer = () => {
  const [customer, setCustomer] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [food, setFood] = useState([]);
  const [today, setToday] = useState("");
  const [week, setWeek] = useState("");
  const [month, setMonth] = useState("");

  const { date } = useContext(AppContext);
  // console.log(token);

  const token = localStorage.getItem("alankartoken");

  const stats = () => {
    const res = axios.get(`https://test-dev-api.scube.me/reports/customers`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      setCustomer(res.data.data[0].total);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  const feed = () => {
    const res = axios.get(`https://test-dev-api.scube.me/feedback-count`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      setFeedback(res.data.data[0].id);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  const fooditems = () => {
    const res = axios.get(
      `https://test-dev-api.scube.me/reports/total?order_type=3`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    res.then((res) => {
      setFood(res.data);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  // console.log("food data", food);

  const todayreport = () => {
    const res = axios.get(`https://test-dev-api.scube.me/reports/today`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      setToday(res.data.data[0].total);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  const weekreport = () => {
    const res = axios.get(`https://test-dev-api.scube.me/reports/thisweek`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      setWeek(res.data.data[0].total);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  const monthreport = () => {
    const res = axios.get(`https://test-dev-api.scube.me/reports/thismonth`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      setMonth(res.data.data[0].total);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    stats();
    feed();
    fooditems();
    todayreport();
    weekreport();
    monthreport();
  }, []);

  return (
    <div className="w-screen mt-1">
      {/* {console.log("today data", today)}
      {console.log("this week data", week)}
      {console.log("this month data", month)} */}
      <div className="h-[88vh] overflow-y-scroll bg-darkwhite">
        <div className="grid grid-flow-row gap-1 pl-9 mt-4">
          <p className=" text-[26px] font-bold text-darkyellow">Dashboard</p>
          <p className="text-2xl font-normal">Your Statistic Report</p>
          <p className="border-b-2 headerBorder mr-9 mt-4"></p>
        </div>
        <div className=" flex gap-11 mt-10 pl-9 w-5/6 lg:w-6/12 2xl:w-1/2">
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/fooditem.png"),
              count: food,
              type: "food items",
            }}
          />
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/customer.png"),
              count: customer,
              type: "Customers",
            }}
          />
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/feedback.png"),
              count: feedback,
              type: "feedback",
            }}
          />
        </div>

        <div className="mt-6 px-9">
          <div className="flex justify-between mb-3 ">
            <p className=" text-2xl font-semibold text-darkyellow">Date</p>
            <div>
              <DatePickerMUI></DatePickerMUI>
            </div>
          </div>
          <CurveLineChart />
        </div>
        <div></div>
      </div>
    </div>
  );
};

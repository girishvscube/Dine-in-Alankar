import { FoodItems } from "./FoodItems";
import { CurveLineChart } from "./CurveLineChart";
import { DatePickerMUI } from "../DatePickerMUI/DatePickerMUI";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext"
import axios from "axios";

export const AdminContainer = () => {
  const [customer, setCustomer]=useState([])
  const [food, setFood]=useState([])



  // const {token } = useContext(AuthContext);
  // console.log(token);

  const toke = "Mjk.P__uN-xiBTTboHV-xwv1wLnH81OZw4PlwgVKpQGt4Xmvh6Z2u3gaXY24Wi44"

  

  const stats= async ()=>{
    const res = await axios(`https://test-dev-api.scube.me/reports/customers`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${toke}`
    }
    })
    console.log("d", res.data.data[0].total);
    setCustomer(res.data.data[0].total);
}


const items= async ()=>{
  const res = await axios(`https://test-dev-api.scube.me/reports/total?order_type=1`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${toke}`
  }
  })
  console.log("f", res);
  setFood(res);
}

useEffect(()=>{
  stats()
  items()
},[])

  return (
    <div className="w-screen mt-1">
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
              count: customer,
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
            <div>
              <DatePickerMUI />
            </div>
          </div>
          <CurveLineChart />
        </div>
      </div>
    </div>
  );
};

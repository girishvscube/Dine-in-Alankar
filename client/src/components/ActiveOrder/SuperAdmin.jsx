import { FoodItems } from "../Dashboard/FoodItems";
import refresh from "../../Images/ActiveOrder/refresh.png";
import "./superadmin.scss";
import { AllOrders } from "./AllOrders";

export const SuperAdmin = () => {
  const obj = {
    picture: require("../../Images/alan.png"),
    name: "Ramya",
    role: "Super Admin",
  };
  return (
    <div className="w-screen">
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
      <div className="grid grid-flow-row gap-2 pl-11 mt-11">
        <p className=" text-[26px] font-bold text-darkyellow">Active Order</p>
        <p className="text-2xl font-normal">This is your order list</p>
        <p className="border-b-2 Border mr-11 mt-4"></p>
      </div>
      <div className="flex gap-11 mt-10 ml-11">
        <div className=" flex gap-12 ">
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/fooditem.png"),
              count: 45,
              type: "food items",
            }}
          />
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/fooditem.png"),
              count: 45,
              type: "food items",
            }}
          />{" "}
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/fooditem.png"),
              count: 45,
              type: "food items",
            }}
          />{" "}
          <FoodItems
            data={{
              picture: require("../../Images/Dashboard/fooditem.png"),
              count: 45,
              type: "food items",
            }}
          />
        </div>

        <input
          className=" w-[393px] border-2 h-16 bg-bgsearch rounded-xl placeholder:text-darkyellow placeholder:font-semibold placeholder:pl-7"
          type="text"
          placeholder="Search"
        />
        <div>
          <div className="border-2 h-[60px] Btn ">
            <button className="relative top-1 px-7 py-3 text-white font-semibold">
              Create New Order
            </button>
          </div>
          <div className="flex mt-16">
            <p className="pl-4 font-semibold text-xl text-darkyellow underline">
              Refresh Orders
            </p>
            <img src={refresh} alt="refresh" />
          </div>
        </div>
      </div>

      <AllOrders />
    </div>
  );
};

import { FoodItems } from "../Dashboard/FoodItems";
import refresh from "../../Images/ActiveOrder/refresh.png";
import "./superadmin.scss";
import { AllOrders } from "./AllOrders";

export const SuperAdmin = () => {
  return (
    <div className="w-screen">
      <div className=" overflow-y-scroll h-[88vh]">
        <div className="grid grid-flow-row gap-2 pl-11 mt-11">
          <p className=" text-[26px] font-bold text-darkyellow">Active Order</p>
          <p className="text-2xl font-normal">This is your order list</p>
          <p className="border-b-2 Border mr-11 mt-4"></p>
        </div>
        <div className="flex gap-9 mt-10 mx-11">
          <div className=" grid grid-flow-col w-7/12 2xl:6/12 gap-11">
            {/* 2xl:w-6/12 */}
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
            className=" w-1/4 border-2 h-16 bg-search pl-7 rounded-xl outline-none placeholder:text-darkyellow placeholder:font-semibold"
            type="text"
            placeholder="Search"
          />
          <div className="2xl:ml-4">
            <button className="h-[60px] Btn text-sm w-[160px] px-3 py-3 relative top-1 text-white font-semibold 2xl:px-5 2xl:w-[180px] 2xl:text-base ">
              {/*  px-7 py-3 */}
              Create New Order
            </button>

            <div className="grid grid-flow-col mt-16">
              <p className=" font-semibold text-base 2xl:text-xl text-darkyellow underline justify-self-end">
                {/* text-xl */}
                Refresh Orders
              </p>
              <img
                className=" justify-self-start relative bottom-1"
                src={refresh}
                alt="refresh"
              />
            </div>
          </div>
        </div>

        <AllOrders />
      </div>
    </div>
  );
};

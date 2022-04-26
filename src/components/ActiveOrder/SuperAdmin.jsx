import { FoodItems } from "../Dashboard/FoodItems";
import refresh from "../../Images/ActiveOrder/refresh.png";
import searchimg from "../../Images/ActiveOrder/Search_fill.png";
import "./superadmin.scss";
import { AllOrders } from "./AllOrders";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { AppContext } from "../../context/AppContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

export const SuperAdmin = () => {
  const { getAllOrdersData } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [count, setcount] = useState(0);
  const [data, setData] = useState(0);
  const refreshOrder = () => {
    alert("refresh done");
    getAllOrdersData();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  useEffect(() => {
    getAllOrderscount();
    getpastordersCount();
  });

  const getAllOrderscount = async () => {
    const token = localStorage.getItem("alankartoken");
    const data = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/orders/active-orders?order_type=1&page=1`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    setcount(data.data.data.meta.total);
  };

  const getpastordersCount = async () => {
    const token = localStorage.getItem("alankartoken");
    const data = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/orders/past-orders?order_type=1`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    setData(data.data.data.meta.total);
  };

  return (
    <div className="w-screen mt-1">
      <div className=" overflow-y-scroll h-[88vh] bg-darkwhite">
        <div className="grid grid-flow-row gap-1 pl-5 lg:pl-9 mt-5">
          <p className=" text-xl lg:text-[26px] font-bold text-darkyellow">
            Active Order
          </p>
          <p className=" text-sm lg:text-2xl font-normal">
            This is your order list
          </p>
          <p className="border-b-2 Border mr-11 lg:mt-4"></p>
        </div>
        <div className="flex justify-between mt-10 mx-9">
          <div className=" grid grid-flow-col w-10/12 lg:w-6/12 2xl:6/12 gap-6">
            {/* 2xl:w-6/12 */}
            <FoodItems
              data={{
                picture: require("../../Images/Dashboard/fooditem.png"),
                count: count,
                type: "New Orders",
              }}
            />
            <FoodItems
              data={{
                picture: require("../../Images/Dashboard/fooditem.png"),
                count: count,
                type: "Cooking",
              }}
            />{" "}
            <FoodItems
              data={{
                picture: require("../../Images/Dashboard/fooditem.png"),
                count: 2,
                type: "Ready to Serve",
              }}
            />{" "}
            <FoodItems
              data={{
                picture: require("../../Images/Dashboard/fooditem.png"),
                count: data,
                type: "Served",
              }}
            />
          </div>
          <div className="h-14 w-2/6  displayGrid bg-search border border-darkyellow rounded-lg">
            <input
              className=" border-0 w-full  bg-search placeholder:text-darkyellow placeholder:font-semibold placeholder:pl-4"
              type="text"
              placeholder="Search for Bill No."
              onChange={handleChange}
            />
            <img
              className=" justify-self-end mr-2 object-contain relative top-2"
              src={searchimg}
              alt="search"
            />
          </div>
          <div className="2xl:ml-4">
            <Link to="/menu/dinein/create-new-order">
              {" "}
              {/* <button className="h-[60px] Btn text-sm w-[160px] p-3 relative top-1 text-white font-semibold 2xl:px-5 2xl:w-[180px] 2xl:text-base ">
                Create New Order
              </button> */}
              <Button text="Create New Order" className="pl-3 pr-3"></Button>
            </Link>

            <div
              onClick={refreshOrder}
              className="cursor-pointer grid grid-flow-col mt-16"
            >
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

        <AllOrders search={search} />
      </div>
    </div>
  );
};

import { useState } from "react";
import { data } from "../../AllOrders";
import { Button } from "../Button";
import { DetailOrder } from "./DetailOrder";
import "./superadmin.scss";

export const AllOrders = () => {
  const [orderData, setOrderData] = useState(data);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  var orderMenu = [
    "Table No.",
    "Order ID",
    "Customer Name",
    "Item Status",
    "Payment Status",
    "Payment Action",
  ];

  const handleClick = (el) => {
    setShowOrderDetail(true);
    localStorage.setItem("showOrderDetail", showOrderDetail);
  };
  return (
    <div className="mx-11 bg-white ">
      <h1 className=" text-2xl font-bold text-darkyellow my-8 ml-11">
        All Orders
      </h1>
      <div className="h-[60vh] text-center  overflow-y-scroll ">
        <table className=" table-auto w-full border-collapse">
          <thead>
            <tr className="border-b-2  tableBorder ">
              {orderMenu.map((e, index) => (
                <th key={index} className="">
                  <p className=" mb-2 font-semibold">{e}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderData.map((e, index) => (
              <tr key={index} className="tableBorder">
                <td>
                  <p
                    onClick={() => {
                      handleClick(e);
                    }}
                    className=" mt-7 mb-7 font-normal cursor-pointer"
                  >
                    {e.tableno}
                  </p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-normal">{e.OrderID}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-normal">{e.CustomerName}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-normal">{e.ItemStatus}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-normal">{e.PaymentStatus}</p>
                </td>
                <td>
                  {/* <button className="mb-7 mt-7 Btn px-11 py-3 rounded-lg text-white font-normal">
                    {e.PaymentAction}
                  </button> */}
                  <Button className="mb-7 mt-7 Btn px-11 py-3 rounded-lg text-white font-normal">
                    {e.PaymentAction}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className={`${showOrderDetail}` ? "hidden" : ""}> */}
      <DetailOrder />
      {/* </div> */}
    </div>
  );
};

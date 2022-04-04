import { useState } from "react";
import { feedback } from "../../feedback";

export const Customers = () => {
  const [orderData, setOrderData] = useState(feedback);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  var orderMenu = [
    "S. No.",
    "Name",
    "Order ID",
    "Phone No",
    "Waiter",
    "Ratings",
    "Comments",
  ];
  return (
    <div>
      <h1 className=" text-2xl font-bold text-darkyellow my-8 ml-11 ">
        Customers
      </h1>
      <div className="h-[413px] text-center  overflow-y-scroll bg-white border-gray-200 border pt-2 ml-11 ">
        <table className=" table-auto w-full border-collapse">
          <thead>
            <tr className="border-b-2  tableBorder ">
              {orderMenu.map((e, index) => (
                <th key={index} className="">
                  <p className=" mb-2">{e}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderData.map((e, index) => (
              <tr key={index} className="tableBorder">
                <td>
                  <p className=" mt-7 mb-7 font-medium">{e.sno}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.name}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.orderID}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.phoneNo}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.waiter}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.Ratings}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.Comments}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

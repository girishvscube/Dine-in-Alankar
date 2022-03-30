import { pastAllOrdersData } from "../../pastallorders";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
export const AllOrders = () => {
  const [showData, setShowData] = useState(false);
  const menuArr = [
    "S.No",
    "Customer Name",
    "Date & Time",
    "Order ID",
    "Total",
    "Payment Mode",
  ];

  const handleClick = (el) => {
    setShowData(!showData);
  };
  return (
    <div>
      <div className="ml-11 mr-20">
        <h1 className=" text-2xl font-bold text-darkyellow my-8 ml-11">
          All Orders
        </h1>
        <div className="h-[43vh] text-center  overflow-y-scroll ">
          <table className=" table-auto w-full border-collapse">
            <thead>
              <tr className="border-b-2  tableBorder ">
                {menuArr.map((e, index) => (
                  <th key={index} className="">
                    <p className=" mb-2">{e}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pastAllOrdersData.map((e, index) => (
                <tr key={index} className="tableBorder">
                  <td>
                    <p className=" mt-7 mb-7 font-medium">{e.sno}</p>
                  </td>
                  <td>
                    <p className=" mb-7 mt-7 font-medium">{e.cname}</p>
                  </td>
                  <td>
                    <div className=" mb-7 mt-7 font-medium">
                      <p>{e.dt.date}</p>
                      <p className="mr-7 text-sm">{e.dt.time}</p>
                    </div>
                  </td>
                  <td>
                    <p className=" mb-7 mt-7 font-medium">{e.orderID}</p>
                  </td>
                  <td>
                    <p className=" mb-7 mt-7 font-medium">{e.total}</p>
                  </td>
                  <td>
                    <p className=" mb-7 mt-7 font-medium">{e.paymentMode}</p>
                  </td>
                  <td>
                    <p
                      onClick={() => {
                        handleClick(e);
                      }}
                      className=" mb-7 mt-7 ml-7 font-medium"
                    >
                      {showData ? (
                        <KeyboardArrowUpTwoToneIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

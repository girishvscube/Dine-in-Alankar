import { useEffect, useState, useContext } from "react";
import { DetailOrder } from "./DetailOrder";
import "./superadmin.scss";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { Button } from "../Button";

export const AllOrders = ({ search }) => {
  const { orderData } = useContext(AppContext);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    filterOrders();
  }, [search]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const token = localStorage.getItem("alankartoken");

  // {{url}}/admin/orders?page=1&search_key=sanket
  const filterOrders = async () => {
    axios
      .get(`${BASE_URL}/admin/orders?page=1&search_key=${search}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })

      .then((res) => {
        // console.log(res.data.data.data);
        setFilteredOrders(res.data.data.data);
      })
      .then((error) => {
        console.log(error);
      });
  };

  // const [orderData, setOrderData] = useState([]);

  const { handleShow } = useContext(AppContext);

  var orderMenu = [
    "Table No.",
    "Order ID",
    "Customer Name",
    "Item Status",
    "Payment Status",
    "Payment Action",
  ];

  const obj = {
    payment_status: "PAID",
  };

  const managePayment = (id) => {
    axios
      .patch(`${BASE_URL}/admin/orders/payment/status/${id}`, obj, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })

      .then((res) => {
        alert("Payment status updated successfully");
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handleClick = (el) => {
    //console.log("All Orders Particular Order :", el);
    handleShow(true);

    axios
      .get(`${BASE_URL}/admin/orders/${el.id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })

      .then((res) => {
        //console.log("particular order :", res.data.data);
        console.log(res);
        localStorage.setItem("particularOrder", JSON.stringify(res.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={`mx-9 bg-white shadow-md`}>
      {/* {showOrderDetail ? <DetailOrder /> : ""} */}
      <h1 className=" text-2xl font-bold text-darkyellow my-8 pt-4 ml-9">
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
            {search.length > 0
              ? filteredOrders.map((e, index) => (
                  <tr key={index} className="tableBorder">
                    <td>
                      <p
                        onClick={() => {
                          handleClick(e);
                        }}
                        className=" mt-7 mb-7 font-normal cursor-pointer"
                      >
                        {e?.table?.id}
                      </p>
                    </td>
                    <td>
                      <p className=" mb-7 mt-7 font-normal">{e?.id}</p>
                    </td>
                    <td>
                      <p className=" mb-7 mt-7 font-normal">{e?.name}</p>
                    </td>
                    <td>
                      <p className=" mb-7 mt-7 font-normal">
                        {e?.payment_status === "PAID" ? "served" : "cooking"}
                      </p>
                    </td>
                    <td>
                      <p className=" mb-7 mt-7 font-normal">
                        {e?.payment_status === "PAID" ? "paid" : "pending"}
                      </p>
                    </td>

                    <td>
                      <p className=" mb-7 mt-7 font-normal">
                        {e?.payment_status === "PAID" ? (
                          <button
                            className="grayBackground bg-transparent"
                            disabled={true}
                          >
                            Done
                          </button>
                        ) : (
                          <button text="Done"></button>
                        )}
                      </p>
                    </td>
                  </tr>
                ))
              : orderData.map((e, index) => (
                  <tr key={index} className="tableBorder">
                    <td>
                      <p
                        onClick={() => {
                          handleClick(e);
                        }}
                        className=" mt-7 mb-7 font-normal cursor-pointer"
                      >
                        {e?.table_id}
                      </p>
                    </td>
                    <td>
                      <p className=" mb-7 mt-7 font-normal">{e?.id}</p>
                    </td>
                    <td>
                      <p className=" mb-7 mt-7 font-normal">{e?.name}</p>
                    </td>
                    <td>
                      <p className=" mb-7 mt-7 font-normal">
                        {e?.payment_status === "PAID" ? "served" : "cooking"}
                      </p>
                    </td>
                    <td>
                      <p className=" mb-7 mt-7 font-normal">
                        {e?.payment_status === "PAID" ? "paid" : "pending"}
                      </p>
                    </td>

                    <td>
                      <p className=" mb-7 mt-7 font-normal">
                        {e?.payment_status === "PAID" ? (
                          <button
                            className="grayBackground text-white"
                            text="Done"
                            disabled={true}
                          >
                            Done
                          </button>
                        ) : (
                          <button text="Done" className="Btn text-white">
                            Done
                          </button>
                        )}
                      </p>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <DetailOrder />
    </div>
  );
};
/*
<td>

                  <Button
                    text={
                      e.payment_status == "PAID" ? "in progress" : "pending"
                    }
                    className="mb-7 mt-7 Btn px-11 py-3 rounded-lg text-white font-normal"
                  ></Button>
                </td>
*/

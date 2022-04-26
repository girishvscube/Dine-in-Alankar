import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./superadmin.scss";
import "./orderdetail.scss";
import Swal from "sweetalert2";
import { AppContext } from "../../context/AppContext";
import { Button } from "../Button";
import axios from "axios";
export const DetailOrder = ({ showOrderDetail }) => {
  const { show, handleShow } = useContext(AppContext);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const order = JSON.parse(localStorage.getItem("particularOrder"));
  const token = localStorage.getItem("alankartoken");

  const handleClose = () => {
    // setSideBar(false);
    handleShow(false);
  };

  const handleUpdate = () => {
    console.log("hello");
  };

  const handleSendBill = () => {
    Swal.fire({
      title: "<strong>Table Transfer</strong>",
      html: `<div>
      <p>Existing Table :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>${order[0]?.id}</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
      <br/>
      <br/>
      <p>Select Transfer Table :&emsp;&emsp;
      <select>
      <option value="one">Table 1</option>
      <option value="two">Table 2</option>
      <option value="three">Table 3</option>
      </select>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
      </div>`,
      showCloseButton: true,
      focusConfirm: false,

      confirmButtonText: "Submit",
      confirmButtonClass: "confirm_btn",
    }).then((res) => {
      axios
        .patch(
          `${BASE_URL}/admin/orders/payment/status/${order[0]?.id}`,
          {
            payment_status: "PAID",
          },
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handlePrintBill = () => {
    Swal.fire({
      title: "<strong>Payment</strong>",
      html: `<div>
      <p>Name :&emsp;&emsp;&emsp;&emsp;<b>Sailu Chandragiri</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
      <br/>
      <br/>
      <p>Phone No :&emsp;&emsp;<b>+919550968914</b>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
      <br/>
      <br/>
      <p><b>Are you sure to send bill?</b></p>
      </div>`,
      showCloseButton: true,
      focusConfirm: false,
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "NC",
      denyButtonText: "No",
      cancelButtonColor: "white",
      denyButtonColor: "white",
      confirmButtonClass: "confirm_btn",
      cancelButtonClass: "cancel_btn",
      denyButtonClass: "cancel_btn",
    });
  };
  return (
    <div className=" ">
      <div className={`bg-white ${show ? "nav-menu active" : "nav-menu"}`}>
        {/* {order.map((e) => ( */}
        <div className="w-[530px] h-[100vh] overflow-y-scroll shadow-lg">
          <div className="flex justify-between">
            <h1 className=" mt-3 ml-11 font-bold text-2xl">Detail Order</h1>

            <CloseIcon
              fontSize="large"
              className="mt-4"
              onClick={handleClose}
            />
          </div>
          <div className="flex justify-around text-xl font-semibold  mt-2">
            <p>Table No : {order[0]?.table_id}</p>
            <p>Order ID : {order[0]?.id} </p>
            <p>Live</p>
          </div>
          <h3 className=" font-semibold text-xl py-[7px] mt-4 pl-[50px] bg-bggray">
            Customer Details
          </h3>
          <div className="flex flex-col gap-3 ml-14">
            <p className=" mt-4">
              Name :
              <span className=" font-semibold pl-16"> {order[0]?.name}</span>
            </p>
            <p className=" mb-4">
              Phone No :{" "}
              <span className=" font-semibold pl-9"> {order[0]?.phone}</span>
            </p>
          </div>

          <h3 className=" font-semibold text-xl py-[7px]  pl-[50px] bg-bggray">
            Order Details
          </h3>
          <div className="flex flex-col gap-3 ml-14">
            <p className="mt-4">Captain Name :</p>
            <p>
              Waiter Name :{" "}
              <span className=" font-semibold pl-4">
                {" "}
                {order[0]?.table?.users[0]?.name}
              </span>
            </p>
            <p className="mb-4">
              Session:
              <span className=" font-semibold pl-14">
                {" "}
                {order[0]?.created_at}
              </span>
            </p>
          </div>
          <h3 className=" font-semibold text-xl py-[7px]  pl-[50px] bg-bggray">
            Table Summary
          </h3>
          {order[0].meta_order.map((e, i) => (
            <div key={i + 1} className="flex gap-5 mt-4 ml-11">
              <p className=" relative top-1 flex justify-center pt-[6px] w-9 h-9 rounded-[50%] bg-gray-300 font-medium ">
                {i + 1}
              </p>
              <div className="flex flex-col ">
                <p className="font-semibold">{e?.menus?.name}</p>
                <p className="text-xs font-light text-gray-500">dessert</p>
              </div>
              <p className="relative top-3">x {e.quantity}</p>
              <p className="relative top-3">₹ {e.price}</p>
              <p className=" ml-7 py-2 px-7 border-2 border-[#FEA6A6] bg-[#FCEDEA]  font-semibold rounded-lg">
                cooking
              </p>
            </div>
          ))}
          <h3 className="font-semibold text-xl py-[7px] mt-4 pl-[50px] bg-bggray">
            Bill
          </h3>
          <div className="flex gap-2 justify-around mt-5 pl-5">
            <p className=" outline-none border border-darkyellow w-1/2 rounded-lg bg-search my-auto py-2 pl-2 text-darkyellow font-semibold">
              FLAT 15%
            </p>
            <Button text="Remove" className=" text-base py-0 w-3/12" />
          </div>
          <p className="text-darkyellow pl-[50px] text-sm mt-1">
            ✅15% coupon is applied
          </p>
          <div className="flex justify-between mx-14 mt-4 mb-5">
            <p className="font-semibold">Subtotal</p>
            <p className="">₹ {order[0]?.sub_toal}</p>
          </div>
          <div className="flex justify-between mx-14">
            <p className="">GST @ 5%</p>
            <p className="">₹ {order[0].tax}</p>
          </div>
          <p className="border-b-2 mt-7 border-darkyellow mx-14"></p>
          <div className="flex text-2xl font-bold mt-6 justify-between mx-14">
            <p className="">Total Bill</p>
            <p className="">₹ {order[0].total}</p>
          </div>
          <div className=" mt-36 flex justify-evenly mb-3 ">
            {/* w-1/4 py-3  border-2 text-white font-semibold Btn */}
            <Button
              onClick={handleSendBill}
              text="Send Bill"
              className=" w-1/4 py-3"
            />
            <Button
              onClick={handleSendBill}
              text="Print Bill"
              className=" w-1/4 py-3 Btn"
            />
            <Button
              className=" w-1/4 py-3 text-white font-semibold Btn px-1"
              text="Table Transfer"
            ></Button>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

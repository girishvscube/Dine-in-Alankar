import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./superadmin.scss";
import "./orderdetail.scss";
import Swal from "sweetalert2";
export const DetailOrder = ({ showOrderDetail }) => {
  const [sideBar, setSideBar] = useState(false);
  var arr = [
    {
      id: 1,
      dish: "Masala Dosa",
      type: "Dosa Mela",
      qty: 2,
      price: 200,
      isserved: "cooking",
    },
    {
      id: 2,
      dish: "Masala Dosa",
      type: "Dosa Mela",
      qty: 2,
      price: 200,
      isserved: "cooking",
    },
    {
      id: 3,
      dish: "Masala Dosa",
      type: "Dosa Mela",
      qty: 2,
      price: 200,
      isserved: "cooking",
    },
    {
      id: 4,
      dish: "Masala Dosa",
      type: "Dosa Mela",
      qty: 2,
      price: 200,
      isserved: "cooking",
    },
  ];
  console.log(showOrderDetail);
  const handleClose = () => {
    setSideBar(false);
  };

  const handleSendBill = () => {
    Swal.fire({
      title: "Table Transfer",
      html:
        "<p>Existing Table<span>20A</span></p>" +
        "<p>Select transfer Table:<a>20A</a> </p>",
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: "Submit",
      customClass: {
        popup: "swal2-popup",
        html: "swal2-container",
        showConfirmButton: "swal2-btn",
        confirmButtonText: "swal2-btn-text",
      },
    });
  };

  const handlePrintBill = () => {
    Swal.fire({
      title: "Payment",
      html: `<div className = "bg-red-500">
        <p><label>Name</label> <a>Rahul Kharche</a></p>
      <p><label>Phone No</label> <a>987465321</a></p>
        <b>Are you sure to Send Bill </b>
        </div>`,
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#FFBE15",
      confirmButtonText: "Yes",
      showCancelButton: true,
      cancelButtonText: "No",
      cancelButtonColor: "#FFBE15",
      customClass: {
        popup: "swal2-popup",
        html: "swal2-container2",
        showConfirmButton: "swal2-btn",
        confirmButtonText: "swal2-btn-text",
      },
    });
  };
  return (
    <div>
      <div>Click Me</div>
      <div>
        {/* className={sideBar ? "nav-menu active" : "nav-menu"} */}
        <div className="w-full h-[100vh] overflow-y-scroll shadow-lg">
          <div className="flex justify-between">
            <h1 className=" mt-3 ml-13 font-bold text-[32px]">Detail Order</h1>

            <CloseIcon
              fontSize="large"
              className="mt-4"
              onClick={handleClose}
            />
          </div>
          <div className="flex gap-28 text-2xl font-semibold ml-14 mt-4">
            <p>Table No :</p>
            <p>Order ID : </p>
            <p>Live</p>
          </div>
          <h3 className=" font-semibold text-xl py-[10px] mt-4 pl-14 bg-bggray">
            Customer Details
          </h3>
          <div className="flex flex-col gap-6 ml-14">
            <p className=" mt-4">Name :</p>
            <p className=" mb-4">Phone No :</p>
          </div>

          <h3 className=" font-semibold text-xl py-[10px] pl-14 bg-bggray">
            Order Details
          </h3>
          <div className="flex flex-col gap-6 ml-14">
            <p className="mt-4">Captain Name :</p>
            <p>Waiter Name :</p>
            <p className="mb-4">Session: </p>
          </div>
          <h3 className=" font-semibold text-xl py-[10px]  pl-14 bg-bggray">
            Table Summary
          </h3>
          {arr.map((e) => (
            <div className="flex gap-10 mt-6 ml-14">
              <p className=" relative top-1 flex justify-center pt-1 w-9 h-9 rounded-[18px] bg-gray-300 font-medium ">
                {e.id}
              </p>
              <div className="flex flex-col ">
                <p className=" text-xl font-semibold">{e.dish}</p>
                <p className=" text-sm font-light text-gray-400">{e.type}</p>
              </div>
              <p className="relative top-3">x {e.qty}</p>
              <p className="relative top-3">Rs. {e.price}</p>
              <p className="ml-8 py-2 px-[30px] border-2 border-[#FEA6A6] bg-[#FCEDEA]  font-semibold rounded-[10px]">
                {e.isserved}
              </p>
            </div>
          ))}
          <h3 className="font-semibold text-xl py-[14px] mt-4 pl-14 bg-bggray">
            Bill
          </h3>
          <div className="flex justify-between mx-14 mt-7 mb-5">
            <p className="font-semibold">Subtotal</p>
            <p className="">Rs. 180</p>
          </div>
          <div className="flex justify-between mx-14">
            <p className="">GST @ 5%</p>
            <p className="">Rs. 50</p>
          </div>
          <p className="border-b-2 mt-7 border-darkyellow mx-14"></p>
          <div className="flex text-2xl font-bold mt-6 justify-between mx-14">
            <p className="">Total Bill</p>
            <p className="">Rs. 500</p>
          </div>
          <div className=" mt-44 flex justify-evenly ">
            <button
              onClick={handleSendBill}
              className=" w-1/4 py-3  border-2 text-white font-semibold Btn"
            >
              Send Bill
            </button>
            <button
              onClick={handlePrintBill}
              className=" w-1/4 py-3  border-2 text-white font-semibold Btn"
            >
              Print Bill
            </button>
            <button className=" w-1/4 py-3  border-2 text-white font-semibold Btn">
              Table Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

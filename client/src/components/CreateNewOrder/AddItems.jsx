import "./createneworder.scss";
import search from "../../Images/ActiveOrder/Search_fill.png";
import axios from "axios";
import { useState,useEffect } from "react";


export const AddItems = () => {
  const [neworder,setNeworder]=useState([])

  // const toke = "Mjk.P__uN-xiBTTboHV-xwv1wLnH81OZw4PlwgVKpQGt4Xmvh6Z2u3gaXY24Wi44"



//   const stats= async ()=>{
//     const res = await axios.post(`https://test-dev-api.scube.me/orders/past-orders?order_type=2&page=1`,{
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `bearer ${toke}`
//     }
//     })
//     console.log("d", res);
//     setNeworder(res);
// }

// useEffect(()=>{
//   stats()
// },[])


  var obj = [
    {
      name: "Rawa Idly",
      qty: 1,
      price: 60,
    },
    {
      name: "Rawa Idly",
      qty: 1,
      price: 60,
    },
    {
      name: "Rawa Idly",
      qty: 1,
      price: 60,
    },
  ];
  return (
    <div className="addItemsContainer  h-[59vh] overflow-y-scroll">
      <div className="pl-11 pr-16">
        <div className="searchGrid bg-search">
          <input
            className="h-16 bg-search rounded-xl outline-none pl-7 placeholder:text-darkyellow placeholder:font-semibold"
            type="text"
            placeholder="Search"
          />
          <img className=" relative top-3" src={search} alt="search" />
        </div>

        <div className="w-2/5 flex flex-col gap-2 float-right mt-6">
          <p className=" font-semibold text-lg">Category</p>
          <p className="w-full py-3 text-xl font-semibold text-darkyellow bg-white rounded-[10px] border-2 border-darkyellow pl-4">
            Category Name
          </p>
        </div>
        <div className=" clear-both"></div>

        <div className="relative bottom-8    ">
          <h2 className=" text-[26px] font-bold text-darkyellow mb-7">
            All Orders
          </h2>
          <div className="bg-white w-full h-96"></div>
        </div>
      </div>

      <div>
        <p className=" text-2xl font-semibold text-darkyellow">
          Items Selected
        </p>
        <div>
          {obj.map((e) => (
            <div className="flex gap-4">
              <p>{e.name}</p>
              <p>{e.qty}</p>
              <p>{e.price}</p>
            </div>
          ))}
        </div>
        <p>Special Instructions</p>
        <p className="w-full h-28 bg-search">para</p>
        <button className="w-1/12 h-16 font-semibold text-xl text-white orangeBackground absolute bottom-14 right-[20%]">
          Create
        </button>
      </div>
    </div>
  );
};

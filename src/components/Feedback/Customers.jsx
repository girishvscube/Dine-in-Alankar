import { useState,useEffect } from "react";
import { feedback } from "../../feedback";
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export const Customers = () => {

  const{feedback,feedbackcontroller,searchfeedback}  = useContext(AuthContext);
  var num = 1;
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
console.log("search-feedback",searchfeedback)
  const token = localStorage.getItem("alankartoken");
 

  const getData = async () =>{
    const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/feedback`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      }
    })
  
   feedbackcontroller(data.data)
   }

  useEffect(()=>{
    getData();
  },[])
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

            { searchfeedback.length > 0 ? searchfeedback.map((e, index) => (
              <tr key={index} className="tableBorder">
                <td>
                  <p className=" mt-7 mb-7 font-medium">{num++}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.order.name}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">#{e.id}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">+91 {e.order.phone}</p>
                </td>
                <td>
                  {/* <p className=" mb-7 mt-7 font-medium">{e.order.table.users[0].name}</p> */}
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.rating}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.comment}</p>
                </td>
              </tr>
            )) : feedback.map((e, index) => (
              <tr key={index} className="tableBorder">
                <td>
                  <p className=" mt-7 mb-7 font-medium">{num++}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.order.name}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">#{e.id}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">+91 {e.order.phone}</p>
                </td>
                <td>
                  {/* <p className=" mb-7 mt-7 font-medium">{e.order.table.users[0].name}</p> */}
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.rating}</p>
                </td>
                <td>
                  <p className=" mb-7 mt-7 font-medium">{e.comment}</p>
                </td>
              </tr>
            )) }
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

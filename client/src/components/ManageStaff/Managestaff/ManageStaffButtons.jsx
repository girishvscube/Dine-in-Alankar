import React from 'react'
import "./style.scss";
import {Link} from "react-router-dom";
import search from "../../../Images/ActiveOrder/Search_fill.png"

const ManageStaffButtons = () => {
  return (
    <div className="  flex justify-between">
    <div className=" flex ">
   <Link to="/addnewstaff">   <button className=" pl-8 pr-8 pt-4 pb-4 text-lg add text-center  rounded-lg text-white font-semibold font-sans">
        Add New Staff
      </button></Link>
     <Link to="/addrole"> <button className=" text-lg ml-10 pl-8 pr-8 pt-4 pb-4 add text-center rounded-lg text-white font-semibold font-sans">
        Add New Role 
      </button></Link>
    </div>
    <div className="w-2/4 bg-search flex justify-between focus-within:border-2 border-button_border p-2 rounded-lg">
      <div className=" w-10/12 pl-2  font-semibold">
        <input
          type="text"
          className="h-9 pt-2 text-lg bg-search font-semibold placeholder-orange outline-none"
          placeholder="Search"
        />
      </div>
      <div className="h-full pt-1 w-1/12 bg-search">
        <img src={search} alt="search icon" />
      </div>
    </div>
  </div>
  )
}

export default ManageStaffButtons

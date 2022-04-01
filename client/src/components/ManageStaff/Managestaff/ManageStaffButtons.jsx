import React from 'react'
import "./style.scss";
import {Link} from "react-router-dom";

const ManageStaffButtons = () => {
  return (
    <div className="w-11/12 h-2/12 ml-14  flex justify-between">
    <div className=" flex ">
   <Link to="/addnewstaff">   <button className=" h-full pl-9 pr-9 pt-4 pb-4 text-xs add text-center  rounded-lg text-white font-semibold font-sans">
        Add New Staff
      </button></Link>
     <Link to="newrole"> <button className="h-full text-xs ml-10 pl-9 pr-9 pt-4 pb-4 add text-center rounded-lg text-white font-semibold font-sans">
        Add New Role 
      </button></Link>
    </div>
    <div className="w-2/4 h-full bg-search flex justify-between p-2 rounded-lg">
      <div className="h-full w-10/12 pl-2  font-semibold">
        <input
          type="text"
          className="h-9 w-full text-lg bg-search font-semibold placeholder-orange outline-none"
          placeholder="Search"
        />
      </div>
      <div className="h-full w-1/12 bg-search">
        <img src="search_fill.png" alt="search icon" />
      </div>
    </div>
  </div>
  )
}

export default ManageStaffButtons

import React from 'react'
import "./style.scss";
import search from "../../../Images/ActiveOrder/Search_fill.png"
import refresh from "../../../Images/TakeAway/Refresh.svg"
import sales from "../../../Images/Reports/Sales.svg";
import {Link} from "react-router-dom"

const PartyButtons = () => {
  return (
    <div className="flex flex-row justify-between">
    <div className="w-1/4 flex gap-6  flex-row">
      <div className="w-2/5 bg-white pb-2 box flex items-center justify-center flex-col">
        <div className="h-14 rounded-full w-14  mt-3 bg-red-100">
          <img src={sales} alt="sales icon " className="ml-3 mt-3"/>
        </div>
        <p className="text-3xl text-center mt-2 font-sans font-semibold">50</p>
        <p className=" text-xs text-center mt-1 font-sans">Pending Orders</p>
      </div>
    </div>
    <div className="w-7/12 h-1/2 flex flex-col pl-4 pt-2">
       <div className=''>
       <div className='h-1/2 flex justify-between flex-row'>
        <div className=" bg-search  w-1/2 focus-within:border-2 border-button_border text-orange  flex justify-between pl-2 pr-2  rounded-lg ">
            <div className=" pl-2  font-semibold">
              <input
                type="text"
                className=" text-lg pt-4 pb-4 bg-search font-semibold placeholder-orange outline-none"
                placeholder="Search"
              />
            </div>
            <div className=" bg-search pt-2 pb-2">
              <img src={search} alt="search_icon" />
            </div>
          </div>
            <input type="date" className='text-orange border-2 pl-3 pr-4 border-button_border rounded-lg'/>
           <Link to="/menu/party-order/active-order/customer"> <button className='font-sans font-semibold text-base add text-white pt-5 pb-4 pl-4 pr-4 rounded-lg'>Create New Order</button></Link>
        </div>
       </div>
        <div className='h-1/2 w-full mt-6 flex flex-row justify-end items-end'>
            <p className='text-orange text-lg'><u>Refresh Orders</u></p>
            <img src={refresh} alt="refresh icon"/>
        </div>
    </div>
  </div>
  )
}

export default PartyButtons

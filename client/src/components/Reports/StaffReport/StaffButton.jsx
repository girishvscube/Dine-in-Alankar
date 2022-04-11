import React from 'react'
import search from "../../../Images/ActiveOrder/Search_fill.png";
import "./style.scss"

const StaffButton = () => {
  return (
    <div className="flex justify-between">
    <div className=" flex ">
      <input type="date" className="text-orange outline-none border-2 border-button_border rounded-lg pl-8 pr-8"/>

      <div className=" text-lg  ">
        <select className=" border-2 pl-4 pr-28 pt-5 pb-5  mr-2 ml-6 border-button_border text-lg outline-none text-orange rounded-lg ">
          <option value="one">Cook</option>
          <option value="two">Waiter</option>
        </select>
      </div>
    </div>
   
  </div>
  )
}

export default StaffButton

import React from 'react'
import "./style.scss";
import {Link} from "react-router-dom";


const Button = () => {
  return (
    <div className="  flex justify-between">
    <div className="flex justify-between">
      <Link to="/menu/setting/discount/create-coupon">
      <button className=" text-base  add text-center pl-4 pr-4 pt-4 pb-4 rounded-lg text-white font-semibold font-sans">
        Create New Coupon
      </button></Link>
      
    </div>
   
  </div>
  )
}

export default Button

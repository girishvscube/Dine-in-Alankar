import React from 'react'
import "./style.scss";
import {Link} from "react-router-dom";


const Button = () => {
  return (
    <div className="  flex justify-between">
    <div className="flex justify-between">
      <Link to="/menu/setting/discount/createcoupon">
      <button className=" text-lg  add text-center pl-4 pr-4 pt-5 pb-5 rounded-lg text-white font-semibold font-sans">
        Create New Coupon
      </button></Link>
      
    </div>
   
  </div>
  )
}

export default Button

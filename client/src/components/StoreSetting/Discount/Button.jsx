import React from 'react'
import "./style.scss";
import {Link} from "react-router-dom"

const Button = () => {
  return (
    <div className="w-9/12 h-2/12 ml-14  flex justify-between">
    <div className="w-1/6 h-full flex justify-between">
      <Link to="/couponsetting"><button className="w-full text-xs mr-7 h-full add text-center pt-3 pb-3 rounded-lg text-white font-semibold font-sans">
        Create New Coupon
      </button></Link>
      
    </div>
   
  </div>
  )
}

export default Button

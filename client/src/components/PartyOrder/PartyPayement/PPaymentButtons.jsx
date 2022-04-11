import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'

const PPaymentButtons = () => {
  return (
    <div className="  flex justify-between">
      <div className=" flex ">
         <Link to="/menu/party-order/active-order/customer">
         <button className=" h-full pl-6 pr-6 pt-4 pb-4 text-base button text-center  rounded-lg text-white font-semibold font-sans">
            Customer Details
          </button>
         </Link>
        
       <Link to="/menu/party-order/active-order/items">
       
       <button className="h-full text-base ml-10 pl-14 pr-12 pt-4 pb-4 button text-center rounded-lg text-white font-semibold font-sans">
            Add Items
          </button></Link>
        
        <button className="h-full text-base ml-10 pl-6 pr-6 pt-4 pb-4 add text-center rounded-lg text-white font-semibold font-sans">
          Manage Payment
        </button>
      </div>
    </div>
  )
}

export default PPaymentButtons

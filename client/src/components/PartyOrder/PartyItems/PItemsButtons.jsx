import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'
import { Button } from '../../Button'


const PItemsButtons = () => {
  return (
    <div className="  flex justify-between">
      <div className=" flex ">
       
       <Link to="/menu/party-order/active-order/customer">
       <button className=" h-full pl-6 pr-6 pt-4 pb-4 text-base button text-center  rounded-lg text-white font-semibold font-sans">
          Customer Details
        </button>
       </Link>
        
        <Button className='pl-12 pr-12 ml-10'>Add Items</Button>
        
         <Link to="/menu/party-order/active-order/payment">
         <button className="h-full text-base ml-10 pl-6 pr-6 pt-4 pb-4 button text-center rounded-lg text-white font-semibold font-sans">
            Manage Payment
          </button></Link>
        
      </div>
    </div>
  )
}

export default PItemsButtons

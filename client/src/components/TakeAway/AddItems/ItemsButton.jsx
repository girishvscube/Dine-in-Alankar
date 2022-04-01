import React from 'react'
import "./style.scss"

const ItemsButton = () => {
  return (
    <div className="w-11/12 h-2/12 ml-14  flex justify-between">
    <div className=" flex ">
   <button className=" h-full pl-8 pr-8 pt-4 pb-4 text-xs button text-center  rounded-lg text-white font-semibold font-sans">
        Customer Details
      </button>
      <button className="h-full text-xs ml-10 pl-12 pr-12 pt-4 pb-4 add text-center rounded-lg text-white font-semibold font-sans">
        Add Items
      </button>
      <button className="h-full text-xs ml-10 pl-7 pr-7 pt-4 pb-4 button text-center rounded-lg text-white font-semibold font-sans">
        Manage Payment 
      </button>
    </div>
  </div>
  )
}

export default ItemsButton

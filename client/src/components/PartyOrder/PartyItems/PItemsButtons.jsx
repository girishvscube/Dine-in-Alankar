import React from 'react'
import "./style.scss"


const PItemsButtons = () => {
  return (
    <div className="  flex justify-between">
      <div className=" flex ">
       
        <button className=" h-full pl-6 pr-6 pt-5 pb-5 text-lg button text-center  rounded-lg text-white font-semibold font-sans">
          Customer Details
        </button>
        <button className="h-full text-lg ml-10 pl-12 pr-12 pt-5 pb-5 add text-center rounded-lg text-white font-semibold font-sans">
          Add Items
        </button>
        
          <button className="h-full text-lg ml-10 pl-6 pr-6 pt-5 pb-5 button text-center rounded-lg text-white font-semibold font-sans">
            Manage Payment
          </button>
        
      </div>
    </div>
  )
}

export default PItemsButtons

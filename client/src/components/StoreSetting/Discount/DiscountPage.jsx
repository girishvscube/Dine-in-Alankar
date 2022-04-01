import React from 'react'
import HeaderNav from '../../HeaderNav'
import DiscountBody from './DiscountBody'
import "./style.scss";

const DiscountPage = () => {
  return (
    <div>
    <div className="main">
      <div className="bg-sidenav_pink w-1/5 h-full">
      </div>
      <div className="w-full h-full flex flex-col">
        <HeaderNav/>
        <DiscountBody/>
      </div>
    </div>
  </div>
  )
}

export default DiscountPage

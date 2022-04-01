import React from 'react'
import HeaderNav from '../../HeaderNav';
import CouponBody from './CouponBody';
import "./style.scss";

const CouponPage = () => {
  return (
    <div>
    <div className="main">
      <div className="bg-sidenav_pink w-1/5 h-full">
        
      </div>
      <div className="w-full h-full flex flex-col">
        <HeaderNav/>
        <CouponBody/>
      </div>
    </div>
  </div>
  )
}

export default CouponPage

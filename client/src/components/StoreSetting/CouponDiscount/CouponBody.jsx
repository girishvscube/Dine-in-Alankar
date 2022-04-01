import React from 'react'
import CouponForm from './CouponForm'
import CouponList from './CouponList'
import "./style.scss"

const CouponBody = () => {
  return (
    <div  className='w-full managemenu_body'>
    <CouponList/>
    <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
    <CouponForm/>
  </div>
  )
}

export default CouponBody

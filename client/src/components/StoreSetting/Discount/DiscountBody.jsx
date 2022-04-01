import React from 'react'
import DicsountTable from './DiscountTable'
import DiscountList from './DiscountList'
import "./style.scss";
import Button from './Button';


const DiscountBody = () => {
  return (
    <div  className='w-full bg-darkwhite managemenu_body'>
    <DiscountList/>
    <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
    <Button/>
    <DicsountTable/>
  </div>
  )
}

export default DiscountBody

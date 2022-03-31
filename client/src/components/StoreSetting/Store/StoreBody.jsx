import React from 'react'
import StoreForm from './StoreForm'
import StoreList from './StoreList'
import "./style.scss";

const StoreBody = () => {
  return (
    <div  className='w-full managemenu_body'>
      <StoreList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <StoreForm/>
    </div>
  )
}

export default StoreBody

import React from 'react'
import AddMenuForm from './AddMenuForm'
import AddMenuList from './AddMenuList'
import "./style.scss";

const AddMenuBody = () => {
  return (
    <div className='w-full h-full'>
      <AddMenuList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bg-orange border-white'/>
      <AddMenuForm/>
    </div>
  )
}

export default AddMenuBody

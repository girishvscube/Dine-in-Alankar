import React from 'react'
import AddMenuForm from './AddMenuForm'
import AddMenuList from './AddMenuList'
import "./style.scss";

const AddMenuBody = () => {
  return (
    <div className="h-[88vh] pt-3 pl-10 pr-8 overflow-y-scroll">
    <AddMenuList/>
    <hr className=' mt-1 mb-3 border-2 bord'/>
    <AddMenuForm/>
  </div>
  )
}

export default AddMenuBody

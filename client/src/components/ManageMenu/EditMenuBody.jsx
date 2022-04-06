import React from 'react'
import EditMenuForm from './EditMenuForm'
import EditMenuList from './EditMenuList'
import "./style.scss";


const EditMenuBody = () => {
  return (
   
    <div className="h-[88vh] pt-3 pl-10 pr-8 overflow-y-scroll">
    <EditMenuList/>
    <hr className=' mt-1 mb-3 border-2 bord'/>
    <EditMenuForm/>
  </div>
  )
}

export default EditMenuBody

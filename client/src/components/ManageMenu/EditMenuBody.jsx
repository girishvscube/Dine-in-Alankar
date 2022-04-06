import React from 'react'
import EditMenuForm from './EditMenuForm'
import EditMenuList from './EditMenuList'
import "./style.scss";


const EditMenuBody = () => {
  return (
   
    <div className="h-[88vh] pt-3 pl-10 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
    <EditMenuList/>
    <hr className=' mt-3 mb-6 border-2 bord'/>
    <EditMenuForm/>
  </div>
  )
}

export default EditMenuBody

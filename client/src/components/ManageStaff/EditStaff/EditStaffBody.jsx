import React from 'react'
import EditStaffForm from './EditStaffForm';
import EditStaffList from './EditStaffList';
import "./style.scss";

const EditStaffBody = () => {
  return (
    <div  className='w-full bg-darkwhite managemenu_body'>
      <EditStaffList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <EditStaffForm/>
    </div>
  )
}

export default EditStaffBody

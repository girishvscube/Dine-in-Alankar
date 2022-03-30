import React from 'react'
import AddNewStaffForm from './AddNewStaffForm';
import AddNewStaffList from './AddNewStaffList';
import "../style.scss";

const AddNewStaffBody = () => {
  return (
    <div  className='w-full managemenu_body'>
      <AddNewStaffList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <AddNewStaffForm/>
    </div>
  )
}

export default AddNewStaffBody

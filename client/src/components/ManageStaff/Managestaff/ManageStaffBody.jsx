import React from 'react'
import ManageStaffButtons from './ManageStaffButtons'
import ManageStaffList from './ManageStaffList'
import ManageStaffTable from './ManageStaffTable'
import "./style.scss";

const ManageStaffBody = () => {
  return (
    <div  className='w-full bg-darkwhite managemenu_body'>
      <ManageStaffList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <ManageStaffButtons/>
      <ManageStaffTable/>
    </div>
  )
}

export default ManageStaffBody

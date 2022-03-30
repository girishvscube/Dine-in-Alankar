import React from 'react'
import HeaderNav from '../HeaderNav'
import ManageStaffBody from './ManageStaffBody'

const ManageStaffPage = () => {
  return (
    <div className='main'>
        <div className="bg-sidenav_pink w-1/5 h-full"></div>
        <div className='w-full h-full flex flex-col'>
            <HeaderNav/>
            <ManageStaffBody/>
        </div>
    </div>
  )
}

export default ManageStaffPage

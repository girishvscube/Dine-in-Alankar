import React from 'react'
import HeaderNav from '../HeaderNav';
import ManageMenuBody from './ManageMenuBody';
import "../style.scss"

const ManageMenu = () => {
  return (
    <div className='main'>
      <div className='bg-sidenav_pink w-1/5 h-full'>
      
      </div>
      <div className='w-full h-full flex flex-col'>
          <HeaderNav/>
          <ManageMenuBody/>
      </div>
    </div>
  )
}

export default ManageMenu;

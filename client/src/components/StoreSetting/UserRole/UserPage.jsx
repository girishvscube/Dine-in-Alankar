import React from 'react'
import HeaderNav from '../../HeaderNav'
import UserBody from './UserBody'
import "./style.scss";

const UserPage = () => {
  return (
    <div>
    <div className="main">
      <div className="bg-sidenav_pink w-1/5 h-full">
   
      </div>
      <div className="w-full h-full flex flex-col">
        <HeaderNav/>
        <UserBody/>
      </div>
    </div>
  </div>
  )
}

export default UserPage

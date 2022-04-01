import React from 'react'
import "./style.scss";
import UserButton from './UserButton';
import UserForm from './UserForm';
import UserList from './UserList';

const UserBody = () => {
  return (
    <div  className='w-full bg-darkwhite managemenu_body'>
    <UserList/>
    <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
    <UserButton/>
    <UserForm/>
  </div>
  )
}

export default UserBody
